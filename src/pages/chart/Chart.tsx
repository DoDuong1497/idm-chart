import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Trash } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Chart = () => {
  return (
    <div className='idmChart-body h-[calc(100vh-60px)] flex justify-between'>
      <div className='idmChart-control w-[300px] h-full border-r border-slate-300 border-solid'>
        <div className='p-2 border-b border-slate-300 border-solid'>
          <h4 className='text-lg font-bold text-center'>CONTROL CENTER</h4>
        </div>
        <div className='p-3 flex flex-col justify-between h-[calc(100%-45px)]'>
          <div>
            <p className='text-base font-medium leading-none mb-5'>
              Selected Variables / Sections
            </p>
            <div>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='bacon' />
                  <label
                    htmlFor='bacon'
                    className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Bacon
                  </label>
                </div>
                <Button variant='destructive'>
                  <Trash color='#ffffff' />
                </Button>
              </div>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='bacon' />
                  <label
                    htmlFor='bacon'
                    className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    Bacon
                  </label>
                </div>
                <Button variant='destructive'>
                  <Trash color='#ffffff' />
                </Button>
              </div>
            </div>
          </div>

          <div className='flex justify-end border-t border-slate-300 border-solid py-2'>
            <Button>Apply</Button>
          </div>
        </div>
      </div>

      <div className='idmChart-center w-[calc(100%-600px)] h-full flex justify-center items-center'>
        <ChartContainer
          config={chartConfig}
          className='min-h-[200px] max-h-[300px] h-full w-[85%]'
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
            <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className='idmChart-variable w-[300px] h-full border-l border-slate-300 border-solid'>
        <div className='p-2 border-b border-slate-300 border-solid'>
          <h4 className='text-lg font-semibold text-center'>VARIABLES</h4>
        </div>

        <div className='p-3'>
          <Select>
            <SelectTrigger className='w-full mb-4 border-0 border-b rounded-none'>
              <SelectValue placeholder='Select variable' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='all'>All</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className='mb-5'>
            <Input type='text' placeholder='Search variable...' />
          </div>

          <div>
            <div className='flex items-center space-x-2 mb-3'>
              <Checkbox id='bacon1' />
              <label
                htmlFor='bacon1'
                className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Bacon
              </label>
            </div>
            <div className='flex items-center space-x-2 mb-3'>
              <Checkbox id='bacon2' />
              <label
                htmlFor='bacon2'
                className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Bacon
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
