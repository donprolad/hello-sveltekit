
import { writable } from 'svelte/store';

export const loginState = writable({
    email: "",
    password: ""
});

export const resetPasswordState = writable({
    email:  "",
    password: "",
    confirmPassword: ""
})

export const signupState = writable({
    email: "",
    password: "",
    confirmPassword: ""
});
