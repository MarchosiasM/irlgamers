import User from '../models/user';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().sort('-dateAdded').exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

/**
 * Save a User
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.user.firstName || !req.body.user.lastName || !req.body.user.email  || !req.body.user.preferences) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.firstName = sanitizeHtml(newUser.firstName);
  newUser.lastName = sanitizeHtml(newUser.firstName);
  newUser.fullName = sanitizeHtml(newUser.firstName) + ' ' + sanitizeHtml(newUser.lastName);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.preferences = sanitizeHtml(newUser.preferences);
  newUser.slug = slug(sanitizeHtml(newUser.firstName) + ' ' + sanitizeHtml(newUser.lastName), { lowercase: true });
  newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}

/**
 * Update an Event to User
 * @param req
 * @param res
 * @returns void
 */
export function signUp(req, res) {
    User.findOneAndUpdate({ cuid: req.params.user }, { $push: { eventsSignedUp: req.params.event }}, { new: true })
    .exec((err, user) => {
        if (err) {
            rest.status(500).send(err);
        }
        res.json({ user});
    });
}

/**
 * Get a single User
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

/**
 * Delete a User
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
  User.findOne({ cuid: req.params.cuid }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }

    user.remove(() => {
      res.status(200).end();
    });
  });
}
