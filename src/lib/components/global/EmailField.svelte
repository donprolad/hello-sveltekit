<script>
    export let label = ""
    export let value = ""

</script>

<div class="input-field">
    <label for={label.toLowerCase()}>{label.toUpperCase()}</label>
    <input type="email"
           name={label.toLowerCase()}
           placeholder={label}
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
        border: none;
        border-bottom: 1px solid #6666cb;
        padding: 4px;
    }
</style>
