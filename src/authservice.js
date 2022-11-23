import { redirect } from "react-router-dom";
import { useRef } from "react";

export const setToken = (newValue) => {
    try {
        window.localStorage.setItem("user-jwt", JSON.stringify(newValue));
    } catch (error) {
        console.error(error);
    }
};


export const login = async (data) => {
    const res = await fetch(import.meta.env.VITE_AUTH_API + "/login1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
    });
    const token = await res.json();
    console.log(token)
    setToken(token.jwt)

}

export const verifier = async () => {

    const token = JSON.parse(window.localStorage.getItem("user-jwt"));
    try {
        const res = await fetch(import.meta.env.VITE_AUTH_API + "/me", {
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            mode: "cors",
        });
        const data = await res.json()
        console.log('>>>>>>>>', res.ok)
        return data.success;
    } catch (err) {

        if (err) console.log('invalid token')
        console.error(err);
        return false;
    }

};

export const register = async (data) => {


    if (data.password === passwordConfirmationRef.current.value) {
        fetch(import.meta.env.VITE_AUTH_API + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
            mode: "cors"
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {

                    localStorage.setItem("user-jwt", JSON.stringify(data.jwt));
                    redirect(`/profile`);
                } else {
                    console.log(data)
                    alert(data.message);
                }
            });
    } else {
        alert("Passwords do not match!");
    }
};


