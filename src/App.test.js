import { initializeTimes, updateTimes } from './utils/timesUtils';

describe('initializeTimes', () => {
  beforeEach(() => {
    // Mock the fetchAPI function
    window.fetchAPI = jest.fn((date) => {
      return ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];
    });
  });

  afterEach(() => {
    // Clean up the mock
    delete window.fetchAPI;
  });

  test('returns an array', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
  });

  test('calls fetchAPI with today\'s date', () => {
    const today = new Date();
    initializeTimes();
    
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('returns the times from fetchAPI', () => {
    const times = initializeTimes();
    
    expect(times).toEqual(['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']);
  });
});

describe('updateTimes', () => {
  const initialState = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  beforeEach(() => {
    // Mock the fetchAPI function
    window.fetchAPI = jest.fn((date) => {
      return ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
    });
  });

  afterEach(() => {
    // Clean up the mock
    delete window.fetchAPI;
  });

  test('returns the same state when date is not provided', () => {
    const action = {
      type: 'UPDATE_TIMES',
      payload: ['6:00 PM', '7:00 PM', '8:00 PM']
    };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['6:00 PM', '7:00 PM', '8:00 PM']);
  });

  test('calls fetchAPI with the provided date', () => {
    const testDate = '2025-11-15';
    const action = {
      type: 'UPDATE_TIMES',
      date: testDate
    };
    
    updateTimes(initialState, action);
    
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date(testDate));
  });

  test('returns times from fetchAPI when date is provided', () => {
    const action = {
      type: 'UPDATE_TIMES',
      date: '2025-11-15'
    };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30']);
  });

  test('returns initial times when RESET_TIMES action is dispatched', () => {
    const currentState = ['6:00 PM', '7:00 PM'];
    const action = { type: 'RESET_TIMES' };
    
    const result = updateTimes(currentState, action);
    expect(result).toEqual(initialState);
  });

  test('returns current state for unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
