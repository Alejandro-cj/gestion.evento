import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Esquema de validación del evento
const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  location: Joi.string().required(),
  organizer: Joi.string().required(),
});

export const validateEvent = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = eventSchema.validate(req.body);

  if (error) {
    // Enviar respuesta pero no devolver explícitamente el objeto Response
    res.status(400).json({ error: error.details[0].message });
    return;
  }

  // Si no hay error, continuar con el siguiente middleware
  next();
};
