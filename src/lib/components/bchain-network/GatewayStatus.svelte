<script>
	import { defaultEvmStores, web3, chainData, chainId, connected, selectedAccount } from 'svelte-web3';
  
	import { onMount } from 'svelte'

	// How can we decouple this component further?
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
</style>
