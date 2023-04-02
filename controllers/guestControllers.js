const bcrypt = require('bcrypt');

const render = require('../lib/render');
const GuestPage = require('../views/GuestPage');

const { User } = require('../db/models');

exports.renderGuestPage = (req, res) => {
  render(GuestPage, {}, res);
};

exports.signInAndSendStatus = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await User.findOne({ where: { userEmail } });
    if (!user) return res.sendStatus(203);

    const isValidPassword = await bcrypt.compare(userPassword, user.password);
    if (!isValidPassword) return res.sendStatus(203);

    req.session.user = { id: user.id, name: user.userName };

    res.sendStatus(200);
  } catch (error) {
    console.log('\x1b[31m', 'SignIn Error:', error);
  }
};

exports.signUpAndSendStatus = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    const hashPass = await bcrypt.hash(userPassword, 10);

    const user = await User.create({ userName, userEmail, password: hashPass });

    req.session.user = { id: user.id, name: user.userName };

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(203);
  }
};
