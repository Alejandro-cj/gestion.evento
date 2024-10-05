import Event, { IEvent } from '../domain/Event';
import { ErrorCatalog } from '../domain/errors/ErrorCatalog';

export class EventService {
  async createEvent(data: IEvent): Promise<IEvent> {
    const event = new Event(data);
    return await event.save();
  }

  async getAllEvents(): Promise<IEvent[]> {
    return await Event.find();
  }

  async getEventById(id: string): Promise<IEvent | null> {
    const event = await Event.findById(id);
    if (!event) throw new Error(ErrorCatalog.EventNotFound);
    return event;
  }

  async updateEvent(id: string, data: Partial<IEvent>): Promise<IEvent | null> {
    const event = await Event.findByIdAndUpdate(id, data, { new: true });
    if (!event) throw new Error(ErrorCatalog.EventNotFound);
    return event;
  }

  async deleteEvent(id: string): Promise<void> {
    const event = await Event.findByIdAndDelete(id);
    if (!event) throw new Error(ErrorCatalog.EventNotFound);
  }
}
