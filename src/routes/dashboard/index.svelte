<script>
    import { onMount } from 'svelte'
    import { apiUrl, statesInCountry } from '../../api/urls'

    import CurrentCity from '../../lib/components/dashboard/air-quality/CurrentCity.svelte'
    
    let countries = []
    let countriesState = []
    let countryName;
    
    onMount(async () => {

        await fetch(apiUrl.countries,  
        {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Content-Type' : 'application/json'
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
    <p>Please Choose a Country</p>    
<!-- Refactor in country selector component and memoize -->
    {#if countries !== []} 
        <select name="Country" class="country-selector" 
            bind:value={countryName}
            on:change={getCountryState}>
            {#each countries as name}
                <option value={name.country}> {name.country}</option>
            {/each}
        </select>
        {#if countriesState.length > 0 ? true : false}
            <details>
                <summary>State ({countriesState.length})</summary>
                {#if countriesState !== []}
                    {#each countriesState as data}
                        <p>{data.state}</p>
                    {/each}
                {/if}
            </details>
        {/if}
    {:else}
        <p>No Country Data</p>
    {/if}
</div>

<style>
    
</style>
