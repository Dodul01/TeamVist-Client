import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

// const data = [
//     {
//         "name": "Page A",
//         "uv": 4000,
//         "pv": 2400
//     },
//     {
//         "name": "Page B",
//         "uv": 3000,
//         "pv": 1398
//     },
//     {
//         "name": "Page C",
//         "uv": 2000,
//         "pv": 9800
//     },
//     {
//         "name": "Page D",
//         "uv": 2780,
//         "pv": 3908
//     },
//     {
//         "name": "Page E",
//         "uv": 1890,
//         "pv": 4800
//     },
//     {
//         "name": "Page F",
//         "uv": 2390,
//         "pv": 3800
//     },
//     {
//         "name": "Page G",
//         "uv": 3490,
//         "pv": 4300
//     }
// ]


const Charts = ({email}) => {
    const [employeeSalary, setEmployeeSalary] = useState([]);

    useEffect(()=>{
        fetch(`https://team-vista-server.vercel.app/paymentInfo?email=${email}`)
        .then((res)=> res.json())
        .then(data => setEmployeeSalary(data))
    },[employeeSalary])

    return (
        <div>
            <h2 className="text-xl font-bold m-3">Salary Charts</h2>
            

            <BarChart width={730} height={250} data={employeeSalary}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="paymentTime" />
                <YAxis dataKey="salary"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default Charts