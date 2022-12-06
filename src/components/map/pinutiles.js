



export const getPinData = async (bou, filter) => {
    if (!bou) return
    const res = await fetch(import.meta.env.VITE_AUTH_API + '/map/getpins', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ bou, filter }),
        mode: "cors"
    })
    if (!res.ok) {
        const responseError = await res.json()
        console.log('nope')
        return responseError.message

    } else {
        console.log(res)
        const mapPins = await res.json()
        console.log('responseData', mapPins)
        return mapPins
    }
};

export const getProfilePins = async (data) => {
    const token = JSON.parse(localStorage.getItem("user-jwt"));
    if (!token) {
        alert("You are not logged in")
    }
    const res = await fetch(import.meta.env.VITE_AUTH_API + '/profile/propin', {
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
        return responseError.message

    } else {
        const responseData = await res.json()
        return responseData
    }
};
