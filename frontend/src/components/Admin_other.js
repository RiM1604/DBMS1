import React from "react";
import { useEffect, useState } from 'react';
export default function Admin_other(){
    const [otherData, setOtherData] = useState([]);
    const showOthers = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_others");
        const result = await response.json();
        setOtherData(result);
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }
    useEffect(() => {
        showOthers()
    },[])
    const delete_other=async (item)=>{
      try {
          const response = await fetch("http://localhost:5000/delete_others",{
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email:item.email,
                name:item.name,
                college:item.college
              })
          });
          const result = await response.json();
          showOthers()
        } catch (error) {
          console.log("Dont know what error");
          console.log(error.message);
        }
  }
    return(
    <div>
      <div className="other">
        {
          otherData.map((item, index) => {
            return (
              <div key={index} className="dynamic-div">
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
                <h2>{item.college}</h2>
                <button onClick={()=>{delete_other(item);}}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
    )
}