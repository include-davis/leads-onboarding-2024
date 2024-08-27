import styles from '@/app/(pages)/_styles/components/contact.module.scss';
import Spinner from '@/app/(pages)/_components/contactForm/spinner'
import { useRef, useState } from 'react';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const send = async (formData) => {
    try {
      // This sends a request
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }

    formRef.current.reset()
    setIsLoading(false);
  };

  return (

    <form ref={formRef} className={styles.form} action={send} onSubmit={() => setIsLoading(true)}>
      <h1 className={styles.spinner}>
        Contact Form
        {isLoading && <Spinner />}
      </h1> 

      <div className={styles.input}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder='John'/>
      </div>

      <div className={styles.input}>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder='Fiddleton'/>
      </div>

      <div className={styles.input}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" placeholder='example@email.com'/>
      </div>

      <div className={styles.question}>
        <label htmlFor="question">Question:</label>
        <textarea id="question" name="question" rows={5} placeholder='Type your question here...'></textarea>
      </div>

      <button type="submit" className={styles.button}>Submit</button>
    </form>

  );
}