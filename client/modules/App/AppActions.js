// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_EVENT = 'TOGGLE_ADD_EVENT';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddEvent() {
  return {
    type: TOGGLE_ADD_EVENT,
  };
}
