import axios from "axios";

export default {
    getStrains: function () {
        return axios.get("/api/strains")
    },
}