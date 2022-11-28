import React from 'react'

export const pinutiles = (formData, pindData) => {
    const { latlng } = pindData
    formData.append(latlng)
    console.log(formData)
    return formData


}
