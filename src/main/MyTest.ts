export default function () {
  if (typeof window === 'undefined') {
    return 'Node';
  } else {
    return 'Browser';
  }
};
