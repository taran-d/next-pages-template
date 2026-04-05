import type { RJSFSchema } from '@rjsf/utils';

export const jsonSchema: RJSFSchema = {
  type: 'object',
  required: ['firstName', 'lastName', 'plan'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
      minLength: 2,
      pattern: '^[A-Za-z]+$',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
      minLength: 3,
      maxLength: 20,
      pattern: "^[A-Za-z'-]+$",
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
    },
    startDate: {
      type: 'string',
      title: 'Start date',
      format: 'date',
      formatMaximum: '2026-02-02',
    },
    plan: {
      type: 'string',
      title: 'Plan',
      enum: ['Default', 'Extra'],
      default: 'Default',
    },
  },
  dependencies: {
    plan: {
      oneOf: [
        {
          properties: {
            plan: {
              enum: ['Default'],
            },
          },
        },
        {
          properties: {
            plan: {
              enum: ['Extra'],
            },
            address: {
              type: 'string',
              title: 'Address',
              minLength: 10,
            },
            additionalInfo: {
              type: 'string',
              title: 'Additional info',
              maxLength: 120,
            },
          },
          required: ['address'],
        },
      ],
    },
  },
};
