import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/userDataSlice';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  // this is the data in redux store
  // {
  //   app: {
  //     user: {
  //       message: 'Login successful',
  //       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQGhpIiwiaWF0IjoxNzE5MjMwMzU4LCJleHAiOjE3MTkyMzM5NTh9.KBHKIo8B7p4I5nvaL1_MJvmyUFemBXwEmemKSjJfOMA',
  //       user: {
  //         _id: '6679297deaef864216b331f3',
  //         firstname: 'hi',
  //         lastname: 'hi',
  //         email: 'hi@hi',
  //         password: '$2a$12$e3bCwcFpEJhGvGVfNQrYruVBYLz2yLA6u.rA3Kupjdl5mAYXIN0zi',
  //         created_at: '2024-06-24T08:08:29.728Z',
  //         updated_at: '2024-06-24T08:08:29.728Z',
  //         __v: 0
  //       }
  //     },
  //     loading: false,
  //     error: null
  //   }
  // }
  const user  = useSelector((state) => state.app.user?.user);
  const userEmail = useSelector((state) => state.app.user?.user?.email);
  // we have "store" from app and "user" from initialstate in userAuth slice
  
  // to make it persistant logout from all tabs
  const dispatch = useDispatch();
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'token' && !event.newValue) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]);

  const handleDeleteUser = (e) => {
    e.preventDefault();
    
    toast.promise(
      // send data as in we send in body of request in postman
      dispatch(deleteUser({ email: userEmail }))
      ,{ 
        loading: 'Deleting your data, hang tight...',
        success: <b>Account Deleted</b>,
        error: <b>Could not Delete.</b>,
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[80vh] bg-slate-500'>
      <div className='mb-4'>
        <h1 className='font-bold'>Welcome to Home page</h1>
        {user && <h2 className='font-bold'>Hello, email: {user.email}, fname: {user.firstname},lname: {user.lastname}</h2>}
      </div>
      <div className='flex flex-col space-y-2'>
        {!user && <Link to="/login" className='text-white hover:underline'>Login</Link>}
        {!user && <Link to="/signup" className='text-white hover:underline'>Signup</Link>}
      </div>
      <div className='flex flex-col font-bold'>
        <button 
          className='bg-white p-2 rounded-md'
          onClick={handleDeleteUser}
          hidden={!user}
          >Delete User</button>
          <Toaster />
      </div>
    </div>
  );
};

export default Home;
