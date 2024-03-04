import React from "react";
import { useEffect, useState } from 'react';
export default function Admin_student(){
    const [studentData, setStudentData] = useState([]);
    const showStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_students");
        const result = await response.json();
        setStudentData(result);
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }
    useEffect(() => {
        showStudents()
    },[])
    const delete_student=async (item)=>{
      try {
          const response = await fetch("http://localhost:5000/delete_students",{
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                roll:item.roll,
                name:item.name,
                dept:item.dept
              })
          });
          const result = await response.json();
          showStudents()
        } catch (error) {
          console.log("Dont know what error");
          console.log(error.message);
        }
  }
    return(
    <div>
      <div className="student">
        {
          studentData.map((item, index) => {
            return (
              <div key={index} className="dynamic-div">
                <h2>{item.roll}</h2>
                <button onClick={()=>{delete_student(item);}}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
    )
}