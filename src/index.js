import { promise, city_cache} from './network-utils'

const citySelectDropdown = document.querySelector('#cityName')
const airQuality = document.querySelector('.aqi-value')
const pmValue = document.querySelector('.cigg-value')
const cityValue = document.querySelector('.city-value')
const result = document.querySelector('.result-details')
let selectedCity = undefined
let index = undefined
let indexValue = undefined



document.addEventListener('DOMContentLoaded', () => {

    promise.then(function(cities){

        //Sort & display city names in the select dropdown in alphabetical manner
        cities.sort((a, b) => (a.city_name > b.city_name) ? 1 : -1).forEach((city) => {
            updateDropdownBox(city.city_name)
        })    
    })
})


citySelectDropdown.onchange = function() {

    selectedCity = this.value;
    index = city_cache.map((city)=>{ return city.city_name}).indexOf(selectedCity)
    //indexValue = city_cache.findIndex(city => city.city_name === selectedCity)

    //Update the view based on selected city
    updateViewWithSelectedCity(city_cache[index].city_name, city_cache[index].city_aqi, city_cache[index].city_cigg)
    window.scrollTo(0,800);
}

/**
 * Method updates the select dropdown from the array of cities. 
 * Method receives one parameter
 * @param {String} city 
 */
const updateDropdownBox = (city) => {
    citySelectDropdown.innerHTML += `<option value="${city}">${city}</option>`
}

/**
 * Method update the result view for the Air quality index 
 * and particulate matters. Mathod accepts three paramters
 * @param { String } cityName
 * @param { String } cityAqi
 * @param { Number } cityCigg
 */
const updateViewWithSelectedCity = (cityName, cityAqi, cityCigg) => {
    //console.log(cityName, cityAqi, cityCigg)
    result.style.display = 'block'
    cityValue.innerHTML = cityName
    airQuality.innerHTML = cityAqi
    pmValue.innerHTML = cityCigg
    
}