import Skill from "./skill";

type ExperienceCardProps = {
    name: string;
    description: string;
    link?: string;
    skills: string[];
}


const ExperienceCard = ({name,description,link,skills}: ExperienceCardProps) => {
    return (
      <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div 
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}
      >
      {skills.map(skill => (
          <Skill name={skill}></Skill>
        ))}
      </div>

    </div>
    )
}

export default ExperienceCard