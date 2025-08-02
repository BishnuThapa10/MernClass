import { Card, IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { removeEmployee } from "./employeeSlice";

const TABLE_HEAD = [
  "Name",
  "Email",
  "Job",
  "Employed",
  "Actions",
];

export default function EmployeesList() {

    const {employees} = useSelector((state)=> state.employeeSlice);
    const dispatch = useDispatch();
    const nav = useNavigate(); 


  return (
    <div className="p-5">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-full table-auto text-left">
            <thead>
                <tr>
                {TABLE_HEAD.map((head,i) => (
              <th key={i} className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
                </tr>
            </thead>
            <tbody>
                {employees.map((employee,i)=>{
                    return(
                        <tr key={employee.id}>
                            <td className="p-4">
                                <Typography variant="small"
                                 color="blue-gray" >
                                    {employee.name}
                                </Typography>
                            </td>

                            <td className="p-4">
                                <Typography variant="small"
                                 color="blue-gray" >
                                    {employee.email}
                                </Typography>
                            </td>

                            <td className="p-4">
                                <Typography variant="small"
                                 color="blue-gray" >
                                    {employee.job}
                                </Typography>
                            </td>

                            <td className="p-4">
                                <Typography variant="small"
                                 color="blue-gray">
                                    {employee.employed}
                                </Typography>
                            </td>

                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <IconButton 
                                    onClick={() => nav(`/update-employee/${employee.id}`)}
                                    variant="small"
                                    className="text-white bg-green-500 hover:bg-green-700">
                                        <i className="fas fa-edit"/>
                                    </IconButton>

                                    <IconButton
                                    onClick={()=> dispatch(removeEmployee(i))}
                                     variant="small"
                                    className="text-white bg-pink-500 hover:bg-pink-700">
                                        <i className="fas fa-trash"/>
                                    </IconButton>
                                </div>
                            </td>

                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
      </Card>
    </div>
  )
}
