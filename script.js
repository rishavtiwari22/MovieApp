let main_div = document.getElementsByClassName("main")[0];
document.addEventListener("DOMContentLoaded", () => {
  let movie_name = "avengers";
  dataFetch(movie_name, main_div);
});

let search = document.getElementById("search");
search.addEventListener("input", () => {
  input = document.getElementById("search").value || "avengers";
  console.log("Input -", input);
  main_div.innerHTML = "";
  if (input.length > 2) {
    dataFetch(input, main_div);
  }
});

let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", () => {
  input = document.getElementById("search").value || "avengers";
  console.log("Input -", input);
  main_div.innerHTML = "";

  if (!dataFetch(input, main_div)){
    return `<h1>Movies Loading</h1>`
  }
  dataFetch(input, main_div);

});

function dataFetch(input, main_div) {
  fetch(`https://www.omdbapi.com/?s=${input}&apikey=ce1d37c8`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.Search);
      let movies = data.Search;
      console.log("All Movies -", movies);
      movies.map((movie) => {
        movieCart(movie, main_div);
      });
    });
}


function movieCart(movie, main_div) {
  let new_cart = document.createElement("div");
  let new_img = document.createElement("img");
  let new_strong = document.createElement("strong");
  let new_p1 = document.createElement("p");
  let new_p2 = document.createElement("p");
  new_img.src = movie.Poster || 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg';
  new_strong.innerHTML = movie.Title;
  new_p1.innerHTML = `Type - ${movie.Type}`;
  new_p2.innerHTML = `Year - ${movie.Year}`;
  new_cart.setAttribute("class", "cart");
  new_cart.appendChild(new_img);
  new_cart.appendChild(new_strong);
  new_cart.appendChild(new_p1);
  new_cart.appendChild(new_p2);
  main_div.append(new_cart);
}
