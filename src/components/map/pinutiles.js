import React from 'react'

export const addLangLat = (formData, pindData) => {
    const { latlng } = pindData
    formData.append(latlng)
    console.log(formData)
    return formData


}
