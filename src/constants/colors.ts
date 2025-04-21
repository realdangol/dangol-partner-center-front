const colors = {
  white: '#ffffff',
  brand100: '#FCEFEA',
  brand200: '#F9E0D5',
  brand300: '#F4CCBA',
  brand400: '#F2BFA9',
  brand500: '#EDA587',
  brand600: '#E78B64',
  brand700: '#E27242',
  neutral100: '#F4F4F4',
  neutral200: '#E3E3E3',
  neutral300: '#D1D1D1',
  neutral400: '#B0B0B0',
  neutral500: '#8E8E8E',
  neutral600: '#686868',
  neutral700: '#4E4E4E',
  neutral800: '#1D1E1E',
  error100: '#FEDDD8',
  error200: '#FDBAB1',
  error300: '#FC988A',
  error400: '#FB7563',
  error500: '#FA533C',
  error600: '#F83015',
  success100: '#F1F9EE',
  success200: '#E3F3E1',
  success300: '#C4E8C6',
  success400: '#A3DCAA',
  success500: '#82CE8F',
  success600: '#59C173',
} as const;

export const colorOptions = Object.keys(colors).reduce((options: string[], color) => {
  if (color === 'white') return options;
  return [...options, color.replace(/(brand|neutral|error|success)(\d+)/, '$1-$2')];
}, []);

export default colors;
