import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export const Contact = () => {
  const errors = useActionData()
  return (
    <div className="contact">
        <h2>İltişim</h2>
        <Form method='post' action='/help/contact'>
          <div>
            <label htmlFor="email">Email</label>
            <input name='email' type="text" />
            {errors?.email && <p className='error'>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea  name="message"></textarea>
            {errors?.message && <p className='error'>{errors.message}</p>}
            
          </div>
        
            <button>Submit</button>
        </Form>
    </div>
  )
}

export const contactAction = async({request}) => {
  const res = await request.formData()
  const email= res.get("email")
  const message= res.get("message")
  const errors = {}

  if(typeof email !== "string" || !email.includes("@")){
    errors.email = "Email'i dogru bir formatta giriniz!"
  }

  if(typeof message !== "string" || message.length<10){
    errors.message = "Mesaj için en az 10 karakter girmelisiniz!"
  }

  if(Object.keys(errors).length){
    return errors
  }


  return redirect("/")
}