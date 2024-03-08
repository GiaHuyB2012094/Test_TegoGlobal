import React from 'react'

const Mail = () => {
  return (
    <div className="h-[363px] px-[120px] py-[55px] flex flex-col gap-12 bg-sub-blue-2 items-center">
        <div className="flex flex-col items-center gap-2">
            <p className="text-[32px] text-primary-black capitalize font-bold">Join Our Mailing List</p>
    
            <p className="w-[514px] text-xl text-sub-black-2 text-center">Sign up to receive inspiration, product updates, and special offers from our team.</p>
        </div>

        <div className='w-[486px] relative h-[70] flex'>
            <input 
                type='text'
                placeholder='example@gmail.com'
                className='h-[70px] w-full px-7 focus:outline-none border border-solid border-primary rounded-md'
            />
            <button
                className='absolute right-0 capitalize px-12 font-bold text-white h-[70px] flex items-center justify-center bg-primary border border-solid border-primary rounded-sm'
            >
                submit
            </button>
        </div>
    </div>
  )
}

export default Mail
