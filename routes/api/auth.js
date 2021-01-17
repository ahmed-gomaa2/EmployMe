const express = require('express');
const router = express.Router();

//@route     get api/auth
//@desc      Test route
//@access    public
router.get('/', (req, res) => {
    res.send('user auth')
})

module.exports = router;
