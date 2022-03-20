const express = require('express')
const router = express.Router()
const { getContext, setContext, updateContext, deleteContext } = require('../controllers/questions.controller')

router.get("/", getContext)
router.post("/", setContext)
router.put("/:id", updateContext)
router.delete("/:id", deleteContext)

//router.route("/").get(getContext).post(setContext)
//router.route("/:id").put(updateContext).delete(deleteContext)


router.route('/answered').get((req, res) => res.json({ message: 'answered'}))
/*router.get('/answered', (req, res) => {
    res.json({message: 'answered'})
})*/
router.route('/unanswered').get((req, res) => res.json({ message: 'unanswered'}))

router.route('/rejected').get((req, res) => res.json({ message: 'rejected'}))

module.exports = router