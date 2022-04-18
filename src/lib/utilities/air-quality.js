export const calculateAirPollutionLevel = v => {
    if (v > 0 && v <= 49) return "Livable"

    else if (v >= 50 && v < 99) return "Moderate"

    else if(v > 100) return "Unsafe"
    
    else return "Unable To Quantify"
}