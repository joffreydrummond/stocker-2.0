import axios from "axios";

export default {

    getStrains: function () {
        return axios.get("/api/strains")
        
    },

    searchStrains: function () {
        return axios.get("/api/strains")
        .then(({ data }) => {
            this.setState({
                results: data.name
            })
        })
    },




   }