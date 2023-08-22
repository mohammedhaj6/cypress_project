/// <reference types= "cypress" />

let today = new Date();
let arrayURL = ["https://www.almosafer.com/en", "https://www.almosafer.com/ar"];
let index = Math.floor(Math.random() * arrayURL.length);
beforeEach(() => {
  cy.visit("https://www.almosafer.com/en");
});
describe("Assertion the Test Case ", () => {
  // it("Default language is correct (EN)", () => {
  //   cy.get('[data-testid="Header__LanguageSwitch"]').should(
  //     "have.text",
  //     "العربية"
  //   );
  // });
  // it("Default currency is correct (SAR)", () => {
  //   cy.get('[data-testid="Header__CurrencySelector"]').should(
  //     "have.text",
  //     "SAR "
  //   );
  // });
  // it("Contact numbers are correct", () => {
  //   cy.get("strong").should("have.text", "+966554400000");
  // });
  // it('Verify "qitaf" logo is displayed in footer.', () => {
  //   cy.get('[data-testid="Footer__QitafLogo"]').should("be.visible");
  // });
  // it("Hotels search tab is NOT selected by default", () => {
  //   cy.get("#uncontrolled-tab-example-tab-hotels").should("not.be.selected");
  // });
  // it('Flight departure date is set to "today+1day" by default', () => {
  //   cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
  //     .find(".sc-hcnlBt")
  //     .invoke("text")
  //     .should("eql", (today.getDate() + 1).toString());
  // });
  // it('Flight return date is set to "today+2days" by default', () => {
  //   cy.get('[data-testid="FlightSearchBox__ToDateButton"]')
  //     .find(".sc-hcnlBt")
  //     .invoke("text")
  //     .should("eql", (today.getDate() + 2).toString());
  // });
  // it("Use random method to change language (sometime keep AR, sometime change to EN)", () => {
  //   cy.visit(arrayURL[index]).url().should("eql", arrayURL[index]);
  // });
  // it.only("Switch to hotel search tabIn location field, type valueIf current-lang is EN, then randomly type from (Dubai, Jeddah, Riyadh) If current-lang is AR, then randomly type from (دبي , جدة , الرياض )", () => {
  //   cy.visit(arrayURL[index]);
  //   cy.get("#uncontrolled-tab-example-tab-hotels").click();
  //   let arrayAr = ["دبي", "جدة", "الرياض"];
  //   let arrayEn = ["Dubai", "Jeddah", "Riyadh"];
  //   let indexOfAr = Math.floor(Math.random() * arrayAr.length);
  //   let indexOfEn = Math.floor(Math.random() * arrayEn.length);
  //   if (cy.url() == "https://www.almosafer.com/ar") {
  //     cy.get('[data-testid="AutoCompleteInput"]').type(arrayAr[indexOfAr]);
  //     cy.get('[data-testid="AutoCompleteResultItem0"]').click();
  //     cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
  //   } else {
  //     cy.get('[data-testid="AutoCompleteInput"]').type(arrayEn[indexOfEn]);
  //     cy.get('[data-testid="AutoCompleteResultItem0"]').click();
  //     cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
  //   }
  // });
  // it('Randomly select "1 room, 2 adults, 0 children" or "1 room, 1 adult, 0 children" option.', () => {
  //   cy.get('#uncontrolled-tab-example-tab-hotels').click();
  //   let randomInteger = Math.floor(Math.random() * 2);
  // cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomInteger)
  // });
  // it("Apply sorting option by LOWEST PRICE", () => {
  //   let prices = [];
  //   let maxValues, minValues;
  //   cy.get('.sc-jvEmr > .sc-jTzLTM').click()
  //   cy.get("#uncontrolled-tab-example-tab-hotels", { timeout: 10000 }).click();
  //   cy.get('[data-testid="AutoCompleteInput"]', { timeout: 10000 }).type(
  //     "Dubia"
  //   );
  //   cy.get('[data-testid="HotelSearchBox__SearchButton"]', {
  //     timeout: 10000,
  //   }).click();
  //   cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]', {
  //     timeout: 20000,
  //   }).click();
  //   cy.get(".Price__Value", { timeout: 10000 })
  //     .each((ele) => {
  //       prices.push(parseInt(ele.text()));
  //     })
  //     .then(() => {
  //       minValues = prices[0];
  //       maxValues = prices[prices.length - 1];
  //       expect(maxValues).to.be.greaterThan(minValues);
  //       console.log(maxValues);
  //       console.log(minValues);
  //     });
  // });
});
