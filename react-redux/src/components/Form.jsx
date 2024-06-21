// when any change happens at any element everything re renders in this code

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { createUser } from '../features/userDetailSlice';
// import { useNavigate } from 'react-router-dom';

// const Form = () => {

//     const [users, setUsers] = useState({});
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const getUserData = (e) => {
//         setUsers({ ...users, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(users);

//         // dispatch sends data to the createAsyncThunk middleware in userDetailSlice, and API call is made there
//         dispatch(createUser(users));
//         navigate('/read');
//     };

//     return (
//         <div>
//             <h2 className='my-2'>Fill the Form</h2>
//             <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label">Email, Render {(Math.random()*100).toFixed()}</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                         name="email"
//                         onChange={getUserData}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Name, Render {(Math.random()*100).toFixed()}</label>
//                     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                         name='name'
//                         onChange={getUserData}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Age, Render {(Math.random()*100).toFixed()}</label>
//                     <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//                         name='age'
//                         onChange={getUserData}
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <input type="radio" name="gender" className="form-check-input" id="male"
//                         value="Male"
//                         onChange={getUserData}
//                     />
//                     <label className="form-check-label" htmlFor="male">Male, Render {(Math.random()*100).toFixed()}</label>
//                 </div>
//                 <div className="mb-3">
//                     <input type="radio" name="gender" className="form-check-input" id="female"
//                         value='Female'
//                         onChange={getUserData}
//                     />
//                     <label className="form-check-label" htmlFor="female">Female,Render {(Math.random()*100).toFixed()}</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit,Render {(Math.random()*100).toFixed()}</button>
//             </form>
//         </div>
//     )
// }

// export default Form



// this is the way to prevent re-rendering of the components of the code above, using
// memo and useCallback

// import React, { useState, useCallback,memo } from 'react';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../features/userDetailSlice';
// import { useNavigate } from 'react-router-dom';

// const InputField = memo(({ label, type, name, value, onChange }) => {
//     return (
//         <div className="mb-3">
//             <label className="form-label">{label}, Render {(Math.random() * 100).toFixed()}</label>
//             <input
//                 type={type}
//                 className="form-control"
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     );
// });

// const RadioField = memo(({ label, name, value, checked, onChange }) => {
//     return (
//         <div className="mb-3">
//             <input
//                 type="radio"
//                 name={name}
//                 className="form-check-input"
//                 value={value}
//                 checked={checked}
//                 onChange={onChange}
//             />
//             <label className="form-check-label">{label}, Render {(Math.random() * 100).toFixed()}</label>
//         </div>
//     );
// });

// const SubmitButton = memo(() => {
//     return (
//         <button type="submit" className="btn btn-primary">
//             Submit, Render {(Math.random() * 100).toFixed()}
//         </button>
//     );
// });

// const Form = () => {
//     const [users, setUsers] = useState({
//         email: '',
//         name: '',
//         age: '',
//         gender: '',
//     });
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = useCallback((e) => {
//         const { name, value } = e.target;
//         setUsers((prevUsers) => ({
//             ...prevUsers,
//             [name]: value,
//         }));
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(users);
//         dispatch(createUser(users));
//         navigate('/read');
//     };

//     return (
//         <div>
//             <h2 className='my-2'>Fill the Form</h2>
//             <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
//                 <InputField
//                     label="Email"
//                     type="email"
//                     name="email"
//                     value={users.email}
//                     onChange={handleChange}
//                 />
//                 <InputField
//                     label="Name"
//                     type="text"
//                     name="name"
//                     value={users.name}
//                     onChange={handleChange}
//                 />
//                 <InputField
//                     label="Age"
//                     type="number"
//                     name="age"
//                     value={users.age}
//                     onChange={handleChange}
//                 />
//                 <RadioField
//                     label="Male"
//                     name="gender"
//                     value="Male"
//                     checked={users.gender === "Male"}
//                     onChange={handleChange}
//                 />
//                 <RadioField
//                     label="Female"
//                     name="gender"
//                     value="Female"
//                     checked={users.gender === "Female"}
//                     onChange={handleChange}
//                 />
//                 <SubmitButton />
//             </form>
//         </div>
//     );
// };

// export default Form;


// Easiest way to render the element that is changing without rendering everything, like the first code we have
import React, { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const InputField = memo(({ label, type, name, value, onChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}, Render {(Math.random() * 100).toFixed()}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
});

const RadioField = memo(({ label, name, value, checked, onChange }) => {
    return (
        <div className="mb-3">
            <input
                type="radio"
                name={name}
                className="form-check-input"
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label">{label}, Render {(Math.random() * 100).toFixed()}</label>
        </div>
    );
});

const SubmitButton = memo(() => {
    return (
        <button type="submit" className="btn btn-primary">
            Submit, Render {(Math.random() * 100).toFixed()}
        </button>
    );
});

const Form = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, []);

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const handleAgeChange = useCallback((e) => {
        setAge(e.target.value);
    }, []);

    const handleGenderChange = useCallback((e) => {
        setGender(e.target.value);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, name, age, gender };
        console.log(user);
        dispatch(createUser(user));
        navigate('/read');
    };

    return (
        <div>
            <h2 className='my-2'>Fill the Form</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <InputField
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <InputField
                    label="Age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={handleAgeChange}
                />
                <RadioField
                    label="Male"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                />
                <RadioField
                    label="Female"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                />
                <SubmitButton />
            </form>
        </div>
    );
};

export default Form;
