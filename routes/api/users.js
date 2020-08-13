import Express from 'express';
import { User } from '../../models/userModel.js'

const router = Express.Router();

router.get('/', (req, res) => {
  User.find().then(users => res.json(users));
});

export default router;