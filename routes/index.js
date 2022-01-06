const fileUploadController = require('../controllers/fileUploadController');

module.exports = function(app){
  app.use('/file', fileUploadController);
}