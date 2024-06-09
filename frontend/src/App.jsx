import './App.css'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/header/Header'
import Router from './navigation/Router.jsx'
import Footer from './components/footer/Footer'
import { AuthProvider } from './contexts/authContext.jsx'






function App () {
  return (
    <>
      <NextUIProvider>
        <AuthProvider>
          <Header />
          <Router />
          <Footer />
        </AuthProvider>
      </NextUIProvider>

    </>
  )
}
export default App
