import { useEffect, useState } from 'react';
import './App.css';
import Chat from './chatsessions';
import { Connections } from './connections';
import axios from 'axios';

function App() {
  const [currentUserId, setCurrentUserid] = useState({ id: "", name: "" });
  const [receiverId, setreceiverUserid] = useState({ id: "", name: "",recId:"" });
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(true);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    getConnectionIds();
  }, []);

  async function getConnectionIds() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(response.data);
      setUsers(response.data.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  }
//  console.log(currentUserId,receiverId)

 
// async function createUsers() {
//   try {
//     const response = await axios.get("http://localhost:3000/user");
//     console.log(response.data.data);
//     setUsers(response.data.data);
//   } catch (error) {
//     console.log("Error fetching users:", error);
//   }
// }

  return (
    <>
      {status ? (
        <div className='mx-[40%] my-10'>
          {users.map((user) => (
            <p key={user.id}>
              <button
                onClick={() => {
                  setCurrentUserid({ id: user.id, name: user.name });
                  setStatus(false);
                  // createUsers()
                }}
                className="font-[roman] border-1 border-white w-[100px] text-white my-2"
              >
                {user.name}
              </button>
            </p>
          ))}
        </div>
      ) : (
        <div className="flex">
          <Connections
            setToken={setToken}
            setreceiverUserid={setreceiverUserid}
            currentUserId={currentUserId}
            users={users}
          />
          {!token && (
            <Chat
              setToken={setToken}
              currentUserId={currentUserId}
              receiverId={receiverId}
              setreceiverUserid={setreceiverUserid}
              setCurrentUserid={setCurrentUserid}
              setStatus={setStatus}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
