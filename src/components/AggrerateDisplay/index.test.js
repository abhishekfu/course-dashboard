import React from "react";
import { render,cleanup, } from '@testing-library/react';
import AggrerateDisplay from './index';
import axios from 'axios';
import { act } from "react-dom/test-utils";
import {fetchData} from './index';

jest.mock('axios');
afterEach(cleanup);


it('should display a loading text', () => {
    const { getByTestId } = render(<AggrerateDisplay />); 
    expect(getByTestId('loading')).toHaveTextContent('Loading...')
});

it('fetches successfully data from an API',async () => {
  
    const info=[
        {
          "id": 1,
          "title": "Students",
          "type": "profiles",
          "line1": 62
        },
        {
          "id": 2,
          "title": "Average Markes",
          "type": "calculation",
          "line1": 6.8
        },
        {
          "id": 3,
          "title": "Underperforming students",
          "type": "calculation",
          "line1": 9,
          "line2": "(14%)"
        }
      ];
    axios.get.mockImplementationOnce(() => Promise.resolve(info));
    await expect(fetchData()).resolves.toEqual(info);
});