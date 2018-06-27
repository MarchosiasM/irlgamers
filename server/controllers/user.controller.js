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
  if (!req.body.user.displayName || !req.body.user.cuid || !req.body.user.email) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  // Let's sanitize inputs
  newUser.displayName = sanitizeHtml(newUser.displayName);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.preferences = sanitizeHtml(newUser.preferences);
  newUser.slug = slug(sanitizeHtml(newUser.displayName), { lowercase: true });
  newUser.cuid = sanitizeHtml(newUser.cuid);
  newUser.save((err, saved) => {
    if (err) {
      console.log(err)
      switch(err.code){
        case 11000:
          let mongodb_err = {'error':'user already exists'}
          res.json({ mongodb_err });
          break;
        default: 
          res.status(500).send(err);
          break;
      }
      
    }else{
      res.json({ user: saved });
    }

    if(saved === undefined){
      saved = {'error': 'user already exists'};
    }
    
    
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
            res.status(500).send(err);
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
