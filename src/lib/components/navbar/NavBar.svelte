<script>
     import LanguageSelector from '$lib/components/lang-selector/LanguageSelector.svelte';
</script>

<nav>
    <div class="nav-container-left">
        <a href="/" id="main-heading"><h1>PROTOTYPE</h1></a>
    </div>
    <div class="nav-container-right">
        <div class="nav-links">
            <div class="link-container"><a href="/login">Login</a></div>
            <div class="link-container"><a href="/sign-up">Sign-Up</a></div>
            <div class="link-container"><a href="/dashboard">DashBoard</a></div>
            <div class="language-selector">
                <LanguageSelector/>
            </div>
        </div>
        
    </div>
</nav>
<style>
    nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: #111122;
        color: #E6E6EE;
        text-transform: uppercase;
        
        /* padding-right: 1rem; */
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

    .nav-container-left {
        float: left;
        text-align: left;
    }

    .nav-container-right {
        float: right;
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        /* border: 1px solid #E6E6EE; */
    }

    .nav-links {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
    }

    .nav-links .language-selector {
        width: 30%;
        height: 40;
        align-self: center;
        padding-left: 2rem; 
        /* border: 1px solid #E6E6EE; */
    }

    .nav-links .link-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-content: center;
        white-space: nowrap;
        /* padding-left: 2rem; */
        /* border: 1px solid #E6E6EE; */
    }
</style>