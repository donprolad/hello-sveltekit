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
</script>

<div>
{#if country.city === undefined}
    <Heading name={"Loading"} size={14}/>
{:else}
    Current City: <Heading name={country.city} size={14}/>
{/if}
<!-- {#if citie !== undefined}
        <table>
            <tr>
                <th>Country</th>
                <th>City</th>
                <th>State</th>
                <th>Ranking</th>
            </tr>
                {#each cities.data as rank}
            <tr>
               
                <td>{rank.country}</td>
                <td>{rank.city}</td>
                <td>{rank.state}</td>
                <td>{rank.ranking.current_aqi}</td>
            </tr>
                {/each}
        </table>
    {/if} -->
</div>