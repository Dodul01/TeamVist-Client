import React, { useEffect, useState } from 'react'
import useAppContext from '../../hooks/useAppContext'

const PaymentHistory = () => {
  const [paymentInfo, setPaymentInfo] = useState();
  const { user } = useAppContext();
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    fetch(`http://localhost:5000/paymentInfo?email=${user?.email}`)
      .then((res) => res.json())
      .then(data => setPaymentInfo(data))
  }, [paymentInfo, user])

  return (
    <div className='p-4'>
      <h1 className='text-xl my-5 font-bold text-center'>Your Payment History</h1>
      <table className='w-full border'>
        <tr>
          <th className='border text-start p-2'>Month</th>
          <th className='border text-start p-2'>Ammount</th>
          <th className='border text-start p-2'>Transaction Id</th>
        </tr>

        {paymentInfo?.map((data) => {
          return <tr >
            <td className='border'>{data.paymentTime.split('-')[0]}</td>
            <td className='border'>${data.salary}</td>
            <td className='border'>{data._id}</td>
          </tr>
        })}

        {/* <tr>
          <td>Emil</td>
          <td>Tobias</td>
          <td>Linus</td>
        </tr> */}

      </table>
    </div >
  )
}

export default PaymentHistory