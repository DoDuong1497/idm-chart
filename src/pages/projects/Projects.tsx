import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Save } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import { useEffect, useState } from "react";
import { dataProject } from "@/mocks/dataProject";
import { useNavigate } from "react-router";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
};

const schema = yup
  .object({
    first_name: yup.string().required("Please enter first name!!!"),
    last_name: yup.string().required("Please enter last name!!!"),
    email: yup.string().required("Please enter email!!!"),
  })
  .required();

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects((prevState) => [...(prevState || []), ...dataProject]);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (projectItem) => {
    const newProjectItem = {
      id: Date.now(),
      ...projectItem,
      version: Math.round(Math.random() * 9),
    };

    setProjects((prevState) => [...(prevState || []), newProjectItem]);
  };

  const redirectChart = (id: number) => {
    navigate(`/project/${id}`);
  };

  const handleRemoveItem = (id: number) => {
    const newProjects = [...projects];
    const draft = newProjects.filter((item) => item.id !== id);
    setProjects([...draft]);
  };

  return (
    <div className='idmChart-projects mt-10 px-[200px]'>
      <h2 className='flex items-center justify-between mb-5 text-3xl font-semibold'>
        Projects
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus color='#ffffff' />
              Add Project
            </Button>
          </DialogTrigger>

          <DialogContent className='sm:max-w-[400px]'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Add Project</DialogTitle>
              </DialogHeader>

              <ProjectForm register={register} errors={errors} />

              <DialogFooter>
                <Button type='submit'>
                  <Save color='#ffffff' />
                  Save
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </h2>

      <ProjectList
        projects={projects}
        redirectChart={redirectChart}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Projects;
