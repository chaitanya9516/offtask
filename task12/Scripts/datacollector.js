




function main() {

    var fname = document.getElementById('fname');
    var firstName = fname.value;
    console.log(fname.value);

    var lname = document.getElementById('lname');
    var lastName = lname.value;
    console.log(lname.value);

    var radio = displayRadioValue()
    var cb = checkCheckbox()

    var Salary = document.getElementById('Salary');
    console.log(Salary.value);
    
    var e = document.getElementById("Departments");
    //var emp_Id = e.value;
    console.log(e.value);

    var Data = {
        firstname: fname.value,
        lastname: lastName,
        gender: radio,
        skills: cb,
        salary: Salary.value,
        department: e.value,
        depid: e.value
    }

    $.ajax({
        url: "/home/index",
        type: "POST",
        data: Data,
        success: function (data) {
            console.log(data);
            //let a = data.dName;
            //let b = data.trackingurl;

            //document.getElementsByTagName("p")[0].innerHTML = "<br /><strong>Shortened URL:</strong>" + a;
            //document.getElementsByTagName("p")[1].innerHTML = "<strong>Tracking URL :</strong>" + b;
        },
        error: function (err) {

        }
    });

}



function displayRadioValue() {
            var ele = document.getElementsByName('gender');
              
            for(i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    console.log(ele[i].value);
                var a = ele[i].value;
                return a
            }
}

function checkCheckbox() {
    var Csharp = document.getElementById("C#");
    var MVC = document.getElementById("MVC");
    var JS = document.getElementById("JS");

    //for validatation
    //if (yes.checked == true && no.checked == true) {
    //    return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";
    //}

    if (Csharp.checked == true) {
        var Csharp2 = document.getElementById("C#").value;
        console.log(Csharp2)
        return Csharp2
       
    }
    else if (MVC.checked == true) {
        var MVC2 = document.getElementById("MVC").value;
        console.log(MVC2)
        return MVC2

       
    }
    else if (JS.checked == true) {
        var JS2 = document.getElementById("myCheck2").value;
        console.log(JS2)
        return JS2
          
    }
}  


