import React, { useState } from 'react'
import './login.css'

function Login() {

  const [logininformation , setLogininformation] = useState({})
  const [validinfo , setValidinfo] = useState(true)

  const handelsubmit = (event) =>{
    event.preventDefault();
    console.log(logininformation)
  }

  const handelchange = (event) =>{
    const key = event.target.name;
    const value = event.target.value;
    const val = {...logininformation , [key]:value}
    setLogininformation(val)
  }

  let errors = {
    "login_user":"نام کاربری اجباری است",
    "login_password":"رمز عبور وارد نشده است"
  }

  const itemValid = (event) => {
    if (event.target.value.replace(/ /g, "") ===""){
        event.target.setCustomValidity(errors[event.target.name])
        return false
    }
    return true
  }

  return (
    <div className='login'>

      <div className='login_right'>

        <div className='login_title'><h2>ورود</h2></div>

        <div className='login_form'>

          <form onSubmit={handelsubmit}>

            <div className='login_input'>
              <label>نام کاربری</label>
              <input 
                type="text" 
                name="login_user"
                onChange={handelchange}
                value={logininformation.login_user || ""}
                onInvalid={itemValid}
                onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                required
              />
            </div>

            <div className='login_input'>
              <label>رمز عبور</label>
              <input 
                type="password" 
                name="login_password"
                onChange={handelchange}
                value={logininformation.login_password || ""}
                onInvalid={itemValid}
                onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                required
              />
            </div>

            <div className={validinfo?"login_error":"login_error active"}>
              <p>نام کاربری یا رمز عبور اشتباه است</p>
              <span className="material-symbols-outlined">close</span>
            </div>
            
            <input type="submit" className='submitInput' value={"ورود"} />
          </form>

        </div>

      </div>

      <div className='login_left'>
        <div className='login_img'>
          <img src="/robot_login.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Login