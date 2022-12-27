import {useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {useChat} from '../context/ChatContext'
import {init,subscribeChat,subscribeInitialMessaes} from '../socketApi.js'

function Container() {
  const {setMessages}=useChat();
  useEffect(()=>{
    init();

    subscribeInitialMessaes((messages)=>{
      setMessages(messages);
});
    subscribeChat((message)=>{
      setMessages(prevState=>[...prevState,{message}])
    });

  },[]);
  return (
    <div className='App'> 
        <ChatList />
        <ChatForm />

    </div>
  )
}

export default Container;