import './contact.scss'

const Contact = () => {
  return (
    <section className='pages' id='contact'>
      <h1>Contact</h1>
      <p>
        I'm always interested in hearing about new projects, so if you'd like to have a
        chat,  please don't hesitate to get in touch.
      </p>
      <div className='contact-form'>
        <form>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <input type='text' name='Subject' placeholder='Subject' required />
          <textarea name='message' placeholder='Message' required></textarea>
          <input type='submit' className='flat-button' value='SEND' />
        </form>
      </div>
    </section>
  );
}
export default Contact