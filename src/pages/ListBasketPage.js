import React from 'react'

const ListBasketPage = ({data}) => {
  return (
    <div>
        {
          data.length > 0 ? (
            <ul className='list-disc'>
              <p className='text-2xl font-semibold'>Basket Name</p>
              {
                data.map((ele, key)=>{
                  return (
                    <li key={key} className='m-2 ml-6 text-xl text-blue-600'>
                        <p>{ele.name}</p>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            <p>No basket left in pantry.</p>
          )
        }
    </div>
  )
}

export default ListBasketPage