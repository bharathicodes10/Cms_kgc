import axios from "axios";

const BASE_URL = "http://localhost:8888/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDAxNGFiMTZjYmY5ZTYxODk5M2IyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTk4NTg4MCwiZXhwIjoxNjY2MjQ1MDgwfQ.qqQliLu33tRr02AtQp4PjIgYcmbNYf_2qZ44TM8GvAw"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });