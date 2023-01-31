import axios from "axios";

export const filtertabledata = (Searchvalue) => {
    return axios.post('',Searchvalue)
      .then((response)=>{
        console.log("response")
      })
      .catch((err)=>console.log("err",err))

}