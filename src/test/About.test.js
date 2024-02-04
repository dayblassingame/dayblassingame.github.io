import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import About from "../About";

describe('AboutMe', () => {
    it('should render the "About Me" page with the correct content', () => {
      render(<About/>);
  
      // Assert that the component renders the "About Me" heading
      expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  
      // Assert that the component renders the expected introductory text
      expect(screen.getByText(/Professional Frontend Engineer having 3 years of experience/i)).toBeInTheDocument();
  
      // ... add more assertions for other content on the page if needed
    });
  });