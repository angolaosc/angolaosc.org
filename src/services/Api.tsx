import axios from "axios"

const Api=axios.create({
    baseURL:"https://apiestudantecarneiro.onrender.com/"
})

export default Api