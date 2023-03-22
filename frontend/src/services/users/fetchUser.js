import axiosInstance from "../api/apiInstance";

const fetchUser = async (user) => {
  const response = await axiosInstance.post(`/users/login`, user);
  console.log("response: ", response);
  return response;
}

export default fetchUser;