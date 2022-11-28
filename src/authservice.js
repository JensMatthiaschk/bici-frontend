import { redirect } from "react-router-dom";
import { useRef } from "react";

export const setToken = (newValue) => {
    try {
        window.localStorage.setItem("user-jwt", JSON.stringify(newValue));
    } catch (error) {
        console.error(error);
    }
};


export const clearToken = () => {
    try {
        window.localStorage.removeItem("user-jwt")
    } catch (error) {
        console.error(error);
    }
};


export const login = async (data) => {
    clearToken()
    const res = await fetch(import.meta.env.VITE_AUTH_API + "/login1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
    });
    const responseData = await res.json();
    console.log(responseData.message)
    if (!responseData.success) return alert(responseData.message)
    setToken(responseData.jwt)

}

export const verifier = async () => {

    const token = JSON.parse(localStorage.getItem("user-jwt"));
    try {
        const res = await fetch(import.meta.env.VITE_AUTH_API + "/me", {
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            mode: "cors",
        });
        const data = await res.json()
        console.log('>>>>>>>>', data)

        return data.success;
    } catch (err) {

        if (err) console.log('invalid token')
        console.error(err);
        return false;
    }

};

export const register = async (data) => {



    return fetch(import.meta.env.VITE_AUTH_API + "/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {

                localStorage.setItem("user-jwt", JSON.stringify(data.jwt));
                console.log(data.message)

            } else {
                console.log(data)
                alert(data.message);
            }
        });


};

