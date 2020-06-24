const testPrime = (number) => {
  if (number===1)
    return false;
  else if(number === 2)
    return true;
    else
  {
      for(let x = 2; x < number; x++)
      {
          if(number % x === 0)
              return false;
      }
      return true;
  }
};

const calculatePossibleValues = (playedValues, currentValue, maxValue) =>{

    //On calcule les multiples et les divisibles de currentValue, et on les mets dans un tableau
    // On cherche les multiples < maxValue
    let possibleValues = [];
    let result = 0;
    for (let i=2; result<=maxValue; i++){
        result = currentValue*i;
        if(!playedValues.includes(result)&&result<=maxValue)
            possibleValues.push(result);
    }

    //On cherche les divisibles
    for (let i= 1; i <= currentValue; i++)
    {
        if (currentValue %i ===0)
        {
            let factor = currentValue / i;
            if (!playedValues.includes(factor))
                possibleValues.push(factor)
        }
    }
    return possibleValues;
};



const computerStrategy = (possibleValues, maxValue, playedValues) => {
    // On crée un nouveau tableau
    let values = possibleValues.map(v => ({value: v, possibilities : calculatePossibleValues(playedValues.concat(v),v,maxValue)}));
        values.sort((a,b)=> a.possibilities.length - b.possibilities.length);

    values.map(v=> console.log(v.possibilities.length));

    console.log('valeurs possibles',values);
    //S'il y en a un qui n'a pas de possibilités, on le renvoie:
    const winningValue = values.find(v => v.possibilities === 0);
    if (winningValue)
    {
        console.log('Winning Value',winningValue);
        return winningValue.value;
    }



    //On cherche en priorité les nombres premiers > 3
    //const primeNumbers = possibleValues.filter(value => (value >3 && testPrime(value)));



    //On retourne la valeur avec le moins de possibilités
    console.log('valeur retournée', values[0].value)
    return values[0].value;

};


export {testPrime, calculatePossibleValues, computerStrategy}

