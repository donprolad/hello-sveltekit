import { apiUrl, locationUrlByGPS } from './urls';

// Debug, and refactor :(
export const getCountries = async (countriesState) => {
    await fetch(apiUrl.countries, 
        {
            method: 'GET',
            redirect: 'follow',

        })
            .then(res => res.json())
            .then(results => countriesState = results.data)
            .catch(err => console.log(err))
}

export const currentLocation = ($storeVal) => {
    // don't like calling global scope directly
    //let __navigator = navigator
    navigator.geolocation.getCurrentPosition(async res =>
        await fetch(locationUrlByGPS(res), 
        {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type' : 'application/json',
            }
        })
        .then(res => res.json())
        .then(res => $storeVal.set(res.data))
        .catch(err => console.log(err))
    )
}
