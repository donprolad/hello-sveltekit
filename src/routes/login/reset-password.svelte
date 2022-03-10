<script>

    import EmailField from '../../lib/components/global/EmailField.svelte'
    import PasswordField from '../../lib/components/global/PasswordField.svelte'
    import Button from '../../lib/components/global/Button.svelte'
    import FormHr from '$lib/components/global/FormHr.svelte';
    import HyperLink from '$lib/components/global/HyperLink.svelte'
    import AuthenticationForm from '../../lib/components/forms/AuthenticationForm.svelte';


    let email = "";
    let password = "";
    let confirmPassword = "";

    let userState = {}

    function reset(event) {
        // console.log(event.detail.email)
        userState = {
            email: event.detail.email,
            password: event.detail.password,
            confirmPassword: event.detail.confirmPassword
        }

        userState = userState
    }

</script>

<svelte:head>
    <title>Reset-Password</title>
    <meta 
        name="description" content="Page: Reset Password Form, Author: Don Delain Prolad,
        Category: Web Pages"
    />
    <!-- <meta http-equiv="Content-Security-Policy" content="script-src 'self' http://localhost:3000/reset-password; img-src 'self'" /> -->
</svelte:head>

<AuthenticationForm>
    <EmailField label={"Email"} bind:value={email} />
    <PasswordField label={"New Password"} bind:value={password} />
    <PasswordField label={"Confirm New Password"} bind:value={confirmPassword} />
    <Button message={"reset"} 
            name={"Reset"} 
            state={userState} 
            on:reset={reset}/>
    <FormHr />
    <HyperLink href={"/"} content={'\u2190'} />
</AuthenticationForm>