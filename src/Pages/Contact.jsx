import React from 'react'

const Contact = () => {
  return (
    <div>
        <form action="https://formspree.io/f/xqkoakbd" method='POST'>
            <input type="text" placeholder='username' 
            name='username'
            required
            autoComplete='off'/>

            <input type="email" required
            placeholder='email'
            autoComplete='off'
            name='email'/>

            <textarea name="message" placeholder='enter your message' id="" cols="30" rows="10"></textarea>
           <input type="submit" value="send " />
        </form>
    </div>
  )
}

export default Contact