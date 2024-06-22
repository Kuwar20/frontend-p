// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchUser } from '../features/userDetailSlice';

// function Navbar() {

//     const allusers = useSelector((state) => state.app.users)

//     const dispatch = useDispatch();
//     const [searchData, setSearchData] = useState("");

//     useEffect(() => {
//         dispatch(searchUser(searchData));
//     }, [searchData]);

//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//                     <a className="navbar-brand" href="#">Redux Brand,Render {(Math.random()*100).toFixed()}</a>
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link to='/' className="nav-link active" aria-current="page">Create Post,Render {(Math.random()*100).toFixed()}</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to='/read' className="nav-link">All Post {allusers.length} ,Render {(Math.random()*100).toFixed()}</Link>
//                         </li>
//                     </ul>
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search"                             placeholder={`Search Render ${(Math.random() * 100).toFixed()}`}  aria-label="Search"
//                         value={searchData}
//                         onChange={(e) => setSearchData(e.target.value)}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search,Render {(Math.random()*100).toFixed()}</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useEffect, useState, useCallback, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../features/userDetailSlice';

// Memoized Brand component
const Brand = memo(() => {
    console.log("Brand rendered");
    return (
        <a className="navbar-brand" href="#">
            Redux Brand, Render {(Math.random() * 100).toFixed()}
        </a>
    );
});

// Memoized NavItem component
const NavItem = memo(({ to, label }) => {
    console.log("NavItem rendered", to);
    return (
        <li className="nav-item">
            <Link to={to} className="nav-link">
                {label}
            </Link>
        </li>
    );
});

// Memoized InputField component
const InputField = memo(({ value, onChange }) => {
    console.log("InputField rendered");
    return (
        <input
            className="form-control me-2"
            type="search"
            placeholder={`Search Render ${(Math.random() * 100).toFixed()}`}
            aria-label="Search"
            value={value}
            onChange={onChange}
        />
    );
});

// Memoized SubmitButton component
const SubmitButton = memo(() => {
    console.log("SubmitButton rendered");
    return (
        <button className="btn btn-outline-success" type="submit">
            Search, Render {(Math.random() * 100).toFixed()}
        </button>
    );
});

// Navbar component
const Navbar = () => {
    const allusers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData, dispatch]);

    const handleSearchChange = useCallback((e) => {
        setSearchData(e.target.value);
    }, []);

    // Memoizing the nav items to prevent unnecessary re-renders
    const navItems = useMemo(() => [
        { to: '/', label: `Create Post, Render ${(Math.random() * 100).toFixed()}` },
        { to: '/read', label: `All Post ${allusers.length}, Render ${(Math.random() * 100).toFixed()}` }
    ], [allusers.length]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Brand />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItems.map((item, index) => (
                            <NavItem key={index} to={item.to} label={item.label} />
                        ))}
                    </ul>
                    <form className="d-flex" role="search">
                        <InputField value={searchData} onChange={handleSearchChange} />
                        <SubmitButton />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
