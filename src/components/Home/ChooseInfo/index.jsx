import React from 'react'
import { Container, Wrapper } from './style'
import { ReactComponent as Discord } from '../../../assets/icons/discord.svg'
import { ReactComponent as House } from '../../../assets/icons/house 1.svg'
import { ReactComponent as Calculator } from '../../../assets/icons/calculator.svg'
import { ReactComponent as Maps } from '../../../assets/icons/maps.svg'

const Choose = () => {
  return (
    <Container>
      <h1 className='title'>Why Choose Us?</h1>
      <p className='sub-title center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <Wrapper>
        <Wrapper.Item>
          <Discord/>
          <h2 className='title small-font'>Trusted By Thousands</h2>
          <p className='sub-title'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Wrapper.Item>
        <Wrapper.Item>
          <Discord/>
          <h2 className='small-font title'>Trusted By Thousands</h2>
          <p className='sub-title'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Wrapper.Item>
        <Wrapper.Item>
          <Discord/>
          <h2 className='title small-font'>Trusted By Thousands</h2>
          <p className='sub-title'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Wrapper.Item>
        <Wrapper.Item>
          <Discord/>
          <h2 className='title small-font'>Trusted By Thousands</h2>
          <p className='sub-title'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
        </Wrapper.Item>
      </Wrapper>
    </Container>
  )
}

export default Choose