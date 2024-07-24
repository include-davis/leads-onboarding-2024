import { ProjectCard } from "./projectcard";

export function Include() {
    return(
        <div>
            <div>
                <h1>Our mission is to design creative digital solutions that have a positive social impact</h1>
                {/* <img src={figma}/> */}
            </div>

            <div>
                {/* <img src={pen}/> */}
                <h1>Recent Work</h1>
                <h3>Transforming ideas into incredible realities is what we do best.</h3>
            </div>

            <ProjectCard cohort="WINTER/SPRING 2023" img="" img_alt="" title="IELC Tutoring" description="Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program."></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>

            <p>AND MORE…</p>
        </div>
    );
}