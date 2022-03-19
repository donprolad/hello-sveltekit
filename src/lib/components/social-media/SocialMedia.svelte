<script>
    import SocialMediaHyperLink from './SocialMediaHyperLink.svelte';
    import { socialMediaSchema } from './schema.js';
</script>
<!-- <div class={gridClass}> refactor into social media component -->
    
    <!-- <div class="svg-container">
        <a href="https://www.facebook.com" target="_new" alt="facebook link">
            <img id="svg" src={FaceBookSVG} alt="facebook"/>
        </a>
    </div>
    <div class="svg-container">
        <a href="https://www.instagram.com" target="_new" alt="instagram link">
            <img id="svg" src={InstagramSVG} alt="instagram"/>
        </a>
    </div>
    <div class="svg-container">
        <a href="https://www.linkedin.com" target="_new" alt="linkedin link">
            <img id="svg" src={LinkedInSVG} alt="linkedin"/>
        </a>
    </div>
    <div class="svg-container">
        <a href="https://twitter.com" target="_new " alt="twitter link">
            <img id="svg" src={TwitterSVG} alt="twitter"/>
        </a>
    </div> -->
    {#each socialMediaSchema as link}
        <SocialMediaHyperLink {...link}/>
    {/each}
<!-- </div> -->
<style>
    /* .social-media {
        grid-area: var(--gridArea);
        display: grid;
        width: 10rem;
        grid-template-columns: repeat(4, 1fr);
    } */

    /* .svg-container {
        align-content: center;
        align-self: center;
    }

    #svg {
        width: 1rem;
        height: 1rem;
    } */

</style>