import "json-schema";

declare module "json-schema" {
  interface JSONSchema7 {
    formatMinimum?: string;
    formatMaximum?: string;
  }
}