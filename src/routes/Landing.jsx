import React from "react";
import Login from "./Login";
import Register from "./Register";

// const image_hero = {
//     backgroundImage: "url('https://acrediteounao.com/wp-content/uploads/2016/12/mapa.jpg')",
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// }

const Landing = () => {
  return (
    <>
      <div className="navbar bg-transparent fixed z-50">
        <div className="navbar-start">
          <div className="avatar">
            <div className="w-24 h-12 rounded-full">
              <img src="https://i.pinimg.com/originals/5d/b5/dc/5db5dc9427e5198fe694bc7594099538.gif" />
            </div>
          </div>
        </div>


        <div className="carousel w-screen h-screen" /* style={{ height: "80vh " }} */>
            <div id="slide1" className="flex carousel-item relative w-full  bg-cover bg-center " style={{ 'backgroundImage': `url("https://cdn2.cyclist.co.uk/sites/cyclist/files/2017/01/st0040420.jpg")` }}>
                <div className="hero-overlay bg-opacity-40  ">
                    <div className="flex h-screen text-center items-center sm:items-center pb-20 ">
                        <div className="w-full">
                            <h2 className="mb-5 text-5xl font-bold text-yellow-50">Hello Rider</h2>
                            <h3 className="mb-5 text-3xl text-yellow-50">"Sign Up for free and prepare your self for the best bike expirience"</h3>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn">Sign Up</label>
                        </div>
                        <div className="absolute bottom-20 sm:bottom-50 flex w-full justify-center"><img src="/assets/bici-logo.png" alt="logo" className="invert-[.15] hover:invert-0 w-64 sm:w-80" /></div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-ghost">❮</a>
                    <a href="#slide2" className="btn btn-ghost">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-cover bg-center " style={{ 'backgroundImage': 'url("assets/pexels-pavel-danilyuk-5807805.jpg")' }}>
                <div className="hero-overlay"   >
                    <div className="flex h-screen text-center items-end pt-32 sm:items-center pb-20">
                        <div className='w-full'>
                            <h2 className="mb-5 text-5xl font-bold text-yellow-50">Chat with other Riders</h2>
                            <h3 className="mb-5  text-2xl text-yellow-50">Make contact with other users and chat about the places you have visit</h3>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-ghost">❮</a>
                    <a href="#slide3" className="btn btn-ghost">❯</a>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide2" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full bg-cover bg-center "
          style={{
            backgroundImage: 'url("assets/pexels-pavel-danilyuk-5807805.jpg")',
          }}
        >
          <div className="hero-overlay">
            <div className="flex h-screen text-center items-end pt-32 sm:items-center pb-20">
              <div className="w-full">
                <h2 className="mb-5 text-5xl font-bold text-yellow-50">
                  Chat with other Riders
                </h2>
                <h3 className="mb-5  text-2xl text-yellow-50">
                  Make contact with other cyclist, checkout and share places you
                  have visited
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide3" className="btn btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full	 bg-cover bg-center "
          style={{ backgroundImage: `url("assets/image.png")` }}
        >
          <div className="hero-overlay bg-opacity-40  ">
            <div className="flex h-screen text-center items-center pb-20 sm: px-10 ">
              <div className="w-full ">
                <h2 className="mb-5 text-5xl font-bold text-yellow-50">
                  {" "}
                  Find points of interest
                </h2>
                <h3 className="mb-5 text-2xl text-yellow-50">
                  {" "}
                  "Search the interactvie Map for places to camp or stay with
                  other users, find showers, swimming spots and repair stations"{" "}
                </h3>
              </div>
            </div>

          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide4" className="btn btn-ghost">
              ❯
            </a>
          </div>

        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full bg-cover bg-center "
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 255, 0.4), rgba(0, 0, 285, 0.2)), url("https://acrediteounao.com/wp-content/uploads/2016/12/mapa.jpg")',
          }}
        >
          <div className="hero-overlay">
            <div className="flex h-screen text-center items-center pt-20 sm: px-10  ">
              <div className="w-full">
                <h2 className="mb-5 text-5xl font-bold text-yellow-50">
                  Share your ride and find a partner
                </h2>
                <h3 className="mb-5 text-3xl text-yellow-50">
                  Post where you are going share your ride and find partners to
                  ride with
                </h3>
              </div>
            </div>

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-ghost">
              ❮
            </a>
            <a href="#slide1" className="btn btn-ghost">
              ❯
            </a>
          </div>

            <div className="absolute bottom-5 sm:bottom-20 flex w-full justify-center"><img src="/assets/bici-logo.png" alt="logo" className="w-64 sm:w-80" /></div>


        </div>
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <label
        htmlFor="my-modal-6"
        className="modal modal-bottom sm:modal-middle"
      >
        <label className="modal-box" htmlFor="">
          <h3 className="font-bold text-lg">Please SignUp!</h3>
          <Register />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </label>
      </label>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label
        htmlFor="my-modal-5"
        className="modal modal-bottom sm:modal-middle"
      >
        <label className="modal-box" htmlFor="">
          <h3 className="font-bold text-lg">Please Login</h3>
          <Login />
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default Landing;
