const express = require('express')
const router = express.Router()
const { 
    getContext, 
    setContext, 
    updateContext, 
    deleteContext,
    getType,
    //updateType
} = require('../controllers/questions.controller')

const { protect } = require('../middleware/auth')

router.route("/").get(getContext).post(setContext)
router.route("/:id").put(protect, updateContext).delete(protect, deleteContext)

router.route("/type/:id").get(getType)
router.route("/type/:id").put((req, res) => res.json({ message: 'type updated'}))
/*
router.route('/answered').get((req, res) => res.json({ message: 'answered'}))
router.route('/unanswered').get((req, res) => res.json({ message: 'unanswered'}))
router.route('/rejected').get((req, res) => res.json({ message: 'rejected'}))
*/

module.exports = router