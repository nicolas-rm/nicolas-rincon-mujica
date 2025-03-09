import Joi from "joi";

// name        String
//     description String
//     height      Float?
//     length      Float?
//     width       Float?
export const createProductSchema = Joi.object({
    name: Joi.string()
        .required()
        .label("name")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    description: Joi.string()
        .required()
        .label("description")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    height: Joi.number()
        .optional()
        .label("height")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    length: Joi.number()
        .optional()
        .label("length")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    width: Joi.number()
        .optional()
        .label("width")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})

export const updateProductSchema = Joi.object({
    id: Joi.string()
        .required()
        .label("id")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    name: Joi.string()
        .optional()
        .label("name")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    description: Joi.string()
        .optional()
        .label("description")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    height: Joi.number()
        .optional()
        .label("height")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    length: Joi.number()
        .optional()
        .label("length")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    width: Joi.number()
        .optional()
        .label("width")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})

export const getProductSchema = Joi.object({
    id: Joi.string()
        .required()
        .label("id")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})

export const deleteProductSchema = Joi.object({
    id: Joi.string()
        .required()
        .label("id")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})

export const getAllProductSchema = Joi.object({
    limit: Joi.number()
        .optional()
        .label("limit")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    offset: Joi.number()
        .optional()
        .label("offset")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})

export const getAllProductSchemaQuery = Joi.object({
    limit: Joi.number()
        .optional()
        .label("limit")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
    offset: Joi.number()
        .optional()
        .label("offset")
        .messages({
            "any.required": "{{#label}} es requerido",
        }),
})
