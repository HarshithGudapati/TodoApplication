
import axios from 'axios'
class HelloWorldService{
    excuteHelloWorldService(){
       return  axios.get('http://localhost:8080/hello-world')
       
    }
    excuteHelloWorldBeanService(){
        return  axios.get('http://localhost:8080/hello-world-bean')
        
     }
     excuteHelloWorldPathVariableService(name){
      //  let username = 'in28minutes'
      //   let password = 'dummy'

      //   let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`, 
   //          {
   //              headers : {
   //                  authorization: basicAuthHeader
   //         }
   //      }
   );
        
     }
     }

export default new HelloWorldService();