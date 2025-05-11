const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user.id });
    res.json(campaigns);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
