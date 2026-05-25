import {
  getDoctorAppointments,
  acceptAppointment,
  completeAppointment,
  getPatientAppointmentInfo
} from "../services/appointmentService.js";
// Fetch all appointments
export const fetchAppointments =
async (req, res) => {

  try {

    const doctorId =
    req.user.id;

    const appointments =
    await getDoctorAppointments(
      doctorId,
      req.token
    );

    res.json(appointments);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};
// Fetch daily appointments
export const fetchDailyAppointments =
async (req, res) => {

  try {

    const appointments =
    await getDoctorAppointments(
      req.user.id,
      req.token
    );

    const today =
    new Date();

    const dailyAppointments =
    appointments.filter(
      (appointment) => {

        const appointmentDate =
        new Date(
          appointment.appointmentDate
        );

        return (
          appointmentDate
          .toDateString()
          ===
          today.toDateString()
        );

      }
    );

    res.json(dailyAppointments);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};
// Fetch weekly appointments
export const fetchWeeklyAppointments =
async (req, res) => {

  try {

    const appointments =
    await getDoctorAppointments(
      req.user.id,
      req.token
    );

    const today =
    new Date();

    const nextWeek =
    new Date();

    nextWeek.setDate(
      today.getDate() + 7
    );

    const weeklyAppointments =
    appointments.filter(
      (appointment) => {

        const appointmentDate =
        new Date(
          appointment.appointmentDate
        );

        return (
          appointmentDate >= today &&
          appointmentDate <= nextWeek
        );

      }
    );

    res.json(weeklyAppointments);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};
// Accept appointment
export const accept =
async (req, res) => {

  try {

    const updated =
    await acceptAppointment(
      req.params.id,
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
export const complete =
async (req, res) => {

  try {

    const updated =
    await completeAppointment(
      req.params.id,
      req.token
    );

    res.json(updated);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};
export const fetchPatientInfoPerAppointment =
async (req, res) => {

    try {

        const data =
        await getPatientAppointmentInfo(
            req.params.patientId,
            req.token
        );

        res.json(data);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};