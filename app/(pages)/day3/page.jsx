"use client";
import { useState, useRef} from 'react';
import styles from "../_styles/day3/page.module.scss";


export default function Day3() {
    const [pending, setPending] = useState(false); 
    const formRef = useRef(null);


    const formHandler = async (e) => {
        setPending(true);
        e.preventDefault(); 

        // collect form data
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());

        try {
            // create request  
            const res = await fetch('http://localhost:3000/api/contactform', {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json",
                },
                body: JSON.stringify(values), 
            });
            //parse response as JSON
            const resData = await res.json(); 
            if (!resData.ok) {
                throw new Error(resData.error);
            }
            console.log('Success:', result);
        } catch (e) {
            console.log('Error:', e)
        }
        setPending(false);
        formRef.current.reset(); 
    };

    return (
        <div className={styles.mainContainer}>
            <h1>Contact Us</h1>
            <form ref={formRef} onSubmit={formHandler}>
                <div className={styles.formSection}>
                    <div className={styles.infoSection}>
                        <div className={styles.infoContainer}>
                            <p className={styles.question}>Name</p>
                            <input 
                                className={styles.answerContainer}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                required
                                ></input>
                        </div>
                        <div className={styles.infoContainer}>
                            <p className={styles.question}>Email Address</p>
                            <input 
                                className={styles.answerContainer}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                ></input>
                        </div>
                        <div className={styles.messageContainer}>
                            <p className={styles.question}>Question</p>
                            <textarea   
                                className={styles.textBoxContainer}
                                name="question"
                                placeholder="Enter your question"
                                cols="50"
                                rows="10"
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.button} disabled={pending}>
                        {pending ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
        
    );
}