export const renderMessage = (multiplication) => {
  if (multiplication === 1) {
    return 'Tomorrow it is ';
  } else if (multiplication > 1) {
    return `In ${multiplication} days it is `;
  } else if (multiplication < 0) {
    return `${multiplication} days ago, it was`;
  } else {
    return '';
  }
};
