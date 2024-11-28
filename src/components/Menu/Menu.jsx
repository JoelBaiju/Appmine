import React from 'react'
import './Menu.css'
function Menu({droped,magic1,magic2}) {
  const just=()=>{
    console.log('checked',droped)
    if(droped){
      magic2()
    }
    else{
      magic1()
    }
  }
  return (
    <div>
        <label class="burger" for="burger">
            <input onChange={just} type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            {/* <span></span> */}
        </label>
    </div>
  )
}

export default Menu
