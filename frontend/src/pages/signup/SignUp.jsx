import React from 'react'
import { GenderCheckbox } from './GenderCheckbox'

export default function() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100 bg-opacity-0 '>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup <span className='text-blue-500'> ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
                </div>

               
                <GenderCheckbox />

                <a href="#" className='text-sm hover:text-blue-600 hover:underline mt-2 inline-block'>
                    Already have an account?
                </a>

                <div>
                    <button className='btn btn-block bit-sm mt-2 border border-slate-700'>Sing Up</button>
                </div>
            </form>
        </div>

    </div>
  )
}
