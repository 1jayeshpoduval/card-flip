import React from 'react'
import Logo from './Logo.jsx'
import {motion} from 'framer-motion'

const Card = (props) => {
  return (
    <div className='card-parent'>
        <motion.div className='card-wrap u-mb-3'
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: props.flipped ? 180 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 18
        }}>
          <div className='card cc-front'>
            <Logo />
          </div>
          <div className = 'card cc-back'>
            <h1>Hello — my name is Jayesh.</h1>
            <div className='description-text'>I am a interface and interaction designer based in Sydney.</div>
          </div>
          
        </motion.div>
    </div>
  )
}

export default Card