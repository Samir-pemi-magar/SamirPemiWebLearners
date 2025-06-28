import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/main");

    };

    return (
        <div className="flex flex-col justify-center h-screen items-center bg-indigo-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg h-fit w-1/4 p-5 rounded-md flex flex-col gap-7 items-center"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mt-5">Login</h1>
                    <h4 className="mt-4 font-regular text-center">
                        Welcome back. Fill all the credentials to login to your account
                    </h4>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="username" className="font-semibold">
                        Email Address:
                    </label>
                    <input
                        type="email"
                        placeholder="enter your email address"
                        className="w-full p-3 bg-white border outline-none rounded-md"
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <span className="text-red-600 text-sm">username is required</span>
                    )}
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="font-semibold">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="enter your password"
                        className="w-full p-3 bg-white border outline-none rounded-md"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span className="text-red-600 text-sm">password is required</span>
                    )}
                    <p className="mt-2">
                        Do not have an account?{" "}
                        <Link to="/signup" className="text-blue-900 hover:underline">
                            Sign-up
                        </Link>
                    </p>
                </div>
                <div className="flex justify-center w-full mb-5">
                    <button className="bg-amber-300 w-1/3 p-2 rounded-md cursor-pointer hover:bg-amber-400 duration-300 ease-in-out transition">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
