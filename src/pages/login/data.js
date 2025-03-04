
const axios = require('axios');
const ID_Device=[];
      let level=[]

axios.get('https://washroomiot.herokuapp.com/api/v1/detailammoni').then(resp => {

for(const dataobj of resp.data.data)
{
    ID_Device.push(dataobj.ID_Device)
    level.push(dataobj.level)
}



    

    
});
 const gradientLineChart = {


  
    
    chartOptions: {



        
        chart: {
            shadow: {
                enabled: false,
                color: '#bbb',
                top: 3,
                left: 2,
                blur: 3,
                opacity: 1
            },
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            
            categories:ID_Device
        },
        title: {
            text: 'Device',
            align: 'left',
            style: {
                fontSize: '14px',
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#f1556c'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            opacity: 0.9,
            colors: ['#56c2d6'],
            strokeColor: '#fff',
            strokeWidth: 2,
            style: 'inverted', // full, hollow, inverted
            hover: {
                size: 7,
            }
        },
        yaxis: {
           
            title: {
                // text: 'Value',
            },
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    },
    series: [{
        name: 'Device',
        data: [100,120,145]
    }],
};





export {
   gradientLineChart, 
};
