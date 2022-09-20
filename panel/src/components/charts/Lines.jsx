import React, { useState } from 'react'
import Chart from "react-apexcharts";

const Lines = () => {
    const [state, setState] = useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
            }
          },
          series: [
            {
              name: "series-1",
              data: [50, 100, 200, 350, 700]
            },
            {
                name: "series-1",
                data: [0, 150, 300, 450, 600]
              }
          ]
    })
  return (
    <div className='mt-10'>
       <div className='bg-gray-100 rounded-md'>
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="1050"
            height="300"
          />
       </div>

        <div className='flex gap-52 my-20'>
            <div className='bg-gray-100 rounded-md'>
              <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="400"
              />
            </div>

            <div className='bg-gray-100 rounded-md'>
              <Chart 
                options={state.options}
                series={state.series} 
                type="radar"
                width="400"
              />
            </div>
        </div>
    </div>
  )
}

export default Lines