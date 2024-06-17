import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';
import CustomModel from './CustomModel';

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser())
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
      <h2>All Data</h2>
      <div>
        {users && users.map((element) => (
          <div key={element.id} className="card w-50 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{element.email}</h6>
              <p className="card-text">{element.gender}</p>
              <button className="card-link" onClick={() => [setId(element.id), setShowPopup(true)]}>View</button>
              <a href="#" className="card-link">Edit</a>
              <a href="#" className="card-link">Delete</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Read