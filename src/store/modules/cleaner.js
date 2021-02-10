import Axios from "axios";

const DISPLAY='https://jsonplaceholder.typicode.com/todos'
const Insert=''
const DELETE=''
const UPDATE=''

const actions={

display()
{
    return new Promise((resolve, reject) => {
        Axios.get(DISPLAY )
          .then((response) => {
          
           
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

},
deletebyid(state,id)
{
  return new Promise((resolve, reject) => {
    Axios.delete(DELETE+`${id}` )
      .then((response) => {
      
        console.log(response)
        resolve(response);
      })
      .catch((error) => {
      
        reject(error);
      });
  });

},
updatebyid(state,id)
{
  return new Promise((resolve, reject) => {
    Axios.put(UPDATE+`${id}` )
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
  


  