'use client';
import Form from '@rjsf/mantine';
import validator from '@rjsf/validator-ajv8';
import { transformErrors } from './utils/transformErrors';
import { jsonSchema } from './mocks/jsonSchema';
import { uiSchema } from './mocks/uiSchema';
import { Button, Container, Group, Paper } from '@mantine/core';

export function DynamicForm() {
  return (
    <Paper withBorder radius="md" p="lg" mt="lg">
      <Form
        schema={jsonSchema}
        uiSchema={uiSchema}
        validator={validator}
        transformErrors={transformErrors}
        onSubmit={(data) => console.log(data.formData)}
        showErrorList={false}
        noHtml5Validate
      >
        <Group
          justify="flex-start"
          mt="md"
          pt="md"
          style={{ borderTop: '1px solid #e9ecef' }}
        >
          <Container>
            <Button type="submit">Submit</Button>
          </Container>
        </Group>
      </Form>
    </Paper>
  );
}
