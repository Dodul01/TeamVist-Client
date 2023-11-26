import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import useAppContext from "../../hooks/useAppContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const image_hoisting_key = "8aa448c2476ccf0f8d747d7c7bb441d0";
const image_hoisting_api = "https://api.imgbb.com/1/upload";

const SignUp = () => {
  const { signUpUser, updateUserProfile } = useAppContext();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {

    const imageFile = { image: data.user_image[0] }

    const res = await axios.post('https://api.imgbb.com/1/upload?key=8aa448c2476ccf0f8d747d7c7bb441d0', imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })

    const profileImage = res?.data?.data?.display_url;

    signUpUser(data.email, data.password)
      .then((user) => {
          updateUserProfile(data.name, profileImage)
            .then(()=>{
              console.log(user);
              toast.success('User created sucessfully')
            })
            .catch((error)=>{
              console.log(error);
            })
      })
      .catch((error) => {
        toast.error('can not sign up')
        console.log(error);
      })

    navigate('/dashbord');
    reset();
  }

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center max-w-[1660px] h-screen gap-4 mx-auto text-[#051d2a]">
      <div className="lg:flex-1 mx-5">
        <h1 className="lg:text-3xl text-xl font-bold mb-4">Sign Up Now <br /> Manage Your Employee Easily</h1>
        <p className="text-lg text-gray-500 max-w-xl">Embark on a transformative journey with us! Sign up now to unlock a world of empowered workforce management. Experience efficiency, collaboration, and innovation like never before. Join the revolution and elevate your business to new heights. Your journey to success begins with a simple sign up seize the opportunity!</p>
      </div>
      <div className="lg:flex-1 mx-5">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg max-w-lg rounded-xl border">
          <h3 className="text-2xl font-bold text-center">Sign Up</h3>

          <div className="flex flex-col">
            <label className="font-semibold">Name</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("name", { required: true })} type="text" placeholder="Your Name" />
            {errors.name && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> User name required.</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("email", { required: true })} type="email" placeholder="Your Email" />
            {errors.email && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Email required.</p>}
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Salary</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("salary", { required: true })} type="number" placeholder="Insert Your Salary Ammount Here" />
            {errors.salary && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Salary ammount is required.</p>}
          </div>
          
          <div className="flex flex-col">
            <label className="font-semibold">Bank Account Number</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("bankAccount", { required: true })} type="number" placeholder="Insert Your Bank Account Number" />
            {errors.bankAccount && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Bank Account Number is required.</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Upload Photo</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("user_image", { required: true })} type="file" placeholder="Upload Photo" />
          </div>


          <div className="flex flex-col">
            <label className="font-semibold">User Role</label>
            <select {...register("userRole", { required: true })} className="h-10 border rounded-lg p-1 outline-none my-1">
              <option value="null">Select Your Role</option>
              <option value="employee">Employee</option>
              <option value="hr">HR (Human Resources)</option>
            </select>
            {errors.userRole && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Password required.</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("password", { required: true })} type="password" placeholder="Your Password" />
            {errors.password && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Password required.</p>}
          </div>
          <button className="bg-[#051d2a] text-white font-semibold p-2 w-full mt-3 rounded-lg">Sign Up</button>
          <div className="mt-1">
            <p>Already have an account? <Link to='/signIn' className="underline font-semibold cursor-pointer">SignIn</Link></p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default SignUp
