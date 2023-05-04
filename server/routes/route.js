import express from 'express';
import { addUser , getUser } from "../controller/user-controller.js";

import { newConversation , getConversation } from '../controller/conversation-controller.js';
import { newMessage}from '../controller/message-controller.js';

const router=express.Router();

router.post('/add',addUser);
router.get('/users', getUser);

router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);

router.post('/message/add', newMessage);
export default router;