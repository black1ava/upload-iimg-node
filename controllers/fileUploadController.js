const router = require('express').Router();
const multer = require('multer');
router.route('/upload').get(function(req, res){
  res.render('index');
});

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './images');
  },

  filename: function(req, file, cb){
    cb(null, Date.now() + '' + file.originalname);
  }
});

const upload = multer({ storage }).single('file');

router.route('/upload').post(function(req, res){
  upload(req, res, function(err){
    if(err){
      console.log(err);
      return;
    }
    const path = req.file.path;
    res.status(200).json({ path });
  });
});

module.exports = router;