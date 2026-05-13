const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/create", (req, res) => {

    const {

        medicine,

        dosage

    } = req.body;

    const sql = `

        INSERT INTO prescriptions

        (medicine, dosage)

        VALUES (?, ?)

    `;

    db.query(

        sql,

        [medicine, dosage],

        (err, result) => {

            if (err) {

                res.json({

                    message:
                    "Prescription Failed"

                });

            } else {

                res.json({

                    message:
                    "Prescription Generated"

                });

            }

        }

    );

});

module.exports = router;