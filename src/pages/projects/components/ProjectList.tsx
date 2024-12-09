import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

const ProjectList = ({ projects, redirectChart, handleRemoveItem }: any) => {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Version</TableHead>
            <TableHead className='w-[150px]'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.version}</TableCell>
              <TableCell>
                <Button className='mr-2' onClick={() => redirectChart(item.id)}>
                  <Pencil color='#ffffff' />
                </Button>
                <Button
                  variant='destructive'
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Trash color='#ffffff' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectList;
