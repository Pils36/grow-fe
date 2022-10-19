import React, { useState } from 'react'
import Chart from "react-apexcharts";

const Lines = ({...data}) => {
  let thisuser = [];
  let thisactive = [];
  let thisinactive = [];
  for (let i = 1; i <= data.data.user; i++) {
    thisuser.push(i);
  }
  for (let j = 1; j <= data.data.active; j++) {
    thisactive.push(j);
  }
  for (let k = 1; k <= data.data.inactive; k++) {
    thisinactive.push(k);
  }


    const [state, setState] = useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: thisuser
            }
          },
          series: [
            {
              name: "Active Users",
              data: thisactive
            },
            {
                name: "Inactive Users",
              data: thisinactive
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
            height="500"
          />
       </div>

        <div className='flex gap-52 my-20'>
            <div className='bg-gray-100 rounded-md'>
              <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
              />
            </div>

            <div className='bg-gray-100 rounded-md'>
              <Chart 
                options={state.options}
                series={state.series} 
            type="histogram"
                width="500"
              />
            </div>
        </div>
    </div>
  )
}

export default Lines