import { writable } from 'svelte/store';

export const countriesState = writable({
    countries: []
})

export const currentLocationCountry = writable({})