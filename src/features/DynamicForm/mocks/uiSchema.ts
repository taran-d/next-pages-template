import type { UiSchema } from '@rjsf/utils';

export const uiSchema: UiSchema = {
  firstName: {
    'ui:placeholder': 'Enter first name',
    'ui:options': {
      errorMessages: {
        required: 'Please enter your first name',
        minLength: 'First name must have at least 2 characters',
        pattern: 'First name may contain letters only',
      },
    },
  },
  lastName: {
    'ui:placeholder': 'Enter last name',
    'ui:options': {
      errorMessages: {
        required: 'Please enter your last name',
        minLength: 'Last name must have at least 3 characters',
        maxLength: 'Last name must be at most 20 characters',
        pattern: 'Last name may contain letters, apostrophes, and dashes only',
      },
    },
  },
  email: {
    'ui:options': {
      errorMessages: {
        format: 'Email must be valid',
        required: 'Please enter your email',
      },
    },
  },
  startDate: {
    'ui:options': {
      errorMessages: {
        formatMaximum: 'Start date must be before February 2, 2026',
        required: 'Please choose a start date',
      },
    },
  },
  plan: {
    'ui:placeholder': 'Select plan',
    'ui:options': {
      errorMessages: {
        required: 'Please choose a plan',
      },
    },
  },
  address: {
    'ui:placeholder': 'Enter address',
    'ui:options': {
      errorMessages: {
        required: 'Address is required when Extra plan is selected',
        minLength: 'Address must be at least 10 characters long',
      },
    },
  },
  additionalInfo: {
    'ui:widget': 'textarea',
    'ui:placeholder': 'Anything else we should know?',
    'ui:options': {
      rows: 4,
      errorMessages: {
        maxLength: 'Additional info must be 120 characters or fewer',
      },
    },
  },
};
