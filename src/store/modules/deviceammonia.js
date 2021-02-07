import Axios from "axios";

const InsertAPIDEVICE=''
const INSERTAPIDEVICECOUNTER=''



const actions={

    insertdeviceamonia(state,payload)
    {
        return new Promise((resolve, reject) => {
            Axios.get(InsertAPIDEVICE ,payload)
              .then((response) => {
              
                console.log(response)
                resolve(response);
              })
              .catch((error) => {
              
                reject(error);
              });
          });
    
    },

    insertdevicecounter(state,payload)
    {
      return new Promise((resolve, reject) => {
        Axios.get(INSERTAPIDEVICECOUNTER ,payload)
          .then((response) => {
          
            console.log(response)
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });
    }
}

export default {
    namespaced: true,
    actions,
   
  };
  