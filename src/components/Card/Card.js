import React from 'react'
import { Container } from './CardStyles'

export const Card = ({children}) => {
  return (
    <>
      <Container>
        <div>{children}</div> 
      </Container>
    </>
  )
}