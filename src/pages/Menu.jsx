import React from 'react'
import { Menulist } from '../components/meniItems/Menulist'
import "../styles/Menu.css"
import Menuitems from '../components/Menuitems';

function Menu() {
  return (
    <div className='menu'>
      <div className='menuTitle'>Our Menu</div>
      <div className='menuList'>{Menulist.map((pizza,index)=>{
return (
  <Menuitems
  key={index}
  image={pizza.image}
  name={pizza.name}
  price={pizza.price}
  />
);
      })}
      </div>
    </div>
  )
}

export default Menu