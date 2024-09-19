let movie = localStorage.getItem("Moviename");
const imgURL = "https://image.tmdb.org/t/p/w500/";
const discover = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e51be11c8327510384215ae25ad82734&page=1";
const search = "https://api.themoviedb.org/3/search/movie?api_key=e51be11c8327510384215ae25ad82734&query=";
const getmovies = async (api,movie) => {
    const response = await fetch(api+movie);
    const data = await response.json();
    if(data.results.length == 0){
        nonfound();
    }
    else{
    console.log(data);
    showresults(data.results);
    }
}
let source = document.querySelector(".big-box");
const nonfound =()=>{
         source.innerHTML="";
        let curr = document.createElement("div");
        curr.classList.add("min-box");
        curr.innerHTML = `<div class="details">
                        <h1 style="font-size:40px,color:white,margin:auto,padding:auto">Movie Not Found</h1>
                    </div>`;
        source.appendChild(curr);
}
const showresults = (data) => {
    source.innerHTML="";
    data.forEach((items) => {
        let curr = document.createElement("div");
        curr.classList.add("min-box");
        curr.innerHTML = `<div class="details">
                        <h1>${items.title}</h1>
                        <h3>${items.overview}</h3>
                        <h4>Release Date: ${items.release_date}</h4>
                        <span>Ratings: <i class="fa-solid fa-star"></i>${items.vote_average} </span>
                    </div>
                    <div class="image">
                        <img src="${imgURL + items.poster_path}" alt="movie">
                    </div>`;
        source.appendChild(curr);
    });
    }
getmovies(search,movie);
const searchbutton = document.querySelector("#tab");
const searchbar = document.querySelector("#searchbar");
searchbutton.addEventListener("click",()=>{
    let variable = searchbar.value;
    getmovies(search,variable);
})
