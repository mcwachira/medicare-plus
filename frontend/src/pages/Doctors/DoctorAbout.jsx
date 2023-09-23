import React from 'react'
import { formatDate } from '../../../utils/formatDate'

const DoctorAbout = () => {
  return (
<div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>

            About 

            <span className='text-irisBlueColor font-bold text[24px] leading-9'>

                mcwachira
            </span>
        </h3>

        <p className="text_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A vero placeat saepe consequatur accusamus doloremque, sapiente ipsam alias dolore laborum quos libero blanditiis illo magnam assumenda quia. Nemo, veritatis voluptate.
        </p>
    </div>

    <div className="mt-12">

        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h3>

        <ul className="pt-4 md:pt-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]" >
            
            <div>
            <span className='text-irisBlueColor font-bold text[15px] leading-6'>
             {formatDate("07-04-2014")} -     {formatDate("09-11-2018")} 

                </span>
                <p className='font-medium leading-6 text-textColor'>

Phd In Surgery
                </p>
            </div>

            <p className='font-medium leading-6 text-textColor'>
            New Apollo Hospital New york

                </p>
            </li>
        </ul>
    </div>

    <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor">
            Experience         
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:pt-5">
            <li className="p-4 bg-[#ff9ea]">

<span className="text-yellowColor text-[15px] leading-6 font-semibold">

{formatDate("07-04-2018")} -     {formatDate("09-11-2022")} 
    </span>
    
    <p className='text-[16px]  font-medium leading-6 text-textColor'>
Sr surgeon
                </p>
           

            <p className='text-[14px] leading-5 font-medium  text-textColor'>
            New Apollo Hospital New york
            </p>


            </li>
        </ul>
    </div>
</div>
  )
}

export default DoctorAbout