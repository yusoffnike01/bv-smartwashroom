import Axios from "axios";

const DISPLAY='https://jsonplaceholder.typicode.com/todos'
const Insert=''


const actions={

display()
{
    return new Promise((resolve, reject) => {
        Axios.get(DISPLAY )
          .then((response) => {
          
            console.log(response)
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });



},
insertdata(state,payload)
{
    return new Promise((resolve, reject) => {
        Axios.get(Insert ,payload)
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
  


  