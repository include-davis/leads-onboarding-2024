import React from 'react';
import Image from 'next/image';

export default function ClientCard({ client }) {
    return (
        <div>
            <div>{client.season}</div>
            <Image src={client.image} alt={client.name} width={528} height={304}/>
            <hr/>
            <p>{client.name}</p>
            <p>{client.text}</p>
            <a href="">VISIT SITE</a>
        </div>
    );
}