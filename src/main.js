const API_KEY = "AIzaSyDZeBxnHRZXj4kRHcDuJW57y2vUsZxoHS4";
const container = document.querySelector("#container");
container.hidden = true;
const imgGif = document.querySelector("#imgGif");
const btn = document.querySelector("#btn");

function getShareGif() {
  const search = document.querySelector("#search").value;
  if (search != "") {
    return getData(search);
  } else {
    return alert("Digite um valor!");
  }
}
async function getData(search) {
  try {
    const url = "https://tenor.googleapis.com/v2/search?q=";
    const search_term = search;
    const clientkey = "danielcosta12";
    const apikey = API_KEY;
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

async function addData(data) {
  container.hidden = false;
  const random = Math.round(Math.random() * data.results.length);
  const urlGif = data.results[random].media_formats.gif.url;
  console.log(urlGif);
  return (imgGif.src = urlGif);
}
btn.addEventListener("click", () => getShareGif());
