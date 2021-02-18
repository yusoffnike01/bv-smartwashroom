<script>


import {
   
    gradientLineChart,

} from "./data";

/**
 * Apex component
 */
export default {
    name:'graphamonialine',
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        apexchart: () => import("vue-apexcharts"),
    },
    data() {
        return {
   
            gradientLineChart: gradientLineChart,
         
            title: "Apexcharts",
            items: [{
                    text: "Minton",
                    href: "/",
                },
                {
                    text: "Charts",
                    href: "/",
                },
                {
                    text: "Apexcharts",
                    active: true,
                },
            ],
        };
    },
    middleware: 'router-auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    

    <div class="row">
        <div class="col-xl-6">
            <Portlet :headertitle="'Gradient Line Chart'">
                <div class="card-body pt-0">
                    <!-- Gradient Line Chart -->
                    <apexchart class="apex-charts" height="380" type="line" :series="gradientLineChart.series" :options="gradientLineChart.chartOptions"></apexchart>
                </div>
            </Portlet>
        </div>
    </div>
  

 

  


</div>
</template>
