import { useState } from "react";


export const Connections=({setToken,setCurrentUserid})=>{
  const [connectionIds, setConnectionIds] = useState([
    {
        userid:1,
        name:"Tony"
    },
    {
        userid:2,
        name:"Kenshin"
    },
    {
        userid:3,
        name:"Sung jinwo"
    }
  ]);

    return(
        <>
        {
            connectionIds.map((e)=>{
            return <button onClick={()=>(setToken(false),setConnectionIds(e))}>
                <div className="text-4xl">
                    {e.name}
                </div>
                </button>  
            })
        }
        </>
    )
}