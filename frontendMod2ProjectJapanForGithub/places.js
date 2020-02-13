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
      locationName.textContent = place.location;
      priceName.textContent = place.price;
      categoryName.textContent = place.category;
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
