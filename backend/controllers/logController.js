const CommunicationLog = require("../models/CommunicationLog");

exports.getLogs = async (req, res) => {
  try {
    const logs = await CommunicationLog.find().populate("campaign customer");
    res.json(logs);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
