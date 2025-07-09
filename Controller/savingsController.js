const Saving = require("../Model/savingsgoal");

exports.getSaving = async (req, res) => {
  try {
    const data = await Saving.find();
    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};

exports.updateSaving = async (req, res) => {
  try {
    const data = await Saving.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res
        .status(404)
        .json({ errors: true, message: "Saving goal not found" });
    }

    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};

exports.createSaving = async (req, res) => {
  try {
    const data = await Saving.create({...req.body,userId:req.user.id});
    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};

exports.deleteSaving = async (req, res) => {
  try {
    const data = await Saving.findByIdAndDelete(req.params.id);
    if (!data) {
      return res
        .status(404)
        .json({ errors: true, message: "Saving goal not found" });
    }

    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};
