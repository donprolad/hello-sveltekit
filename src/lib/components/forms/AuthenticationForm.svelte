<script>
    
</script>

<div class="container">
    <div class="clear-fix"></div>
        <div class="form-container">
            <div class="heading-container"></div>
            <form>
                <slot />
            </form>
        </div>
    <div class="clear-fix"></div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .heading-container {
        /* Move to a CDN link and reference via https */
        background-image: url(/home/don/Projects/dApp/src/res/svg/password_visible.svg);
        background-repeat: no-repeat;
        background-position: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 1rem;
        font-weight: bold;
    }

    .form-container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: left;
        margin: 0px;
        border-radius: 2%;
        box-shadow: 0px 2px 3px 0px #6666cb;
    }

    form {
        width: 100;
        padding: 20px;
        margin: 0px;
    }

    .clear-fix {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0px;
    }
</style>