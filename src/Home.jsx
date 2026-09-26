import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './component/Login'
import Dashboed from './component/Dashboed'
import RootLayout from './common/RootLayout'
import ContextProvider from './Context/Context'
import Add from './component/Testimonial/AddTestimonial'
import View from './component/Testimonial/ViewTestimonial'
import AddChoose from './component/Why-Choose-Us/AddWhyChooseUs'
import ViewChoose from './component/Why-Choose-Us/ViewWhyChooseUs'
import AddMaterial from './component/Material/AddMaterial'
import ViewMaterial from './component/Material/ViewMaterial'
import AddCategory from './component/Category/AddCategory'
import ViewCategory from './component/Category/ViewCategory'
import AddSubCategory from './component/Sub-Category/AddSubCategory'
import ViewSubCategory from './component/Sub-Category/ViewSubCategory'
import AddSubSubCategory from './component/Sub-Sub-Category/AddSubSubCategory'
import ViewSubSubCategory from './component/Sub-Sub-Category/ViewSubSubCategory'
import AddProduct from './component/Product/AddProduct'
import ViewProduct from './component/Product/ViewProduct'
import AddColor from './component/Color/AddColor'
import ViewColor from './component/Color/ViewColor'

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
                            <Route path='/addchoose' element={<AddChoose/>}/>
                            <Route path='/viewchoose' element={<ViewChoose/>}/>
                            <Route path='/addmaterial' element={<AddMaterial/>}/>
                            <Route path='/viewmaterial' element={<ViewMaterial/>}/>
                            <Route path='/addcategory' element={<AddCategory/>}/>
                            <Route path='/viewcategory' element={<ViewCategory/>}/>
                            <Route path='/addsubcategory' element={<AddSubCategory/>}/>
                            <Route path='/viewsubcategory' element={<ViewSubCategory/>}/>
                            <Route path='/addsubsubcategory' element={<AddSubSubCategory/>}/>
                            <Route path='/viewsubsubcategory' element={<ViewSubSubCategory/>}/>
                            <Route path='/addproduct' element={<AddProduct/>}/>
                            <Route path='/viewproduct' element={<ViewProduct/>}/>
                            <Route path='/addcolor' element={<AddColor/>}/>
                            <Route path='/viewcolor' element={<ViewColor/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        </>
    )
}
