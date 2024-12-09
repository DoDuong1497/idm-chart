import { Checkbox, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { dataVariables, VARIABLE_TYPE } from "../../../mocks/dataVariables";
import { VarialbesType } from "../../../types";
import { selectedVariable } from "../../../redux/chart.slice";
import { RootState } from "../../../stores";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";

function Variables() {
  const [data, setData] = useState<any>(dataVariables);

  const dispatch = useDispatch();
  const selectedVariables = useSelector(
    (state: RootState) => state.chart.selected_variables
  );

  const optionVariableType = Object.values(VARIABLE_TYPE).map((item) => {
    return {
      label: item,
      value: item,
    };
  });

  function onCheckVariable(item: VarialbesType) {
    dispatch(selectedVariable(item));
  }

  const filterVariableWithType = (type: string) => {
    const newVariable: any = dataVariables.filter((item) => type === item.type);

    if (type === "all") {
      setData(dataVariables);
    } else {
      setData(newVariable);
    }
  };

  const debounceSearch = useCallback(
    _.debounce((query) => {
      if (query) {
        const newVariable: any = dataVariables.filter(
          (item) => query === item.name
        );

        setData(newVariable);
        return;
      }

      setData(dataVariables);
    }, 1000),
    []
  );

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    debounceSearch(inputValue); // Gọi hàm debounce
  };

  useEffect(() => {
    return () => debounceSearch.cancel(); // Hủy debounce khi component unmount
  }, [debounceSearch]);

  return (
    <div className='w-[300px] h-full pt-4 border-l-[1px] border-[#ddd] shrink-0'>
      <div className='flex flex-col h-full justify-between'>
        <h3 className='uppercase text-center text-[14px]'>VARIABLES</h3>
        <hr className='my-2' />
        <div className='px-3'>
          <Select
            defaultValue='all'
            className='w-full border-b-[1px] border-[#ddd]'
            variant='borderless'
            options={[{ value: "all", label: "All" }, ...optionVariableType]}
            onChange={(type) => filterVariableWithType(type)}
          />
          <div className='mt-4'>
            <Input
              className='w-full border-b-[1px] border-[#ddd]'
              variant='borderless'
              addonBefore={<SearchOutlined />}
              placeholder='Search variables ...'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='h-[calc(100vh-60px)] px-3'>
          <div className='mt-4 pb-4 h-[calc(100vh-220px)] overflow-auto'>
            {data.map((variable: any) => (
              <div key={variable.id}>
                <Checkbox
                  onChange={() => onCheckVariable(variable)}
                  disabled={selectedVariables.some(
                    (item) => item.id === variable.id
                  )}
                >
                  {variable.name}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Variables;
