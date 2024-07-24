export function ProjectCard({cohort, image, image_alt, title, description}) {
    return(
        <div>
            <p>{cohort}</p>
            <img src={image} alt={image_alt}/>
            {/* <line break> */}
            <p>{title}</p>
            <p>{description}</p>
            <button>🟢VISIT SITE</button>
        </div>
    );
}