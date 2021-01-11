import { render,cleanup } from '@testing-library/react';
import UserInfo from './index';

afterEach(cleanup);

it('should equal to "cody simmons"', () => {
    const { getByTestId } = render(<UserInfo />); 
    expect(getByTestId('username')).toHaveTextContent('cody simmons')
});

it('should equal to "lecturer"', () => {
    const { getByTestId } = render(<UserInfo />); 
    expect(getByTestId('designation')).toHaveTextContent('lecturer')
});