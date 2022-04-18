<script>

    import CurrentCity from '../../lib/components/dashboard/air-quality/CurrentCity.svelte'
    import CountrySelector from '../../lib/components/country-selector/CountrySelector.svelte'

</script>
<svelte:head>
    <title>DashBoard</title>
    <meta name="description" content="Page: DashBoard, Author: Don Prolad,
    Category: Web Pages" />
    <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' http://localhost:3000/login; img-src 'self'" /> -->
</svelte:head>
<div class="head-container">
    <div class="current-city">
        <CurrentCity />
    </div>
    
</div>

<CountrySelector />
<style>
    .head-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
        ". current-city current-city current-city";
    }

    .current-city{
        grid-area: current-city;
        width: 100%;
    }
</style>
