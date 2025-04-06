// import axios from "axios";

// export const academyApi = axios.create({
//   baseURL: import.meta.env.VITE_ACADEMY_API_URL,
// });


import axios from "axios";

export const academyApi = axios.create({
  baseURL: "http://localhost:3030", // Certifique-se de que a URL está correta
  headers: {
    "Content-Type": "application/json",
  },
});