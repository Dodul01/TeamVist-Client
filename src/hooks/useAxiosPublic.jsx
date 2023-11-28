import axios from "axios";

const baseUrl = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosPublic = () =>{
    return baseUrl
}

export default useAxiosPublic;