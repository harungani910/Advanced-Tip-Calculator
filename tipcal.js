var harun = {
    fullName: "Harun Abdi",
    bills: [42, 48, 124, 180, 268,],



    calctips: function () {
        this.tips = [];
        this.finalbills = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;


            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.20;

            }


            else if (bill >= 50 && bill < 200) {
                percentage = 0.15;

            }

            else {
                percentage = 0.10;
            }


            this.tips[i] = bill * percentage;
            this.finalbills[i] = bill * percentage + bill;

        }

    }
}

harun.calctips();



function check() {
    document.getElementById("less").innerHTML = "$ " + harun.finalbills[0];
    document.getElementById("between").innerHTML = "$ " + harun.finalbills[1];
    document.getElementById("more").innerHTML = "$ " + harun.finalbills[2];

}
