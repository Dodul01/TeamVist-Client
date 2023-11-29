import React, { useEffect, useState } from 'react'
import useAppContext from '../../hooks/useAppContext'

const Progress = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // const currentMonth = new Date().getMonth() + 1;


  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedUser(selectedValue === 'null' ? null : selectedValue);
  };

  const handleSelectMonth = (e) => {
    const month = e.target.value;
    setSelectedMonth(month === 'null' ? null : month);
    console.log(selectedMonth);
  }

  useEffect(() => {
    fetch('http://localhost:5000/getTask')
      .then(res => res.json())
      .then(data => setTasks(data))

    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className='p-2'>
      <div className='flex items-center justify-between my-2 mb-4'>
        <h1 className='text-2xl font-bold'>All Complited task (progress)</h1>
        <h1 className='text-2xl font-bold'>Total : {tasks.length}</h1>
      </div>

      <div className='flex items-center gap-2 my-4'>
        <h1 className='text-xl font-smibold'>Filter tasks</h1>

        <select className='h-10 border rounded-lg p-1 outline-none my-1' onChange={handleSelectChange} value={selectedUser || 'null'}>
          <option value='null'>Filter By Name</option>
          {
            users.map(user => {
              if (user.userRole == 'hr') {
                return null;
              }
              if (user.userRole == 'admin') {
                return null;
              }

              return <option key={user._id} value={`${user.name}`}>{user.name}</option>
            })

          }
        </select>

        <select className='h-10 border rounded-lg p-1 outline-none my-1' onChange={handleSelectMonth} value={selectedMonth}>
          <option value="null">Filter By Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <table className='w-[98%] border mt-2'>
        <thead>
          <tr>
            <th className='text-start border'>Employee Name</th>
            <th className='text-start border'>Task</th>
            <th className='text-start border'>Email</th>
            <th className='text-start border'>Submitted Date</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((work) => {
            if ((selectedUser === null || work.useName === selectedUser) && (selectedMonth === null || work.date.slice(5, 7) === selectedMonth)) {
              return <tr key={work._id}>
                <td className='border p-2'>{work.useName}</td>
                <td className='border p-2'>{work.task}</td>
                <td className='border p-2'>{work.userEmail}</td>
                <td className='border p-2'>{work.date}</td>
              </tr>
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Progress