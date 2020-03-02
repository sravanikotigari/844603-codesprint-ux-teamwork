
    function EnableDisableTextBox() {
        var  Tname= document.getElementById("Tname");
        var  Trainername = document.getElementById("Tn");
        Tn.disabled = Tname.checked ? false : true;
        if (!Tn.disabled) {
            Tn.focus();
        }
    }




