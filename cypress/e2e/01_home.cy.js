/// <reference types="cypress" />
import { format, subMonths } from "date-fns";

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("displays hero text correctly", () => {
        cy.contains("Explore Algorand Standard Assets🤞🏾").should("exist");
        cy.contains("Simple and easy way to analyze your favorite Algorand Asset.").should("exist");
    });

    it("can select date range", () => {
        cy.get("[data-testid=primary-button]").should("have.length", 2).first().should("have.text", "ANALYZE ASAs");
        cy.get("[data-testid=primary-button]").first().click();
        cy.contains("Algorand Standard Asset").should("exist");

        cy.get("#date_input").click();

        const monthsList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const startDate = subMonths(new Date(), 2);
        const endDate = new Date();

        const startDay = startDate.getDate();
        const startMonth = startDate.getMonth();

        const endDay = endDate.getDate();
        const endMonth = endDate.getMonth();

        const formattedDate = `${format(startDate, "PPP")} to ${format(endDate ? endDate : new Date(), "PPP")}`;

        cy.get(".rdrYearPicker>select").select(startDate.getFullYear().toString());
        cy.get(".rdrMonthPicker>select").select(monthsList[startMonth]);
        cy.get(".rdrDayNumber").contains(`${startDay}`).click();

        cy.get(".rdrYearPicker>select").select(endDate.getFullYear().toString());
        cy.get(".rdrMonthPicker>select").select(monthsList[endMonth]);
        cy.get(".rdrDayNumber").contains(`${endDay}`).click();

        cy.get("[data-testid=close-btn]").trigger("click");
        cy.get("#date_input").should("have.value", formattedDate);
    });

    it("can search for asa", () => {
        cy.get("[data-testid=primary-button]").should("have.length", 2).first().should("have.text", "ANALYZE ASAs");
        cy.get("[data-testid=primary-button]").first().click();
        cy.contains("Algorand Standard Asset").should("exist");

        cy.get("#asa_id").type("planet");
    });

    it("can close modal", () => {
        cy.get("[data-testid=primary-button]").should("have.length", 2).first().should("have.text", "ANALYZE ASAs");
        cy.get("[data-testid=primary-button]").first().click();
        cy.contains("Algorand Standard Asset").should("exist");

        cy.get("[data-testid=close-modal-btn]").click();

        cy.contains("Algorand Standard Asset").should("not.exist");
    });
});
