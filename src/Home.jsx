import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './component/Login'
import Dashboed from './component/Dashboed'
import RootLayout from './common/RootLayout'
import ContextProvider from './Context/Context'
import Add from './component/Testimonial/AddTestimonial'
import View from './component/Testimonial/ViewTestimonial'

export default function Home() {
    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        {/* baki ke routes */}
                    </Routes>

                    <Routes>
                        <Route element={<RootLayout />}>
                            <Route path="/dashbord" element={<Dashboed />} />
                            <Route path='/addtestimonial' element={<Add/>}/>
                            <Route path='/viewtestimonial' element={<View/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        </>
    )
}
