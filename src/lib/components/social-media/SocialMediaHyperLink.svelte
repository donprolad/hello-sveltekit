<script>
    export let href
    export let alt
    export let src
</script>

<div class="svg-container">
    <a {href} target="_new" {alt}>
        <img id="svg" {src} {alt}/>
    </a>
</div>

<style>
    .svg-container {
        align-content: center;
        align-self: center;
    }

    #svg {
        width: 1rem;
        height: 1rem;
    }
</style>