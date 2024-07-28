import React from 'react';
import Image from 'next/image';
import styles from '@/app/(pages)/_styles/components/clientCards.module.scss'

export default function ClientCard({ client }) {
    return (
        <div className={styles.container}>
            <div>{client.season}</div>
            <div className={styles.image_container}>
                <Image 
                    src={client.image} 
                    alt={client.name}
                    style={{ objectFit: "contain" }}
                    fill={true}
                    priority={true}
                />
            </div>
            
            <hr/>
            <p className={styles.client_name}>{client.name}</p>
            <p>{client.text}</p>
            <a href="" className={styles.visit_button}>
                <div>VISIT SITE</div>
            </a> 
            
        </div>
    );
}