const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("location");
console.log(query);

fetch(`http://localhost:3000/places?location=${query}`)
  .then(response => response.json())
  .then(places => {
    places.map(place => {
      console.log(place);
      let placeName = document.createElement("h2");
      let placeDescription = document.createElement("p");
      let placePrice = document.createElement("p");
      placeName.innerHTML = place.name;
      placeDescription.textContent = place.description;
      placePrice.textContent = `Price index - ${place.price}`;
      document.body.append(placeName, placeDescription, placePrice);
    });
  });
