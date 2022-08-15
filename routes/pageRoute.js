const express = require('express')
const path = require('path');
const { homeController, teamController, contactController, ageCheck } = require('../controllers/homePageController');

// init router
const router=express.Router()

// router
router.get('/',homeController)
router.get('/team',teamController)
router.get('/contact',contactController)

router.post('/age_check',ageCheck)



// export router
module.exports =router;