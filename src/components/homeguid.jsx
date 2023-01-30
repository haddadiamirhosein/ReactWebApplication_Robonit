import React from 'react';
import './style/homeguid.css';

function Homeguid() {
  return (
    <div className='homeguid'>
        <div className='homeguid_title'>
            <h2>دیدنی های بابل</h2>
            <div className='homeguid_line'></div>
        </div>
        <div className='homeguid_container'>
            
            <div className='homeguid_items'>
                <img src="/babol_filband.jpg" alt="" />
                <span>جنگل ابر فیلبند</span>
            </div>
            
            <div className='homeguid_items'>
                <img src="/babol_filband.jpg" alt="" />
                <span>جنگل ابر فیلبند</span>
            </div>

            <div className='homeguid_items'>
                <img src="/babol_filband.jpg" alt="" />
                <span>جنگل ابر فیلبند</span>
            </div>

        </div>
    </div>
  )
}

export default Homeguid