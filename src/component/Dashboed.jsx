import React from 'react'
import { Helmet } from 'react-helmet'

export default function Dashboed() {
  return (
    <>
     <div >
            <Helmet>
                
                <title>My Dashboard</title>
            </Helmet>
            
        </div>
      <div className='md:mt-6 md:ml-10 md:mr-10'>
        <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome to your admin panel overview.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Projects</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">12</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Tasks</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">28</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Team Members</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">8</p>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}
