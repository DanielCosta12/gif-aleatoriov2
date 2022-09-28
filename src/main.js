const share_gif = document.querySelector("#share_gif");
async function getData() {
  try {
    const url = "https://tenor.googleapis.com/v2/search?q=";
    const search_term = "bom-dia";
    const clientkey = "danielcosta12";
    const apikey = "AIzaSyDZeBxnHRZXj4kRHcDuJW57y2vUsZxoHS4";
    const lmt = 0;
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
  const random = Math.round(Math.random() * data.results.length);
  const urlGif = data.results[random].media_formats.gif.url;
  console.log(urlGif);
  return (share_gif.src = urlGif);
}
getData();
