import React from 'react';
//import web from "../src/image/s1.jpg";
import Card from './Card';
import Rdata from './Rdata';
const Service =()=>{
  return (
    <>
     <div className='my-5'>
        <h1 className='tab-center'>Our Service</h1>
     </div>
     <div className='container-fluid mb-5'>
        <div className='row gy-4'>
        {
            Rdata.map((val ,ind)=>{
                return <Card key={ind}
                imgsrc={val.imgsrc} title={val.title}/>
            })
        }
        </div>
     </div>
    </>
  );
};
export  default Service ;