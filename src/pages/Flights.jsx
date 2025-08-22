import React from 'react'
import './Flights.css'
import { FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";

function Flights() {
  return (
    <div className='ftop text-white'>
      <div className="container">
        <h2 className='fw-bold'>Domestic Flights</h2>
        <div className="box bg-white p-3 mt-5 rounded shadow text-black">
          <form action="" className='d-flex align-items-center'>
            
            <div className="in1"><input className='oo' type="checkbox" name="oneway" id="oneway" /> One Way </div>
            <div className="in2"><input className='oo' type="checkbox" name="twoway" id="twoway" /> Two Way </div>
            <div className="box1">
               <FaUser className="text-gray-400 aa" />
              <input className='pass shadow' type="text" name="pass" id="pass" placeholder='1 passenger' />
            </div>
            <div className="box2">
              <select name="" id="" className='shadow contry'>
                <option value="Nepal"> Nepal</option>
              </select>
            </div>
          </form>

          <form action="" className='d-flex align-items-center justify-content-between mt-3'>
            <div className="in3">
              <input className='aaa' type="text" name="" id="" placeholder='From:' />
              <FaMapMarkerAlt className='mapp' />
            </div>
            <div className="in4">
              <input className='aaa' type="text" name="" id="" placeholder='To: ' />
              <FaMapMarkerAlt className='mapp' />
            </div>
            <div className="date">
              <input className='aaa px-3' type="date" name="" id="" />
            </div>
            <button className='btnn'>SEARCH</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Flights
