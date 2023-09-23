import React from 'react'

const Contact = () => {
  return (
<section>
  <div className="px-4 mx-auto max-w-screen-md">

    <h2 className="heading text-center">
      Contact Us
    </h2>

    <p className="mb-8 font-light text-center text__param lg:mb-16">
      
        Got a technical issue and want to send feedback about a beta feature let us know
      </p> 

      <form action="" className="space-y-8">
        
        <div>
       <label htmlFor='email' className='form__label'>
        Your Email
       </label>

       <input type="email" id='email' placeholder='example@gmail.com' className="form__input mt-1" />
        </div>

              
        <div>
       <label htmlFor='subject' className='form__label'>
      Subject
       </label>

       <input type="text" id='subject' placeholder='Let us Know how we can help you' className="form__input mt-1" />
        </div>

        <div className='sm:col-span-2'>
       <label htmlFor='subject' className='form__label'>
      Your Message
       </label>

       <textarea rows='6' type="text" id='message' placeholder='Leave a  comment ...' className="form__input mt-1" />

       <button type="submit" className='btn rounded sm:w-fit'> Submit</button>
        </div>
      </form>
       </div>
</section>
  )
}

export default Contact