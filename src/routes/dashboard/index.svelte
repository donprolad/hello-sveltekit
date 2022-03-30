<script>
    import { onMount } from 'svelte'
    import { apiUrl, statesInCountry } from '../../api/urls'
    import { getCountries } from '../../api/iqAir'
    // import { countriesState } from '../../stores/writable/countries'

    import CurrentCity from '../../lib/components/dashboard/air-quality/CurrentCity.svelte'
    
    let countries = []
    let countriesState = []
    let countryName;
    let url;
    
    onMount(async () => {

        await fetch(apiUrl.countries,  
        {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        })
            .then(res => res.json())
            .then(result => countries = result.data)
            .catch(err => console.log(err))
        
    })

    const getCountryState = async () => {
        await fetch(statesInCountry(countryName))
            .then(res => res.json())
            .then(result => countriesState = result.data)
            .catch(err => console.log(err))
    }

</script>
<CurrentCity />
<div>
    {#if url === undefined}
        <p>Please Choose a Country</p>
    {:else}
        <p>No Country Data</p>
    {/if}
<!-- Refactor in country selector component -->
    {#if countries !== []} 
        <select name="Country" class="country-selector" 
            bind:value={countryName}
            on:change={getCountryState}>
            {#each countries as name}
                <option value={name.country}> {name.country}</option>
            {/each}
        </select>
        {#if countriesState !== []}
            {#each countriesState as data}
                <p>{data.state}</p>
            {/each}
        {/if}
    {:else}
        <p>No Data</p>
    {/if}
</div>

<style>
    
</style>
