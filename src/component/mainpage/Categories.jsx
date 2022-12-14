import React from "react"
import dress from '../../component/assets/dress.png'
import jumpsuit from "../../component/assets/jumpsuit.png"
import belt from "../../component/assets/belt.png"
import sandals from "../../component/assets/sandals.png"

const Categories = () => {
  const data = [
    {
      faImg: dress,
      faName: "Dress",
    },
    {
      faImg: jumpsuit,
      faName: "Jumpsuits",
    },
    {
      faImg: belt,
      faName: "Belts",
    },
    {
      faImg: sandals,
      faName: "Sandals",
    },
   

  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.faImg} alt='' />
              <span>{value.faName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories