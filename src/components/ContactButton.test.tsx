import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactButton } from './ContactButton';

describe('ContactButton', () => {
  it('renders correctly with default text', () => {
    render(<ContactButton />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  it('merges custom className with default classes', () => {
    render(<ContactButton className="custom-test-class" />);
    const button = screen.getByText('Contact Me');
    expect(button).toHaveClass('custom-test-class');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('text-white');
  });

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<ContactButton ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('passes additional props to the button element', () => {
    render(<ContactButton disabled aria-label="Contact button" data-testid="contact-btn" />);
    const button = screen.getByTestId('contact-btn');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-label', 'Contact button');
  });
});
