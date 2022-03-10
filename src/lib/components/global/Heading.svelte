<script>
    export let name;
    export let size;

    const setHeadingSize = x => `${x}px`
</script>

<span style="--heading-size: {setHeadingSize(size)}">{name}</span>

<style>
    span {
        font-size: var(--heading-size);
        /* font-weight: bold; */
    }
</style>
