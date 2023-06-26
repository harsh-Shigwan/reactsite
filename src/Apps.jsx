import React, { useEffect, useState } from "react";

const Apps =()=>{
    const [ num,setnum]=useState(0);
    const [ nums,setnums]=useState(0);
    useEffect(()=>{
        alert ("i am clciked");
    })
    return (
        <>
    <button onClick={()=>{
        setnum(num+1);
    }}> click me {num}</button>
    <br></br>
    <button onClick={()=>{
    setnums(nums+1);
}}> click me {nums}</button>
</>
    );
};
export default Apps;