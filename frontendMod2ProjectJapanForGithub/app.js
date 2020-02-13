const place_url = "http://localhost:3000/places/";
const user_url = "http://localhost:3000/users/";
const review_url = "http://localhost:3000/reviews/";
const placeSelectElement = document.querySelector(".place-select");
const place2ndSelectElement = document.querySelector(".place-2nd-select");
const userSelectElement = document.querySelector(".user-select");
const reviewList = document.querySelector(".review-list");
const searchParams = new URLSearchParams(location.search);
const query = searchParams.get("id");

fetch(review_url)
  .then(response => response.json())
  .then(reviewsArray => {
    reviewsArray.map(reviewObject => {
      console.log(reviewObject);
      let place = document.createElement("h3");
      place.innerHTML = `Review: <a href='place.html?id=${reviewObject.place.id}'>${reviewObject.place.name}</a>`;
      let review = document.createElement("p");
      review.textContent = `${reviewObject.description} Rating: ${reviewObject.rating}`;
      reviewList.append(place, review);
      //   let optionElementForLocationDropdown = document.createElement("option");
      //   optionElementForLocationDropdown.textContent = reviewObject.place.name;
      //   placeSelectElement.appendChild(optionElementForLocationDropdown);
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
