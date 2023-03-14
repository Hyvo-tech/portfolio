import { styled } from "../../styles.ts";


export const ExperienceContainer = styled("div", {
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    color: "black",
});

export const ExperienceTitle = styled("h2", {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#00588d",
});

export const ExperienceDate = styled("h3", {
    display: "flex",
    fontSize: "1rem",
    fontWeight: "bolld",
    marginBottom: "0.5rem",
    color: "#00588d",
    justifySelf: "flex-end",

});

export const ExperienceDescription = styled("p", {
    fontSize: "1rem",
    fontWeight: "normal",
    marginBottom: "0.5rem",
    color: "white",
});


export const LeftContainer = styled("div", {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "30%",
});


export const RightContainer = styled("div", {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    width: "70%",

});

export const SkillsContainer = styled("div", {
    alignItems: "center",
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',

});


