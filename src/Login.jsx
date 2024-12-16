import React from "react";

const Login = () => {
  return (
    <div className="border-2 rounded-[10px] w-[400px] h-[400px] p-5 bg-white shadow-2xl ">
      <h1 className="text-2xl text-left py-2 font-bold">
        Sign In to your account
      </h1>
      <h1 className="block mb-2 mt-3 text-left font-medium text-gray-900 dark:text-white ">
        Your Email
      </h1>
      <input
        type="email"
        placeholder="Ex. 0aDpN@example.com"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <h1 className="block mb-2 mt-3 text-left font-medium text-gray-900 dark:text-white ">
        Password
      </h1>
      <input
        type="email"
        placeholder="Ex. Wheo@jv$3265"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="flex items-start justify-between">
        <div class="flex items-center h-5 ">
          <input
            type="checkbox"
            className="mt-4 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
          />
          <div class="mt-3 ml-3 text-sm">
            <label for="remember" className="text-gray-500 dark:text-gray-300 font-medium">
              Remember me
            </label>
          </div>
        </div>

        <a href="#" className="mt-1.5 text-sm text-blue-600 font-bold">Forgot Password?</a>
          
        
      </div>
      <button type="submit" className="mt-5 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign in</button>
      <p className="mt-2 text-left" >Not a member? <a href="#" className=" text-blue-600 font-bold">Sign Up</a></p>
    </div>
  );
};

export default Login;
