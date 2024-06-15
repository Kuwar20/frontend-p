import React from 'react'

const Itemlist = ({ items, users }) => {
    return (
        <>
            {items &&
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            }
            {users && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Itemlist