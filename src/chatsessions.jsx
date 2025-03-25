import { useCallback } from 'react';
import Talk from 'talkjs';
import { Session, Chatbox } from '@talkjs/react';

function Chat({
  setToken, currentUserId, receiverId, setreceiverUserid,
  setCurrentUserid, setStatus
}
) {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: currentUserId.id,
        name: currentUserId.name,
        email: 'nina@example.com',
        photoUrl: 'https://talkjs.com/new-web/avatar-7.jpg',
        welcomeMessage: 'Hi!',
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    const conversation = session.getOrCreateConversation(receiverId.id);

    const other = new Talk.User({
      id: receiverId.recId,
      name: receiverId.name,
      email: 'frank@example.com',
      photoUrl: 'https://talkjs.com/new-web/avatar-8.jpg',
      welcomeMessage: 'Hey, how can I help?',
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    <>
    
      <Session
        appId="t9OZFH7q"
        syncUser={syncUser}
        //  id="talkjs-container"
        style={{ width: '100%', maxWidth: '1200px', height: '630px' }}
      >
        <Chatbox
          syncConversation={syncConversation}  
          // id="talkjs-container"
          style={{ width: '100%', maxWidth: '1200px', height: '630px' }}
        />
      </Session>

      <div>
        <button onClick={(e) => (setToken(true), setStatus(true), setCurrentUserid({}), setreceiverUserid({}))}
          className='bg-black text-white p-2 rounded cursor-pointer '>
          Logout
        </button>
      </div>
    </>
  );
}


export default Chat;
