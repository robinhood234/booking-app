import React from 'react'

const LargeFooter = () => {
  return (
    <div className="bg-gray-900 text-white p-8 text-center ">
      <div className='flex flex-col gap-3 md:flex-row justify-between'>
        <div className='flex flex-col w-[300px] gap-3 items-center items-start'>
          <div className='flex gap-2'>
          <img src="/star-fall-svgrepo-com.svg" alt="" className='w-10 h-10'/>
          <h1 className='font-dancing text-3xl'>Star nights Magadi</h1>
          </div>

          <span className='text-left text-gray-300/70'>Star nights Magadi is the epitome of slow travel with the highlight of the cabin, is its star gazing bed, draped in sheer white curtains offering an unfiltered view of the vast African night sky.</span>
        </div>

        <div className='flex flex-col gap-4 items-start w-[300px] justify-start '> 
          <h2 className='text-3xl font-raleway '>Services</h2>
          <ul className='list-disc list-inside space-y-4 text-gray-300/80'>
            <li>Room Service</li>
            <li>Room Service</li>
            <li>Room Service</li>
            <li>Room Service</li>
            <li>Room Service</li>
            <li>Room Service</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 items-start w-[300px] justify-start '> 
          <h2 className='text-3xl font-raleway '>Contact Us</h2>
          <ul className='list-inside space-y-4 text-left text-gray-300/80'>
            <li>
              <h2>Phone Number</h2>
              <span>+254 769 13 90 60</span>
            </li>
            <li>
              <h2>Email</h2>
              <span>stay@star-nights-magadi.com</span>
            </li>
             <li>
              <h2>Location</h2>
              <span>Kwenia, Kilonito, Kajiado West</span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>

  )
}

export default LargeFooter