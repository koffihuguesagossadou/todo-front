import axios from 'axios'


const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
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

export const sendData = (url, data, callback) => {

    axios.post(url, data, options)
        .then((response) =>{
            callback(response)
        })

}

export const inputFilter = (input) => {
    
}