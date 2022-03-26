<script>
    import SocialMediaHyperLink from './SocialMediaHyperLink.svelte';
    import { socialMediaSchema } from './schema.js';

    export let gridArea;
    
</script>
<div class="social-media" style="--grid-area: {gridArea}">
        {#each socialMediaSchema as link}
            <SocialMediaHyperLink {...link}/>
        {/each}
    </div>
<style>
    .social-media {
        grid-area: var(--grid-area);
        display: grid;
        width: 10rem;
        grid-template-columns: repeat(4, 1fr);
    }
</style>