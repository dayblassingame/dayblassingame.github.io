import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from "../Footer";

describe('Footer', () => {
    it('should render the "Footer" component with the correct content', () => {
      render(<Footer/>);
  
      // Assert that the component renders the "Footer" heading
      expect(screen.getByText(/Explore Day Blassingame/i)).toBeInTheDocument();
  
      // Assert that the component renders the expected text
      expect(screen.getAllByTestId('navLink')).toBeInTheDocument;
      expect(screen.getAllByTestId('license')).toBeInTheDocument;

    });
  });