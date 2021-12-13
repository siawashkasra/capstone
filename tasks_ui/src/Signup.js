/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() && validatePassword()) {
      const user = {
        firstName,
        lastName,
        email,
        password,
        avatar,
      };
      handleCreate(user);
    }
  };

  const validateForm = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confPassword.length > 0 &&
      avatar
    );
  };

  const validatePassword = () => {
    return password === confPassword;
  };

  const handleCreate = async (newUser) => {
    const user = {
      username: newUser.email,
      email: newUser.email,
      password: newUser.password,
      is_superuser: true,
    };
    const res = await axios.post("http://localhost:8000/api/users/", user, {
      // headers: { Authorization: `Token ${token}` }
    });
    if (res.status === 201) {
      const member = await axios.post(
        "http://localhost:8000/api/members/",
        {
          avatar: newUser.avatar,
          first_name: newUser.firstName,
          last_name: newUser.lastName,
          email: newUser.email,
          user: res.data["id"],
        },
        {}
      );

      if (member.status === 201) {
        history.push("/login");
      }
      if (member.status === 400) {
        setError("Something went wrong, please try again!");
      }
    }
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <nav
        className="p-12 relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink to="/landing" href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              />
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <NavLink
            to="/login"
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            aria-current="page"
          >
            Log in
          </NavLink>
        </div>
      </nav>
      <div className="min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm leading-5 text-gray-600">
              {error}
            </p>
          </div>
          <div className="bg-white px-4  sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Avatar URL
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <div className="flex text-sm p-2 text-gray-600 justify-center">
                          <label
                            htmlFor="avatar"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                          >
                            <input
                              type="text"
                              name="avatar"
                              id="avatar"
                              required
                              autoComplete="given-name"
                              value={avatar}
                              onChange={(e) => setAvatar(e.target.value)}
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between py-5">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-lg font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          required
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-lg font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          required
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 py-3">
                      <label
                        htmlFor="email-address"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 py-3">
                      <label
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2 py-3">
                      <label
                        htmlFor="confirm-password"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        required
                        autoComplete="confrim-password"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="text-sm">
                    <NavLink
                      to="/login"
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Already have an account? Sign in
                    </NavLink>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
