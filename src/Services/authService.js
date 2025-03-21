import axios from 'axios'

const apiURL = "https://texol-server-700k.onrender.com/api/auth"


export const registerUser = async (userData) =>{
  return await axios.post(`${apiURL}/register`,userData)
   
};

export const loginUser = async (userData) => {
  return await axios.post(`${apiURL}/login`,userData)
};