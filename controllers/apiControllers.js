const fs = require('fs').promises;

const {
  Applicant, Stage,
} = require('../db/models');

exports.newApplicants = async (req, res) => {
  const { id: userId } = req.session.user;
  const { id: stageId } = req.params;

  try {
    const applicants = await Applicant.findAll({ where: { stageId, userId }, order: ['id'] });
    res.json(applicants);
  } catch (err) {
    console.log('Не могу вывести новых соискателей', err);
  }
};

exports.getApplicant = async (req, res) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.findOne({ where: { id }, include: { model: Stage } });
    res.json(applicant);
  } catch (err) {
    console.log('Не могу вывести соискателя', err);
  }
};

exports.getAllApplicants = async (req, res) => {
  const { id: userId } = req.session.user;
  try {
    const appl = await Applicant.findAll({ where: { userId }, order: ['id'] });
    res.json(appl);
  } catch (err) {
    console.log('Не могу вывести новых соискателей', err);
  }
};

exports.updateStageApplicant = async (req, res) => {
  const { id, stageId } = req.body;
  try {
    await Applicant.update({ stageId }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log('', error);
  }
};

exports.createApplicant = async (req, res) => {
  const { id: userId } = req.session.user;
  const {
    applName, applLastName, experience, phone, applEmail, about, position, wage, location,
  } = req.body;
  let { stageId } = req.body;
  const pdf = req.file?.path;

  if (stageId === 'На каком этапе соискатель') stageId = 1;

  try {
    await Applicant.create({
      applPhoto: null,
      applName,
      applLastName,
      experience,
      phone,
      pdf,
      position,
      wage,
      location,
      applEmail,
      about,
      stageId,
      userId,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

exports.upadeFoto = async (req, res) => {
  const {
    id,
  } = req.body;
  const applPhoto = req.file?.path;

  console.log(id, applPhoto);

  try {
    const oldPhoto = await Applicant.findOne({ where: { id }, attributes: ['applPhoto'] });
    await Applicant.update({ applPhoto }, { where: { id } });
    if (oldPhoto.applPhoto) {
      await fs.rm(oldPhoto.applPhoto);
    }
    res.json({ applPhoto });
  } catch (error) {
    console.log(error);
  }
};
