import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';

const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const validateEmail = (email) => {
    const regex =
      /^[\w]+(\.[\w-]+)?@[\w]+(\.[\w]+)*\.[\w]+$/;
    return regex.test(email);
  };

  const sendForm = (e) => {
    e.preventDefault();

    const inputEmail = form.current.email.value;
    if (!validateEmail(inputEmail)) {
      setIsError(true);
      setError('Please enter a valid email address');
      return;
    }

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        setIsSuccess(true);
        setSuccess(result.text);
      },
      (error) => {
        setIsError(true);
        setError(error.text);
      }
    );
  };
  return (
    <section className='pages' id='contact'>
      <h1>Contact</h1>
      <p>
        I'm always interested in hearing about new projects, so if you'd like to
        have a chat, please don't hesitate to get in touch.
      </p>
      <div className='contact-form'>
        <form ref={form} onSubmit={sendForm}>
          {isSuccess && <p>{success}</p>}
          {isError && <p>{error}</p>}
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' placeholder='Message' required></textarea>
          <input type='submit' value='SEND' />
        </form>
      </div>
    </section>
  );
};
export default Contact;
