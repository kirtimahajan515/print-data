import React from 'react'
import { ChevronDown, Search, Weight, CirclePercent, User  } from 'lucide-react';

 function Head() {
  return (
    <div className='w-full shadow-md h-24 flex justify-center items-center'>
       <div className='w-[70%] border border-black flex justify-between'>
          <div className='flex items-center'>
              <img 
                    className='w-22' 
                    src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" 
                />

                <div className='flex items-center justify-center gap-1'>
                    <p className='font-bold border-b-2'>other</p>
                    <ChevronDown className='mt-1 text-2xl text-orange-500' />
                </div>
            </div>

        <div className='flex justify-center items-center gap-12 w-[75%] bg-green-500'>
            <div className='flex gap-2'>
            <Weight className='w-5' />
                <p>Swiggy Corporate</p>
            </div>

            <div className='flex gap-2'>
                <Search className='w-4' />
                <p>Search</p>
            </div>

            <div className='flex gap-2'>
                <CirclePercent className='w-5' />
                <p>Offers</p>
            </div>

            <div className='flex gap-2'>
                <p>Help</p>
            </div>

            <div className='flex gap-2'>
                <User className='w-5' />
                <p>Sign in</p>
            </div>

            <div className='flex gap-2'>
                <p>Cart</p>
            </div>
        </div>

       </div>
    </div>
  )
}

export default Head;