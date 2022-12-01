function geoToObj(array) {

    if (Array.isArray(array) && array.length === 2) {
        return { lat: array[0], lng: array[1] }
    } else {
        return null
    }
}

function geoToArr(obj) {
    if (obj && obj.lat && obj.lng) {
        return [obj.lat, obj.lng]
    } else {
        return null
    }
}


export { geoToObj, geoToArr }