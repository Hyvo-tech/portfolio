import { styled } from "../../styles.ts";

type SkillProps = {
    name: string;
}




const Badge = styled('div', {
    backgroundColor: 'rgb(0, 88, 141)',
    borderRadius: '12px',
    padding: '8px',
    width: 'fit-content',
    height: 'fit-content',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        backgroundColor: '#e1e1e1',
        transition: 'all 0.5s ease-in-out',
    },
    span: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        textTransform: 'none',
        textDecoration: 'none',
    }
    
})





const Skill = ({name}: SkillProps) => {
    return (
        <Badge>
            <span>{name}</span>
        </Badge>
    )
}

export default Skill