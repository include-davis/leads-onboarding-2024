'use client'
// import { onSubmit } from '@/app/(api)/api/submit'
import styles from '@/app/(pages)/_styles/pages/day3/home.module.scss';
import ContactForm from '@/app/(pages)/_components/contactForm/contact'

export default function Contact() {

  return(
    <div className={styles.container}>
      <ContactForm />
    </div>
  )
}