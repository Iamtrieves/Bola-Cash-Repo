const apiURL = "https://bolacash-server.onrender.com";

// Helper to handle API response
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "An error occured");
  }
  console.log(data);
  return data;
};

// Create Account
export const createAccount = async (userInfo) => {
  const response = await fetch(`${apiURL}/bolacash/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return handleResponse(response);
};

// Sign In
export const signIn = async (userInfo) => {
  const response = await fetch(`${apiURL}/bolacash/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return handleResponse(response);
};

// Example for authenticated requests
export const requestTrashPickUp = async (pickUpInfo, token) => {
  const response = await fetch(`${apiURL}/bolacash/pickup/request/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pickUpInfo),
  });
  return handleResponse(response);
};

// export const checkUserExists = async (email) => {
//   const response = await fetch(`${apiURL}/bolacash/auth/check-user/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email }),
//   });
//   const data = await response.json();
//   return data.exists; // Assume the API returns a boolean `exists` field
// };
