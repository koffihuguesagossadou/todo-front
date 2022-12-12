import axios from 'axios'


const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  
  /**
   * call an api and retrieve data from server side
   * @param {String} url 
   * @param {function} callback 
   */
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




export const inputFilter = (input) => {
    
}