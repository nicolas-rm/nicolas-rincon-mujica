import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .label("email")
        .messages({
            "string.email": "{{#label}} debe ser un email válido",
            "any.required": "{{#label}} es obligatorio",
        }),
    passwordHash: Joi.string()
        .min(6)
        .required()
        .label("passwordHash")
        .messages({
            "string.min": "{{#label}} debe tener al menos 6 caracteres",
            "any.required": "{{#label}} es obligatoria",
        }),
});


export const registerSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .label("email")
        .messages({
            "string.email": "{{#label}} debe ser un email válido",
            "any.required": "{{#label}} es obligatorio",
        }),
    passwordHash: Joi.string()
        .min(6)
        .required()
        .label("passwordHash")
        .messages({
            "string.min": "{{#label}} debe tener al menos 6 caracteres",
            "any.required": "{{#label}} es obligatoria",
        }),
});
