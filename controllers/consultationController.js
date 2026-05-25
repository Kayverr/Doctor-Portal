import {
  createConsultation,
  updateConsultation,
  getPatientConsultations
} from "../services/consultationService.js";

// Fetch consultation history of patient
export const fetchPatientConsultations =
async (req, res) => {

    try {

        const consultations =
        await getPatientConsultations(
            req.params.patientId,
            req.token
        );

        res.json(consultations);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Create consultation notes
export const create =
async (req, res) => {

    try {

        const consultation =
        await createConsultation(
            {
                ...req.body,
                doctorId: req.user.id
            },
            req.token
        );

        res.json(consultation);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update consultation notes
export const update =
async (req, res) => {

    try {

        const updated =
        await updateConsultation(
            req.params.id,
            req.body,
            req.token
        );

        res.json(updated);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};