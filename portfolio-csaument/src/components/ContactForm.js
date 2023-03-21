import React from 'react'

const ContactForm = () => {
      return (
            <div>
                  <form action='/action_page.php' className='contactForm'>
                        <label for='fname'>First Name:</label>
                        <input type='text'></input>
                        <label for='lname'>Last Name:</label>
                        <input type='text'></input>
                        <label for='email'>email:</label>
                        <input type='email'></input>
                        <label for='message'>Message:</label>
                        <textarea id='messageBox'></textarea>
                        <input type='submit' value='Submit'/>
                  </form>
            </div>
      )
}

export default ContactForm