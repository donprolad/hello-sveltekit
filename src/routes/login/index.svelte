<script>

    // STATE
    import { loginState } from '../../stores/writable/authentication.js'

    // COMPONENTS
    import EmailField from '../../lib/components/global/EmailField.svelte';
    import PasswordField from '../../lib/components/global/PasswordField.svelte';
    import Button from '../../lib/components/global/Button.svelte';
    import FormHyperLinks from '../../lib/components/global/FormHyperLinks.svelte';
    import FormHr from '$lib/components/global/FormHr.svelte';
    import AuthenticationForm from '../../lib/components/forms/AuthenticationForm.svelte';


    let hyperlinkState = [
        {href: "/", content: '\u2190'},
        {href: "/login/reset-password", content: "Forgot Password" }
    ]

    function login (e) {
        e.preventDefault();
        $: console.log($loginState)
    }

    // const displayUserEmail = x => x !== "" ? `, ${x}` : ""


</script>

<svelte:head>
    <title>Login</title>
    <meta name="description" content="Page: Reset Password Form, Author: Don Prolad,
    Category: Web Pages" />
    <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' http://localhost:3000/login; img-src 'self'" /> -->
</svelte:head>

<AuthenticationForm>
    <EmailField label={"Email"} bind:value={$loginState.email} />
    <PasswordField label={"Password"} bind:value={$loginState.password} />
    <Button on:login={login}
        name={"Login"} 
        message={"login"} 
        state={{...$loginState}} />
    <FormHr />
    <FormHyperLinks hyperLinkState={hyperlinkState} />
</AuthenticationForm>