import axios from 'axios'
import React, { useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([]);

    const fetchfn = async () => {
        const response = await axios.get('https://api.restful-api.dev/objects')
        console.log(response.data)
        setData(response.data)
    }
    return (
        <>
            {/* call an api and show its result */}
            <button onClick={fetchfn}>Fetch data</button>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>Name:{item.name}</p>
                            {item.data && (
                                <>
                                    <p>Color: {item.data.color}</p>
                                    <p>Capacity: {item.data.capacity}</p>
                                </>
                            )}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Fetch