/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Banner from "../components/Banner";
import "@testing-library/jest-dom/extend-expect"; 

describe('renders Banner component with correct text', () => {
    test('renders Banner component with correct text', async () => {
        const view = render(<Banner />);

        const text = 'Barbell Weight Calculator'
        const banner = await view.findByTestId('banner');
        expect(banner).toHaveTextContent(text);
    })
})
