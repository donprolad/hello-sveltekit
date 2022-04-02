<script>
    import { onMount, createEventDispatcher } from 'svelte'
    import { apiUrl, statesInCountry } from '../../api/urls'

    import CurrentCity from '../../lib/components/dashboard/air-quality/CurrentCity.svelte'

    const dispatch = createEventDispatcher()

    // TODO List for this component
    // 1. Memoize - DONE, significantly improved data load time in exchange for
    // a bit of space, only does network request for new data now.
    // How can we improve the purity of this function?, to make it more reliable?
    // have the cache preferrably in a closure, remember it will have it's own store.
    
    // This state roughly how our state is going to look for this component
    // To bad for IE users i guess..., do we have to go XMLHttpRequest instead of fetch..eish
    // since we are going to integrate it with many microservices we should use something that uses
    // the saga pattern for network requests.

    let cache = {}
    let countries = []
    let countryName = ""
    
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
        await memoize(countryName)
    }

    const memoize = (
        async (name) => {
        
        if(name in cache) {
            return cache[name]
        }

        await fetch(statesInCountry(name))
            .then(res => res.json())
            .then(result => 
                cache[name] = { provinces: [...result.data] })
            .catch(err => console.log(err))
    })


</script>
<CurrentCity />
<div>
    <!-- Refactor this component -->
    <p>Please Choose a Country</p>
    {#if countries !== []} 
        <select name="Country" class="country-selector" 
            bind:value={countryName}
            on:change={getCountryState}>
            {#each countries as name}
                <option value={name.country}> {name.country}</option>
            {/each}
        </select>
        {#if cache[countryName] !== undefined}
            <select name="State" class="state-selector">
                {#each cache[countryName].provinces as data}
                    <option>{data.state}</option>
                {/each}
            </select>State ({cache[countryName].provinces.length})
        {:else}
            <p>...</p>
        {/if}
    {:else}
        <p>No Country Data</p>
    {/if}
</div>

<style>
    
</style>
