import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-6 shadow-lg'>
        <Image src={"/developsToday.png"} alt='Develops Today' width={64} height={64} />
        <h6 className='text-lg font-bold tracking-wider uppercase'>Car Dealer</h6>
    </div>
  )
}

export default Header