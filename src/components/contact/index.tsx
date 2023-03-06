import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Button, Form, FormContainer, Input, InputContainer, Label, TextArea } from "./style";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact = () => {

    const [contactForm, setContactForm] = useState({} as ContactForm)

    const contactFormSchema = z.object({
        name: z.string({ required_error: "Please enter your name" }),
        email: z.string().email({ message: "Please enter a valid email address" }),
        subject: z.string({ required_error: "Please enter a subject" }),
        message: z.string({ required_error: "Please enter a message" }),
    })



    const sendEmail = (e: any) => {
        e.preventDefault()
        try { contactFormSchema.parse(contactForm) }
        catch { console.log("error"); return; }

        // emailjs.send('service_vcb3484','template_cdtenij',{
        //     name: e.target.name.value,  
        // },'jLZMBziFiM_OO1A0B')
    }

    return (
        <Form onSubmit={sendEmail}>
            <FormContainer>
                <div className="row">
                    <h3>Contact</h3>
                </div>
                <div className="row">
                <InputContainer className="col-6">
                <Label>Name</Label>
                <Input 
                placeholder="Your name"
                value={contactForm.name} 
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                type="text" 
                name="name"
                />
                </InputContainer>
                <InputContainer className="col-6">
                <Label>Email</Label>
                <Input 
                placeholder="you@emaill.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                type="text" 
                name="email" />
                </InputContainer>
                </div>


                <InputContainer className="col-12">
                <Label>Subject</Label>
                <Input 
                placeholder="Job offer | Question"
                value={contactForm.subject} 
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} 
                type="text" 
                name="subject" />
                </InputContainer>

                <InputContainer className="col-12">
                <Label>Message</Label>
                <TextArea 
                value={contactForm.message} 
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                name="message" />
                </InputContainer>
                <Button className="col-2 text-right">Send</Button>
            </FormContainer>
            
        </Form>

    )
}