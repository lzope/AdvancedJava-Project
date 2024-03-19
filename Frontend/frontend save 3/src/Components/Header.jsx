import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='d-flex justify-content-around '>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJpA_oHt3DH-qGvW-VDDh6Vv5J29_83tCgw&usqp=CAU" alt="Not Found"  />
            </div>
            <div className='d-flex align-items-center'>
                <h2>Back To School</h2>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJpA_oHt3DH-qGvW-VDDh6Vv5J29_83tCgw&usqp=CAU" alt="Not Found"  />
            </div>
        </div>
        
    </div>
  )
}

export default Header