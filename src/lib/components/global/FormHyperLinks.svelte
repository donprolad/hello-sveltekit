<script>

    import HyperLink from './HyperLink.svelte';

    export let hyperLinkState;

    let numOfLinks = hyperLinkState.length;

    let gridTemplateColumns = '1fr ';

    function generateGridColumns (num) {
		if (num === 1 ) {
			gridTemplateColumns
		} else {
			gridTemplateColumns += '1fr ';
			generateGridColumns(num - 1)
		}
    }
    
    generateGridColumns(numOfLinks)
</script>

<div class="hyperlink-container" style="--grid-template-columns: {gridTemplateColumns}">
    {#each hyperLinkState as link}
        <HyperLink href={link.href} content={link.content} />
    {/each}
</div>

<style>
    .hyperlink-container {
        display: grid;
        grid-template-columns:  var(--grid-template-columns);
        align-self: center;
        padding-left: 90px;
    }
</style>