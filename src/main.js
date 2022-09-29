const container = document.querySelector("#container");
container.hidden = true;
const imgGif = document.querySelector("#imgGif");
const btn = document.querySelector("#btn");

function getShareGif() {
  const search = document.querySelector("#search").value;

  return getData(search);
}
async function getData(search) {
  try {
    const url = "https://tenor.googleapis.com/v2/search?q=";
    const search_term = search;
    const clientkey = "danielcosta12";
    const apikey = "AIzaSyDZeBxnHRZXj4kRHcDuJW57y2vUsZxoHS4";
    const lmt = 50;
    const response = await fetch(
      url +
        search_term +
        "&key=" +
        apikey +
        "&client_key=" +
        clientkey +
        "&limit=" +
        lmt
    );
    const data = await response.json();
    addData(data);
  } catch (e) {
    console.log(e);
  }
}

function addData(data) {
  container.hidden = false;
  const random = Math.round(Math.random() * data.results.length);
  const urlGif = data.results[random].media_formats.gif.url;
  console.log(urlGif);
  return (imgGif.src = urlGif);
}
btn.addEventListener("click", () => getShareGif());
