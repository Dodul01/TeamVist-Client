import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://team-vista-server.vercel.app"
})

const useAxiosPublic = () =>{
    return baseUrl
}

export default useAxiosPublic;