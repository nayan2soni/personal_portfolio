"use client";

import { Button, Column, Text, Flex } from "@once-ui-system/core";
import { person } from "@/resources";

export function ContactForm() {
  return (
    <Column gap="xl" horizontal="center" style={{ textAlign: "center" }}>
      <Text variant="body-default-l" onBackground="neutral-weak">
        You can reach me directly via email or phone:
      </Text>
      <Flex gap="m" wrap horizontal="center">
        <Button
          href={`mailto:${person.email}`}
          data-border="rounded"
          variant="primary"
          size="l"
          weight="default"
          prefixIcon="email"
        >
          {person.email}
        </Button>
        <Button
          href={`tel:${person.phone}`}
          data-border="rounded"
          variant="secondary"
          size="l"
          weight="default"
          prefixIcon="phone"
        >
          {person.phone}
        </Button>
      </Flex>
    </Column>
  );
} 