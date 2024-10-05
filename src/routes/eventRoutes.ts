import { Router } from 'express';
import { EventService } from '../application/EventService';
import { validateEvent } from '../middlewares/validation';

const router = Router();
const eventService = new EventService();

// Crear un evento
router.post('/events', validateEvent, async (req, res) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'Unknown error occurred' });
    }
  }
});

// Obtener todos los eventos
router.get('/events', async (req, res) => {
  const events = await eventService.getAllEvents();
  res.json(events);
});

// Obtener un evento por su ID
router.get('/events/:id', async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    res.json(event);
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(404).json({ error: 'Unknown error occurred' });
    }
  }
});

// Actualizar un evento
router.patch('/events/:id', validateEvent, async (req, res) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    res.json(event);
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(404).json({ error: 'Unknown error occurred' });
    }
  }
});

// Eliminar un evento
router.delete('/events/:id', async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.status(204).end();
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(404).json({ error: 'Unknown error occurred' });
    }
  }
});

export default router;
