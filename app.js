let image = document.querySelectorAll(".images");
let counter = 1;
image.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function sliding(n) {
    if (n > image.length) {
        counter = 1;
    } else if (n < 1) {
        counter = image.length;
    }
    image.forEach((slide) => {
        slide.style.transform = `translateX(-${(counter - 1) * 100}%)`;
    });
}

let timer = setInterval(() => {
    counter++;
    sliding(counter);
}, 3000);

let excess = 1;
let trends = document.querySelectorAll(".movie");
let previous = document.querySelector("#prev");
let nexter = document.querySelector("#next");

function initializeTrendsSlider() {
    trends = document.querySelectorAll(".movie");
    trends.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    function slidings(n) {
        if (n > trends.length) {
            excess = 1;
        } else if (n < 1) {
            excess = trends.length;
        }
        trends.forEach((slide) => {
            slide.style.transform = `translateX(-${(excess - 1) * 100}%)`;
        });
    }

    function prev() {
        excess--;
        slidings(excess);
    }

    function next() {
        excess++;
        slidings(excess);
    }

    previous.removeEventListener("click", prev);
    nexter.removeEventListener("click", next);
    previous.addEventListener("click", prev);
    nexter.addEventListener("click", next);
}

let source = document.querySelector(".top");

// Initial slide
sliding(counter);

const imgURL = "https://image.tmdb.org/t/p/w500/";
const discover = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e51be11c8327510384215ae25ad82734&page=1";
const search = "https://api.themoviedb.org/3/search/movie?api_key=e51be11c8327510384215ae25ad82734&query=";

const getmovies = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    showresults(data.results);
}

const showresults = (data) => {
    data.forEach((items) => {
        let curr = document.createElement("div");
        curr.classList.add("movie");
        curr.innerHTML = `<div class="photo">
                            <img src="${imgURL + items.poster_path}" alt="">
                        </div>
                        <div class="data">
                            <h1>${items.title}</h1>
                            <p>${items.overview}</p>
                            <h4>Rating: <i class="fa-solid fa-star"></i> ${items.vote_average}</h4>
                        </div>`;
        source.appendChild(curr);
    });
    initializeTrendsSlider(); // Reinitialize slider after appending new elements
}
getmovies(discover);
const butt = document.querySelector("#tab");
let val = document.getElementById("searchbar");
butt.addEventListener("click",(e)=>{
    let moviename = val.value;
    if(moviename == ""){
        alert("Please enter Valid Movie Name");
    }
    else{
        localStorage.setItem("Moviename",moviename);
        window.location.href = "result.html";
    }
})
