import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './chatsessions'
import { Connections } from './connections'

function App() {
  const [currentUserId, setCurrentUserid] = useState({});
  const [receiverId, setreceiverUserid] = useState({
  });

  const [token,setToken]=useState(true);
  useEffect(()=>{

  });

  return (
    <>
     <div className=''>
     {token? <Connections setToken={setToken} setreceiverUserid={setCurrentUserid}/> :
      <Chat setToken={setToken}  />}
     </div>
    </>
  )
}

export default App
