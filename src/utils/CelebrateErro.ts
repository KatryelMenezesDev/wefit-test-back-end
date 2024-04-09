const customMessage = (field: string) => {
  return {
    "string.empty": `The field ${field} cannot be empty!`,
    "number.min": `The field ${field} must be greater than or equal to {#limit}!`,
    "any.required": `The field ${field} is required!`,
    "string.min": `The field ${field} must be at least {#limit} characters long!`,
    "string.max": `The field ${field} must be at most {#limit} characters long!`,
    "string.email": `The field ${field} must be a valid email address!`,
    "string.length": `The field ${field} must be exactly {#limit} characters long!`,
    "string.pattern.base": `The field ${field} contains invalid characters!`,
    "string.guid": `The field ${field} must be a valid UUID!`,
    "date.format": `The field ${field} must be in the correct date format!`,
    "date.min": `The ${field} cannot be earlier than the current date!`
  };
};

export { customMessage };
