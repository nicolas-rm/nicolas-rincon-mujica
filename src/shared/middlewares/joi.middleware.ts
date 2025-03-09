import Joi, { Schema, ValidationOptions } from 'joi';
import { Request, Response, NextFunction } from 'express';

interface RequestSchemas {
    headers?: Schema;
    params?: Schema;
    query?: Schema;
    body?: Schema;
}

export class JoiMiddleware {
    private schemas: RequestSchemas;
    private validationOptions: ValidationOptions;

    /**
     * Crea una instancia del middleware de validación.
     * @param schemas Objetos Joi para validar cada parte de la request (headers, params, query, body)
     */
    constructor(schemas: RequestSchemas) {
        this.schemas = schemas;
        this.validationOptions = {
            abortEarly: false, // Recoge todos los errores
            allowUnknown: true, // Permite propiedades no especificadas en el esquema
            stripUnknown: true // Elimina propiedades no especificadas en el esquema
        };

        // Aseguramos que el método validate se vincule correctamente
        this.validate = this.validate.bind(this);
    }

    /**
     * Middleware para validar la request.
     *
     * Recorre cada parte de la request y en caso de error envía una respuesta de error.
     *
     * @param req Objeto Request de Express.
     * @param res Objeto Response de Express.
     * @param next Función para pasar al siguiente middleware.
     */
    public validate(req: Request, res: Response, next: NextFunction): void {
        for (const key of ['headers', 'params', 'query', 'body'] as const) {
            if (this.schemas[key]) {
                const { error, value } = this.schemas[key]!.validate(req[key], this.validationOptions);
                if (error) {
                    // Se envía la respuesta sin devolver el resultado, de forma que la función retorne void.
                    res.status(400).json({
                        message: `Errores en ${key}`,
                        details: error.details.map((detail) => detail.message)
                    });
                    return;
                }
                // Asigna los valores saneados a la request.
                (req as any)[key] = value;
            }
        }
        next();
    }
}
