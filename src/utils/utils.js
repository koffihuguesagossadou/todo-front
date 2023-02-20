import axios from 'axios'


const options = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  
  /**
   * call an api and retrieve data from server side
   * @param {String} url 
   * @param {function} callback 
   */


export function apiCall(url){
    

    return{

        /**
         * Api call for retreive all dataS
         * @returns {Promise} Promise containing information about response provide by server
         */
        get: async function(){
            const data = await axios.get(url, options).then((data) => {
                return data
            })

            return data
        },

        post: async function(data){
            const response = await axios.post(url, data,options).then((response=>{return response}))
            return response
        },

        delete : async function(id){
            return await axios.delete(url+'/'+id, options).then((response) => {return response})
        },

        update : async function(data){
            return axios.put(url, data, options).then((response) => {return response})
        }
    }
}

export const getData = (url, callback) => {

    // const res = await axios.get(url)

    // callback(res)
    axios.get(url)
    .then(response=>{
        callback(response)
    })
    .catch((err) => {
        console.error(err)
    })
}


/**
 * Send data to an api
 * @param {string} url 
 * @param {object} data 
 * @param {function} callback 
 */
export const sendData = (url, data, callback) => {

    axios.post(url, data, options)
        .then((response) =>{
            callback(response)
        })
        .catch((error) =>{

        })

}


export const deleteData = (url, callback) => {
    axios.delete(url, options)
        .then((response) =>{
            callback(response)
        })
}


export const styleErrors = {
    color: "red",
    margin: "10px 0"
}