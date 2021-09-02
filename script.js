/* .js files add interaction to your website */

/*Array containing my facts!!*/
var factList = [
  " Students of color are often concentrated in schools with fewer resources. Schools with 90 percent or more students of color spend $733 less per student per year than schools with 90 percent or more white students.",
  "By the time students reach college, women are significantly underrepresented in STEM majors — for instance, only around 21% of engineering majors are women and only around 19% of computer and information science majors are women.",
  "Prospective college students from low-income backgrounds are less likely to have access to informational resources about college. Additionally, compared to high-income counterparts, young adults from low-income backgrounds are at a higher risk of accruing student loan debt burdens that exceed the national average.",
  "When all grade levels are combined, black students are nearly three times more likely to be held back as their white peers. They’re also more likely to drop out before earning a high school diploma.",
  "On average, schools serving more minority populations have less-experienced, lower-paid teachers who are less likely to be certified",
  "Only 35% of STEM students in higher education globally are women.",
  "Individuals within the top family income quartile are 8 times more likely to obtain a bachelor’s degree by age 24 as compared to individuals from the lowest family income quartile.",
  "Career barriers are significantly higher for those from poor backgrounds, people of color, women, those who are disabled, and LGBTIQ-identified individuals.",
];

var myButton = document.getElementById("myButton"); /*Fact Generator Button*/
var fact = document.getElementById("newFact"); /*Fact that will display after clicking button*/
var count = 0; /*Facts from array above*/

/*Check if my button exists on the page*/
if (myButton) {
  myButton.addEventListener("click", displayFact);
}
/*Causes the new fact to display and reset when all facts have been shown*/
function displayFact (){
  newFact.innerHTML = factList [count];
  count++;
  if (count == factList.length){
    count=0;
  }
}
