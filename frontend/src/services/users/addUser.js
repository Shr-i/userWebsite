import axiosInstance from "../api/apiInstance";

const addUser = async (user) => {
  const response = await axiosInstance.post(`/users/register`, user);
  return response;
};

export default addUser;
