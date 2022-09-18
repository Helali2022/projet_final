import React from 'react'
import Badge from './Badge'

const Section = ({element}) => {
  return (
    <div className='section-item'>
        {element.map((el,i)=> i<3 && <Badge el={el}/> )}
    </div>
  )
}

export default Section

