import React, { useEffect, useState } from 'react'
import "./Activities.css"


const data = [
    {
        "name": "Zipflyer",
        "image": "https://tse2.mm.bing.net/th/id/OIP.apfP3PYhIbPyVbyRMUgOpAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 5000,
        "discount": 15,
        "location": "Pokhara, Nepal"
    },
    {
        "name": "Mirror Maze",
        "image": "https://tse2.mm.bing.net/th/id/OIP.9qNi63h7zIqv0mHmXjwdfQHaDW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 800,
        "discount": 10,
        "location": "Kathmandu Fun Park, Nepal"
    },
    {
        "name": "Bungee Jumping",
        "image": "https://th.bing.com/th/id/OIP.p62l4EMkq5grvh8BFQSzBwHaE4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 7500,
        "discount": 20,
        "location": "The Last Resort, Sindhupalchowk"
    },
    {
        "name": "Canyoning",
        "image": "https://tse1.mm.bing.net/th/id/OIP.r5bo_koH3M14KTnGX7LtPgHaCv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 6500,
        "discount": 10,
        "location": "Sundarijal, Kathmandu"
    },
    {
        "name": "Cycling",
        "image": "https://tse2.mm.bing.net/th/id/OIP.InM1kR-GqydCh9TRT1p0PgHaE5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 1200,
        "discount": 5,
        "location": "Godawari, Lalitpur"
    },
    {
        "name": "Hiking",
        "image": "https://tse3.mm.bing.net/th/id/OIP.0z_4pvzWFk3hvNQbmkiUOAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": 1000,
        "discount": 0,
        "location": "Shivapuri National Park, Kathmandu"
    }
]

function Activities() {
    return (
        <>
            <div className='activities text-white'>
                <div className="container">
                    <h2 className='fw-bold'>Activities & Attractions</h2>
                    <div className="boxe">
                        <form action="" className='d-flex align-items-center'>
                            <div className="inp1">
                                <h6 className='text-black'>Search Keyword</h6>
                                <input className='ee1 shadow' type="text" name="" id="" placeholder='KATHMANDU/ZIPFLYER' />
                            </div>
                            <div className="inp2">
                                <h6 className='text-black'>Select Activities</h6>
                                <select className='ee2 shadow' name="" id="">
                                    <option value="">Zipflyer</option>
                                    <option value="">Mirror Maze</option>
                                    <option value="">Bungee Jumping</option>
                                    <option value="">Canyoning</option>
                                    <option value="">Cycling</option>
                                    <option value="">Hiking</option>
                                </select>

                            </div>
                            <button className='btnn1'>SEARCH</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="act-list mt-3 text-black">
                <div className="container">
                    <div className="list d-flex flex-wrap align-items-center">
                        {data.map((a) => {
                            return (
                                <div className="lis shadow mt-2 d-flex align-items-center " key={a.name}>
                                    <div className="img">
                                        <img src={a.image} alt={a.name} />
                                    </div>
                                    <div className="los">
                                    <h4>{a.name}</h4>
                                    <p>Price: Rs. {a.price} <span className='text-danger'>({a.discount}% OFF)</span></p>
                                    <p>Location: {a.location}</p>
                                    <button className='btnn2 shadow'>Book Now</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Activities
