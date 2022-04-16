import axios from "axios";

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return Promise.reject("No access token set.");
  }

  const response = await axios.get("http://localhost:8080/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
