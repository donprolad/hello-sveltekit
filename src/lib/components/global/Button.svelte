<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher();

    export let name;
    export let message;
    export let state = {};
    
    function handleClick() {
        state === {} ? dispatch(`${message}`, {}) :
        dispatch(`${message}`, {...state})
    }
    
</script>

<button type="submit" on:click={handleClick}>{name}</button><br>

<style>
    button {
        padding: 10px;
        font-size: 12px;
        margin: 10px 0px 20px 0px;
        border-radius: 5px;
        background-color: #111122;
        color: #E6E6EE;
    }
</style>