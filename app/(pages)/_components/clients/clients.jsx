import React from 'react';
import Image from 'next/image';
import styles from '@/app/(pages)/_styles/components/clientCards.module.scss'

export default function ClientCard({ client }) {
    return (
      <div className={styles.card}>
        <p>{client.season}</p>
          
        <div className={styles.image_container}>
            <Image 
                src={client.image} 
                alt={client.name}
                style={{ objectFit: "cover" }}
                fill={true}
                priority={true}
            />
        </div>

        <hr/>
            
        <div className={styles.text}>
          <p className={styles.client_name}>{client.name}</p>
          <p>{client.text}</p>
        </div>
          
        <a href="" className={styles.visit_button}>
            <span className={styles.dot}>●</span>
            VISIT SITE
        </a> 
      </div>
    );
}