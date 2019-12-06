var harun = {
    fullName: "Harun Abdi",
    bills: [124, 48, 268, 180, 42],

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
console.log(harun);
var element = document.getElementById("demo");

element.harun;
