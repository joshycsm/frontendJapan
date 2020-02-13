const place_url = "http://localhost:3000/places/";
const searchParams = new URLSearchParams(location.search);
const query = searchParams.get("id");

fetch(`${place_url}${query}`)
  .then(response => response.json())
  .then(placeObject => {
    console.log(placeObject);
    let locationName = document.createElement("p");
    locationName.innerHTML = placeObject.name;
    let locationDescription = document.createElement("p");
    locationDescription.innerHTML = placeObject.description;
    document.body.append(locationName, locationDescription);
  });
