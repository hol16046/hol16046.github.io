// Calculate wind chill using temperature and wind speed
function windChill(t, s) {
    if (t > 50) {
        return "N/A"
    } else if (s < 3) {
        return "N/A"
    } else {
    return Math.round(35.74 + 0.6215 * t - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16))) + "&deg; F"; 
    }
}

window.onload = function compute() {
    // Get the values.
    var tempF = parseFloat(document.getElementById('temp').textContent);
    var speed = parseFloat(document.getElementById('wind').textContent);

    // Call function windChill, store variable. 
    var chill = windChill(tempF, speed);
            
    // Output to page.
    var windC = document.getElementById('wchill');
    windC.innerHTML = chill;
}