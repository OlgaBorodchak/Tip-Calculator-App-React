const calculateTip = (bill, tipPercentage, customTip, numberOfPeople) => {
  const tipRate = customTip || tipPercentage

  if (!bill || !numberOfPeople || numberOfPeople <= 0) {
    return {
      tipPerPerson: 0,
      totalPerPerson: 0,
    }
  }

  const tip = (bill * tipRate) / 100
  const total = bill + tip

  return {
    tipPerPerson: Math.floor((tip / numberOfPeople) * 100) / 100,
    totalPerPerson: total / numberOfPeople,
  }
}

export default calculateTip
