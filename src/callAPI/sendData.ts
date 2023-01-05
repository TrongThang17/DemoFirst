import axios from "axios";
const baseUrl = "https://httpbin.org/post";
const sendData = (value:any) =>{
    return new Promise((resolve, reject)=>{
        axios 
            .post(baseUrl,value)
            .then(function(response){
                //handle success
                console.log(response)
                resolve(response.data)
            })
            .catch(function(err){
                //handle error
                reject(err)
            });
    });
}

 export default sendData