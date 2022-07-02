import React from 'react'
import Carusel from './Carusel'
import Filter from '../Filter'
import Cards from '../Cards'
import Choose from './ChooseInfo'
import Category from './Category'
import homee from '../../assets/imgs/home1.png'

const Home = () => {
  return (
    <div>
      <Filter/>
      <Carusel/>
      <Cards/>
      <Choose/>
      <Category/>
      <img className='class' src={homee} alt="" />
      <Cards/>
      <Cards/>
    </div>
  )
}

export default Home