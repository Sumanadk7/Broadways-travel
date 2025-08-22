import React from 'react'
import './Home.css'
import { GiCommercialAirplane } from "react-icons/gi";
import { BsBusFront } from "react-icons/bs";
import { LuShipWheel } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const destinations = [
    {
        id: 1,
        name: "Pokhara",
        description: "Known for its lakeside beauty, paragliding, and stunning views of the Annapurna range.",
        location: "Gandaki Province",
        image: "https://tse1.mm.bing.net/th/id/OIP.0LcfSA4MC2ZE4wOGZZ_2xAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 2,
        name: "Kathmandu",
        description: "The capital city filled with historic temples, palaces, and UNESCO World Heritage Sites.",
        location: "Bagmati Province",
        image: "https://tse4.mm.bing.net/th/id/OIP.dwMu3vubX3hQgvabcV0xIQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 3,
        name: "Lumbini",
        description: "The birthplace of Lord Buddha, a major pilgrimage site with monasteries and the Maya Devi Temple.",
        location: "Lumbini Province",
        image: "https://tse1.mm.bing.net/th/id/OIP.Wr-gHaH4tXr58v7Rm8yIAwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 4,
        name: "Chitwan",
        description: "A UNESCO World Heritage Site known for jungle safaris, rhinos, and other wildlife.",
        location: "Bagmati Province",
        image: "https://tse3.mm.bing.net/th/id/OIP.Imzqn_FUgv5S_QZFCJtePQHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];

function Home() {
    return (
        <>
            <div className='banner text-white mt-5 '>
                <div className="container">
                    <h2>Book affordable flights to Nepal and beyond</h2>
                    <div className="icons">
                        <ul className='d-flex justify-content-between align-items-center list-unstyled'>
                            <li><GiCommercialAirplane />  Flights</li>
                            <li><LuShipWheel />  Activities</li>
                            <li><BsBusFront />  Bus</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className='popular text-black mt-5'>
                <div className="container">
                    <h2 className='fw-bold'>Popular Destinations</h2>
                    <div className="box d-flex ">
                        {destinations.map(a => (
                            <div className="card  shadow-lg p-3 mb-5 bg-body rounded" key={a.id}>
                                <img src={a.image} alt="" />
                                <h4>{a.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className='text-black mt-5'>
                <div className="container">
                    <h2 className='fw-bold'>Recommended Activities</h2>
                    <div className="rec d-flex justify-content-between align-items-center flex-wrap">
                    <div className="boxx mt-3 shadow" >
                        <img src="https://tse3.mm.bing.net/th/id/OIP.yMYItIxiU9r3wskhKCqZXQHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        <h5 className='px-4 mt-2'>Mirror Maze</h5>
                        <div className="des p-1 d-flex justify-content-around align-items-center">
                        <div classname="stars">
                            <p>★★★★☆ (1 reviews) <br />
                            <FaLocationDot /> Kathmandu, Nepal</p>
                        </div>
                        <div className="price">
                            <p>starts at <br />
                            <span className='fw-bold'>NPR 500</span>
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="boxx mt-3 shadow" >
                        <img src="https://tse1.mm.bing.net/th/id/OIP.C4fguObbfTgaagJMZQp4hgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                        <h5 className='px-4 mt-2'>ATV Tour</h5>
                        <div className="des p-1 d-flex justify-content-around align-items-center">
                        <div classname="stars">
                            <p>★★★★☆ (2 reviews) <br />
                            <FaLocationDot /> Kaski, Nepal</p>
                        </div>
                        <div className="price">
                            <p>starts at <br />
                            <span className='fw-bold'>NPR 5,800</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="boxx mt-3 shadow" >
                        <img src="https://th.bing.com/th/id/R.a2ecb91ae5751f9248b1cc8780185261?rik=etDt%2bq7fbDRSIQ&pid=ImgRaw&r=0" alt="" />
                        <h5 className='px-4 mt-2'>Zipline</h5>
                        <div className="des p-1 d-flex justify-content-around align-items-center">
                        <div classname="stars">
                            <p>★★★★☆ (1 reviews) <br />
                            <FaLocationDot /> Kaski, Nepal</p>
                        </div>
                        <div className="price">
                            <p>starts at <br />
                            <span className='fw-bold'>NPR 6,850</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Home
