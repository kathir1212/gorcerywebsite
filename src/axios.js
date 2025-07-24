import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"; // or your API base
axios.defaults.withCredentials = true;

export default axios;