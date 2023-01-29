import React from 'react'
import { useState } from 'react'
import"./style/navbar.css";
import { Link , Outlet } from 'react-router-dom';

function Navbar() {

    const [clicked , setClicked] = useState(false);
    const [text , setText] = useState("");

    const handelClick = () =>{
        setClicked(!clicked)
    }

    const closeMenu = () => setClicked(false)

    const handelChange = (e) => setText(e.target.value)

    const handelSubmit = (event) =>{
        event.preventDefault();
        console.log(text);
    }

  return (
    <>
    <nav className='navbar'>

        <div className='navbar_lego'>
            <img className='mainicon' src="robo.png" alt="" />
        </div>

        <div className='navbar_search'>

            <div className='navbar_searchbox'>
                <form onSubmit={handelSubmit}>
                    <div className='icon_sesearchbox'>
                       <button className='navbar_button_submit' type='submit'>
                            <span className="material-symbols-outlined navbar_glass" type="submit">search</span>
                       </button>
                    </div>
                    <input 
                        className='navbar_inputsearch' 
                        type="text" 
                        value={text || ""} 
                        onChange={handelChange}
                    />
                </form>
            </div>
        </div>

        <div className={clicked ?"navbar_items active":"navbar_items"}>
            <ul>
                <li className='navbar_item'>
                    <Link to="/" onClick={closeMenu}>لیگ ها</Link>
                </li>

                <li className='navbar_item' style={{borderRadius:"80%",background:"#525050" }}>
                    <Link to={"#"} onClick={closeMenu}>
                        قوانین        
                    </Link>
                </li>

                <li className='navbar_item'> 
                    <Link to={"#"} onClick={closeMenu}>درباره ما</Link>
                </li>

                <li className='navbar_item'>
                    <Link to={"#"} onClick={closeMenu}>تماس با ما</Link>
                </li>

                <li className='navbar_item'> 
                    <Link to={"#"} onClick={closeMenu}>ثبت نام</Link>
                </li>

                <li className='navbar_item'>
                    <Link to={"#"} onClick={closeMenu}>ورود</Link>
                </li>

            </ul>
        </div>

        <div className='navbar_menue' onClick={handelClick}>
            <span className="material-symbols-outlined">
                {clicked ? "close":"menu"}
            </span>
        </div>

    </nav>

    <Outlet />
    </>
  )
}

export default Navbar