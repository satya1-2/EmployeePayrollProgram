console.log("welcome to payroll services");

// uc8
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_NO_TIME= 0;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUMBER_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HOURS=160;

let empDailyWageArr=new Array();
let empDailyWageMap=newMap();

function calcDailyWage(empHrs){
  returnempHrs*WAGE_PER_HOUR;
  }
  while(totalEmpHrs<=MAX_HRS_IN_INMONTH && totalWorkingDays<NUMBER_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageArr.toLocaleString(totalWorkingDays,calcDailyWage(empHrs));
  }
  console.log(empDailyWageMap);
  function totalWages(totalWage,dailyWage){
    return totalage+dailyWage;
  }
  console.log("UC7A employee wage  map total hours :"+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

