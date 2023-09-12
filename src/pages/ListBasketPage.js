import React from 'react'

const ListBasketPage = ({data}) => {
  return (
    <div>
        {data.length>0 ? 
        (JSON.stringify(data))
        :"No basket left in pantry."}
    </div>
  )
}

export default ListBasketPage