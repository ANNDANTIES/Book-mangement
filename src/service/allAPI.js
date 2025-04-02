
import commonAPI from "./commonAPI";
import SERVERURL from './serverURL'
//registerAPI called by auth component when user clicked on register button
export const addBookAPI = async(reqBody)=>{
    console.log(reqBody,"Book Detail")
    return await commonAPI ("POST",`${SERVERURL}/books/add`,reqBody)
}
