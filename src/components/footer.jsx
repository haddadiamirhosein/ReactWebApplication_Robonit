import React from 'react'
import './style/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_items'>
            <h2>CONTACT</h2>
            <span className='footer_item'>Whatsapp</span>
            <span className='footer_item'>Telegram</span>
            <span className='footer_item'>Instagram</span>
        </div>
        <div className='footer_items'>
            <h2 >INFORMATION</h2>
            <span className='footer_item'>Terms</span>
            <span className='footer_item'>Privacy</span>
            <span className='footer_item'>Policy</span>
        </div>
        <div className='footer_items'>
            <h2 >FLAVORS</h2>
            <span className='footer_item'>Ginger</span>
            <span className='footer_item'>Grap</span>
            <span className='footer_item'>Hibius</span>
        </div>
        <div className='footer_items'>
            its map
        </div>
    </div>
  )
}

export default Footer