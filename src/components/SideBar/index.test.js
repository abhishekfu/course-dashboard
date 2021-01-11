import { render,cleanup } from '@testing-library/react';
import SideBar from './index';

afterEach(cleanup);

it('should equal to C', () => {
    const { getByTestId } = render(<SideBar />); 
    expect(getByTestId('title')).toHaveTextContent('C')
});