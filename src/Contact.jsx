import React, { useState } from 'react';

const Contact =()=>{
   const [data , setData]=useState({
    FullName :"",
    phone :"",
    mesg:"",
   });
   const InputEvent =(event)=>{
    const {name,value }=event.target;
    setData((preVal) => {
      return{
             ...preVal,
             [name]:value,
    };
     });
    };
    const formSubmit=(e)=>{
       e.prevdefault();
       alert(`${data.FullName}`)
    };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'></div>
            <form onSubmit={formSubmit}>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="test" class="form-control" id="exampleFormControlInput1" 
  name="Full Name"
  value={data.FullName}
  onChange={InputEvent}
  placeholder="enter your name"/>
</div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" 
class="form-label">Phone number</label>
  <input type="number" class="form-control" 
id="exampleFormControlInput1" 

name="phone number"
value={data.phone}
onChange={InputEvent}
placeholder="phone number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message for us</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  name="Message for us"
value={data.mesg}
onChange={InputEvent}></textarea>
</div>
 <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3"
    >Confirm</button>
  </div>
</form>
        
        </div>
      </div>
    </>
  );
};
export  default Contact ;