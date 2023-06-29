
import profile from "./assets/profile.jpg"
import { styled } from "./styles.ts"
import { globalStyles } from "./styles.ts/global";
import React from "react";
import { DiReact, DiNodejs, DiPhp, DiJavascript1, DiBootstrap } from "react-icons/di"
import { SiTypescript,SiMysql, SiAmazonaws } from "react-icons/si"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import ExperienceCard from "./components/experience/card";
import Text from "./components/text";
import { Contact } from "./components/contact";
import experiences from "../shared/experience"



const LeftBar = styled("aside", {
  top:0,
  position: "sticky",
  display: "flex",
  flexDirection: "column",
  padding: "$4",
  height: "100vh",
  borderRight: "1px solid #70685c",
  "@media (max-width: 767px)": {
    position: "relative",
    borderRight: "none",
    width: "100%",  
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  }
}
)

const Profile = styled("img", {
  width: "200px",
  borderRadius: "50%",
  marginTop: "48px",
})

const Container = styled("div", {
  maxWidth: "1040px",
  margin: "0 auto",
  width: "100%",
  backgroundColor: "#282b2c",
  display:'flex',
  alignItems: "flex-start",
  "@media (max-width: 767px)": {
    flexDirection: "column",
    maxWidth: "100%",
    gap: "$12",
    alignItems: "center",
    padding: "$4",

  },  
})

const Content = styled("div", {
  padding: "$4",
  color: "#dcd9d4",
  marginTop: "64px",
  height: "auto",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  h1: {
    fontSize: "$5xl",
    span: {
      color: "$blue500",
    }
  },
  section: {
    width: "100%",
    marginTop: "$8",
    h3: {
      fontSize: "$2xl",
      marginBottom: "$4",
    },
    p: {
      lineHeight: "$base",
      fontSize: "$lg",
      span: {
        color: "$blue500",
      },
      a: {
        color: "$blue500",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        }
      }
    }

  },
  "@media (max-width: 767px)": {
    marginTop: "0",
    height: "auto",
    h1: {
      alignText: "center",
    }
  }
})

const SocialList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  marginTop: "$4",
  gap: "$4",
  listStyle: "none",
  li: {
    a: {
      display: "flex",
      flexDirection: "row",
      gap: "$2",
      alignItems: "center",
      textDecoration: "none",
      color: "#dcd9d4",
      "@media (max-width: 767px)": {
        span: {
          display: "none",
        },
      }
    },
    img: {
      width: "24px",
      height: "24px",
      borderRadius: "$md",
    },
    svg: {
      width: "24px",
      height: "24px",
      borderRadius: "$md",
    },
    "&:hover": {
      a: {
        color: "$blue500",
      }
    }
  },
  "@media (max-width: 767px)": {
    flexDirection: "row",
    justifyContent: "center",	
    alignItems: "center",
    gap: "$4",
  }
})

const Skills = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap", 
  gap: "$4",
  alignItems: "center", 
  "div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease-in-out",
    background: "$gray200",
    borderRadius: "$full",
    width: "78px",
    height: "78px",
    "&:hover": {
      background: "$gray100",
      transition: "all 0.5s ease-in-out",
    },

  },
  "svg": {
    width: "48px",
    height: "48px",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      transform: "scale(1.2)",
      transition: "all 0.2s ease-in-out",
    }
  }
})


  


function App() {

  globalStyles();

  const [language, setLanguage] = React.useState("pt-BR");
  const [color, setColor] = React.useState("gray");




  React.useEffect(() => {
    const language = navigator.language;
    setLanguage(language);
  }, [])










  return (
    <React.Fragment>
    <Container>
    <LeftBar>
      <Profile src={profile} alt="profile" />
      <Text
        size="large"
        weight="regular"
        color="secondary"
        lineHeight="large"
        align="center">Augusto Figueredo</Text>
      <Text
        size="small"
        weight="regular"
        color="secondary"
        lineHeight="large"
        align="center">Software Engineer</Text>
        
      <SocialList>
        <li>
        <a href="https://github.com/treepo1" target={"_blank"}>
        <FaGithub />
        <span>Follow me on Github</span>
      </a>
      </li>
      <li>
      <a href="https://www.linkedin.com/in/thiago-freire-8b4668229/" target={"_blank"}>
        <FaLinkedin />
        <span>Follow me on Linkedin</span>
      </a>
      </li>
      <li>
      <a href="mailto:thiago.freire45@gmail.com" target={"_blank"}>
        <MdEmail />
        <span>Send me a mail</span>
      </a>
      </li>
      <li>
      <a href="tel:+55 79 99844-1031<" target={"_blank"}>
        <BsFillTelephoneFill/>
        <span>+55 79 998441031</span>
      </a>
      </li>



        
      </SocialList>

    </LeftBar>
    <Content>
      <h1>Hi, I'm <span>Augusto</span></h1>
      <h2>FullStack Developer</h2>
      <section>
        <h3>About me</h3>
        <p>
        I'm a fullstack developer with <span>2 years of experience</span>.
        <br/>
        <p>
          Computer Science student at <span><a target={"_blank"} href="https://en.wikipedia.org/wiki/Federal_University_of_Sergipe">Federal University of Sergipe.</a></span>
        </p>
        As a developer, I'm always aiming to solve problems and create solutions that can help people. 
        I'm a fast learner looking for new challenges. That's my way to improve my skills and learn new technologies. 
        Also, i Like to teach and share my knowledge with others.
        </p>

      </section>
      <section>
        <h3>Skills</h3>

        <Skills>
          <div>
          <DiNodejs color="black" />
          </div>
          <div>
          <DiReact color="black"/>
          </div>
          <div>
          <DiJavascript1  color="black" />
          </div>
          <div>
          <SiTypescript  color="black" />
          </div>
          <div>
          <DiPhp  color="black"></DiPhp>
          </div>
          <div>
          <SiMysql  color="black"></SiMysql>
          </div>
          <div>
            <SiAmazonaws  color="black"></SiAmazonaws>
          </div>
          <div>
            <DiBootstrap  color="black"></DiBootstrap>
          </div>
        </Skills>

      </section>
      <section>
        <h3>Experience</h3>
        {
          experiences.map((exp) => (
            <ExperienceCard name={exp.name}
            description={exp.description}
            period={exp.period}
            duration={exp.duration}
            skills={exp.skills} />
          ))
        }
      </section>

      <Contact></Contact>
    </Content>
    </Container>
    </React.Fragment>
  )
}

export default App
