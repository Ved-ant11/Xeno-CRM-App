const jwt = require("jsonwebtoken");

exports.googleCallback = (req, res) => {
  const payload = { user: { id: req.user.id } };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
    (err, token) => {
      if (err) throw err;
      // You can redirect or send token as JSON
      res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
    }
  );
};
