import express from "express";

import {
  fetchPatientConsultations,
  create,
  update
} from "../controllers/consultationController.js";

import authMiddleware
from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetch consultation history
router.get(
  "/history/:patientId",
  authMiddleware,
  fetchPatientConsultations
);

// Create consultation
router.post(
  "/create",
  authMiddleware,
  create
);

// Update consultation
router.put(
  "/update/:id",
  authMiddleware,
  update
);

export default router;