function isChildStunted(ageInMonths, sex, heightInCm, weightInKg) {
    // Define the L, M, and S values for the child's sex
    const sexValues = {
      'male': {
        'L': -0.352,
        'M': 77.59,
        'S': 0.112,
      },
      'female': {
        'L': -0.385,
        'M': 73.79,
        'S': 0.109,
      },
    };
  
    // Calculate the Z-score for the child's height-for-age
    const L = sexValues[sex]['L'];
    const M = sexValues[sex]['M'];
    const S = sexValues[sex]['S'];
    const heightForAge = ((heightInCm / M) ** L - 1) / (S * L);
    const ageInYears = ageInMonths / 12;
    const ageMonthsRounded = Math.round(ageInMonths / 6) * 6;
    const ageIndex = ageMonthsRounded.toString();
  
    // Get the median HAZ score for the child's age
    const medianHAZ = {
      'male': {
        '0': -2.004,
        '6': -1.788,
        '12': -1.556,
        '18': -1.321,
        '24': -1.093,
        '30': -0.880,
        '36': -0.689,
        '42': -0.520,
        '48': -0.373,
        '54': -0.245,
        '60': -0.126,
        '66': -0.013,
        '72': 0.091,
        '78': 0.186,
        '84': 0.272,
        '90': 0.348,
        '96': 0.416,
      },
      'female': {
        '0': -1.974,
        '6': -1.771,
        '12': -1.553,
        '18': -1.332,
        '24': -1.107,
        '30': -0.897,
        '36': -0.702,
        '42': -0.527,
        '48': -0.376,
        '54': -0.244,
        '60': -0.124,
        '66': -0.011,
        '72': 0.090,
        '78': 0.182,
        '84': 0.266,
        '90': 0.343,
        '96': 0.412,
      },
    };
    
    // Get the median HAZ score for the child's age
    const medianHAZScore = medianHAZ[sex][ageIndex];
  
    // Calculate the Z-score for the child's weight-for-height
    const weightForHeight = weightInKg / ((heightInCm / 100) ** 2);
    const medianWeightForHeight = 1;
    const SDWeightForHeight = 0.15;
    const weightForHeightZScore = (weightForHeight / medianWeightForHeight - 1) / SDWeightForHeight;
  
    // Determine if the child is stunted or not
  const threshold = -2;
  const isStunted = (heightForAge <= threshold || weightForHeightZScore <= threshold);
  
  // Return the result
  return isStunted;
  }