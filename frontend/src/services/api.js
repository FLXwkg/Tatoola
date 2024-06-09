const loginApi = async (credentials) => {
  if (credentials.email === 'test@tattoola.fr' && credentials.password === "password"){
    return {
      user: {
        name: 'test_user',
        email: 'test@tattoola.fr'
      },
      jwt: "eJwthnjmH9gh.tyuiop.rg5JfG"
    }
  }
}

const registerApi = async (credentials) => {
  console.log('credentials :>> ', credentials);
  if (credentials.email === 'test@tattoola.fr' && credentials.password === "password"){ 
    return {
      user: {
        name: 'test_user',
        email: 'test@tattoola.fr'
      },
      jwt: "eJwthnjmH9gh.tyuiop.rg5JfG"
    }
  }
}

export {
  loginApi,
  registerApi
}