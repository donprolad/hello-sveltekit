<script>

    export let label = ""
    export let value = ""

    let labelStatus = true;

</script>

<div class="input-field">
    <label for={label.toLowerCase()}>{labelStatus ? label.toUpperCase() : ""}</label>
    <input type="password"
           name={label.toLowerCase()}
           placeholder={labelStatus ? label : ""}
           bind:value={value} />
</div>

<style>
    .input-field {
        display: grid;
        grid-template-rows: 1fr 1fr;
        padding-bottom: 20px;
    }

    .input-field label {
        font-size: 10px;
        font-weight: bold;
        text-shadow: 1px 0px 1px #ccc;
    }

    .input-field input {
        /* Move this CDN and reference via https preferrably */
        border: none;
        border-bottom: 1px solid #6666cb;
        padding: 4px;
    }
</style>
