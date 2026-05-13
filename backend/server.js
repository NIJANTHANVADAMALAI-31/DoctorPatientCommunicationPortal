const express = require("express");

const cors = require("cors");

const appointmentRoutes =
require("./routes/appointments");

const messageRoutes =
require("./routes/messages");

const prescriptionRoutes =
require("./routes/prescriptions");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/appointments",
appointmentRoutes);

app.use("/messages",
messageRoutes);

app.use("/prescriptions",
prescriptionRoutes);

app.listen(3000, () => {

    console.log(
        "Server Running on Port 3000"
    );

});