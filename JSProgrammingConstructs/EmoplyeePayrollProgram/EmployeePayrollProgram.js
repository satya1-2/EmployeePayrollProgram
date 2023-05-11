console.log("welcome to payroll services");

// uc7
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_NO_TIME= 0;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUMBER_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HOURS=160;

function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;}

    function getWorkingHours(empCheck){
        switch(empCheck){
        case IS_PART_TIME:
        return PART_TIME_HOURS;
        case IS_FULL_TIME:
        return FULL_TIME_HOURS;
       default:
            return 0;
            
  }
}
  let totalEmpHrs=0;
  let totalWorkingDays=0;
  let empDailyWageArray=new Array();

  while(totalEmpHrs<=TOTAL_WORKING_HOURS && totalWorkingDays<NUMBER_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random() *10) %3;
   let empHrs= getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
  }

  
 let employeeWage=calculateDailyWage(totalEmpHrs);
 console.log(" total working days : " + totalWorkingDays+ " Total hours: " +totalEmpHrs + " Employee Daily Wage: " + employeeWage);
//UC- 7A
let totalEmpWage=0;
function sum (dailyWage){
  totalEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC-7A-Total Days :"+totalWorkingDays+"TotalHours:"+totalEmpHrs+"Employee Daily wages:"+employeeWage);
function totalWages(totalWages,dailyWage){
return totalWages+dailyWage;
}
console.log("UC-7A- Employee wage with reduce method :"+empDailyWageArray.reduce(totalWages,0));
//UC-7B
let dayAlong=0;
function mapDayAlongWithDailyWage(dailyWage){
  dayAlong++;
  return dayAlong+"="+dailyWage;
}
let mapDayAlongWithDailyWageArray=empDailyWageArray.map(mapDayAlongWithDailyWage);
console.log("UC-7B-Daily Wage Map");
console.log(mapDayWithWageArray);

//UC-7C
function fullTimeWage(dailyWage){
  return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(fullTimeWage);
console.log("UC-7C-Daily Wage filter when full time hour is 160:");
console.log(fullDayWageArray);

//UC-7D
function findFullTimeWage(dailyWage){
  return dailyWage.includes("160");
}
let findDayWageArray=mapDayWithWageArray.find(findFullTimeWage);
console.log("UC-7D-Daily wage find when full time hour is 160:");
console.log(findDayWageArray);

//UC-7E

function isFullTimeWage(dailyWage){
  return dailyWage.includes("160");
  let allFullTimeWageArray=mapDayWithWageArray.every(isFullTimeWage);
  console.log("UC-7E-Check all element have full time wage :");
  console.log(allFullTimeWageArray);
}
//UC-7F
function isAnyPartTimeWage(dailyWage){
  return dailyWage.includes("80");
  let isAnyPartTimeWageArray=mapDayWithWageArray.some(isAnyPartTimeWage);
  console.log("UC-7F- Check if any part time wages :");
  console.log(isAnyPartTimeWage);
}

//UC-7G
function totalDaysWorked(numOfDays,dailyWage){
  if(dailyWage>0){
    returnnumOfDays+1;
  }
  return numOfDays;
}
let totalDaysWorkedArray=mapDayWithWageArray.reduce(totalDaysWorked);
console.log("UC-7G- number of days employee worked:");
console.log(totalDaysWorkedArray,0);