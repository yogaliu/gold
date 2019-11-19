const router = require('koa-router')();
const perf = require('../controller/perf');

router.prefix('/api');

/*获取首页左边接口*/
router.post('/getIndexLeftList', perf.getIndexLeftList);
router.post('/getIndexRightList', perf.getIndexRightList);

module.exports = router