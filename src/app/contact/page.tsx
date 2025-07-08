import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { ContactForm } from "./ContactForm";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact - Nayan Soni",
    description: "Get in touch with Nayan Soni for freelance work and full-time opportunities",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact - Nayan Soni")}`,
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Contact - Nayan Soni"
        description="Get in touch with Nayan Soni for freelance work and full-time opportunities"
        path="/contact"
        image={`/api/og/generate?title=${encodeURIComponent("Contact - Nayan Soni")}`}
        author={{
          name: person.name,
          url: `${baseURL}/contact`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column maxWidth="s" gap="xl" horizontal="center">
        <Column gap="m" horizontal="center" style={{ textAlign: "center" }}>
          <Heading variant="display-strong-s">Get In Touch</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            I'm always interested in new opportunities and exciting projects.<br />
            Let's discuss how I can help bring your ideas to life.
          </Text>
        </Column>

        <ContactForm />
      </Column>
    </Column>
  );
} 