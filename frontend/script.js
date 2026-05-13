const API =
"http://localhost:3000";

async function bookAppointment(){

    const patientName =

    document.getElementById(
        "patientName"
    ).value;

    const doctorName =

    document.getElementById(
        "doctorName"
    ).value;

    const appointmentDate =

    document.getElementById(
        "appointmentDate"
    ).value;

    const response = await fetch(

        API +
        "/appointments/book",

        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },

            body:JSON.stringify({

                patientName,

                doctorName,

                appointmentDate

            })

        }

    );

    const data =
    await response.json();

    alert(data.message);

}

async function sendMessage(){

    const message =

    document.getElementById(
        "message"
    ).value;

    const response = await fetch(

        API +
        "/messages/send",

        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },

            body:JSON.stringify({

                message

            })

        }

    );

    const data =
    await response.json();

    alert(data.message);

}

async function createPrescription(){

    const medicine =

    document.getElementById(
        "medicine"
    ).value;

    const dosage =

    document.getElementById(
        "dosage"
    ).value;

    const response = await fetch(

        API +
        "/prescriptions/create",

        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },

            body:JSON.stringify({

                medicine,

                dosage

            })

        }

    );

    const data =
    await response.json();

    alert(data.message);

}