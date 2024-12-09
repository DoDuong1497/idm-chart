import ChartRender from "./components/chart-render";
import Variables from "./components/variables";
import ControlCenter from "./components/control-center";

function Chart() {
  return (
    <div className='h-[calc(100vh-64px)] flex justify-between'>
      <div className='w-[300px] h-full pt-4 border-r-[1px] border-[#ddd] shrink-0'>
        <ControlCenter />
      </div>

      <div className='grow w-1/2 max-w/1-2 text-center m-4'>
        <div className='w-full h-[calc(100vh-130px)] flex items-center'>
          <div className='w-full'>
            <ChartRender />
          </div>
        </div>
      </div>

      <Variables />
    </div>
  );
}

export default Chart;
