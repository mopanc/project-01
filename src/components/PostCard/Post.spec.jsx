import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';


const props = PostCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />)

    expect(screen.getByRole('img', { name: /Title 1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('Body 1')).toBeInTheDocument();
  });

  it('should mach snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
});