import React from 'react'
import Carusel from './Carusel'
import Filter from '../Filter'
import Cards from '../Cards'
import Choose from './ChooseInfo'
import Category from './Category'

const Home = () => {
  return (
    <div>
      <Filter/>
      <Carusel/>
      <Cards/>
      <Choose/>
      <Category/>
    </div>
  )
}

export default Home