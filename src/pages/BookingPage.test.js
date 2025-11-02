import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

describe('BookingPage static text rendering', () => {
  const mockAvailableTimes = ['5:00 PM', '6:00 PM', '7:00 PM'];

  test('renders the main heading "Reserve a Table"', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const headingElement = screen.getByText('Reserve a Table');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the booking intro text', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const introText = screen.getByText(/Book your table at Little Lemon and experience authentic Mediterranean cuisine in the heart of Chicago/i);
    expect(introText).toBeInTheDocument();
  });

  test('renders "First Name" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/First Name \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Last Name" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Last Name \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Email" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Email \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Phone Number" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Phone Number \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Choose date" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Choose date \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Choose time" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Choose time \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Number of guests" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText(/Number of guests \*/i);
    expect(label).toBeInTheDocument();
  });

  test('renders "Occasion" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText('Occasion');
    expect(label).toBeInTheDocument();
  });

  test('renders "Special Requests" label', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const label = screen.getByText('Special Requests');
    expect(label).toBeInTheDocument();
  });

  test('renders "Confirm Reservation" button', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const button = screen.getByRole('button', { name: /Confirm Reservation/i });
    expect(button).toBeInTheDocument();
  });

  test('renders placeholder text in special requests textarea', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const textarea = screen.getByPlaceholderText(/Any dietary restrictions, accessibility needs, or special arrangements/i);
    expect(textarea).toBeInTheDocument();
  });

  test('renders "Select a time" option in time dropdown', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} />);
    const option = screen.getByText('Select a time');
    expect(option).toBeInTheDocument();
  });
});
