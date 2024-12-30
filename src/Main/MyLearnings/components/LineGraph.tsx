import { LineChart } from '@mui/x-charts/LineChart';


const LineGraph = ({activeTab} : {activeTab: number}) => {

    

    return (
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5+activeTab, 2-activeTab, 5*activeTab, 1.5+activeTab, 5*activeTab],
              label: 'Your Learning(Hrs)  ',
            },
            {
              data: [2, 5.5-activeTab, 2+activeTab, 8.5-activeTab, 1.5*activeTab, 5-activeTab],
              label: 'Average Learning in the batch   ',
            },
            {
              data: [8, 10, 12, 15-activeTab, 12, 15],
              label: 'Top in the batch',
            },
          ]}
          width={900}
          height={250}
        //   margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        //   grid={{ vertical: true, horizontal: true }}
        />
      );
};

export default LineGraph;