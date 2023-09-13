import React from 'react'

const GetItemPage = ({data}) => {
  return (
    <div>
        {
          Object.entries(data).map(([key, value]) => (
            <div key={key} className='text-2xl text-blue-600 ml-2'>
              <strong>{key} :</strong> {value}
            </div>
          ))
        }
    </div>
  )
}

export default GetItemPage