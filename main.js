const date = new Date;
        if (date.getDate == 1 && date.getMonth == 0) {
            document.getElementById("print").innerHTML = "Yes";
        } else {
            document.getElementById("print").innerHTML = "No";
        }