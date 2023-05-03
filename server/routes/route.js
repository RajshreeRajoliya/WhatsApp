import express from 'express';
import { addUser , getUser } from "../controller/user-controller.js";
// import { newConversation} from '../controller/conversation-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
const router=express.Router();

router.post('/add',addUser);
router.get('/users', getUser);

// router.post('/conversation/add', newConversation);
export default router;