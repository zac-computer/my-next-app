import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the web app template logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Web App Template');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('width', '180');
    expect(logo).toHaveAttribute('height', '38');
  });

  it('renders main action buttons', () => {
    render(<Home />);

    const deployButton = screen.getByText('Deploy now');
    expect(deployButton).toBeInTheDocument();

    const docsButton = screen.getByText('Read our docs');
    expect(docsButton).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Home />);

    const learnLink = screen.getByRole('link', { name: /learn/i });
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/learn')
    );

    const examplesLink = screen.getByRole('link', { name: /examples/i });
    expect(examplesLink).toBeInTheDocument();
    expect(examplesLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/templates')
    );

    const nextjsLink = screen.getByRole('link', { name: /go to nextjs\.org/i });
    expect(nextjsLink).toBeInTheDocument();
    expect(nextjsLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org')
    );
  });

  it('renders the get started section', () => {
    render(<Home />);
    const getStartedText = screen.getByText(/get started by customizing/i);
    expect(getStartedText).toBeInTheDocument();

    const codeElement = screen.getByText('src/app/page.tsx');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement.tagName).toBe('CODE');
  });

  it('contains proper target and rel attributes for external links', () => {
    render(<Home />);
    const links = screen.getAllByRole('link');

    links.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });
});
