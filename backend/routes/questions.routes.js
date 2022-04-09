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

router.route("/").get(getContext).post(setContext)
router.route("/:id").put(updateContext).delete(deleteContext)
/*
router.get("/", getContext)
router.post("/", setContext)
router.put("/:id", updateContext)
router.delete("/:id", deleteContext)
*/

router.route("/type/:id").get(getType)
router.route("/type/:id").put((req, res) => res.json({ message: 'ypte updated'}))
/*
router.route('/answered').get((req, res) => res.json({ message: 'answered'}))
router.route('/unanswered').get((req, res) => res.json({ message: 'unanswered'}))
router.route('/rejected').get((req, res) => res.json({ message: 'rejected'}))
*/

module.exports = router