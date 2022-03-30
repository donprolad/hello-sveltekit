<script>
	import { defaultEvmStores, web3, chainData, chainId, connected, selectedAccount } from 'svelte-web3';
  
	import { onMount } from 'svelte'

	// How can we decouple this component further?
	
	// Pass the below url to defaultEvmStore.setProvider ,along with the modal window
	// import { rpcUrl } from '../../../api/urls';

	import Heading from '$lib/components/global/Heading.svelte';
  
  
	onMount(async () => {
	  await defaultEvmStores.setProvider()
		text($connected)
	  	color($connected)
	})
	
	const text = c =>
	  c ? `Connected to ${$chainData?.name}` : "Disconnected"
	
	const color = f => 
		f ? "chartreuse" : "red"
	
  </script>

<ul style={`--status-color: ${color($connected)}`}>
	<li><Heading name={text($connected)} size={12}/></li>
</ul>
  
<style>
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
</style>
