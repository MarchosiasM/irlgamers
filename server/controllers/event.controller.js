import Event from '../models/event';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';

/**
 * Get all Events
 * @param req
 * @param res
 * @returns void
 */
export function getEvents(req, res) {
  Event.find().sort('-scheduledDate').exec((err, events) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ events });
  });
}

/**
 * Get a Users Events
 * @param req
 * @param res
 * @returns void
 */
export function getUserEvents(req, res) {
  Event.find({ owner: req.params.cuid }).sort('-scheduledDate').exec(( err, event) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ event });
  });
}

/**
 * Search events by date
 * @param req
 * @param res
 * @returns void
 */
export function findEventsByDate(req, res) {  
  let search_date = moment( decodeURI( req.params.date ), 'MMM DD, YYYY' ).format('YYYY-MM-DD');;

  Event.find({ scheduledDate: new Date(search_date) }).sort('-scheduledDate').exec((err, events) => {
    if (err) {
      res.status(500).send(err);
    }
    // res.send(search_date);
    res.json({ events });
  });
}

/**
 * Save an Event
 * @param req
 * @param res
 * @returns void
 */
export function addEvent(req, res) {
  if (!req.body.event.eventName || !req.body.event.game || !req.body.event.scheduledDate || !req.body.event.scheduledTime || !req.body.event.slots || !req.body.event.owner) {
    res.status(403).end();
  }

  const newEvent = new Event(req.body.event);

  // Let's sanitize inputs
  newEvent.eventName = sanitizeHtml(newEvent.eventName);
  newEvent.game = sanitizeHtml(newEvent.game);
  newEvent.scheduledDate = sanitizeHtml(newEvent.scheduledDate);
  newEvent.scheduledTime = sanitizeHtml(newEvent.scheduledTime);
  newEvent.slots = sanitizeHtml(newEvent.slots);
  newEvent.notes = sanitizeHtml(newEvent.notes);
  newEvent.owner = sanitizeHtml(newEvent.owner);
  newEvent.slug = slug(newEvent.eventName.toLowerCase(), { lowercase: true });
  newEvent.cuid = cuid();
  newEvent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ event: saved });
  });
}

/**
 * Get a single event
 * @param req
 * @param res
 * @returns void
 */
export function getEvent(req, res) {
  Event.findOne({ cuid: req.params.cuid }).exec((err, event) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ event });
  });
}

/**
 * Delete an event
 * @param req
 * @param res
 * @returns void
 */
export function deleteEvent(req, res) {
  Event.findOne({ cuid: req.params.cuid }).exec((err, event) => {
    if (err) {
      res.status(500).send(err);
    }

    event.remove(() => {
      res.status(200).end();
    });
  });
}
