import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { MainContext } from '../Context/Context';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css"

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { defaultEmail, defaultPassword, setIsLogin } = useContext(MainContext);
  const navigate = useNavigate()
  const handelSignIn = (e) => {
    e.preventDefault()

    if (email == defaultEmail && password == defaultPassword) {
      iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'Login',
        message: 'Are you sure about email and password?',
        position: 'center',
        buttons: [
          ['<button><b>YES</b></button>', function (instance, toast) {
            iziToast.success({
              title: 'OK',
              message: 'Successfully Logged in',
            });

            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

          }, true],

          ['<button>NO</button>', function (instance, toast) {
            navigate('/')

            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');

          }],
        ],
        onClosing: function (instance, toast, closedBy) {
          console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function (instance, toast, closedBy) {
          console.info('Closed | closedBy: ' + closedBy);
        }
      });
      localStorage.setItem("isLogin", "1");
      setIsLogin(1)
      navigate("/dashbord")
    }

    else {
      alert("invalid cridential")
    }
  }
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">

          {/* <!-- Logo --> */}
          <a
            href="#"
            class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="mr-2 h-8 w-8"
              src="/images/ChatGPT Image Sep 22, 2026 at 11_29_35 AM.png"
              alt="logo"
            />
            PanelX
          </a>

          {/* <!-- Login Card --> */}
          <div
            class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0
             dark:border dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">

              <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900
                 md:text-2xl dark:text-white"
              >
                Sign in to your account
              </h1>

              <form class="space-y-4 md:space-y-6" action="#">

                {/* <!-- Email --> */}
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>

                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    required
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5
                     text-gray-900
                     focus:border-blue-600 focus:ring-blue-600
                     dark:border-gray-600 dark:bg-gray-700
                     dark:text-white dark:placeholder-gray-400
                     dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                {/* <!-- Password --> */}
                <div>
                  <label
                    for="password"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>

                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5
                     text-gray-900
                     focus:border-blue-600 focus:ring-blue-600
                     dark:border-gray-600 dark:bg-gray-700
                     dark:text-white dark:placeholder-gray-400
                     dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>

                {/* <!-- Remember + Forgot --> */}
                <div class="flex items-center justify-between">

                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        class="h-4 w-4 rounded border border-gray-300
                         bg-gray-50
                         focus:ring-3 focus:ring-blue-300
                         dark:border-gray-600 dark:bg-gray-700
                         dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                    </div>

                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <a
                    href="#"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* <!-- Button --> */}

                <button
                  type='submit'

                  onClick={handelSignIn}
                  class="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center
                   text-sm font-medium text-white
                   hover:bg-blue-700
                   focus:outline-none focus:ring-4 focus:ring-blue-300
                   dark:bg-blue-600 dark:hover:bg-blue-700
                   dark:focus:ring-blue-800"
                >
                  Sign in
                </button>


              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
