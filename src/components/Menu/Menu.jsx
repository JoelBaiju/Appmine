import React from 'react'
import './Menu.css'
function Menu() {
  return (
    <div>
        <label class="burger" for="burger">
            <input type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            {/* <span></span> */}
        </label>
    </div>
  )
}

export default Menu
