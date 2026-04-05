import { RJSFValidationError, UiSchema } from '@rjsf/utils';

export function transformErrors(
  errors: RJSFValidationError[],
  uiSchema?: UiSchema,
): RJSFValidationError[] {
  return errors.map((error) => {
    const field = error.property?.replace(/^\./, '');
    if (!field) return error;

    const fieldUi = uiSchema?.[field];
    const messages = fieldUi?.['ui:options']?.errorMessages as
      | Record<string, string>
      | undefined;

    if (!messages) return error;

    if (error.name === 'required') {
      const missingField = (error.params as { missingProperty?: string })
        ?.missingProperty;
      const requiredMessages = uiSchema?.[missingField || '']?.['ui:options']
        ?.errorMessages as Record<string, string> | undefined;

      if (missingField && requiredMessages?.required) {
        error.message = requiredMessages.required;
      }
      return error;
    }

    if (error.name && messages[error.name]) {
      error.message = messages[error.name];
    }

    return error;
  });
}
