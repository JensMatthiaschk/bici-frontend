import React from 'react'
import Login from './Login'
import Register from './Register'

// const image_hero = {
//     backgroundImage: "url('https://acrediteounao.com/wp-content/uploads/2016/12/mapa.jpg')",
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// }




const Landing = () => {
    return (<>

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="avatar">
                    <div className="w-24 h-12 rounded-full">
                        <img src="https://i.pinimg.com/originals/5d/b5/dc/5db5dc9427e5198fe694bc7594099538.gif" />
                    </div>
                </div>
            </div>
            <div className="navbar-end space-x-1.5 ">
                <label htmlFor="my-modal-5" className="btn btn-info">Log In</label>
                <label htmlFor="my-modal-6" className="btn btn-info">Sign Up</label>
            </div>
        </div>


        <div className="carousel w-full" style={{ height: "80vh " }}>
            <div id="slide1" className="flex carousel-item relative w-full  bg-cover bg-center " style={{ 'backgroundImage': `url("http://cdn2.cyclist.co.uk/sites/cyclist/files/2017/01/st0040420.jpg")` }}>
                <div className="hero-overlay bg-opacity-40  ">
                    <div className="pt-60	 text-center text-neutral-content">
                        <div className="fmax-w-md">
                            <h2 className="mb-5 text-5xl font-bold text-yellow-50">Hello Rider</h2>
                            <h3 className="mb-5 text-yellow-50">"Sign Up for free and prepare your self for the best bike expirience"</h3>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn btn-warning">Sing Up </label>


                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full" style={{ 'backgroundImage': 'linear-gradient(rgba(0, 0, 255, 0.4), rgba(0, 0, 285, 0.2)), url("https://acrediteounao.com/wp-content/uploads/2016/12/mapa.jpg")', }} >

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        <div className=' flex flex-row  place-content-evenly py-14'>
            <div className="card w-96 shadow-xl" style={{ 'backgroundImage': 'url("http://roadandmountainbikereviews.co.uk/wp-content/uploads/2019/04/Focus-O1EL-SL.jpg")' }} >
                <div className="card-body">
                    <h2 className="card-title">Share your ride and find a partner</h2>
                    <p>Post where you going and chat with other riders to share your trip</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Find points of interest</h2>
                    <p>search in our Map shere will you sleep next night, where to take showers or even go swimming </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Chat with other Riders</h2>
                    <p>Make contact with other Riders and with chat about the places you've visit</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Please SignUp!</h3>
                <Register />
                <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">Close</label>
                </div>
            </div>
        </div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Please Login</h3>
                <Login />
                <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">Close</label>
                </div>
            </div>
        </div>



    </>)
}

export default Landing