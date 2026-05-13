const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/book", (req, res) => {

    const {

        patientName,

        doctorName,

        appointmentDate

    } = req.body;

    const sql = `

        INSERT INTO appointments

        (patient_name,
         doctor_name,
         appointment_date)

        VALUES (?, ?, ?)

    `;

    db.query(

        sql,

        [
            patientName,
            doctorName,
            appointmentDate
        ],

        (err, result) => {

            if (err) {

                res.json({

                    message:
                    "Booking Failed"

                });

            } else {

                res.json({

                    message:
                    "Appointment Booked Successfully"

                });

            }

        }

    );

});

module.exports = router;