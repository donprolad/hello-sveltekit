<!-- <script >
	//import { browser } from '$app/env';
	import { defaultEvmStores, chainData, chainId } from 'svelte-web3';
	import Heading from '$lib/components/global/Heading.svelte';

	import { rpcUrl } from '../../../api/urls';

	import { onMount, onDestroy } from 'svelte';

	export const prerender = true;

	//Debug this component

	// Just for reference while I get used to this library
	// import { defaultEvmStores, web3, selectedAccount, connected, chainId, chainData } from 'svelte-web3';
	
	let statusMessage = "Loading..."
	let statusColor;

	const gatewayStatus = name =>
		name === undefined || name === {} ? 
		false : true


	const status = n => n !== undefined ? `Connected to ${n}` : "Disconnected"

	// let networkName = JSON.stringify($chainData?.name);

	// const displayText = f => f ? `Connected To: ${JSON.stringify($chainData?.name)}` : "Disconnected"
	const displayStatusColor = f => f ? "chartreuse" : "red"


	onMount (() => {
		//if(browser) {
			defaultEvmStores.setProvider()
		//}

		// statusMessage = await displayText(gatewayStatus(JSON.stringify($chainData?.name)))
		// statusColor = await displayStatusColor(gatewayStatus(JSON.stringify($chainData?.name)))
		statusMessage = status(JSON.stringify($chainData?.name))
	})

	onDestroy(() => {
		defaultEvmStores.disconnect();
	})

	$: {
	 	// statusMessage = displayText(gatewayStatus(JSON.stringify($chainData?.name)))
		// statusColor = displayStatusColor(gatewayStatus(JSON.stringify($chainData?.name)))
		statusMessage = status(JSON.stringify($chainData?.name))
	}
</script>
<ul style={`--status-color: ${statusColor}`}>
	<li><Heading name={statusMessage} size={12}/></li>
</ul> -->

<!-- <Heading name={statusMessage} size={12}/> -->

<!-- <style>
	ul {
		list-style-type: none;
		width: 15%;
	}

	ul li::before {
		display:inline-block;
		content: "\2022";
		color: var(--status-color);
		width: 1em;
		margin-left: -1em;
		text-align: center;
	}
	 /* .container {
		 display: grid;
		 grid-template-areas: 'left right';
		 grid-template-columns: repeat(2 ,1fr);
		 align-items: center;
		 width: 30%;
		 border: 1px solid black;
	 }

	 .left {
		grid-area: 'left';
		grid-column: 1 / 3;
		border-radius: 50%;
		background-color: var(--status-color);
		width: 0.50rem;
		height: 0.50rem;
		padding: 0px;
	 }

	 .right {
		width: 100%;
		grid-area: 'right';
		grid-column: 2 / 3;
		font-size: 0.7rem;
		white-space: no-wrap;
	 } */
</style> -->

<script>
	import { defaultEvmStores, web3, chainData, chainId, connected, selectedAccount } from 'svelte-web3';
  
	import { onMount } from 'svelte'

	import { rpcUrl } from '../../../api/urls';
  
	let statusMessage = "Loading..."
  
	onMount(async () => {
	  await defaultEvmStores.setProvider()
	  statusMessage = await displayStatus($chainData?.name)
	})
	
	const displayStatus = n =>
	  n !== undefined ? `Connected to ${n}` : "Disconnected"
	
  
	$: statusMessage = displayStatus($chainData?.name)
	
  </script>
  
  <p>{statusMessage}</p>
