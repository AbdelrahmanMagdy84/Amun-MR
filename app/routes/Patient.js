const express = require("express");

module.exports = (app) => {
    const patientsController = require('../controllers/PatientsController.js');
    const router = express.Router()
    const TokenMiddleware = require("../middleware/TokenMiddleware");
    const Validations = require("../middleware/Validations");


    router.post("/", Validations.APIValidator(Validations.createPatientSchema), patientsController.createPatient);
    router.post("/auth", Validations.APIValidator(Validations.loginPatientSchema), patientsController.login);

    router.patch("/:id", TokenMiddleware.AuthorizeToken, Validations.APIValidator(Validations.updatePatientSchema), patientsController.update );

        
    app.use("/api/v1/patients", router)
    
}
