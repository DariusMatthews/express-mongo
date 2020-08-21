import Express from 'express';
import { User } from '../../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';

const router = Express.Router();

// @route   GET api/users
// @desc    Get Users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => { throw err });
});

// @route   POST api/users
// @desc    Create a User
router.post('/', (req, res) => {
  const newUser = new User({
    id: uuidv4(),
    name: req.body.name
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => { throw err });
});

// @route   DELETE api/users/:id
// @desc    Delete a User
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

export default router;