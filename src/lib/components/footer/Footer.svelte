<script>

import Heading from '../global/Heading.svelte';
import SocialMedia from '../social-media/SocialMedia.svelte';

    // This is not just headings it will contain content hyperlinks
    let headings = [
        { name: "Resources"},
        { name: "Partners"}, 
        { name: "Contact"}, 
        { name: "Platform"}, 
        { name: "About"},
        { name: "Offices"}
    ]

    const date = new Date();

</script>

<footer>
    <div class="footer-container">
        <article class="footer-sections">
                {#each headings as heading}
                    <section >
                        <Heading name={heading.name} size={12}/>
                    </section>
                {/each}
        </article>
        <hr>
        <div class="social-media">
            <SocialMedia />
        </div>
        
        <div class="privacy-terms">
            <a href="/privacy" alt="privacy policy">
                <Heading name={"Privacy Policy"} size={12}/>
            </a>
            <a href="/tc" alt="terms and conditions">
                <Heading name={"Terms & Conditions"} size={12}/>
            </a>
        </div>
        <div class="footer-year">
            <span>&#64;{date.getFullYear()} </span>
        </div>
    </div>
</footer>
<style>
    .footer-container {
        position: absolute;
        bottom: 0px;
        width: 100%;
        background-color: #111122;
        color: #E6E6EE;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "sections sections sections sections sections"
            ".break break break ."
            "social-media . . . ."
            ". . privacy . ."
            ". . year . . "
    }

    .footer-container hr {
        grid-area: break;
        width: 90%;
        color: green;
    }

    .footer-sections{
        grid-area: sections;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 5px;
        align-self: center;
        padding-left: 10rem;
        align-content: center;
        justify-content: center;
    }

    .social-media {
        grid-area: social-media;
        display: grid;
        width: 10rem;
        grid-template-columns: repeat(4, 1fr);
    }

    .privacy-terms {
        grid-area: privacy;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        justify-items: center;
    }

    .privacy-terms a {
        text-decoration: none;
        color: #E6E6EE;
    }

    .footer-year {
        grid-area: year;
        display: grid;
        grid-template-columns: 1fr;
        font-size: 12px;
        justify-items: center;
    }

    .svg-container {
        align-content: center;
        align-self: center;
    }

    #svg {
        width: 1rem;
        height: 1rem;
    }
</style>
