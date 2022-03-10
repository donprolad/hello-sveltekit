<script>

import NavBar from '$lib/components/navbar/NavBar.svelte';
import GatewayStatus from "$lib/components/bchain-network/GatewayStatus.svelte";
import Footer from '$lib/components/footer/Footer.svelte';

import "../app.css"

</script>

<svelte:head>
    <!-- <meta name="robots" content="noindex" /> -->
    <!-- script-src change 'self' nonce-[RANDOM] or sha256-[] and pass to each script-->
    <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' http://localhost:3000; img-src 'self'; object-src 'none'" /> -->
</svelte:head>

<!-- 1. When general theme has been designed move (global) to context api -->

<NavBar />
<GatewayStatus />
<slot/>
<Footer />
<style>
    body {
        background-color: #E6E6EE;
    }
</style>