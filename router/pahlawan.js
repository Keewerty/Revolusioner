const heroController = require('../controllers/pahlawan');
const router = require('express').Router();

router.post('/', heroController.create);
router.get('/', heroController.getAll);
router.get('/:id', heroController.findOne);
router.put('/:id', heroController.update);
router.delete('/:id', heroController.delete);


module.exports = router;