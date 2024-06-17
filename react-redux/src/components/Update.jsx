import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateData } from "../features/userDetailSlice";

const Update = () => {

    const { id } = useParams();
    const { users, loading } = useSelector((state) => state.app);
    const [updatedUser, setUpdatedUser] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((element) => element.id === id);
            setUpdatedUser(singleUser[0]);
        }
    }, []);

    const newData = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    console.log(updatedUser);

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updateData(updatedUser));
        navigate('/read');
    };

    return (
        <div>
            <h2 className='my-2'>Edit the Form</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name="email"
                        value={updatedUser && updatedUser.email}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='name'
                        value={updatedUser && updatedUser.name}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='age'
                        value={updatedUser && updatedUser.age}
                        onChange={newData}
                    />
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="male"
                        value="Male"
                        checked={updatedUser && updatedUser.gender === 'Male'}
                        onChange={newData}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="mb-3">
                    <input type="radio" name="gender" className="form-check-input" id="female"
                        value='Female'
                        checked={updatedUser && updatedUser.gender === 'Female'}
                        onChange={newData}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update