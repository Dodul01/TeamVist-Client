import { useForm } from "react-hook-form"
import { CiWarning } from "react-icons/ci";
import useAppContext from "../../hooks/useAppContext";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const WorkSheet = () => {
    const { user } = useAppContext();
    const [tasks, setTasks] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const task = {
            task: data.task,
            hoursWorked: data.hoursWorked,
            date: data.date,
            userEmail: user?.email,
            useName: user?.displayName
        }

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Data added sucessfully.')
                    fetch(`http://localhost:5000/getTask?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => setTasks(data))

                }
            })
        // TODO : store data on data base



        reset()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/getTask?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    return (
        <div className='p-2'>
            <h1 className='text-center font-semibold text-xl my-5'>Work Sheet</h1>
            <h2 className='text-lg font-semibold'>Add Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
                <div>
                    <label className="text-md font-semibold">Task</label><br />
                    <select {...register("task", { required: true })} className="p-2 rounded-lg border border-[#051d2a]">
                        <option value="null">Select Your Work</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="content">Content</option>
                        <option value="paperWork">Paper work</option>
                    </select>
                    {errors.task && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Task name required.</p>}
                </div>

                <div>
                    <label className="text-md font-semibold">Hours Worked</label><br />
                    <input {...register("hoursWorked", { required: true })} className='p-2 rounded-lg border border-[#051d2a]' type="number" placeholder='Hours Worked' />
                    {errors.hoursWorked && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Worked Hours Required.</p>}
                </div>

                <div>
                    <label className="text-md font-semibold">Date</label><br />
                    <input {...register("date", { required: true })} className='p-2 rounded-lg border border-[#051d2a]' type="date" />
                    {errors.date && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" />Date required.</p>}
                </div>

                <button className='bg-[#051d2a] h-[44px] w-[100px] text-white mt-6 rounded-lg' type='submit' >Add task</button>
            </form>

            <div className='mt-4'>
                <h2 className='text-lg font-semibold'>Complited Task</h2>
                <div>
                    <table className='w-full mt-2'>
                        <tr>
                            <th className='text-start border p-2'>Task</th>
                            <th className='text-start border p-2'>Hours Worked</th>
                            <th className='text-start border p-2'>Date</th>
                        </tr>
                        {
                            tasks.map((work)=> <tr>
                                <td>{work.task}</td>
                                <td>{work.hoursWorked}</td>
                                <td>{work.date}</td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default WorkSheet