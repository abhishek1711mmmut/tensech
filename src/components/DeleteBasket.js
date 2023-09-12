import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { apiConnector } from '../services/apiconnector';

const DeleteBasket = () => {

  const [loading, setLoading]=useState(false);

  const [formData, setFormData]=useState({
      pantryId:"",
      basketKey:""
  })

  function changeHandler(event){
      const {name, value}=event.target;
      setFormData((prev)=>({...prev, [name]:value}));
  }

  async function submitHandler(event){
      setLoading(true);
      event.preventDefault();
      let url=`https://getpantry.cloud/apiv1/pantry/${formData.pantryId}/basket/${formData.basketKey}`
      try {
          const response=await apiConnector(
              "DELETE",
              url
          );
          console.log("DELETE ITEM RESPONSE...........", response);
          toast.success(response.data);
      } catch (error) {
          console.log(error);
      }
      setLoading(false);
  }
  return (
    <div className='m-5 text-lg'>
    {
      loading ? (
        <div className='flex justify-center items-center w-screen min-h-[80vh]'><div className='spinner'></div></div>
      ) : (
        <form onSubmit={submitHandler}>
        <h1 className='font-bold text-[25px] underline m-3'>Delete (DELETE)</h1>
          <label htmlFor="pantryId">Enter your pantry ID</label>
          <input type="text" 
          name='pantryId'
          id='pantryId'
          placeholder='Enter your pantry Id'
          value={formData.pantryId}
          onChange={changeHandler}
          className='inputBtn'
          />
          <br />
          <label htmlFor="basketKey">Enter your basket key</label>
          <input type="text" 
          name='basketKey'
          id='basketKey'
          placeholder='Enter your basket key'
          value={formData.basketKey}
          onChange={changeHandler}
          className='inputBtn'
          />
          <br />
          <button type="submit" className='submitBtn'>
            Submit
          </button>
        </form>
      )
    }
      
    </div>
  )
}

export default DeleteBasket