window.onload = function(){

    document.getElementById("calculateTotalButton").addEventListener("click", updateTip);

    function updateTip() {

        var originalPrice = document.getElementById("price").value;
        var updatedTip = originalPrice * document.getElementById("tip_percentage").value / 100;


        document.getElementById("calculatedTip").innerHTML = "Calculated Tip: $" + updatedTip;

        var finalPrice = (updatedTip * 1) + (originalPrice * 1)
        document.getElementById("total_price").innerHTML = "Total Price: $" + finalPrice;
    }

}