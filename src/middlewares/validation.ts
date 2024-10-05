import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  location: Joi.string().required(),
  organizer: Joi.string().required(),
});

export const validateEvent = (req: Request, res: Response, next: NextFunction) => {
  const { error } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
