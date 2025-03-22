
let container = document.getElementById("container");
let loaders = document.getElementById("loaders");
const url = 'https://pravalika-git.github.io/Movie/db.json';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '1b9c91a7d5msh46dba86d8fc526ep16ec55jsne96d714a88f9',
        'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
    }
};

async function getData() {
    try {
      
        const response = await fetch(url, options)
      
        if (!response.ok) {
            throw new Error("Invalid or failed to fetch", response.status);
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        displayData(result);
    } catch (err) {
        console.log("Error fetching data:", err);
    }
}

function displayData(obj) {
    console.log(obj); 
    container.innerHTML = ""; 
    obj.movies.forEach(element => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <p style="color: #1C448E;"> Rank: ${element.rank}</p>
            <p style="color: #938ba1;">  Series_Title : ${element.Series_Title}</p>
            <img src="${element.Poster_Link}" alt="${element.Series_Title}" height="250px">
            <p  style="color: #1C448E;"> Runtime : ${element.Runtime}</p>
            <p  style="color: #938ba1;"> Genre : ${element.Genre}</p>
            <p  style="color: #1C448E;"> IMDB_Rating : ${element.IMDB_Rating}</p>
            <p  style="color: #938ba1;"> Overview : ${element.Overview}</p>
            <p  style="color: #1C448E;"> Director : ${element.Director}</p>
            <p  style="color: #938ba1;"> Star1 : ${element.Star1}</p>
            <p style="color: #1C448E;;"> Star2 : ${element.Star2}</p>
            <p style="color: #938ba1;"> Star3 : ${element.Star3}</p>
            <p style="color: #1C448E;"> Star4 : ${element.Star4}</p>
            <p  style="color: #938ba1;"> No_of_Votes : ${element.No_of_Votes}</p>
        `;
        container.appendChild(item);
    });
}




window.addEventListener("DOMContentLoaded", function () {
    // console.log("Fetching data after 1-minute delay...");
    setTimeout(getData, 1000);
    
});
