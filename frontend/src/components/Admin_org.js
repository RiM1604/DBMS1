import React from "react";
import { useEffect, useState } from 'react';
export default function Admin_org(){
    const [orgData, setOrgData] = useState([]);
    const showOrgs = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_orgs");
        const result = await response.json();
        setOrgData(result);
      } catch (error) {
        console.log("Dont know what error");
        console.log(error.message);
      }
    }
    useEffect(() => {
        showOrgs()
    },[])
    const delete_org=async (item)=>{
        try {
            const response = await fetch("http://localhost:5000/delete_orgs",{
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  orgid:item.orgid,
                })
            });
            const result = await response.json();
            showOrgs();
          } catch (error) {
            console.log("Dont know what error");
            console.log(error.message);
          }
    }
    return(
    <div>
      <div className="org">
        {
          orgData.map((item, index) => {
            return (
              <div key={index} className="dynamic-div">
                <h2>{item.orgid}</h2>
                <button onClick={()=>{delete_org(item);}}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
    )
}