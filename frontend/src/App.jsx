import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header/Header'
import Router from './navigation/Router.jsx'
import Footer from './components/footer/Footer'






function App () {
  return (
    <>
      <NextUIProvider>
          <Header />
          <Router />
          <Footer />
      </NextUIProvider>

    </>
  )
}
export default App
