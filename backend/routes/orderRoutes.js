import express from 'express'
import {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders} from '../controllers/orderController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/my_orders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router