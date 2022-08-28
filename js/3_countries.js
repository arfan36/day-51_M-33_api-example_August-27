const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data));
};

const displayCountries = (countries) => {
    // for(const country of countries){
    //     console.log(country.name.common);
    // }
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>    
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    });
};

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/name/{name}
    const url = `https://restcountries.com/v3.1/name/${code}`;
    // console.log('get country detail', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));

    const displayCountryDetail = country => {
        console.log(country);
        const countryDetail = document.getElementById('country-detail');
        countryDetail.innerHTML=`
            <h2>Details: ${country.name.common}</h2>
            <img src="${country.flags.png}">
        `
    };
};

loadCountries();