const kronoController = require('../controllers/kronologi');
const router = require('express').Router();

router.post('/', kronoController.create);
router.get('/', kronoController.getAll);
router.get('/:id', kronoController.findOne);
router.put('/:id', kronoController.update);
router.delete('/:id', kronoController.delete);


module.exports = router;