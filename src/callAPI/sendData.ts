import axios from "axios";
const baseUrl = "https://httpbin.org/post";
const sendData = (value:any) =>{
    return (
        axios 
            .post(baseUrl,value)
            .then(function(response){  
                console.log(response.data)
            })
            .catch(function(err){
                console.log(err)
            })
    )   
}

 export default sendData