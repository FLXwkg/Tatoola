import { isLength } from 'validator'
import isEmail from 'validator/lib/isEmail'
const validateRegisterForm = (formData) => {
  const errors = {}
  if (typeof formData === 'object') {
    if (!isLength(formData.email, 2, undefined) || !isEmail(formData.email)) {
      errors.email = 'Email invalide'
    }
    if (!isLength(formData.username, 2, undefined)) {
      errors.username = 'Pseudo trop court'
    }
    if (!isLength(formData.password, 8, undefined)) {
      errors.password = 'Mot de passe trop court'
    }
  } else {
    throw new Error('Invalid parameter type')
  }
  return errors
}
export { validateRegisterForm }
