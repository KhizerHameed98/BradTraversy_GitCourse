const errorHandler = async (err, req, res, next) => {
  console.log(err.stack.red);

  res.status(500).json({});
};

module.exports = errorHandler;
