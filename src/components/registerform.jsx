import { useState } from 'react';
import './style/registerform.css';
// import'bootstrap/dist/css/bootstrap.css';


const Registerform = (props) => {

    const[input , setInput] = useState({"gender":"Male" , "proof":"دانش اموز","file":null})

    const handelChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // const info = value.replace(/ /g, "");
        const val = {...input,[name]:value};
        setInput(val);        
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    const fileType = ["application/pdf"];
    const handelFilechange = (event) => {
        let selectedFile = event.target.files[0];
        if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) =>{
                    let value = e.target.result;
                    let info = {...input,"file":value};
                    setInput(info);
                }
            }
        }
        else{

        }
    }

    let errors = {
        "firstName":"نام اجباری است",
        "lastName":"نام خانوادگی احباری است",
        "idNumber":"شماره ملی اجباری است",
        "phoneNumber":"شماره تلفن همراه اجباری است",
        "email":"آدرس ایمیل اجباری است",
        "address":"آدرس محل سکونت شما اجباری است"
    }

    const itemValid = (event) => {
        if (event.target.value.replace(/ /g, "") ===""){
            event.target.setCustomValidity(errors[event.target.name])
            return false
        }
        return true
    }
    
    return (
        <div className='main_form'>
         <div className="container">

            <header>فرم ثبت نام</header>

            <form onSubmit={handelSubmit}>

                <div className='form first'>

                    <div className='details personal'>

                        <span className='title'>اطلاعات شخصی</span>

                        <div className='fields'>

                            <div className="input_field">
                                <label>نام </label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    value={input.firstName || ""}
                                    onChange={handelChange}
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required 
                                />
                            </div>
                    
                            <div className="input_field">
                                <label>نام خانوادگی</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={input.lastName || ""}
                                    onChange={handelChange}
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required 
                                />
                            </div>
                        
                            <div className="input_field">
                                <label>شماره ملی</label>
                                <input 
                                    type="tel" 
                                    name="idNumber" 
                                    value={input.idNumber || ""}
                                    onChange={handelChange}
                                    pattern='[0-9]{10}' 
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required 
                                />
                            </div>

                            <div className="input_field">
                                <label>شماره همراه</label>
                                <input 
                                    type="tel" 
                                    name="phoneNumber" 
                                    value={input.phoneNumber || ""}
                                    onChange={handelChange}
                                    pattern='[0-9]{11}'
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required 
                                />
                            </div>

                            <div className="input_field">
                                <label>ایمیل</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={input.email ||""}
                                    onChange={handelChange} 
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required 
                                />
                            </div>
                    
                            <div className="input_field">
                                <label>جنسیت</label>
                                <select 
                                    name='gender' 
                                    onChange={handelChange} 
                                    value={input.gender || ""}
                                >
                                    <option value="Male">مرد</option>
                                    <option value="Female">زن</option>
                                </select>
                            </div>
                        

                        </div>

                    </div>

                    <div className='details information'>

                        <span className='title'>جزیات اطلاعات</span>

                        <div className='fields'>

                            <div className="second_input_field ">
                                <label>تحصیلات</label>
                                <select 
                                    name='proof' 
                                    onChange={handelChange} 
                                    value={input.proof || ""}
                                >
                                    <option value="دانش اموز">دانش اموز</option>
                                    <option value="کاردانی">کاردانی</option>
                                    <option value="کارشناسی">کارشناسی</option>
                                    <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                                    <option value="دکترا">دکترا</option>
                                </select>
                            </div>

                            <div className="second_input_field">
                                <label>آدرس</label>
                                <input 
                                    placeholder='استان - شهر یا روستا - خیابان - پلاک - واحد'
                                    type="text" 
                                    name='address'
                                    value={input.address || ""}
                                    onChange={handelChange}
                                    onInvalid={itemValid}
                                    onInput={e => e.target.value.trim()!==""?e.target.setCustomValidity(""):false}
                                    required
                                />
                            </div>
                    
                        </div>

                        <div className="explain">
                            <label>توضیحات بیشتر</label>
                            <textarea 
                                name="explain" 
                                value={input.explain || ""}
                                onChange={handelChange}
                                id="" 
                                cols="30" 
                                rows="10"
                                maxLength="1000"
                            >
                            </textarea>
                        </div>

                        <div className="file">
                            <label>ارسال رزومه</label>
                            <input 
                                type="file" 
                                accept=".doc , .pdf" 
                                name='file'
                                onChange={handelFilechange}
                            />
                        </div>

                    </div>

                    <div className='submit'>    
                        <input type="submit" className='submitInput' value={"ثبت نام"} />
                    </div>

                </div>

            </form>

         </div>
        </div>
    )
}

export default Registerform;