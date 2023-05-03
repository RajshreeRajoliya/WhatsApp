import axios from "axios";
export const addUser = async (data) => {
  const url = "http://localhost:8000";
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while addUser API", error.message);
  }
};
