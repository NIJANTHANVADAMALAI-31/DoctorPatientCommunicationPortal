const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/send", (req, res) => {

    const { message } = req.body;

    const sql = `

        INSERT INTO messages(message)

        VALUES(?)

    `;

    db.query(

        sql,

        [message],

        (err, result) => {

            if (err) {

                res.json({

                    message:
                    "Message Failed"

                });

            } else {

                res.json({

                    message:
                    "Message Sent"

                });

            }

        }

    );

});

module.exports = router;