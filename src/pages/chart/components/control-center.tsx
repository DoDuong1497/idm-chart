import { Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../stores";
import { applyChart, removeVariable } from "../../../redux/chart.slice";

function ControlCenter() {
  const dispatch = useDispatch();
  const selectedVariables = useSelector(
    (state: RootState) => state.chart.selected_variables
  );

  const handleRemoveVariable = (id: number) => {
    dispatch(removeVariable(id));
  };

  const submitChart = () => {
    dispatch(applyChart(selectedVariables));
  };

  return (
    <div className='flex flex-col h-full justify-between'>
      <h3 className='uppercase text-center text-[14px]'>Control Center</h3>
      <hr className='my-2' />
      <div className='mx-3'>
        <div className='h-[calc(100vh-250px)]'>
          <div className='font-bold text-[12px] mt-5'>
            Selected Variables / Sections
          </div>
          <div className='mt-4 h-[calc(100vh-287px)] overflow-auto'>
            {selectedVariables.length > 0 ? (
              <>
                {selectedVariables.map((variable) => (
                  <div
                    key={variable.id}
                    className='flex items-center justify-between border-b-[1px] border-[#ddd] py-2'
                  >
                    <div>{variable.name}</div>
                    <div>
                      <Button
                        type='text'
                        danger
                        onClick={() => handleRemoveVariable(variable.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className='text-center mt-5'>No selected variables</div>
            )}
          </div>
        </div>
      </div>

      <div className='border-t-[1px] border-[#ddd] shrink-0 h-[40px] flex items-center justify-end mx-3'>
        <Button type='primary' onClick={submitChart}>
          Apply
        </Button>
      </div>
    </div>
  );
}

export default ControlCenter;
