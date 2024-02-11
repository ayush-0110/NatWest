const jsonData = {
  "Uttar Pradesh": {
    avg_temp_state: 29.46,
    population: 24.14,
    cities: {
      "Agra": {
        max_temp: 32.8,
        min_temp: 6.0,
      },
      "Aligarh": {
        max_temp: 32.7,
        min_temp: 8.3,
      },
      "Allahabad": {
        max_temp: 30.7,
        min_temp: 8.4,
      },
      "Amethi": {
        max_temp: 31.9,
        min_temp: 8.8,
      },
      "Auraiya": {
        max_temp: 30.4,
        min_temp: 9.1,
      },
    },
  },
  "Rajasthan": {
    avg_temp_state: 37.70,
    population: 8.36,
    cities: {
      "Ajmer": {
        max_temp: 30.6,
        min_temp: 10.4,
      },
      "Alwar": {
        max_temp: 31.6,
        min_temp: 8.8,
      },
      "Banswara": {
        max_temp: 26.6,
        min_temp: 14.9,
      },
      "Baran": {
        max_temp: 29.8,
        min_temp: 12.2,
      },
      "Barmer": {
        max_temp: 33.3,
        min_temp: 13.4,
      },
    },
  },
  "Bihar": {
    avg_temp_state: 29.51,
    population: 13.1,
    cities: {
      "Araria": {
        max_temp: 32.1,
        min_temp: 11.9,
      },
      "Arwal": {
        max_temp: 34.0,
        min_temp: 9.0,
      },
      "Ballia": {
        max_temp: 32.9,
        min_temp: 8.5,
      },
      "Banka": {
        max_temp: 32.9,
        min_temp: 10.3,
      },
      "Begusarai": {
        max_temp: 33.2,
        min_temp: 9.3,
      },
    },
  },
  "Maharashtra": {
    avg_temp_state: 22.40,
    population: 11.23,
    cities: {
      "Ahmadnagar": {
        max_temp: 27.1,
        min_temp: 17.6,
      },
      "Akola": {
        max_temp: 28.7,
        min_temp: 16.8,
      },
      "Amravati": {
        max_temp: 28.8,
        min_temp: 15.5,
      },
      "Aurangabad": {
        max_temp: 26.6,
        min_temp: 15.0,
      },
      "Bhandara": {
        max_temp: 28.6,
        min_temp: 13.1,
      },
    },
  },
  "Karnataka": {
    avg_temp_state: 21.82,
    population: 6.41,
    cities: {
      "Bagalkot": {
        max_temp: 29.1,
        min_temp: 18.7,
      },
      "Bangalore": {
        max_temp: 30.0,
        min_temp: 16.0,
      },
      "Belgaum": {
        max_temp: 25.6,
        min_temp: 16.0,
      },
      "Bellary": {
        max_temp: 30.4,
        min_temp: 18.0,
      },
      "Bidar": {
        max_temp: 27.8,
        min_temp: 16.5,
      },
    },
  },
  "Assam": {
    avg_temp_state: 18.94,
    population: 3.66,
    cities: {
      "Barpeta": {
        max_temp: 30.9,
        min_temp: 12.9,
      },
      "Bongaigaon": {
        max_temp: 30.9,
        min_temp: 13.0,
      },
      "Darrang": {
        max_temp: 29.2,
        min_temp: 12.2,
      },
      "Dhalai": {
        max_temp: 30.4,
        min_temp: 10.3,
      },
      "Dhemaji": {
        max_temp: 31.0,
        min_temp: 12.0,
      },
    },
  },
  "Gujarat": {
    avg_temp_state: 23.43,
    population: 7.07,
    cities: {
      "Amreli": {
        max_temp: 30.2,
        min_temp: 18.1,
      },
      "Anand": {
        max_temp: 30.3,
        min_temp: 15.9,
      },
      "Bharuch": {
        max_temp: 29.7,
        min_temp: 18.1,
      },
      "Bhavnagar": {
        max_temp: 30.7,
        min_temp: 20.0,
      },
      "Dohad": {
        max_temp: 27.3,
        min_temp: 15.7,
      },
    },
  },
  "West Bengal": {
    avg_temp_state: 20.76,
    population: 10.42,
    cities: {
      "Baksa Duar": {
        max_temp: 24.4,
        min_temp: 7.3,
      },
      "Bankura": {
        max_temp: 33.8,
        min_temp: 13.0,
      },
      "Barddhaman": {
        max_temp: 33.6,
        min_temp: 12.6,
      },
      "Bishnupur": {
        max_temp: 34.0,
        min_temp: 12.0,
      },
      "Biswanath": {
        max_temp: 33.5,
        min_temp: 15.8,
      },
    },
  },
  "J & K": {
    avg_temp_state: 7.29,
    population: 1.56,
    cities: {
      "Anantnag": {
        max_temp: 20.7,
        min_temp: -6.8,
      },
      "Badgam": {
        max_temp: 20.1,
        min_temp: -5.5,
      },
      "Baramula": {
        max_temp: 22.8,
        min_temp: -6.1,
      },
      "Doda": {
        max_temp: 19.8,
        min_temp: -6.4,
      },
      "Ganderbal": {
        max_temp: 20.1,
        min_temp: -5.5,
      },
    },
  },
  "Madhya Pradesh": {
    avg_temp_state: 19.18,
    population: 8.69,
    cities: {
      "Agar": {
        max_temp: 26.9,
        min_temp: 13.6,
      },
      "Alirajpur": {
        max_temp: 28.5,
        min_temp: 16.8,
      },
      "Anuppur": {
        max_temp: 27.6,
        min_temp: 9.6,
      },
      "Ashoknagar": {
        max_temp: 27.5,
        min_temp: 10.8,
      },
      "Balaghat": {
        max_temp: 28.3,
        min_temp: 12.5,
      },
    },
  },
};

export const stateDataArray = Object.entries(jsonData).map(
  ([stateName, stateInfo]) => {
    return {
      name: stateName,
      avgTemp: stateInfo.avg_temp_state,
      population: stateInfo.population,
      cities: stateInfo.cities,
    };
  }
);
