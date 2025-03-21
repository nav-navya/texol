import axios from 'axios'

const apiURL = "http://localhost:5003/api/auth"


export const registerUser = async (userData) =>{
  return await axios.post(`${apiURL}/register`,userData)
   
};

export const loginUser = async (userData) => {
  return await axios.post(`${apiURL}/login`,userData)
};