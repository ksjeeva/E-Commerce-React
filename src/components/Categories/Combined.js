import React from 'react'
import Cnavbar from './Cnavbar'
import MenProductsPage from '../Products/MenProducts'
import WomenProducts from '../Products/WomensProducts'
import NavBar from '../Nav/NavBar'
import KidsProductsPage from '../Products/KidsProdcuts'

const Combined = () => {
  return (
    <div>
        <NavBar/>
        <Cnavbar/>
        <MenProductsPage/>
        <WomenProducts/>
        <KidsProductsPage/>
    </div>
  )
}

export default Combined