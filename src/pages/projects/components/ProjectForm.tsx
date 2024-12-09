import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProjectForm = ({ register, errors }: any) => {
  return (
    <div className='grid gap-2 py-4'>
      <div className='grid grid-cols-4 items-center gap-x-4'>
        <Label htmlFor='first_name'>First Name</Label>
        <Input
          id='first_name'
          className='col-span-3'
          {...register("first_name")}
          placeholder='Enter your first name'
        />
        <p className='min-h-[20px] mt-2 col-start-2 col-span-3 text-sm text-red-500 font-semibold'>
          {errors.first_name?.message}
        </p>
      </div>
      <div className='grid grid-cols-4 items-center gap-x-4'>
        <Label htmlFor='last_name'>Last Name</Label>
        <Input
          id='last_name'
          className='col-span-3'
          {...register("last_name")}
          placeholder='Enter your last name'
        />
        <p className='min-h-[20px] mt-2 col-start-2 col-span-3 text-sm text-red-500 font-semibold'>
          {errors.last_name?.message}
        </p>
      </div>
      <div className='grid grid-cols-4 items-center gap-x-4'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          className='col-span-3'
          {...register("email")}
          placeholder='Enter your email'
        />
        <p className='min-h-[20px] mt-2 col-start-2 col-span-3 text-sm text-red-500 font-semibold'>
          {errors.email?.message}
        </p>
      </div>
    </div>
  );
};

export default ProjectForm;
