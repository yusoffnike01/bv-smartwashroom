import Axios from "axios";

const infocounter='https://washroomiot.herokuapp.com/api/v1/infocounter'

const actions={

infocounter()
{
    return new Promise((resolve, reject) => {
        Axios.get(infocounter )
          .then((response) => {
          
           
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
  