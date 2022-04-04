<script>
    import { onMount, createEventDispatcher } from 'svelte'
    import { apiUrl, statesInCountry } from '../../../api/urls'


    const dispatch = createEventDispatcher()

    // TODO List for this component
    // 1. Memoize - DONE, significantly improved data load time for repeat requests
    // in exchange for
    // a bit of space, only does network request for new data now after load
    // How can we improve the purity of this function?, to make it more reliable?
    // have the cache preferrably in a closure, remember it will have it's own store.

    // What our state looks like so far, should probably move to a store.
    let cache = {}
    let countries = []
    let countryName = ""
    let err = ""
    
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

    const getCountryState = async () =>
        await memoize(countryName)

    const memoize = (
        async (name) => {
        
        if(name in cache) {
            return cache[name]
        }

        await fetch(statesInCountry(name),
            {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(result => 
                cache[name] = { provinces: [...result.data] })
            .catch(err => { 
                cache[err] = { ...cache[err], err}
                err = ""
            })
    })


</script>
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
        {:else if cache[err] !== undefined}
            <p>Error Loading Data :(</p>
        {:else}
            <p>...</p>
        {/if}
    {:else}
        <p>No Country Data</p>
    {/if}
</div>

<style>
    
</style>
