// add book
exports.addBookController = async (req, res) => {
    console.log("Inside addbook controller");

    console.log(req.body);
    console.log(req.files);

    res.status(200).json("req recieved")
};
