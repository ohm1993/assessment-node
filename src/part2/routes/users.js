import express from "express"
import getUsers from "../repository/get-users"

const router = express.Router();

/* GET /users listing. */
router.get('/', async (req, res, next) => {
  let response = await getUsers();
  let result  = JSON.stringify(response, ['_id', 'isActive', 'firstName', 'lastName', 'balance'], 2);
  res.send(JSON.parse(result));
})

router.get('/:_id', async (req, res, next) => {
   const response = await getUsers();
   const user = response.find(item => item._id === req.params._id);
   res.send(user);
});

export default router
