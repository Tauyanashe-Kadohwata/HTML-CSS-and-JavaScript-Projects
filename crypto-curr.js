document.addEventListener("DOMContentLoaded", function() {
    var btc = document.getElementById("bitcoin");
    var eth = document.getElementById("ethereum");
    var teth = document.getElementById("tether");

    if (!btc || !eth || !teth) {
        console.error("One or more elements not found in the DOM.");
        return;
    }

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd")
        .then(response => response.json())
        .then(data => {
            btc.innerHTML = `${data.bitcoin.usd.toLocaleString()}`;
            eth.innerHTML = `${data.ethereum.usd.toLocaleString()}`;
            teth.innerHTML = `${data.tether.usd.toLocaleString()}`;
        })
        .catch(error => console.error("Error fetching data:", error));
});
