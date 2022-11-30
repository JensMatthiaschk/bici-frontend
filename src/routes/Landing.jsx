import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './Login'

// const image_hero = {
//     backgroundImage: "url('https://acrediteounao.com/wp-content/uploads/2016/12/mapa.jpg')",
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// }




const Landing = () => {
    return (<>
        <Outlet />

        <div className="carousel w-full " style={{ height: "80vh " }}>
            <div id="slide1" className="carousel-item relative w-full  bg-cover bg-center" style={{ 'backgroundImage': `url("http://cdn2.cyclist.co.uk/sites/cyclist/files/2017/01/st0040420.jpg")` }}>
                <div className="hero-overlay bg-opacity-40  ">
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className="mb-5 text-5xl font-bold text-yellow-50">Hello Rider</h2>
                            <h3 className="mb-5 text-yellow-50">"Prepare your self for the best bike expirience"</h3>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn">open modal</label>


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
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>


            </div>
        </footer>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Please Login or SignUp!</h3>
                <Login />
                <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                </div>
            </div>
        </div>



    </>)
}

export default Landing