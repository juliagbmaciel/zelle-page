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