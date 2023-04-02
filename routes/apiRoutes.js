const express = require('express');

const multer = require('multer');

const uploadPdf = multer({ dest: 'public/files/pdf/' });
const uploadPhoto = multer({ dest: 'public/files/photo/' });

const route = express.Router();

const {
  newApplicants, getAllApplicants, getApplicant, updateStageApplicant, createApplicant, upadeFoto,
} = require('../controllers/apiControllers');

route.get('/applicant/:id', getApplicant);
route.put('/applicant', updateStageApplicant);
route.post('/applicant', uploadPdf.single('pdf'), createApplicant);
route.patch('/applicant', uploadPhoto.single('applPhoto'), upadeFoto);
route.get('/allapplicants', getAllApplicants);
route.get('/filter/:id', newApplicants);

module.exports = route;
