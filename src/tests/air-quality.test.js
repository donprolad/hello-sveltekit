import { calculateAirPollutionLevel } from '../lib/utilities/air-quality'

test('Reports the required air pollution level based on different numbers', () => {
    expect(calculateAirPollutionLevel(49)).toBe("Livable")
    expect(calculateAirPollutionLevel(50)).toBe("Moderate")
    expect(calculateAirPollutionLevel(70)).toBe("Moderate")
    expect(calculateAirPollutionLevel(120)).toBe("Unsafe")
    expect(calculateAirPollutionLevel(0)).toBe("Unable To Quantify")
    expect(calculateAirPollutionLevel(-1)).toBe("Unable To Quantify")
})