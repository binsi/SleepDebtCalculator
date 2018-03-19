const getSleepHours = (day) =>{
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 16;
  } else if (day === 'wednesday'){
    return 7;
  } else if (day === 'thursday'){
    return 5;
  } else if (day === 'friday'){
    return 14;
  } else if (day === 'saturday'){
    return 13;
  } else if (day === 'sunday'){
    return 2;             
  }
};

const getActualSleepHours = () => 8+8+8+8+8+8+4.5;
/*
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
*/

const getIdealSleepHours = (idealHours) =>{
  //const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);
  if (actualSleepHours === idealSleepHours){
    return 'Wow, perfect sleep!';
  } else if (actualSleepHours > idealSleepHours){
    return 'Hm, you got more sleep than needed! Ok. You actually got ' + (actualSleepHours-idealSleepHours) + ' hrs too much!';
  } else {
    return 'GUUURURRRL, get some rest!! You lack ' +   (idealSleepHours-actualSleepHours) + ' hrs of sleep!';
  } 
};

console.log(calculateSleepDebt());

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
//console.log(getSleepHours('saturday'));
