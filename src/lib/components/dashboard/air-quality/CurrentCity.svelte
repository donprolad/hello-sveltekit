<script>
import { onMount } from 'svelte';
import { apiUrl } from '../../../../api/urls'
import Heading from '../../global/Heading.svelte'
import { calculateAirPollutionLevel } from '../../../utilities/air-quality.js'

    let country = {}

    onMount(async () => {
        await fetch(apiUrl.location, {
            'method': 'GET',
            'redirect': 'follow'
        }).then(res => res.json())
        .then(res => country = res.data)
        .catch(err => console.log(err))
    })

</script>

<div>
<!-- Refactor this component , build smaller reusable components -->
{#if country.city === undefined}
    <Heading name={"Loading"} size={14}/>
{:else}
    <div class="current-city-grid">
        <div class="current-country">{country.country}</div>
        <div class="current-province">{country.state}</div>
        <div class="current-city">{country.city}</div>
        <div class="current-quality-index">
            <div class="section-label">Air Pollution Level</div>
            {country.current.pollution.aqius}*
            <div class="section-label">{calculateAirPollutionLevel(country.current.pollution.aqius)}</div>
        </div>
    </div>
{/if}
</div>
<style>
    .current-city-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas:
            "city . . aqius ."
            ". . . . ."
            "country province . . ."
            ". . . . .";
        border-radius: 2%;
        box-shadow: 0px 2px 3px 0px #6666cb;
        width: 50%;
        height: 110px;
    }

    .current-country {
        grid-area: country;
        padding: 0px 0px 10px 10px;
        font-size: 0.7rem;
        font-weight: lighter;
    }

    .current-province {
        grid-area: province;
        padding: 0px 0px 10px 10px;
        font-size: 0.7rem;
        font-weight: lighter;
    }

    .current-city {
        grid-area: city;
        font-weight: bold;
        padding: 10px 0px 0px 10px;
    }

    .section-label {
        font-size: 0.7rem;
        font-weight: lighter;
        text-transform: uppercase;
        padding: 10px 0px 0px 0px;
    }

    .current-quality-index {
        grid-area: aqius;
        display: inline-block;
        font-size: 3rem;
        text-align: center;
        align-content: center;
    }

</style>