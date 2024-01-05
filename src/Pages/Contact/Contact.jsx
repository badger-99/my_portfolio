import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaMedium } from 'react-icons/fa6';
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
    const regex = /^[\w]+(\.[\w-]+)?@[\w]+(\.[\w]+)*\.[\w]+$/;
    return regex.test(email);
  };

  const sendForm = (e) => {
    e.preventDefault();

    // const inputEmail = form.current.email.value;
    if (!validateEmail(form.current.email.value)) {
      setIsError(true);
      setError('Please enter a valid email address');
      return;
    }

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        if (result) {
          setIsSuccess(true);
          setSuccess('Message sent, thank you for reaching out!');
          form.current.reset();
        }
      },
      (error) => {
        if (error) {
          setIsError(true);
          setError('Oops, something went wrong.');
        }
      }
    );
  };

  const resetStates = () => {
    setError(null);
    setIsError(false);
    setSuccess(null);
    setIsSuccess(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      resetStates();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isError, isSuccess]);

  return (
    <section className='pages' id='contact'>
      <h1>Contact Me</h1>
      <p>
        I'm always interested in hearing about new projects, so if you'd like to
        have a chat, please don't hesitate to get in touch. Shoot me a message,
        or reach out to me on my socials.
      </p>
      <div className='contact-form'>
        {isSuccess && (
          <p className='form-feedback' id='success'>
            {success}
          </p>
        )}
        {isError && (
          <p className='form-feedback' id='error'>
            {error}
          </p>
        )}
        <form ref={form} onSubmit={sendForm}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            id='name'
            className='cool-border'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            id='email'
            className='cool-border'
            required
          />
          <textarea
            name='message'
            placeholder='Message'
            id='message'
            className='cool-border'
            required
          ></textarea>
          <input type='submit' value='SEND' id='send' />
        </form>
      </div>

      <div id='social-links'>
        <a
          target='_blank'
          rel='noreferer'
          href='https://linkedin.com/in/alfredmkg'
        >
          <FaLinkedinIn />
        </a>

        <a target='_blank' rel='noreferer' href='https://github.com/badger-99'>
          <FaGithub />
        </a>

        <a target='_blank' rel='noreferer' href='https://twitter.com/AlfredMkg'>
          <FaXTwitter />
        </a>

        <a
          target='_blank'
          rel='noreferer'
          href='https://medium.com/@alfred.mkg'
        >
          <FaMedium />
        </a>
      </div>
    </section>
  );
};
export default Contact;
