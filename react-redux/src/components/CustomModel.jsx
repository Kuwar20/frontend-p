import React from 'react'
import './CustomModel.css'
import { useSelector } from 'react-redux'

const CustomModel = ({id, showPopup, setShowPopup}) => {

    const allusers = useSelector((state) => state.app.users);
    const singleUser = allusers.filter((element) => element.id === id);

    return (
        <div className='modalBackground'>
            <div className="modelContainer">
                <button onClick={()=>setShowPopup(false)}>Close</button>
                <h2>Name: {singleUser[0].name}</h2>
                <h2>Age: {singleUser[0].age}</h2>
                <h2>Email: {singleUser[0].email}</h2>
                <h2>Gender: {singleUser[0].gender}</h2>
            </div>
        </div>
    )
}

export default CustomModel