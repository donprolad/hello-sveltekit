export const rpcUrl = import.meta.env.VITE_RPCURL

export const iqAirApi =import.meta.env.VITE_IQAIR_URL
export const iqAirApiKey = import.meta.env.VITE_IQAIR_APIKEY

export const apiUrl = {
    countries: `${iqAirApi}countries?key=${iqAirApiKey}`,
    ranking: `${iqAirApi}city_ranking?key=${iqAirApiKey}`,
}

export const statesInCountry = countryName =>
    `${iqAirApi}states?country=${countryName}&key=${iqAirApiKey}`

export const locationUrl = res =>
`${iqAirApi}nearest_city?lat=${res.coords.latitude}&lon=${res.coords.longitude}&key=${iqAirApiKey}`

