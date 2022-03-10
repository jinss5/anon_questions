// @desc Get Context
// @route GET /api/questions
// @access Public
const getContext = (req, res) => {

    res.json({ message: 'Get context'})
}

// @desc Set Context
// @route POST /api/questions
// @access Public
const setContext = (req, res) => {
    console.log(req.body)

    res.json({ message: 'Set context'})
}

// @desc Update Context
// @route PUT /api/questions/:id
// @access Private
const updateContext = (req, res) => {
    res.json({ message: `Update context ${req.params.id}`})
}

// @desc delete Context
// @route DELETE /api/questions/:id
// @access Private
const deleteContext = (req, res) => {
    res.json({ message: `Delete context ${req.params.id}`})
}

module.export = {
    getContext,
    setContext,
    updateContext,
    deleteContext
}