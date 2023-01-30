import React from 'react'
import './style/header.css'
import { Link , Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
    <header className='header'>

        <img src="robot.jpg" alt="" />

        <div className='header_info'>
            <h1>چهاردهمین دوره مسابقات رباتیک دانشگاه صنعتی نوشیروانی بابل</h1>
            <h2>(روبونیت)</h2>
            <h2>15 تا 18 بهمن 1401</h2>
            <h2>بابل ، مازندران ،ایران</h2>
            <div className='header_login'>
                <Link to={"/singin"}>همین حالا ثبت نام کنید</Link>
            </div>
        </div>
        
    </header>
    <Outlet />
    </>
  )
}

export default Header;