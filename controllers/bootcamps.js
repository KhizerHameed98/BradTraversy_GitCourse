// @desc       Get all bootcamps
//route        GET /api/v1/bootcamps
//@access      Public

const Bootcamp = require("../models/Bootcamp");

exports.getAllBootCamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    if (!bootcamp) {
      return res.status(400).json({ success: false, message: "No data found" });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc       Get Single bootcamps
//route        GET /api/v1/bootcamps/:id
//@access      Public

exports.getSingleBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    // const bootcamp = await Bootcamp.findOne({ name: "ModernTech Bootcamp" });
    // if (!bootcamp) {
    //   return res.send(400).json({
    //     success: false,
    //     message: "No Bootcamp found",
    //   });
    // }
    if (!bootcamp) {
      return res.status(400).json({ success: false, message: "No data found" });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    //   error: error.message,
    // });
    next(error);
  }
};

// @desc       Create bootcamp
//route        POST /api/v1/bootcamps
//@access      Private

exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    //resources added 201

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// @desc       Update bootcamp
//route        PUT /api/v1/bootcamps/:id
//@access      Private

exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false, message: "No data found" });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc      Delete bootcamp
//route        DELETE /api/v1/bootcamps/:id
//@access      Private

exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    // const bootcamp = await Bootcamp.deleteMany({ housing: true });

    if (!bootcamp) {
      return res.status(400).json({ success: false, message: "No data found" });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
