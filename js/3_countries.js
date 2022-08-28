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
        console.log(country.capital);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>    
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        countryContainer.appendChild(countryDiv);
    });
};

loadCountries();