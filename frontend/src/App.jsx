import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header/Header'
import Router from './navigation/Router.jsx'





function App () {
  return (
    <>
      <NextUIProvider>
          <Header />
          <Router />
      </NextUIProvider>
    </>
  )
}
export default App
