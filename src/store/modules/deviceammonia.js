import Axios from "axios";

const InsertAPIDEVICE=''
const INSERTAPIDEVICECOUNTER=''




const state = () => ({
  data:{}
 
 
});


const mutations = {

getdata(state,payload)
{
  state.data=payload
  
},






};
const getters={
  isGetdatabyID: (state) => !!state.data,
  getdatabyId:state=>state.data
}

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
    },
    successdata({ commit },payload)
    {
      return new Promise((resolve) => {

        commit("getdata", payload);
        resolve()
       
      });






    }
  }



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
   
  };
  