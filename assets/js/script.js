/* ------------------------------------ My Portfolio js file ------------------------------------------------ */
function sendMail() {
    var params = {

        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("msg").value
    }

    emailjs.send("service_dsacr36","template_ez72rkn",params).then(function (res) {
        alert("Success!" + res.status);

    })
}
/* ------------------------ Projects Section -------------------- */

$('#btnPOSProject').on('click', function () {
    $("#btnPOSProject>a").attr("target", "_blank");
    $("#btnPOSProject>a").attr("href", "https://github.com/Ishini-Edirisinghe/POS-System-UIs");
});

$('#btnHostelProject').on('click', function () {
    $("#btnHostelProject>a").attr("target", "_blank");
    $("#btnHostelProject>a").attr("href", "https://github.com/Ishini-Edirisinghe/Hostel-Management-System-Using-Hibernate");
});

$('#btnHotelReservationProject').on('click', function () {
    $("#btnHotelReservationProject>a").attr("target", "_blank");
    $("#btnHotelReservationProject>a").attr("href", "https://github.com/Ishini-Edirisinghe/little-sunshine-preschool");
});

/* ------------------------ Assignments Section -------------------- */
$("#btnAssignmentsViewMore").on("click", function () {
    $("#btnAssignmentsViewMore>a").attr("target", "_blank");
    $("#btnAssignmentsViewMore>a").attr("href", "pages/assignments.html");
});

$('#btnAssignment-01').on('click', function () {
    $("#btnAssignment-01>a").attr("target", "_blank");
    $("#btnAssignment-01>a").attr("href", "assignments/JS/Calculator/index.html");
});

$('#btnAssignment-02').on('click', function () {
    $("#btnAssignment-02>a").attr("target", "_blank");
    $("#btnAssignment-02>a").attr("href", "assignments/JS/Game/index.html");
});

$('#btnAssignment-03').on('click', function () {
    $("#btnAssignment-03>a").attr("target", "_blank");
    $("#btnAssignment-03>a").attr("href", "assignments/css/Animations/case_04/index.html");
});

/*
---------------------------------*/
