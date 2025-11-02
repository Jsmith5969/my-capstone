import { readFromLocalStorage, writeToLocalStorage, clearLocalStorage } from './localStorage';

describe('Local Storage Utilities', () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};

    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      removeItem: (key) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
  })();

  beforeEach(() => {
    // Replace global localStorage with mock
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
    
    // Clear storage before each test
    localStorage.clear();
  });

  describe('readFromLocalStorage', () => {
    test('returns empty array when localStorage is empty', () => {
      const result = readFromLocalStorage();
      expect(result).toEqual([]);
    });

    test('returns parsed data from localStorage', () => {
      const mockBookings = [
        { id: 1, name: 'John Doe', date: '2025-11-15', time: '18:00' },
        { id: 2, name: 'Jane Smith', date: '2025-11-16', time: '19:00' }
      ];
      
      localStorage.setItem('littleLemonBookings', JSON.stringify(mockBookings));
      
      const result = readFromLocalStorage();
      expect(result).toEqual(mockBookings);
    });

    test('returns empty array when localStorage contains invalid JSON', () => {
      localStorage.setItem('littleLemonBookings', 'invalid json');
      
      const result = readFromLocalStorage();
      expect(result).toEqual([]);
    });

    test('handles localStorage errors gracefully', () => {
      // Mock getItem to throw an error
      const originalGetItem = localStorage.getItem;
      localStorage.getItem = jest.fn(() => {
        throw new Error('Storage error');
      });
      
      const result = readFromLocalStorage();
      expect(result).toEqual([]);
      
      // Restore original function
      localStorage.getItem = originalGetItem;
    });
  });

  describe('writeToLocalStorage', () => {
    test('successfully writes bookings to localStorage', () => {
      const mockBookings = [
        { id: 1, name: 'John Doe', date: '2025-11-15', time: '18:00' }
      ];
      
      const result = writeToLocalStorage(mockBookings);
      
      expect(result).toBe(true);
      expect(localStorage.getItem('littleLemonBookings')).toBe(JSON.stringify(mockBookings));
    });

    test('successfully writes empty array to localStorage', () => {
      const result = writeToLocalStorage([]);
      
      expect(result).toBe(true);
      expect(localStorage.getItem('littleLemonBookings')).toBe('[]');
    });

    test('returns false when localStorage write fails', () => {
      // Mock setItem to throw an error
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = jest.fn(() => {
        throw new Error('Storage full');
      });
      
      const result = writeToLocalStorage([{ id: 1, name: 'Test' }]);
      expect(result).toBe(false);
      
      // Restore original function
      localStorage.setItem = originalSetItem;
    });

    test('overwrites existing data in localStorage', () => {
      const firstBookings = [{ id: 1, name: 'First' }];
      const secondBookings = [{ id: 2, name: 'Second' }];
      
      writeToLocalStorage(firstBookings);
      writeToLocalStorage(secondBookings);
      
      const stored = JSON.parse(localStorage.getItem('littleLemonBookings'));
      expect(stored).toEqual(secondBookings);
    });
  });

  describe('clearLocalStorage', () => {
    test('successfully removes bookings from localStorage', () => {
      const mockBookings = [{ id: 1, name: 'John Doe' }];
      localStorage.setItem('littleLemonBookings', JSON.stringify(mockBookings));
      
      const result = clearLocalStorage();
      
      expect(result).toBe(true);
      expect(localStorage.getItem('littleLemonBookings')).toBe(null);
    });

    test('returns true even when localStorage is already empty', () => {
      const result = clearLocalStorage();
      expect(result).toBe(true);
    });

    test('returns false when localStorage removal fails', () => {
      // Mock removeItem to throw an error
      const originalRemoveItem = localStorage.removeItem;
      localStorage.removeItem = jest.fn(() => {
        throw new Error('Removal failed');
      });
      
      const result = clearLocalStorage();
      expect(result).toBe(false);
      
      // Restore original function
      localStorage.removeItem = originalRemoveItem;
    });
  });

  describe('Integration tests', () => {
    test('write and read cycle maintains data integrity', () => {
      const mockBookings = [
        { id: 1, firstName: 'John', lastName: 'Doe', date: '2025-11-15', time: '18:00', guests: '4' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', date: '2025-11-16', time: '19:00', guests: '2' }
      ];
      
      writeToLocalStorage(mockBookings);
      const retrieved = readFromLocalStorage();
      
      expect(retrieved).toEqual(mockBookings);
    });

    test('clear removes all data and read returns empty array', () => {
      const mockBookings = [{ id: 1, name: 'Test' }];
      
      writeToLocalStorage(mockBookings);
      clearLocalStorage();
      const retrieved = readFromLocalStorage();
      
      expect(retrieved).toEqual([]);
    });
  });
});
