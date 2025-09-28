import axios from "axios";

const api=axios({
    baseURL:"http://localhost:3000"
})
api.interceptors.request.use(config =>{
    
})
export default api