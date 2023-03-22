import axiosInstance from "../api/apiInstance";

const addUser = async (user) => {
  const response = await axiosInstance.post(`/users/register`, user);
  console.log('response: ', response);
  return response;
};

export default addUser;
