export const asyncHandler = (handler) => (ev) => handler(ev).catch(((err) => console.log('error: in handler', err)));
