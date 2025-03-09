import Joi from "joi";

// name        String
//     description String
//     height      Float?
//     length      Float?
//     width       Float?

export const createProductSchema = Joi.object({
    name: Joi.string()
        .required()
        .empty([null, ""])
        .label("name")
        .messages({ "any.required": "{{#label}} es requerido" }),

    description: Joi.string()
        .required()
        .empty([null, ""])
        .label("description")
        .messages({ "any.required": "{{#label}} es requerido" }),

    height: Joi.number()
        .optional()
        .empty([null, ""])
        .label("height"),

    length: Joi.number()
        .optional()
        .empty([null, ""])
        .label("length"),

    width: Joi.number()
        .optional()
        .empty([null, ""])
        .label("width"),
});

export const updateProductSchema = Joi.object({
    id: Joi.string()
        .required()
        .empty([null, ""])
        .label("id")
        .messages({ "any.required": "{{#label}} es requerido" }),

    name: Joi.string()
        .optional()
        .empty([null, ""])
        .label("name"),

    description: Joi.string()
        .optional()
        .empty([null, ""])
        .label("description"),

    height: Joi.number()
        .optional()
        .empty([null, ""])
        .label("height"),

    length: Joi.number()
        .optional()
        .empty([null, ""])
        .label("length"),

    width: Joi.number()
        .optional()
        .empty([null, ""])
        .label("width"),
});


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
