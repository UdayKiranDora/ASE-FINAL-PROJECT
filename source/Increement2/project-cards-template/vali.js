/**
 * Created by vbmxb on 12/5/2016.
 */
function vali() {
    //   window.alert("ef");
    if(localStorage)
    {
        var valiu    = localStorage.getItem("g1");
        var valip    = localStorage.getItem("h1");


    }
    //  var valiu = document.getElementById("form-username").value;
    // var valip = document.getElementById("form-password").value;
    /*    if(valiu==""||valiu==null,valip==""||valip==null)
     {
     window.alert("login fail: field details empty");
     return false;
     }*/
    // var valiu = document.getElementById("form-username").value;
    //var valip = document.getElementById("form-password").value;
    if(valiu==""||valiu==null,valip==""||valip==null)
    {
        window.alert("login fail: field details empty");
        return false;
    }

    var j=0;

    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.mongolab.com/api/1/databases/sample/collections/rak?apiKey=hv9Vbo5nEe_ArJD8NgrwdyFg476l4E-o";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {
        var arr = JSON.parse(response);
        var i;
        var valiu = document.getElementById("form-username").value;
        var valip = document.getElementById("form-password").value;
        var arr1 = JSON.parse(response);
        for (i = 0; i < arr1.length; i++) {
            hello = arr[i].name;
            hey = arr[i].password;
            if (valiu == hello && valip == hey) {

                window.alert("login success");

                window.location="Increement2/project-cards-template/scss/addquehome.html";
                j=1;
                return true;

            }
            else {

                window.alert("login fail");

                j=0;
                return false;
            }
        }
    }

    //if (j==1){return true;}
    //else {return false;}
}