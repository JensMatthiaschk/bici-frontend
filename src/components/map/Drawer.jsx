
import { useContext, useState } from "react"
import { MapContext } from "../mapContext.jsx"
import PinComments from "./PinComments.jsx"
import { PinRating } from "./PinRating.jsx"
import { FaStar } from "react-icons/fa"
import { useEffect } from "react"



export const Drawer = () => {
    const { pinId, setPinId, pinRatings } = useContext(MapContext)
    const [ratingInput, setRatingInput] = useState(0)
    const Images = [
        {
            avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
        },
        {
            avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
        },
        {
            avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
        },
        {
            avatar_img: "https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png"
        }
    ]

    useEffect(() => {
        if (pinRatings) {
            pinRatings.map((e) =>
                setRatingInput([...pinRatings, e.ratingValue])
            )
        }
        console.log("pinRatings", pinRatings)
    }, [pinId])

    return (

        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-base-100 text-base-content">
                {/* Carousel */}
                <div className="carousel w-full h-60 mb-10">
                    {Images.map((img, i) => {
                        const count = i + 1
                        return (
                            <div id={"drawerSlide" + `${count}`}
                                style={{
                                    "background-image": `url("https://biciappimages.s3.eu-central-1.amazonaws.com/pin_images/Placeholder_view_vector.svg.png")`,
                                    "background-repeat": "no-repeat",
                                    "background-size": "cover",
                                }}
                                className="carousel-item relative w-full">
                                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={"#drawerSlide" + `${count - 1}`} className="btn btn-circle w-8 h-4 p-0">❮</a>
                                    <a href={"#drawerSlide" + `${count + 1}`} className="btn btn-circle w-8 h-4 p-0">❯</a>
                                </div>
                            </div>
                        )
                    })}
                </div>


                {/* Rating Average */}
                <div className="flex relative bottom-4 items-center p-4">
                    <br />
                    <p className="pr-2">3.8</p>
                    {/* ratingInput ?
                        <>
                            [...Array(5)].map((star, i) => {
                            const ratingValueCurrent = i + 1
                    return (
                    <label>
                        <input
                            name="rating"
                            type="radio"
                            value={ratingValueCurrent}
                        />
                        <FaStar
                            className="star"
                            color={ratingValueCurrent <= (ratingInput) ? "rgb(251, 146, 60)" : "grey"}
                            size={30}
                        />
                    </label>
                    )
                        })
                </> :
                    <>
                        [...Array(5)].map((star, i) => {
                            const ratingValueCurrent = i + 1
                            return (
                                <label>
                                    <input
                                        name="rating"
                                        type="radio"
                                        value={"0"}
                                    />
                                    <FaStar
                                        className="star"
                                        color={"grey"}
                                        size={30}
                                    />
                                </label>
                            )
                        })
                    </>
                     */}
                    <p className="pl-2">(10)</p>
                </div >
                {/* User Input */}
                <PinComments pin={pinId} />
                <PinRating />
                {/* <>{pinId}</> */}

            </ul>
        </div>
    )
}