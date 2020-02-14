const place_url = "http://localhost:3000/places/";

fetch(place_url)
  .then(response => response.json())
  .then(places => {
    places.map(place => {
      let placeName = document.createElement("p");
      let placeDescription = document.createElement("li");
      let categoryName = document.createElement("li");
      let priceName = document.createElement("li");
      let locationName = document.createElement("li");
      locationName.textContent = `Location - ${place.location}`;
      priceName.textContent = `Price index - ${place.price}`;
      categoryName.textContent = `Category - ${place.category}`;
      placeDescription.textContent = place.description;
      placeName.textContent = place.name;
      document.body.append(
        placeName,
        placeDescription,
        categoryName,
        priceName,
        locationName
      );
    });
  });
