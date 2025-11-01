//  import multer
const multer = require("multer");

const storage = multer.diskStorage({
  // path to store data
  destination: (req, file, callback) => {
    callback(null, "/uploads");
  },
  // name in which file is stored

  filename: (req, file, callback) => {
    const fname = `image-${file.originalname}`;
    callback(null, fname);
  },
});

const fileFilter = (req, file, callback) => {
  // accepts only jpg, jpeg, png, svg
  if (
    filename.mimetype == " image/jpg" ||
    filename.mimetype == " image/jpeg" ||
    filename.mimetype == " image/png" ||
    filename.mimetype == " image/svg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

// create config
const multerConfig = multer({
  storage,
  fileFilter,
});

module.exports = multerConfig;
