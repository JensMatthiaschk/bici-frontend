



export const getPinData = async (bou) => {
    const res = await fetch(import.meta.env.VITE_AUTH_API + '/map/getpins', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bou),
        mode: "cors"
    })
    if (!res.ok) {
        const responseError = await res.json()
        console.log('nope')
        return responseError.message

    } else {
        const mapPins = await res.json()
        console.log('responseData', mapPins)
        return mapPins
    }
};
