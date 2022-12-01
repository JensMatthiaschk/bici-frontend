



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