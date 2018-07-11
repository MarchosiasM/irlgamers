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
  Event.find({ owner: req.params.cuid }).sort('-scheduledDate').exec((err, events) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ events });
  });
}

/**
 * Search events by date
 * @param req
 * @param res
 * @returns void
 */
export function findEventsByNameDate(req, res) {
  let search_date = moment( decodeURI( req.params.date ), 'MMM DD, YYYY' );
  let search_date_formatted = search_date.format('YYYY-MM-DD');
  // let valid_search_date = (search_date.isValid()) ? new Date(search_date_formatted).toISOString() : null;

  let search_name = decodeURI(req.params.name);
  let search_params = {};
  console.log(search_name);
  if(search_name !== 'null' ) search_params.eventName = new RegExp(search_name, 'i');

  if(search_date.isValid()) search_params.scheduledDate = new Date(search_date_formatted).toISOString();
  
  console.log(search_params);

  Event.find(search_params).sort('-scheduledDate')
  .then((events) => {
    if(events.length){
      res.json({ events });
      return events.length;
    }else{
      return;
    }
  })
  .then( (event_count) => {
    if(event_count) return;
    Event.find().sort('-scheduledDate').then( (events) => {
      res.json({ events });
    }).catch(err => res.status(500).send(err));
  })
  .catch( err => res.status(500).send(err) );



}

/**
 * Save an Event
 * @param req
 * @param res
 * @returns void
 */
export function addEvent(req, res) {
  if (!req.body.event.eventName || !req.body.event.address || !req.body.event.city || !req.body.event.state || !req.body.event.zipcode || !req.body.event.game || !req.body.event.gameType || !req.body.event.scheduledDate || !req.body.event.scheduledTime || !req.body.event.slots || !req.body.event.owner
  ) {
    res.status(403).end();
  }

  const newEvent = new Event(req.body.event);

  // Let's sanitize inputs
  newEvent.eventName = sanitizeHtml(newEvent.eventName);
  newEvent.address = sanitizeHtml(newEvent.address);
  newEvent.city = sanitizeHtml(newEvent.city);
  newEvent.state = sanitizeHtml(newEvent.state);
  newEvent.zipcode = sanitizeHtml(newEvent.zipcode);
  newEvent.game = sanitizeHtml(newEvent.game);
  newEvent.gameType = sanitizeHtml(newEvent.gameType);
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
