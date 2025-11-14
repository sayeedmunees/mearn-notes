const books = require("../model/bookModel");

// add book
exports.addBookController = async (req, res) => {
  console.log("Inside addbook controller");
  const {
    title,
    author,
    noofpages,
    imageurl,
    price,
    dprice,
    abstract,
    publisher,
    language,
    isbn,
    category,
  } = req.body;

  uploadedImg = [];
  req.files.map((item) => uploadedImg.push(item.filename));

  console.log(uploadedImg);

  const email = req.payload;
  console.log(email);

  try {
    const existingBook = await books.findOne({ title, userMail: email });

    if (existingBook) {
      res.status(401).json("You have already added this book");
    } else {
      const newBook = new books({
        title,
        author,
        noofpages,
        imageurl,
        price,
        dprice,
        abstract,
        publisher,
        language,
        isbn,
        category,
        uploadedImg,
        userMail: email,
        status: "pending",
      });

      await newBook.save();
      res.status(200).json(newBook);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// to get all home books
exports.getHomeBookController = async (req, res) => {
  console.log("Inside get home book controller");

  try {
    const homeBooks = await books.find().sort({ _id: -1 }).limit(4);
    res.status(200).json(homeBooks);
  } catch (err) {
    res.status(500).json(err);
  }
};

// to get all books
exports.getAllBookController = async (req, res) => {
  console.log("inside getAllBook controller");
  console.log(req.query.search);
  const searchKey = req.query.search;
  const email = req.payload;
  try {
    const query = {
      title: {
        $regex: searchKey,
        $options: "i",
      },
      userMail: { $ne: email },
    };
    const allBooks = await books.find(query);
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(500).json(err);
  }
};

// to get a book
exports.getABookController = async (req, res) => {
  console.log("inside getABook controller");

  const { id } = req.params;
  console.log(id);

  try {
    const aBook = await books.findOne({ _id: id });
    res.status(200).json(aBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ------------------Admin------------------

// to get all books - pending status
exports.getAllBookAdminController = async (req, res) => {
  console.log("inside getAllBookAdminController");
  try {
    const allBooks = await books.find();
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(500).json(err);
  }
};

// to approve books status approved.
exports.approveBookController = async (req, res) => {
  console.log("inside approve Book Controller");
  const {
    _id, title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category, uploadedImg, status, userMail, brought,
  } = req.body;
  console.log(
    _id, title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category, uploadedImg, status, userMail, brought
  );
  try {
    const updatedBook = await books.findByIdAndUpdate(
      { _id },
      {
        _id, title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category, uploadedImg, status: "approved", userMail, brought,
      },{new:true}
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
};
