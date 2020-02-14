const place_url = "http://localhost:3000/places/";
const user_url = "http://localhost:3000/users/";
const review_url = "http://localhost:3000/reviews/";
const placeSelectElement = document.querySelector(".place-select");
const place2ndSelectElement = document.querySelector(".place-2nd-select");
const userSelectElement = document.querySelector(".user-select");
const reviewList = document.querySelector(".review-list");
// const searchParams = new URLSearchParams(location.search);
// const query = searchParams.get("id");

fetch(review_url)
  .then(response => response.json())
  .then(reviewsArray => {
    reviewsArray.map(reviewObject => {
      console.log(reviewObject);
      let individualReview = document.createElement("div");
      individualReview.className = "individual-review";
      let place = document.createElement("h3");
      place.innerHTML = `Review: <a href='place.html?id=${reviewObject.place.id}'>${reviewObject.place.name}</a>`;
      let description = document.createElement("p");
      description.dataset.id = reviewObject.id;
      description.dataset.name = reviewObject.description;
      // console.log(description.dataset.name);
      let rating = document.createElement("p");
      rating.dataset.id = reviewObject.id;
      rating.dataset.name = reviewObject.rating;
      rating.textContent = `${reviewObject.description} Rating: ${reviewObject.rating} (review left by ${reviewObject.user.name})`;
      document.body.append(individualReview);
      // reviewList.append(place, rating);

      const updateForm = document.createElement("form");
      updateForm.action = `http://localhost:3000/reviews/${rating.dataset.id}`;
      updateForm.method = "POST";
      updateForm.innerHTML = `
            <input type="text" placeholder="Description" name="description" value="${description.dataset.name}" />
            <input type="number" placeholder="Rating" name="rating" value="${rating.dataset.name}" />
            <input type="submit" value="Update this review" />
            <input type="hidden" name="_method" value="put" />
        `;
      // reviewList.append(updateForm);
      // updateReviewInput.addEventListener("click", () => {
      //   event.target.remove();
      //   unhideUpdateTextField(updateReviewTextField);
      // });

      const deleteForm = document.createElement("form");
      deleteForm.action = `http://localhost:3000/reviews/${rating.dataset.id}`;
      deleteForm.method = "POST";
      deleteForm.innerHTML = `
            <input type="submit" value="Delete this review" />
            <input type="hidden" name="_method" value="delete" />
        `;
      individualReview.append(place, rating, updateForm, deleteForm);
      reviewList.append(individualReview);
    });
  });

fetch(user_url)
  .then(response => response.json())
  .then(usersArray => {
    usersArray.map(userObject => {
      let optionElementforUserDropdown = document.createElement("option");
      optionElementforUserDropdown.textContent = userObject.name;
      optionElementforUserDropdown.value = userObject.id;
      userSelectElement.appendChild(optionElementforUserDropdown);
    });
  });

fetch(place_url)
  .then(response => response.json())
  .then(placesArray => {
    placesArray.map(placeObject => {
      //   let locationName = document.createElement("p");
      //   locationName.innerHTML = placeObject.location;
      //   document.body.append(locationName);
      let optionElementForReviewDropdown = document.createElement("option");
      optionElementForReviewDropdown.textContent = placeObject.name;
      optionElementForReviewDropdown.value = placeObject.id;
      placeSelectElement.appendChild(optionElementForReviewDropdown);
      let optionsElementForSearchDropdown = document.createElement("option");
      optionsElementForSearchDropdown.textContent = placeObject.name;
      optionsElementForSearchDropdown.value = placeObject.id;
      place2ndSelectElement.appendChild(optionsElementForSearchDropdown);
    });
  });

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
