import { axiosInstance } from './axiosInstance'

export async function getToken(cpf, password) {
    try {
      console.log("fazendo login...")
      const responseToken = await axiosInstance.post('auth/token/login/', {
        cpf: cpf,
        password: password
      });
      return responseToken.data;
    } catch (error) {
      console.log("erro ao fazer login;...")
      console.log(error.response.data)
      throw error;
    }
  }

export async function getAccount(token) {

    try {
      const response = await axiosInstance.get('client-all',
        {
          headers: {
            'Authorization': `Token ${token}`
          }
        }
      )
      return response.data
    } catch (error) {
      console.log("Deu erro")
      throw error
    }
  }