import axios from "axios";

const BASE_URL = "http://localhost:5005/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmVmY2ZiNTVhMWMxODM3ZmYzYzg1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzI0NjY0NSwiZXhwIjoxNjQ3NTA1ODQ1fQ.J0rOQQiJvoaGy-X2qS9DlhPAmg3wH4bEGS61nFdm5Cw"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    }
});



