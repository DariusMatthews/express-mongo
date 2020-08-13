import Express from 'express';
import { User } from '../../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';

const router = Express.Router();

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => { throw err });
});

router.post('/', (req, res) => {
  const newUser = new User(
    {
      id: uuidv4(),
      name: req.body.name
    }
  );

  newUser.save()
    .then(user => res.json(user))
    .catch(err => { throw err });
});

export default router;