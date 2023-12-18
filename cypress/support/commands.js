
import dayjs from "dayjs";
let now = dayjs();

Cypress.Commands.add('getDate', (a) => { 
      
    var departingDate = now.add(a, "day").format("D MMMM, YYYY");  
    return departingDate;
});
