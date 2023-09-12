import React, { useState } from 'react'
import { apiConnector } from '../services/apiconnector';
import { toast } from 'react-hot-toast';
import ListBasketPage from '../pages/ListBasketPage';

const ListBasket = () => {

  const [loading, setLoading]=useState(false);

  const [formData, setFormData]=useState({
    pantryId:""
  })

  const [data, setData]=useState("");

  const [isSubmitSuccessfull, setIsSubmitSuccessfull]=useState(false);

  function changeHandler(event){
    const {name, value}=event.target;
    setFormData((prev)=>({...prev, [name]:value}));
  }

  async function submitHandler(event){
    setLoading(true);
    event.preventDefault();
    let url=`https://getpantry.cloud/apiv1/pantry/${formData.pantryId}`;
    try {
        const response=await apiConnector(
            "GET",
            url
        );
        console.log("LIST BASKET RESPONSE...........", response);
        toast.success("Basket list successfully fetched.");
        setData(response.data.baskets);
        setIsSubmitSuccessfull(true);
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
}

  return (
    <div>
      {
        loading ? (
          <div className='flex justify-center items-center w-screen min-h-[80vh]'><div className='spinner'></div></div>
        ) : (
          <div className='m-5 text-lg'>
            {
              !isSubmitSuccessfull && (
                <form onSubmit={submitHandler}>
                  <h1 className='font-bold text-[25px] underline m-3'>List Baskets (GET)</h1>
                  <label htmlFor="pantryId">Enter pantry id</label>
                  <input type="text" 
                    name='pantryId'
                    id='pantryId'
                    placeholder='Enter your pantry id'
                    value={formData.pantryId}
                    onChange={changeHandler}
                    className='inputBtn'
                  />
                  <br />
                  <button type='submit'
                    className='submitBtn'>
                    Submit
                  </button>
                </form>
              )
            }

            {
              isSubmitSuccessfull && <ListBasketPage data={data}/>
            }
          </div>
        )
      }
    </div>
  )
}

export default ListBasket