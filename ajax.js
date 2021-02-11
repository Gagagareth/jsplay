// https://github.com/node-fetch/node-fetch
// npm i node-fetch --save
const fetch = require("node-fetch");

// Also https://github.com/lquixada/cross-fetch
// npm install --save cross-fetch
// Also https://www.npmjs.com/package/isomorphic-fetch
// npm install --save isomorphic-fetch

//axios.get('/Home/GetMot?registration=' + val)
//    .then(function (response) {
//        // handle success
//        console.log('success');
//        console.log(response);
//    })
//    .catch(function (error) {
//        // handle error
//        console.log('error');
//        console.log(error);
//    })
//    .then(function (response) {
//        // always executed
//        console.log('then');
//        console.log(response);
//    });



//var jqxhr = $.getJSON('/Home/GetMot', { registration: val }, function (data) {
//    console.log("ajax success");
//    console.log(data);
//})
//.done(function (data) {
//    console.log("second success");
//    console.log(data);
//})
//.fail(function (data) {
//    console.log("error");
//    console.log(data);
//})
//.always(function (data) {
//    console.log("complete");
//    console.log(data);
//});

////Perform other work here ... Set another completion function for the request above
//jqxhr.always(function () {
//    console.log("second complete");
//});



//var val = 'MK07 YFO';
//ajaxGetMots(val.replace(/[^a-zA-Z0-9]/g, ''));

//var onSuccess = function(data, status, jqXHR) {
//    console.log('Initial data');
//    console.log(data);
//}

//var onError = function(data) {
//    console.log('Error data');
//    console.log(data);
//}

//var onComplete = function(data) {
//    console.log('Completed data');
//    console.log(data);
//}

//$(document).ready(function () {
    //$(document).on("click", "#send", function () {
    //    console.log('onclick fired');
    //    var val = $("#registration").val().replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    //    //ajaxGetMots(val, onSuccess, onError, onComplete);
    //    $.ajax({
    //        type: "GET",
    //        url: 'https://localhost:44374/Home/Home/GetMotTestResults?registration=' + val,
    //        dataType: "json",
    //        success: function (data) {
    //            $("#resultsDiv").text("Yes!");
    //            //alert('alert!');
    //            //console.log('Initial data');
    //            //console.log(data);
    //        },
    //        error: onError,
    //        complete: onComplete
    //    });

        //axios.get('/Home/GetMotTestResults?registration=' + val)
        //.then(function (response) {
        //    // handle success
        //    console.log('success');
        //    console.log(response);
        //})
        //.catch(function (error) {
        //    // handle error
        //    console.log('error');
        //    console.log(error);
        //})
        //.then(function (response) {
        //    // always executed
        //    console.log('then');
        //    console.log(response);
        //});

    //});

//    $(document).on("input", "#registration", function (e) {
//        var v = e.target.value.replace(/[^a-zA-Z 0-9]/g, '').toUpperCase();
//        $(this).val(v)
//        //console.log('registration = ' + v);
//    });
//});

$.ajax({
    type: "GET",
    url: '/Home/GetMotTestResults?registration=' + val,
    dataType: "json",
    success: onSuccess,
    error: function (data) {
        console.log('Error data');
        console.log(data);
    },
    complete: onComplete = function (data) {
        console.log('Completed data');
        console.log(data);
    }
}).done(function (data, status, jqXHR) {
    console.log('Initial data');
    console.log(data);
});
if (event) {
    event.preventDefault();
}
