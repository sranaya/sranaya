let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
console.log(countryInp);
let countryName;
searchBtn.addEventListener("click", async () => {
     countryName = countryInp.value;
    console.log(countryName);
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true `
    console.log("kk");

    let response=await fetch(url)
    let data=await response.json()
    console.log(data)
    
    result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>

    <div class="wrapper">
        <div class="data-wrapper">
           <h4>Capital:</h4>
           <span>${data[0].capital[0]}</span>
        </div>
    </div>

    <div class="wrapper">
    <div class="data-wrapper">
       <h4>Continent:</h4>
       <span>${data[0].continents[0]}</span>
    </div>
</div>

<div class="wrapper">
        <div class="data-wrapper">
           <h4>Population:</h4>
           <span>${data[0].population}</span>
        </div>
    </div>

    <div class="wrapper">
        <div class="data-wrapper">
           <h4>Currency:</h4>
           <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
               - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div> 

        
    <div class="wrapper">
        <div class="data-wrapper">
           <h4>Common Languages:</h4>
           <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(",")}</span>
         </div>
    </div>   
    `





    })


