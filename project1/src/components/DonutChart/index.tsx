import { border } from "@mui/system";
import React from "react";
import ApexChart from "react-apexcharts";

const DonutChart = () => {

    const  series = [10, 20]
  var options:any = {
    labels: ["User", "Video Music"],
    colors: ["#FF8A48",'#4F75FF'],
    dataLabels: {
        enabled: true,
        background: { 
            enabled:true,
            borderWidth: 10,
            borderRadius: '4px',
            opacity:1,
        },
        style: {
            border: '1px solid black',
            fontFamily: "Montserrat, sans-serif",
            fontWeight:400,
          },
        // formatter: function(value:any, opts:any) {
        //     return value
        //   }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            show: true,
            fontSize: 13,
            position: "top",
            horizontalAlign: "center",
            markers: {
              radius: 0,
              shape: "square" // "circle" | "square" | "rect"
            },
            floating: true,
            fontWeight: 500,
            itemMargin: { horizontal: 12 },
          },
          
        },
      },
    ],
  };

  return (  
    <ApexChart
      options={options}
      series={series}
      type='donut'
      width="30%"
      height={250}
    />
  );
};

export default DonutChart;
