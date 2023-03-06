import { styled } from "../../styles.ts";

const FormContainer = styled("div", {
    width: "100%",
    height: "100%",
});

const Form = styled("form", {
    marginTop: "24px",
    width: "100%",
    height: "100%",
});

const InputContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "flex-start",
    gap: "16px",

});



const Input = styled("input", {
    width: "100%",
    height: "calc(1.5em + .75rem + 2px)",
    padding: "0 10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",    
    outline: "none",
    backgroundColor: "#ccc",      
});

const Label = styled("label", {
    height:0
});

const TextArea = styled("textarea", {
    maxWidth: "100%",
    width: "100%",
    height: "100px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    backgroundColor: "#ccc",
});



const Button = styled("button", {
    width: "100%",
    height: "40px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    backgroundColor: "#ccc",
    cursor: "pointer",
    '&:hover': {
        backgroundColor: "#00588d",
        color: "#fff",
    }
});



export {
    FormContainer,
    Form,
    Input,
    InputContainer,
    Button,
    Label,
    TextArea
}

