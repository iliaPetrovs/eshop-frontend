import axios from "axios";

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  
  if (!accessToken) {
    console.log('el')
    return Promise.reject("No access token set.");
  }
  console.log('first')

  const response = await axios.get("http://localhost:8080/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
