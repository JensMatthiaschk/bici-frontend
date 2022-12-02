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
    const res = await fetch(import.meta.env.VITE_AUTH_API + "/users/login1", {
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
        const res = await fetch(import.meta.env.VITE_AUTH_API + "/users/me", {
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            mode: "cors",
        });
        const data = await res.json()
        // console.log('>>>>>>>>', data)

        return data.success;
    } catch (err) {

        if (err) console.log('invalid token')
        console.error(err);
        return false;
    }
};

export const register = async (data) => {
    fetch(import.meta.env.VITE_AUTH_API + "/users/signup", {
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


export const updateUser = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    fetch(import.meta.env.VITE_AUTH_API + "/profile/edit", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: data,
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log("HAHAHAHAHA", data)
                return data
            } else {
                console.log(data)
                alert(data.message);
            }
        });
};

export const getProfileData = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    if (!token) {
        alert("You are not logged in")
    }
    const res = await fetch(import.meta.env.VITE_AUTH_API + '/profile', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
    if (!res.ok) {
        const responseError = await res.json()
        console.log('nip')
        return responseError.message

    } else {
        const responseData = await res.json()
        return responseData
    }
};
