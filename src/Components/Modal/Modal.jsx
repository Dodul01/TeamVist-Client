import { useState } from 'react'

const Modal = ({ setShowModal, userData }) => {
    const { name, email, bankAccount, user_image, salary } = userData;
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [paymentConfirm, setPaymentConfirm] = useState(false);


    const handleSelectMonth = (e) => {
        const month = e.target.value;
        setSelectedMonth(month === 'null' ? null : month);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'year') {
            setSelectedYear(value);
        }
    }

    const handlePaymentConfirm = () => {

        const paymentData = { paymentTime: `${selectedMonth}-${selectedYear}`, email, bankAccount, salary, name };

        fetch('https://team-vista-server.vercel.app/paymentInfo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(paymentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPaymentConfirm(true);
                }
            })
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-gray-800 px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Pay Now</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-white hover:text-gray-300 transition"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        {!paymentConfirm &&
                            <>

                                <div className='flex gap-2'>
                                    <img className='h-[100px] w-[100px] object-cover' src={user_image} alt="" />
                                    <div>
                                        <h1 className="text-lg font-semibold">Name: {name}</h1>
                                        <h3 className="text-base font-semibold">Email: {email}</h3>
                                        <h3 className="text-base font-semibold">Salary: {salary}</h3>
                                        <h3 className="text-base font-semibold">Bank Account: {bankAccount}</h3>
                                    </div>
                                </div>
                                <div className="flex gap-2" >
                                    <select className='h-10 border rounded-lg p-1 outline-none my-1' onChange={handleSelectMonth} value={selectedMonth}>
                                        <option value="null">Filter By Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <input name="year" className='h-10 border rounded-lg p-1 outline-none my-1' type="number" placeholder="Year" onChange={handleInputChange} value={selectedYear} />
                                </div>

                            </>


                        }

                        {paymentConfirm &&
                            <div className="min-h-[100px] flex items-center justify-center">
                                <h1 className="text-xl font-bold text-center">Payment Sucessful</h1>
                            </div>
                        }

                        <div className="mt-6 flex justify-center">

                            {!paymentConfirm &&
                                <button
                                    onClick={handlePaymentConfirm}
                                    className="bg-[#051d2a] text-white px-4 py-2 rounded-md transition duration-300"
                                >
                                    Pay Now
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal