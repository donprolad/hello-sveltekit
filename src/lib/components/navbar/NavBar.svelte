<script>
     import LanguageSelector from '$lib/components/lang-selector/LanguageSelector.svelte';
</script>

<nav>
    <a href="/" id="main-heading"><h1>PROTOTYPE</h1></a>
    
    <div class="nav-links">
        <div class="link-container"><a href="/login">Login</a></div>
        <div class="link-container"><a href="/sign-up">Sign-Up</a></div>
    </div>
    <LanguageSelector/>
</nav>
<style>
        nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background-color: #111122;
        color: #E6E6EE;
        text-transform: uppercase;
    }

    nav a {
        color: #E6E6EE;
        text-decoration: none;
        text-align: center;
        
    }

    nav h1 {
        align-self: center;
        text-decoration: none;
    }

    nav .language-selector {
        width: 30%;
        height: 40;
        align-self: center;
    }

    .nav-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    /* .nav-links a:hover{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        font-weight: bold;   
    } */

    .nav-links .link-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
    }

    /* .nav-links .link-container a:hover {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        border-bottom: 2px solid #00FF00;
    } */
</style>