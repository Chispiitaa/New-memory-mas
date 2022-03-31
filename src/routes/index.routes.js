const { Router } = require('express');
const router = Router();

const { renderIndex, renderMenu } = require('../controllers/index.controller')

const{isAuthenticated} = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/menu', isAuthenticated ,renderMenu);

module.exports = router;
