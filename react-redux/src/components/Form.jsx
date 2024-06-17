import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';

const Form = () => {

    const [users, setUsers] = useState({});
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);

        // dispatch sends data to the createAsyncThunk middleware in userDetailSlice, and API call is made there
        dispatch(createUser(users));
    };

    return (
        <div>
            <h2 className='my-2'>Fill the Form</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email"
                        onChange={getUserData}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='name'
                        onChange={getUserData}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='age'
                        onChange={getUserData}
                    />
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="male"
                        value="Male"
                        onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="female"
                        value='Female'
                        onChange={getUserData}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}

export default Form