console.log("welcome to payroll services");

// uc2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const IS_NO_TIME= 0;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

function getWorkingHours(empCheck){

  switch(empCheck){
        case IS_PART_TIME :
        empHrs=PART_TIME_HOURS
        break;
        case IS_FULL_TIME :
        empHrs=FULL_TIME_HOURS
        break;
       default:
            return 0;
            
  }
}
  let empHrs=0;
  let empCheck=Math.floor(Math.random() *10) %3;
  empHrs=getWorkingHours(empCheck);
 let employeeWage=empHrs*WAGE_PER_HOURS;
 console.log(" emp daily wage: " + employeeWage);

