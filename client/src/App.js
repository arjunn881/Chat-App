import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
  <ChatEngine
    height = '100vh'  
    projectID = "b98ce5a2-5882-4286-899b-0d5f6f94ed17"
    userName = {localStorage.getItem('username')}
    userSecret = {localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
  />);
}

export default App;
