import  React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header=({title,onAdd,showAdd})=>{
  const location = useLocation() 
    return (
        <header className='header'>
     <h1>{title}</h1>
     {location.pathname === '/' && (
          <Button color='green' text={showAdd ?
          'close':'Add'} onClick=
          {onAdd} />)}
        </header>
    )
}


Header.defaultProps ={
    title :'Task Tracker',
  }

  // css in js
//   const headingStyle={
//     color:'red',
//     backgroundColor:'black',
//   }

export default Header

