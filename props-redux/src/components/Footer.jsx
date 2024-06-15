import React from 'react'

const Footer = ({ name, age }) => {
    return (
        <div>his name is {name} and his age is {age}</div>
    )
}

// // another way to write the same code
// const Footer = (props) => {
//   return (
//     <div>his name is {props.name} and his age is {props.age}</div>
//   )
// }

export default Footer