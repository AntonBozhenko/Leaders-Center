const render = require('../lib/render');
const MainPage = require('../views/MainPage');

const { Applicant } = require('../db/models');

exports.renderMainPage = async (req, res) => {
  const { id: userId, name } = req.session.user;
  try {
    const appl = await Applicant.findAll({ where: { userId }, order: ['id'] });
    render(MainPage, { appl, name }, res);
  } catch (err) {
    console.log('Не могу получить доступ к Application', err);
  }
};

exports.logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.clearCookie('sid');
    res.sendStatus(200);
  });
};
