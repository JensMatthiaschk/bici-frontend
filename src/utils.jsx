export const register = async (data) => {
    return await fetch(import.meta.env.VITE_RAILWAY_URI + "/register", {
        method: "POST",
        headers: {
            //Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
    });
};


