import Axios from "axios";

const InsertAPIDEVICE='https://washroomiot.herokuapp.com/api/v1/ammoni'
const displaytotaldeviceammonia='https://washroomiot.herokuapp.com/api/v1/totaldevice'
const displayperdeviceammonia='https://washroomiot.herokuapp.com/api/v1/detailammoni'
const INSERTAPIDEVICECOUNTER='https://washroomiot.herokuapp.com/api/v1/counter'
const displayperdevicecounter='http://washroomiot.herokuapp.com/api/v1/detailcounter'
const getallcount='https://washroomiot.herokuapp.com/api/v1/getallcount'
const getcountbyid='https://washroomiot.herokuapp.com/api/v1/detailcounter'




const state = () => ({
 id:null
 
 
});


const mutations = {

getdata(state,payload)
{
  state.data=payload
  
},
setid(state,payload)
{
state.id=payload
}






};
const getters={
  isGetdatabyID: (state) => !!state.data,
  getdatabyId:state=>state.data,


}

const actions={

    insertdeviceamonia(state,payload)
    {
        return new Promise((resolve, reject) => {
            Axios.post(InsertAPIDEVICE ,payload)
              .then((response) => {
              
               
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
        Axios.post(INSERTAPIDEVICECOUNTER ,payload)
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






    },
    totaldeviceammonia()
    {
      return new Promise((resolve, reject) => {
        Axios.get(displaytotaldeviceammonia )
          .then((response) => {
          
           
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });


    },
    perdeviceammonia()
    {
      return new Promise((resolve, reject) => {
        Axios.get(displayperdeviceammonia )
          .then((response) => {
          
           
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });


    },
    perdevicecounter()
    {

return new Promise((resolve, reject) => {
        Axios.get(displayperdevicecounter )
          .then((response) => {
          
           
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });


    },
    getallcount()
    {
      return new Promise((resolve, reject) => {
        Axios.get(getallcount )
          .then((response) => {
          
           
            resolve(response);
          })
          .catch((error) => {
          
            reject(error);
          });
      });
    },
    getcountbyid({ commit },id)
    {
      return new Promise((resolve, reject) => {
        Axios.get(getcountbyid +`/${id}` )
          .then((response) => {
          
           commit('setid',response.data.data[0].counter_id)
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
    state,
    mutations,
    actions,
    getters
   
  };
  