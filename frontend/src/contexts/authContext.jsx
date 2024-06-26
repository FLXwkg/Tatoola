import { createContext, useContext, useEffect, useReducer } from 'react'
import { loginApi, registerApi } from '../services/api'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
  RESET: 'RESET',
  ERROR: 'ERROR'
}

const initialState = {
  jwt: null,
  user: null,
  loading: false,
  isLoggedIn: false,
  error: null
}

/**
 * @param prevState état précedent
 * @param action mise a jour de l'etat = { type, data? }
 */
const authReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
      return {
        ...initialState,
        jwt: action.data.jwt,
        user: action.data.user,
        isLoggedIn: true
      }
    case actionTypes.LOADING:
      return {
        ...prevState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        ...initialState,
        error: action.data.error
      }
    case actionTypes.RESET:
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (dispatch) => ({
  login: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await loginApi(credentials)
      console.log('result :>> ', result);
      dispatch({
        type: actionTypes.LOGIN,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Identifiant ou Mot de passe incorrect' }
      })
    }
  },
  logout: () => {
    dispatch({ type: actionTypes.LOGOUT })
  },
  // userData {username, email, password}
  register: async (userData) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await registerApi(userData)
      dispatch({
        type: actionTypes.REGISTER,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error: 'Erreur lors de l\'inscription. Veuillez réessayer.' }
      })
    }
  }
})

const AuthProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('TatoolaAuth')
  const _initialState = savedState ? JSON.parse(savedState) : initialState

  const [state, dispatch] = useReducer(authReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('TatoolaAuth', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an <AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
