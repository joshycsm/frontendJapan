const place_url = "http://localhost:3000/places/";
const searchParams = new URLSearchParams(location.search);
const query = searchParams.get("id");

fetch(`${place_url}${query}`)
  .then(response => response.json())
  .then(placeObject => {
    console.log(placeObject);
    let placeName = document.createElement("p");
    placeName.innerHTML = placeObject.name;
    let placeDescription = document.createElement("p");
    let placePrice = `Price index - ${placeObject.price}`;
    placeDescription.innerHTML = placeObject.description;
    document.body.append(placeName, placeDescription, placePrice);
  });
