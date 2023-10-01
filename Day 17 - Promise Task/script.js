let container = document.createElement('div');
container.setAttribute('class','container'); // asiggn class container

let row = document.createElement('div');
row.setAttribute('class','row'); // asiggn class row

var heading = document.createElement('h1');
heading.setAttribute('class', 'text-center'); // asiggn class text-center
heading.setAttribute('id','title'); // asiggn id title
heading.innerText = "Rest Countries and Weather App";

container.append(heading, row);
document.body.append(container);

// Card Details
function createCards(name, capital, lat, lon, flag, region, alpha3Code){
    let column = document.createElement('div');
    column.classList.add('col-sm-6', 'col-md-4','col-lg-4', 'col-xl-4', 'mb-4'); //...col-xl-

    let card = document.createElement('div');
    card.setAttribute('class', 'card h-100 text-center');  //document.querySelector("body > div.container > div > div:nth-child(1) > div")
    card.innerHTML = `
                    <div class="card-header bg-dark text-center textt-white">
                        <h2>${name}</h2>
                    </div>
                    <div class="card-body pb-4">
                        <img src="${flag}" class="card-img-top"/>
                        <div class="card-text">
                            <div><b>Capital:</b> ${capital}</div>
                            <div><b>Region:</b> ${region}</div>
                            <div><b>Country Code:</b> ${alpha3Code}</div>
                        </div>                        
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary" onclick="checkWeather('${lat}','${lon}')">Click for Weather</button>
                    </div>
                `;
    column.appendChild(card);
    row.append(column)
}

async function checkWeather(lat, lon){
    let weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ec7508827aa77e341f9b59e84dea452`);
    let weatherRes =  await weatherApi.json();
    console.log(weatherApi)
    alert(`Temperature: ${weatherRes.main.temp} | Feels Like: ${weatherRes.main.feels_like} \n Weather: ${weatherRes.weather[0].main} | Description: ${weatherRes.weather[0].description}`)
}

// Get RestCountries Data 
async function getRestCountries() {
    let restcountries = await fetch("https://restcountries.com/v2/all");
    let resultCountries = await restcountries.json();
    // console.log(resultCountries);
    resultCountries.map((data) => {
        const { name, capital, latlng, flag, region, alpha3Code} = data; //destructing
        createCards(name, capital, latlng[0],latlng[1], flag, region, alpha3Code);
    });
}
getRestCountries();
