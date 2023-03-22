import React, {useState} from 'react'

const ContactForm = () => {
      // Create React states for contact form data
      const [fName, setFName] = useState('')
      const [lName, setLName] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')

      // Create a function for updating state data on click
      const updateState = () => {
            setFName(fName)
      }


      // Create a function for validating form submission
      // References React State values and returns a boolean response on whether the form data are valid
      const validateForm = () => {

      }

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
                        <input type='submit' value='Submit' onClick={validateForm}/>
                  </form>
            </div>
      )
}

export default ContactForm