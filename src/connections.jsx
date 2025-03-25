import { useState, useEffect } from "react";
import axios from "axios";



const images=[
    "https://cdn-icons-png.flaticon.com/128/924/924915.png",
    "https://cdn-icons-png.flaticon.com/128/16683/16683419.png",
    "https://cdn-icons-png.flaticon.com/128/219/219970.png"
]

export const Connections = ({ setToken, setreceiverUserid, currentUserId, users }) => {
    const [connections, setConnections] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get(
                    `http://localhost:3000/connections/${currentUserId.id}`
                );
                console.log(resp.data.connections);
                setConnections(resp.data.connections);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const getUserName = (userId) => {
        console.log(userId)
        const user =
            // typeof(users)=="object"  &&
            users.find((u) => u.id === parseInt(userId));
        return user ? user.name : "Unknown User";
    };


    function getRandomNumber(){
        return Math.floor(Math.random() * 3);
        }

    return (
        <div style={styles.sidebar}>
            <h2 style={styles.heading}>Chat Connections</h2>
            
            <div style={styles.connectionList}>
                {connections.length === 0 ? (
                    <p style={styles.noConnections}>No connections found.</p>
                ) : (
                    connections.map((connection) => (
                        <button
                        style={styles.chatButton}
                        onClick={(e) => (setToken(false), setreceiverUserid({
                            id: connection.SenderID,
                            name: getUserName(connection.UserID2),
                            recId: connection.UserID2
                        }))}
                    >
                        <div key={connection.SenderID} style={styles.connectionItem} >
                            
                            <div style={styles.userInfo}>
                                <img src={images[getRandomNumber()]} className="w-[50px]" />
                            <div className="m-2">   {getUserName(connection.UserID2)} </div> 
                                {/* <span style={styles.status}>{connection.Status}</span> */}
                            </div>
                            <div>
                               
                            </div>

                        </div>
                        </button>

                    ))
                )}
            </div>
            <div>

            </div>
        </div>
    );
};



const styles = {
    sidebar: {
        width: "436px",
        height: "100vh",
        backgroundColor: "#FFFFFF14",
        padding: "15px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
    },
    heading: {
        textAlign: "center",
        marginBottom: "15px",
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    connectionList: {
        flex: 1,
        overflowY: "auto",
        border: "1px solid #AFAFAF",
        borderRadius:"6px"
    },
    noConnections: {
        textAlign: "center",
        color: "#666",
    },
    connectionItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background 0.3s",
        width: "370px",
        marginLeft:"10px"
    },
    connectionItemHover: {
        background: "#e6e6e6",
    },
    userInfo: {
        display: "flex",
        // flexDirection: "column",
    },
    status: {
        fontSize: "0.9rem",
        color: "#666",
    },
   
    chatButtonHover: {
        background: "#0056b3",
    },
};


// chatButton: {
//     padding: "8px 12px",
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background 0.3s",
// },