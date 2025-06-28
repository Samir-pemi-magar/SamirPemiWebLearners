import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signin() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/");

    };

    return (
        <div className="flex flex-col justify-center h-screen items-center bg-indigo-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg h-fit w-1/4 p-5 rounded-md flex flex-col gap-7 items-center"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mt-5">Sign-Up</h1>
                    <h4 className="mt-4 font-regular text-center">
                        Welcome, Fill all the forms to create your account.
                    </h4>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="username" className="font-semibold">
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="w-full p-3 bg-white border outline-none rounded-md"
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <span className="text-red-600 text-sm">Username is required</span>
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="font-semibold">
                        Email Address:
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-3 bg-white border outline-none rounded-md"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-red-600 text-sm">Email is required</span>
                    )}
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="password" className="font-semibold">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 bg-white border outline-none rounded-md"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span className="text-red-600 text-sm">Password is required</span>
                    )}
                    <p className="mt-2">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-900 hover:underline">
                            Log-in
                        </Link>
                    </p>
                </div>

                <div className="flex justify-center w-full mb-5">
                    <button
                        type="submit"
                        className="bg-amber-300 w-1/3 p-2 rounded-md cursor-pointer hover:bg-amber-400 duration-300 ease-in-out transition"
                    >
                        Sign-In
                    </button>
                </div>
            </form>
        </div>
    );
}
