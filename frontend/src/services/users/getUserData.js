import axiosInstance from "../api/apiInstance";

const getUserData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axiosInstance.get(`/users`,config);
  console.log("response: ", response);
  return response;
}

export default getUserData;