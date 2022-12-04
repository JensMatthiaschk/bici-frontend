



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
