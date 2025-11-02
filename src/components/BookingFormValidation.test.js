import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

describe('BookingForm JavaScript Validation Functions', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    mockSubmitForm.mockClear();
  });

  describe('First Name Validation', () => {
    describe('Valid States', () => {
      test('accepts valid name with 2 characters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'Jo');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/must be at least 2 characters/i)).not.toBeInTheDocument();
        });
      });

      test('accepts valid name with letters only', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'John');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/only letters/i)).not.toBeInTheDocument();
        });
      });

      test('accepts name with spaces', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'Mary Jane');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/only letters/i)).not.toBeInTheDocument();
        });
      });

      test('accepts name with hyphens', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'Mary-Jane');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/only letters/i)).not.toBeInTheDocument();
        });
      });

      test('accepts name with apostrophes', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, "O'Brien");
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/only letters/i)).not.toBeInTheDocument();
        });
      });

      test('accepts name with exactly 50 characters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        const longName = 'A'.repeat(50);
        
        await userEvent.type(firstNameInput, longName);
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/must be less than 50 characters/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when name is empty', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        fireEvent.focus(firstNameInput);
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/must be at least 2 characters/i)).toBeInTheDocument();
        });
      });

      test('shows error when name has only 1 character', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'J');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/must be at least 2 characters/i)).toBeInTheDocument();
        });
      });

      test('HTML maxLength prevents typing more than 50 characters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        // HTML maxLength will prevent typing more than 50 characters
        // Test that the input has maxLength attribute
        expect(firstNameInput).toHaveAttribute('maxLength', '50');
        
        // Even if we try to type 51 characters, only 50 will be accepted due to HTML validation
        const tooLongName = 'A'.repeat(51);
        await userEvent.type(firstNameInput, tooLongName);
        
        // Verify that only 50 characters were actually entered
        expect(firstNameInput.value).toHaveLength(50);
      });

      test('shows error when name contains numbers', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'John123');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/only letters, spaces, hyphens, and apostrophes allowed/i)).toBeInTheDocument();
        });
      });

      test('shows error when name contains special characters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const firstNameInput = screen.getByLabelText(/first name/i);
        
        await userEvent.type(firstNameInput, 'John@Doe');
        fireEvent.blur(firstNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/only letters, spaces, hyphens, and apostrophes allowed/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Last Name Validation', () => {
    describe('Valid States', () => {
      test('accepts valid last name', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const lastNameInput = screen.getByLabelText(/last name/i);
        
        await userEvent.type(lastNameInput, 'Smith');
        fireEvent.blur(lastNameInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/must be at least 2 characters/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when last name is empty', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const lastNameInput = screen.getByLabelText(/last name/i);
        
        fireEvent.focus(lastNameInput);
        fireEvent.blur(lastNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/must be at least 2 characters/i)).toBeInTheDocument();
        });
      });

      test('shows error when last name contains numbers', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const lastNameInput = screen.getByLabelText(/last name/i);
        
        await userEvent.type(lastNameInput, 'Smith99');
        fireEvent.blur(lastNameInput);
        
        await waitFor(() => {
          expect(screen.getByText(/only letters, spaces, hyphens, and apostrophes allowed/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Email Validation', () => {
    describe('Valid States', () => {
      test('accepts valid email with standard format', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john@example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
        });
      });

      test('accepts email with subdomain', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john@mail.example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
        });
      });

      test('accepts email with plus sign', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john+test@example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
        });
      });

      test('accepts email with dots in username', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john.doe@example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when email is empty', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        fireEvent.focus(emailInput);
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        });
      });

      test('shows error when email is missing @ symbol', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'johnexample.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
      });

      test('shows error when email is missing domain', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john@');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
      });

      test('shows error when email is missing username', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, '@example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
      });

      test('shows error when email has spaces', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const emailInput = screen.getByLabelText(/email/i);
        
        await userEvent.type(emailInput, 'john doe@example.com');
        fireEvent.blur(emailInput);
        
        await waitFor(() => {
          expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Phone Validation', () => {
    describe('Valid States', () => {
      test('accepts phone with exactly 10 digits', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '1234567890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/phone number must be at least 10 digits/i)).not.toBeInTheDocument();
        });
      });

      test('accepts phone with formatting (parentheses and dashes)', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '(123) 456-7890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid phone number/i)).not.toBeInTheDocument();
        });
      });

      test('accepts phone with international format', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '+1 123 456 7890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid phone number/i)).not.toBeInTheDocument();
        });
      });

      test('accepts phone with spaces', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '123 456 7890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/please enter a valid phone number/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when phone is empty', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        fireEvent.focus(phoneInput);
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
        });
      });

      test('shows error when phone has less than 10 digits', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '123456789');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.getByText(/phone number must be at least 10 digits/i)).toBeInTheDocument();
        });
      });

      test('shows error when phone has more than 20 digits', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '123456789012345678901');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.getByText(/phone number is too long/i)).toBeInTheDocument();
        });
      });

      test('shows error when phone contains letters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        // "123ABC7890" - validation strips non-digits first
        // After stripping: "1237890" (7 digits) - fails digit count check before pattern check
        await userEvent.type(phoneInput, '123ABC7890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.getByText(/phone number must be at least 10 digits/i)).toBeInTheDocument();
        });
      });

      test('shows error when phone contains invalid special characters', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const phoneInput = screen.getByLabelText(/phone number/i);
        
        await userEvent.type(phoneInput, '123@456#7890');
        fireEvent.blur(phoneInput);
        
        await waitFor(() => {
          expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Date Validation', () => {
    describe('Valid States', () => {
      test('accepts future date', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dateString = tomorrow.toISOString().split('T')[0];
        
        await userEvent.type(dateInput, dateString);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/cannot select a past date/i)).not.toBeInTheDocument();
        });
      });

      test('accepts future date within 3 months', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 30);
        const dateString = futureDate.toISOString().split('T')[0];
        
        await userEvent.type(dateInput, dateString);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/cannot select a past date/i)).not.toBeInTheDocument();
        });
      });

      test('accepts date within 3 months', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 2);
        const dateString = futureDate.toISOString().split('T')[0];
        
        await userEvent.type(dateInput, dateString);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.queryByText(/cannot book more than 3 months in advance/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when date is empty', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        
        fireEvent.focus(dateInput);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.getByText(/date is required/i)).toBeInTheDocument();
        });
      });

      test('shows error when date is in the past', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        const dateString = pastDate.toISOString().split('T')[0];
        
        await userEvent.type(dateInput, dateString);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.getByText(/cannot select a past date/i)).toBeInTheDocument();
        });
      });

      test('shows error when date is more than 3 months in future', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        const farFutureDate = new Date();
        farFutureDate.setMonth(farFutureDate.getMonth() + 4);
        const dateString = farFutureDate.toISOString().split('T')[0];
        
        await userEvent.type(dateInput, dateString);
        fireEvent.blur(dateInput);
        
        await waitFor(() => {
          expect(screen.getByText(/cannot book more than 3 months in advance/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Time Validation', () => {
    describe('Valid States', () => {
      test('accepts valid time selection', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const timeSelect = screen.getByLabelText(/choose time/i);
        
        await userEvent.selectOptions(timeSelect, '18:00');
        fireEvent.blur(timeSelect);
        
        await waitFor(() => {
          expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
        });
      });
    });

    describe('Invalid States', () => {
      test('shows error when time is not selected', async () => {
        render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
        const timeSelect = screen.getByLabelText(/choose time/i);
        
        fireEvent.focus(timeSelect);
        fireEvent.blur(timeSelect);
        
        await waitFor(() => {
          expect(screen.getByText(/time is required/i)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Form Submission with Validation', () => {
    test('submit button is disabled when form has errors', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      
      // Touch a field and leave it empty to trigger validation
      const firstNameInput = screen.getByLabelText(/first name/i);
      fireEvent.focus(firstNameInput);
      fireEvent.blur(firstNameInput);
      
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
        expect(submitButton).toBeDisabled();
      });
    });

    test('submit button is enabled when all required fields are valid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      
      // Fill all required fields with valid data
      await userEvent.type(screen.getByLabelText(/first name/i), 'John');
      await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
      await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      await userEvent.type(screen.getByLabelText(/phone number/i), '1234567890');
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateString = tomorrow.toISOString().split('T')[0];
      await userEvent.type(screen.getByLabelText(/choose date/i), dateString);
      await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
      
      await waitFor(() => {
        const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
        expect(submitButton).not.toBeDisabled();
      });
    });

    test('does not call submitForm when form has validation errors', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      
      // Try to submit with empty fields
      const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(mockSubmitForm).not.toHaveBeenCalled();
      });
    });

    test('calls submitForm when form is valid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      
      // Fill all required fields with valid data
      await userEvent.type(screen.getByLabelText(/first name/i), 'John');
      await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
      await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      await userEvent.type(screen.getByLabelText(/phone number/i), '1234567890');
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateString = tomorrow.toISOString().split('T')[0];
      await userEvent.type(screen.getByLabelText(/choose date/i), dateString);
      await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
      
      const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(mockSubmitForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitForm).toHaveBeenCalledWith(
          expect.objectContaining({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            phone: '1234567890',
            date: dateString,
            time: '18:00'
          })
        );
      });
    });
  });

  describe('Error Message Display', () => {
    test('error messages have proper ARIA attributes', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      const firstNameInput = screen.getByLabelText(/first name/i);
      
      fireEvent.focus(firstNameInput);
      fireEvent.blur(firstNameInput);
      
      await waitFor(() => {
        const errorMessage = screen.getByText(/must be at least 2 characters/i);
        expect(errorMessage).toHaveAttribute('role', 'alert');
      });
    });

    test('input field gets error class when invalid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      const firstNameInput = screen.getByLabelText(/first name/i);
      
      fireEvent.focus(firstNameInput);
      fireEvent.blur(firstNameInput);
      
      await waitFor(() => {
        expect(firstNameInput).toHaveClass('error');
        expect(firstNameInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    test('error disappears when field becomes valid', async () => {
      render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
      const firstNameInput = screen.getByLabelText(/first name/i);
      
      // Trigger error
      fireEvent.focus(firstNameInput);
      fireEvent.blur(firstNameInput);
      
      await waitFor(() => {
        expect(screen.getByText(/must be at least 2 characters/i)).toBeInTheDocument();
      });
      
      // Fix the error
      await userEvent.type(firstNameInput, 'John');
      
      await waitFor(() => {
        expect(screen.queryByText(/must be at least 2 characters/i)).not.toBeInTheDocument();
      });
    });
  });
});
