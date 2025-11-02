// Initial available times (fallback)
const initialTimes = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
];

// Reducer function for available times
export function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    case 'RESET_TIMES':
      return initialTimes;
    default:
      return state;
  }
}

// Initialize times function using fetchAPI
export function initializeTimes() {
  // Get today's date
  const today = new Date();
  
  // Check if fetchAPI is available (from the external script)
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(today);
  }
  
  // Fallback to default times if API is not available
  return initialTimes;
}

// Update times function based on selected date
export function updateTimes(state, action) {
  // If action contains a date, fetch available times for that date
  if (action.type === 'UPDATE_TIMES' && action.date) {
    // Check if fetchAPI is available (from the external script)
    if (typeof window !== 'undefined' && window.fetchAPI) {
      const newTimes = window.fetchAPI(new Date(action.date));
      return newTimes;
    }
  }
  
  // Otherwise, use the reducer to handle the action
  return timesReducer(state, action);
}

export { initialTimes };
