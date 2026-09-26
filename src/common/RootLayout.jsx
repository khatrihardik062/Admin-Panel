import React, { useContext, useEffect, useState } from 'react'

import { Outlet, useNavigate } from 'react-router'
import Header from './Header'
import { MainContext } from '../Context/Context';


export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { isLogin } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === 1) {
    } else {
      navigate("/");
    }
  }, [isLogin, navigate]);


  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className={isSidebarOpen ? 'md:ml-72 md:mr-10' : ''}>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  )
}