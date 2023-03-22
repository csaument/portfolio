import React, {useState} from 'react'
import emailjs from '@emailjs/browser'

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
      const handleSubmit = (e) => {
            // Prevent the browser from reloading the page
            e.preventDefault();

            // Check that a valid email is provided
            if(!validateEmail(email)) {
                  alert('Please provide a valid email.')
            // Check that all form data have been provided
            } else if('' === fName || '' === lName || '' === message) {
                  alert('Please complete all items.')
            // Send email through EmailJS
            } else {
                  alert('Thank you for your submission!')
                  emailjs.send('service_6wfgdhb', 
                        'template_8k8y08w',
                        {from_fname: fName, from_lname: lName, message: message, from_email: email},
                        'zX53VxOInIN5CXQMF');
            }
      }

      // Create a function to validate emails
      // Returns true if valid or false if not
      const validateEmail = (input) => {
            // Create a RegExp of valid characters
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            // Run through logic to check
            if (!input.includes('@')) {
                  return false;
            } else if (input.match(validRegex)){
                  return true;
            } else {
                  return false;
            }
      }

      return (
            <div>
                  <form action='/action_page.php' className='contactForm'>
                        <label>First Name:
                              <input
                              value={fName}
                              onChange={e => setFName(e.target.value)}/></label>
                        <label>Last Name:
                        <input
                              value={lName}
                              onChange={e => setLName(e.target.value)}/></label>
                        <label>email:
                        <input
                              value={email}
                              onChange={e => setEmail(e.target.value)}/></label>
                        <label>Message:
                              <textarea
                              id='messageBox'
                              defaultValue="Please enter a message here!"
                              onChange={e => setMessage(e.target.value)}
                              rows={4}
                              cols={40}/></label>
                        <button type='submit' onClick={handleSubmit}>Submit!</button>
                  </form>
            </div>
      )
}

export default ContactForm