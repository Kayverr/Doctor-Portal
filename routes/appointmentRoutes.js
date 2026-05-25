import express from "express";

import {
  fetchAppointments,
  fetchPatientInfoPerAppointment
} from "../controllers/appointmentController.js";

import {
  sendCustomNotification
} from "../services/notificationService.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetch doctor appointments
router.get("/Fetch", authMiddleware, fetchAppointments);

// Accept appointment
export const accept = async (
    req,
    res
) => {

    try {

        const updated =
        await acceptAppointment(
            req.params.id,
            req.token
        );

        // Trigger notification
        await sendCustomNotification(
            {
                title:
                "Appointment Accepted",

                message:
                "Your appointment has been accepted.",

                appointmentId:
                req.params.id
            },
            req.token
        );

        res.json(updated);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Complete appointment
export const complete = async (
    req,
    res
) => {

    try {

        const updated =
        await completeAppointment(
            req.params.id,
            req.token
        );

        // Trigger notification
        await sendCustomNotification(
            {
                title:
                "Appointment Completed",

                message:
                "Your appointment has been completed.",

                appointmentId:
                req.params.id
            },
            req.token
        );

        res.json(updated);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

router.get("/patient/:patientId", authMiddleware, fetchPatientInfoPerAppointment);

export default router;