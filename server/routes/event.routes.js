import { Router } from 'express';
import * as EventController from '../controllers/event.controller';

const router = new Router();

// Get all Events
router.route('/events').get(EventController.getEvents);

// Get all Events for this user only
router.route('/myevents/:cuid').get(EventController.getUserEvents);

// Search Events by name &/or date
router.route('/events/search/:name/:date').get(EventController.findEventsByNameDate);

// Get one Event by cuid
router.route('/events/:cuid').get(EventController.getEvent);

// Add a new Event
router.route('/events').post(EventController.addEvent);

// Add a new attendee
router.route('/attendee/:event/:attendee').get(EventController.addAttendee);

// Edit an event
router.route('/events/:cuid').put(EventController.editEvent);

// Delete an Event by cuid
router.route('/events/:cuid').delete(EventController.deleteEvent);

export default router;
