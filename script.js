function convertTemperature() 
{
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitSpan = document.getElementById("fahrenheit");
    if (celsiusInput.value === "") 
    {
        fahrenheitSpan.innerText = "---";
    } 
    else 
    {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9/5) + 32;
        fahrenheitSpan.innerText = fahrenheit.toFixed(2);
    }
}
