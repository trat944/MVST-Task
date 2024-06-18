import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserSpecificItem } from '../../../../../../src/Pages/UserRepositories/components/ProfileInfoContainer/UserSpecificItem';
import '@testing-library/jest-dom/vitest';
import { mockUserSpecificItem } from "../../../../../../mocks/mockUserSpecific";

describe("UserSpecificItem Component", () => {
 
    it('should render the LandingPage component', () => {
        render(
            <UserSpecificItem user={mockUserSpecificItem} />
        );
        screen.debug();
    })
})