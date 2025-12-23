const express = require('express');
const router = express.Router();
const {all_users,add_user,update_user,delete_user, get_user_by_name, minimum_age,get_user_by_id} = require('./user.service');

router.get('/all-users',all_users);
router.post('/add-user',add_user);
router.patch('/update-user/:id',update_user);
router.delete('/delete-user/:id',delete_user)
router.get('/get-user',get_user_by_name)
router.get('/minimum-age',minimum_age)
router.get('/get_user_by_id/:id',get_user_by_id)




module.exports = router;