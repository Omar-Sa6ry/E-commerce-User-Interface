import React from 'react'
import '../css/ourStore.css'

const Colors = props => {
  const { colorData, setColor } = props
  return (
    <ul className='colors d-flex flex-wrap gap-10'>
      {colorData &&
        colorData?.map((item, index) => {
          return (
            <li
              onClick={() => {
                setColor(item?._id)
              }}
              style={{ backgroundColor: `${item?.title}` }}
              key={index}
            ></li>
          )
        })}
    </ul>
  )
}

export default Colors
