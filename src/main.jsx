import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting, { Ele, MyGreet, MyGreet1 } from './components/Greeting.jsx'
import { Animal } from './components/Animal.jsx'
import { TodoList } from './components/TodoList.jsx'
// import { DisplayProfiles } from './components/ProfileApp.jsx'
import Buttons, { MovingDot, PlusThree } from './components/buttons.jsx'
import DisplaySculptures from './components/Hooks.jsx'
import DisplayInsta from './components/InstaProfile.jsx'
import FeedBackForm, { SnackForm } from './components/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greeting />

    <Ele />
    <MyGreet />
    <MyGreet1 />
    <Animal />
    <TodoList />
    {/* <DisplayProfiles /> */}
    <Buttons />
    <DisplaySculptures />
    <DisplayInsta />
    <PlusThree />
    <MovingDot />
    <FeedBackForm />
    <SnackForm />
  </React.StrictMode>,
)
