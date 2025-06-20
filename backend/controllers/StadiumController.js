const asyncWrapper = require("../middlewares/asyncWrapper.js");
const Stadium = require("../models/Stadium");

const createStadium = asyncWrapper(async (req, res) => {
  const { name } = req.body;
  const { longitude, latitude } = req.body.location;

  if (!name) {
    return res.status(400).json({ message: "All fields are required" });
  }

 const stadium = await Stadium.create({
    name,
    location: { longitude, latitude },
  });

  return res.status(201).json({
    message: "Stadium created successfully",
    data: stadium,
  });
});

const deleteStadium = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const stadium = await Stadium.deleteOne({ _id: id });
  if (!stadium) {
    return res.status(404).json({ message: "Stadium not found" });
  }
  return res.status(200).json({
    message: "stadium Deleted Successfully",
  });
});

const getStadiums = asyncWrapper(async (req, res) => {
  const stadiums = await Stadium.find(
    {},
    { password: false, __v: false, token: false }
  )

  return res.status(200).json({
    message: "success",
    data: stadiums,
  });
});

module.exports = {
  createStadium,
  deleteStadium,
  getStadiums,
};
