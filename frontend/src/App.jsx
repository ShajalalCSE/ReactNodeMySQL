import { useEffect, useState } from 'react'

function App() {
  const [data, setData]=useState([]);
  useEffect(()=>{
    fetch ("http://localhost:8081/user")
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err));
  },[])

  return (
    <div style={{padding:"50px",
    display:'flex',
    justifyContent:'center',
    alignItems:"center"
    }}>
      <table style={{
        padding:"4px",
         color:"black",
         border:"1px solid black"
      }}>
        <thead >
          <th >name</th>
          <th>email</th>
          <th>phone</th>
          </thead>
          <tbody>{
           data.map((d,i)=>(
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
           ))
            }
            </tbody>
      </table>
    </div>
  )
}

export default App