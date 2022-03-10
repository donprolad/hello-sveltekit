<script>

    //STATE
    import { signupState } from '../../stores/writable/authentication.js'

    import EmailField from '../../lib/components/global/EmailField.svelte'
    import PasswordField from '../../lib/components/global/PasswordField.svelte'
    import Button from '../../lib/components/global/Button.svelte'
    import FormHyperLinks from '../../lib/components/global/FormHyperLinks.svelte'
    import FormHr from '$lib/components/global/FormHr.svelte';
    import AuthenticationForm from '../../lib/components/forms/AuthenticationForm.svelte'

    let hyperlinkState = [
        {href: "/", content: '\u2190' },
        {href: "/login", content: 'Login' },
        {href: "/login/reset-password", content: "Forgot Password" }
    ]

    // import {writable} from 'svelte/store';

    // const signupState = writable({
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // });

    const submitData = e => {
        e.preventDefault()
    }

    $: console.log($signupState.email)

</script>

<svelte:head>
    <title>Sign-up</title>
    <meta 
        name="description" content="Page: Sign Up Form, Author: Don Delain Prolad,
        Category: Web Pages" 
    />
    <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' http://localhost:3000/sign-up; img-src 'self'" /> -->
</svelte:head>

<AuthenticationForm>
    <EmailField label={"Email"} bind:value={$signupState.email} />
    <PasswordField label={"Password"} bind:value={$signupState.password} />
    <PasswordField label={"Confirm Password"} bind:value={$signupState.confirmPassword} />
    <Button on:submit={e => submitData(e)}
        name={"Sign-up"} 
        message={"submit"} 
        state={{...$signupState}} />
    <FormHr />
    <FormHyperLinks hyperLinkState={hyperlinkState} />
</AuthenticationForm>