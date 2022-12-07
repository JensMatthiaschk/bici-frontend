



export const postPin = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    fetch(import.meta.env.VITE_AUTH_API + "/map/pinit", {
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
                console.log(data.message)
                return data
            } else {
                console.log(data)
                alert(data.message);
            }
        });
};


export const postMapComment = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    return fetch(import.meta.env.VITE_AUTH_API + "/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log(data.message)
                return data
            } else {
                console.log(data)
                alert(data.message);
            }
        });
};

export const getMapComments = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    if (!token) {
        alert("You are not logged in")
    }
    const res = await fetch(import.meta.env.VITE_AUTH_API + '/comment/get', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
    if (!res.ok) {
        const responseError = await res.json()
        console.log("no Comments found")
        return responseError.message

    } else {
        const responseData = await res.json()
        console.log("GOTCOMMENTS", responseData)
        return responseData
    }
};

export const postRating = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    return fetch(import.meta.env.VITE_AUTH_API + "/rating", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                console.log(data.message)
                return data
            } else {
                console.log(data)
                alert(data.message);
            }
        });
};

export const getRatings = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    if (!token) {
        alert("You are not logged in")
    }
    const res = await fetch(import.meta.env.VITE_AUTH_API + "/rating/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
    if (!res.ok) {
        const responseError = await res.json()
        return responseError.message

    } else {
        const responseData = await res.json()
        console.log("GOTRATINGS", responseData)
        return responseData
    }
};

