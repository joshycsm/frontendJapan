const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("location");
console.log(query);

fetch(`http://localhost:3000/places?location=${query}`)
  .then(response => response.json())
  .then(console.log);
