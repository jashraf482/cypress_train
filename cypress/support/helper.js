import dayjs from "dayjs";
let now = dayjs();
cy.myproject = {
    
    getDepartDate: () => {        
        var departingDate = now.add(3, "day").format("D MMMM, YYYY");        
        return departingDate;
    },
    getReturnDate: () => {
        var returningDate = now.add(5, "day").format("D MMMM, YYYY");
        return returningDate;
    }
}