import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return (

    <>
        <section className='bg-[#ff9ea]'>
    <div className="container text-center">

      <h2 className='heading'> Find A doctor</h2>

      
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between' >

        <input type="search" className="py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder='Search Doctor' />

        <button className="btn mt-0 rounded-[0px] rounder-r-md">
Search

        </button>
      </div>
      {/* {doctors.map((index,doctor ) =>  <DoctorCard key={index}   doctor={doctor}/>)} */}

       
    </div>
</section>

<section>
  <div className="container">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-5]">
        {doctors.map((doctor, index) => (
            <DoctorCard doctor={doctor} index={index} key={index} />
        ))}
    </div>
  </div>
</section>
<section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> What our patient say</h2>
            <p className="text__para text-center">
              {" "}
              World-class care for everyone. our health System offers unmatched,
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    
    
    </>

  )
}

export default Doctors