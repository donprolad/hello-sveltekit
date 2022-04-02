<script>
import { onMount } from 'svelte';
import { locationUrl } from '../../../../api/urls'
import Heading from '../../global/Heading.svelte'

    let country = {}

    onMount(async() => { 
        await navigator.geolocation.getCurrentPosition(res =>
            fetch(locationUrl(res), 
            {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    'Content-Type' : 'application/json',
                }
            })  
            .then(res => res.json())
            .then(res => country = res.data)
            .catch(err => console.log(err))
        )
    })

    const calculateAirPollutionLevel = v => {
        v < 40 ? "Moderate/Low" : 
        v > 40 && v < 75 ? "Moderate" : 
        v > 75 ? "Unsafe" : 
        "Unable to Quantify"
    }

    // let airPollutionLevel = country.current
    // $: airPollutionLevel = country.current
</script>

<div>
{#if country.city === undefined}
    <Heading name={"Loading"} size={14}/>
{:else}
    <div><Heading name={`Current Country: `} size={14}/>{country.country}</div>
    <div><Heading name={`Current City: `} size={14}/>{country.city}</div>
    <div><Heading name={`Current Province/State: `} size={14}/>{country.state}</div>
    <!-- <div><Heading name={`Air Quality`} size={14}/>{country.current.pollution.aquis}
        {calculateAirPollutionLevel(airPollutionLevel)}
    </div> -->
{/if}
</div>