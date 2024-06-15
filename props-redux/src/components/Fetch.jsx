import axios from 'axios'
import React, { useState } from 'react'

const Fetch = () => {
    const [data1, setData] = useState([]);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [capacity, setCapacity] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendData(name, color, capacity);
    };

    const fetchfn = async () => {
        const response = await axios.get('https://api.restful-api.dev/objects')
        console.log(response.data)
        setData(response.data)
    }

    const resetData = async () => {
        setData([]);
        setIsSuccess(false);
    }

    const sendData = async (name,color,capacity) => {
        if(name === '' || color === '' || capacity === '') return alert('Please fill all fields'); // Ensure all fields are filled before sending data

        try {
            const response = await axios.post('https://api.restful-api.dev/objects',{
                name: name,
                data: {
                    color: color,
                    capacity: capacity
                }
            });

            if (response.status === 200 || response.status === 201) { // Check for successful response
                setIsSuccess(true); // Update success status
                console.log("Data sent successfully:", response.data);
            } else {
                setIsSuccess(false); // Ensure success status is false on non-successful status codes
            }
        } catch (error) {
            console.error("Error sending data:", error);
            setIsSuccess(false); // Update success status on error
        }
        setName('');
        setColor('');
        setCapacity('');
    }
    
    return (
        <>
            {/* call an api and show its result */}
            <button onClick={fetchfn}>Fetch data</button>
            <button onClick={resetData}>Reset data</button>
            {
                data1.map((item, index) => {
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
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <input type="text"
                placeholder='Enter color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                />

                <input type="number"
                placeholder='Enter capacity'
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                />

                <button type='submit'>Send data
                </button>
            </form>

            {isSuccess && <p>Data sent successfully</p>}
        </>
    )
}

export default Fetch