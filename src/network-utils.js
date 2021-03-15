 //API Path
 const apiPath = "assets/model/cities.json"
 export let city_cache = []

 //Promises - Use the fetch API to call the model
 export let promise = new Promise(function(resolve, reject){

    fetch(apiPath)
    .then(response => {
        if(response.ok) {
            return response.json()
        }else {
            return Promise.reject('Something went wrong')
        }
    }).then( data => {
        city_cache = data.cities
        resolve(city_cache)
    })
    .catch( error => {
        reject(error)
    })

})