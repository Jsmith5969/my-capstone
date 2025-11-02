// Local storage utility functions for booking data

const STORAGE_KEY = 'littleLemonBookings';

/**
 * Read bookings from local storage
 * @returns {Array} Array of booking objects
 */
export const readFromLocalStorage = () => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Error reading from local storage:', error);
    return [];
  }
};

/**
 * Write bookings to local storage
 * @param {Array} bookings - Array of booking objects to store
 * @returns {boolean} True if successful, false otherwise
 */
export const writeToLocalStorage = (bookings) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return true;
  } catch (error) {
    console.error('Error writing to local storage:', error);
    return false;
  }
};

/**
 * Clear all bookings from local storage
 * @returns {boolean} True if successful, false otherwise
 */
export const clearLocalStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing local storage:', error);
    return false;
  }
};
