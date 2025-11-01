//  import multer
const multer = require("multer");

const storage = multer.diskStorage({
  // path to store data
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  // name in which file is stored
  filename: (req, file, callback) => {
    const fname = `image-${file.originalname}`;
    callback(null, fname);
  },
});

const fileFilter = (req, file, callback) => {
  // accepts only jpg, jpeg, png, svg
  console.log(file);

  if (
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/svg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Accepts only jpg, jpeg, png, svg"));
  }
};

console.log(storage);
console.log(fileFilter);

// create config
const multerConfig = multer({
  storage,
  fileFilter,
});

module.exports = multerConfig;
