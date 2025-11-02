import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm HTML5 Validation Attributes', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={mockAvailableTimes} submitForm={mockSubmitForm} />);
  });

  describe('First Name Field', () => {
    test('has required attribute', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('required');
    });

    test('has correct type attribute', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('type', 'text');
    });

    test('has minLength attribute set to 2', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('minLength', '2');
    });

    test('has maxLength attribute set to 50', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('maxLength', '50');
    });

    test('has pattern attribute for name validation', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('pattern', "[A-Za-z\\s\\-']+");
    });

    test('has title attribute with validation message', () => {
      const firstNameInput = screen.getByLabelText(/first name/i);
      expect(firstNameInput).toHaveAttribute('title');
      expect(firstNameInput.getAttribute('title')).toContain('valid first name');
    });
  });

  describe('Last Name Field', () => {
    test('has required attribute', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('required');
    });

    test('has correct type attribute', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('type', 'text');
    });

    test('has minLength attribute set to 2', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('minLength', '2');
    });

    test('has maxLength attribute set to 50', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('maxLength', '50');
    });

    test('has pattern attribute for name validation', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('pattern', "[A-Za-z\\s\\-']+");
    });

    test('has title attribute with validation message', () => {
      const lastNameInput = screen.getByLabelText(/last name/i);
      expect(lastNameInput).toHaveAttribute('title');
      expect(lastNameInput.getAttribute('title')).toContain('valid last name');
    });
  });

  describe('Email Field', () => {
    test('has required attribute', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('required');
    });

    test('has correct type attribute', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    test('has pattern attribute for email validation', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('pattern');
      expect(emailInput.getAttribute('pattern')).toContain('@');
    });

    test('has maxLength attribute set to 100', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('maxLength', '100');
    });

    test('has title attribute with validation message', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('title');
      expect(emailInput.getAttribute('title')).toContain('valid email');
    });
  });

  describe('Phone Field', () => {
    test('has required attribute', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('required');
    });

    test('has correct type attribute', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('type', 'tel');
    });

    test('has pattern attribute for phone validation', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('pattern', "[\\d\\s\\-\\(\\)\\+]+");
    });

    test('has minLength attribute set to 10', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('minLength', '10');
    });

    test('has maxLength attribute set to 20', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('maxLength', '20');
    });

    test('has placeholder attribute', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('placeholder', '(123) 456-7890');
    });

    test('has title attribute with validation message', () => {
      const phoneInput = screen.getByLabelText(/phone number/i);
      expect(phoneInput).toHaveAttribute('title');
      expect(phoneInput.getAttribute('title')).toContain('valid phone number');
    });
  });

  describe('Date Field', () => {
    test('has required attribute', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('required');
    });

    test('has correct type attribute', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('has min attribute set to today or later', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('min');
      
      const minDate = dateInput.getAttribute('min');
      const today = new Date().toISOString().split('T')[0];
      expect(minDate).toBe(today);
    });

    test('has max attribute set to 3 months from now', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('max');
      
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3);
      const expectedMax = maxDate.toISOString().split('T')[0];
      
      expect(dateInput.getAttribute('max')).toBe(expectedMax);
    });

    test('has title attribute with validation message', () => {
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('title');
      expect(dateInput.getAttribute('title')).toContain('3 months');
    });
  });

  describe('Time Field', () => {
    test('has required attribute', () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('required');
    });

    test('has title attribute with validation message', () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('title');
      expect(timeSelect.getAttribute('title')).toContain('time slot');
    });

    test('has default empty option', () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      const options = Array.from(timeSelect.options);
      expect(options[0].value).toBe('');
      expect(options[0].text).toContain('Select');
    });

    test('displays all available times', () => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      const options = Array.from(timeSelect.options);
      
      // Should have default option plus all available times
      expect(options.length).toBe(mockAvailableTimes.length + 1);
      
      mockAvailableTimes.forEach((time, index) => {
        expect(options[index + 1].value).toBe(time);
      });
    });
  });

  describe('Guests Field', () => {
    test('has required attribute', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      expect(guestsSelect).toHaveAttribute('required');
    });

    test('has min attribute set to 1', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      expect(guestsSelect).toHaveAttribute('min', '1');
    });

    test('has max attribute set to 10', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      expect(guestsSelect).toHaveAttribute('max', '10');
    });

    test('has title attribute with validation message', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      expect(guestsSelect).toHaveAttribute('title');
      expect(guestsSelect.getAttribute('title')).toContain('1-10');
    });

    test('has options from 1 to 10', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      const options = Array.from(guestsSelect.options);
      
      expect(options.length).toBe(10);
      
      for (let i = 1; i <= 10; i++) {
        expect(options[i - 1].value).toBe(String(i));
      }
    });

    test('has default value of 2', () => {
      const guestsSelect = screen.getByLabelText(/number of guests/i);
      expect(guestsSelect.value).toBe('2');
    });
  });

  describe('Occasion Field', () => {
    test('has title attribute', () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toHaveAttribute('title');
    });

    test('is not required', () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).not.toHaveAttribute('required');
    });

    test('has all occasion options', () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      const options = Array.from(occasionSelect.options);
      
      const expectedOccasions = ['Birthday', 'Anniversary', 'Engagement', 'Business', 'Other'];
      expect(options.length).toBe(expectedOccasions.length);
      
      expectedOccasions.forEach((occasion, index) => {
        expect(options[index].value).toBe(occasion);
        expect(options[index].text).toBe(occasion);
      });
    });

    test('has default value of Birthday', () => {
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect.value).toBe('Birthday');
    });
  });

  describe('Special Requests Field', () => {
    test('has maxLength attribute set to 500', () => {
      const specialRequestsTextarea = screen.getByLabelText(/special requests/i);
      expect(specialRequestsTextarea).toHaveAttribute('maxLength', '500');
    });

    test('has title attribute with validation message', () => {
      const specialRequestsTextarea = screen.getByLabelText(/special requests/i);
      expect(specialRequestsTextarea).toHaveAttribute('title');
      expect(specialRequestsTextarea.getAttribute('title')).toContain('500 characters');
    });

    test('has placeholder text', () => {
      const specialRequestsTextarea = screen.getByLabelText(/special requests/i);
      expect(specialRequestsTextarea).toHaveAttribute('placeholder');
      expect(specialRequestsTextarea.getAttribute('placeholder')).toContain('dietary');
    });

    test('has rows attribute set to 4', () => {
      const specialRequestsTextarea = screen.getByLabelText(/special requests/i);
      expect(specialRequestsTextarea).toHaveAttribute('rows', '4');
    });

    test('is not required', () => {
      const specialRequestsTextarea = screen.getByLabelText(/special requests/i);
      expect(specialRequestsTextarea).not.toHaveAttribute('required');
    });
  });

  describe('Submit Button', () => {
    test('has correct type attribute', () => {
      const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    test('has correct text content', () => {
      const submitButton = screen.getByRole('button', { name: /confirm reservation/i });
      expect(submitButton).toHaveTextContent('Confirm Reservation');
    });
  });
});
