import { render,cleanup } from '@testing-library/react';
import HomePage from './index';

afterEach(cleanup);
it('should take a snapshot', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment(<HomePage />)).toMatchSnapshot();
});

it('should equal to "Dashboard"', () => {
    const { getByTestId } = render(<HomePage />); 
    expect(getByTestId('heading')).toHaveTextContent('Dashboard')
});

it('should equal to "Mobile UX/UI Design course"', () => {
    const { getByTestId } = render(<HomePage />); 
    expect(getByTestId('subheading')).toHaveTextContent('Mobile UX/UI Design course')
});