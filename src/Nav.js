import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [show,handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener("scroll",transitionNavBar);
  },[])
  return (
    <div className={`nav ${show && 'nav_color'}`}>
      <div className='flex justify-between'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo' className='fixed w-[80px] cursor-pointer left-[20px] top-[20px]' />
        <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi' alt='avatar' className='w-64 h-32 fixed right-[20px] w-[30px] h-[30px] cursor-pointer' />
      </div>
    </div>
  )
}

export default Nav