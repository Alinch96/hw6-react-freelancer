import Axios from "axios";

 const axios = Axios.create({ baseURL: "https://api.openbrewerydb.org/v1/breweries"});

 export const fetchCompanies = async (page, per_page) => {
    const {data} = await axios("/", {
         params: {
             page,  
                per_page
            }
        });
        return data;
}