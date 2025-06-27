import { Link } from "react-router-dom";
export default function Signin() {
    return (
        <div className="flex flex-col justify-center h-screen items-center bg-indigo-50 ">
            <form className="bg-white shadow-lg h-fit w-1/4 p-5 rounded-md flex flex-col gap-7 items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mt-5">Sign-Up</h1>
                    <h4 className="mt-4 font-regular">Welcome, Fill all the forms to create your account.</h4>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="font-semibold">Email Address: </label>
                    <input type="email" placeholder="enter your email address" className="w-full p-3 bg-white border outline-none rounded-md" />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="font-semibold">Password: </label>
                    <input type="password" placeholder="enter your password" className="w-full p-3 bg-white border outline-none rounded-md" />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="font-semibold">Confirm Password: </label>
                    <input type="password" placeholder="Confirm your password" className="w-full p-3 bg-white border outline-none rounded-md" />
                    <p className="mt-2">Alredy have an account? <Link to="/login" className="text-blue-900 hover:underline">Log-in</Link></p>
                </div>
                <div className="flex justify-center w-full mb-5">
                    <button className="bg-amber-300 w-1/3 p-2 rounded-md cursor-pointer hover:bg-amber-400 duration-10">Sign-in</button>
                </div>

            </form >
        </div >

    );
}