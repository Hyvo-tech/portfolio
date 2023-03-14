import Text from "../text";
import Skill from "./skill";
import { ExperienceContainer, ExperienceDate, ExperienceDescription, ExperienceTitle, LeftContainer, RightContainer, SkillsContainer } from "./style";

type ExperienceCardProps = {
    name: string;
    description: string;
    link?: string;
    skills: string[];
    period: string;
    duration: string;
}


const ExperienceCard = (props: ExperienceCardProps) => {
    return (
      <>
      <ExperienceContainer>
      <LeftContainer>
      <Text color="secondary"><b>Company:</b></Text>
      <ExperienceTitle>{props.name}</ExperienceTitle>
      <Text color="secondary">{props.period}</Text>
      <ExperienceDate>{props.duration}</ExperienceDate>
      </LeftContainer>
      <div className="vr" style={{height: "auto",color:"white"}}></div>

      <RightContainer>
      

      <SkillsContainer>
      <Text color="secondary">Most rated skills:</Text>
      {props.skills.map(skill => (
          <Skill name={skill}></Skill>
        ))}
      </SkillsContainer>
      <ExperienceDescription><b>Description: </b>{props.description}</ExperienceDescription>
      </RightContainer>
    </ExperienceContainer>
    <hr style={{margin:0}}></hr>
    </>
    )
}

export default ExperienceCard