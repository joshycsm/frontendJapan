const review_url = "http://localhost:3000/reviews/";

fetch(review_url)
  .then(response => response.json())
  .then(reviews => {
    reviews.map(review => {
      console.log(review);
      let place = document.createElement("h3");
      place.innerHTML = `Review: <a href='place.html?id=${review.place.id}'>${review.place.name}</a>`;
      let rating = document.createElement("p");
      rating.textContent = `${review.description} Rating: ${review.rating}`;
      document.body.append(place, rating);
    });
  });
