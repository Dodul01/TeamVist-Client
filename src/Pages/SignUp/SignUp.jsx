import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { CiWarning } from "react-icons/ci";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <input className="h-10 border rounded-lg p-1 outline-none my-1" {...register("email", { required: true })} type="email" placeholder="Your Name" />
            {errors.email && <p className="text-red-500 my-1 flex items-center"><CiWarning className="text-xl" /> Email required.</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Upload Photo</label>
            <input className="h-10 border rounded-lg p-1 outline-none my-1" type="file" placeholder="Upload Photo" />
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
    </div>
  )
}

export default SignUp
