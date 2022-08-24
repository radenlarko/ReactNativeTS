import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const bgMainColor = colorScheme === 'dark' ? '#171717' : '#f2f2f2';
const bgTextInput = colorScheme === 'dark' ? '#171717' : 'white';
const bgCard = colorScheme === 'dark' ? '#333333' : 'white';
const bgCardGrad1 = colorScheme === 'dark' ? '#333333' : '#F0F5F9';
const bgCardGrad2 = colorScheme === 'dark' ? '#333333' : '#D1E2EE';
const textColor = colorScheme === 'dark' ? 'white' : '#4d4d4d';
const labelColor = colorScheme === 'dark' ? '#e8e8e8' : '#808080';
const mainSchemaColor = colorScheme === 'dark' ? '#ffac4c' : '#055f9d';
const secondSchemaColor = colorScheme === 'dark' ? '#055f9d' : '#ffac4c';
const dateTimeColor = colorScheme === 'dark' ? '#ffac4c' : '#acc3e6';
const gradBlue1 = '#136ABD';
const gradBlue2 = '#3690E5';
const gradTurquoise1 = '#0E9FAB';
const gradTurquoise2 = '#24BDCB';
const gradOrange1 = '#D56425';
const gradOrange2 = '#F6925C';
const gradPurple1 = '#5E22BD';
const gradPurple2 = '#925BEC';
const brightColor = '#e8e8e8';
const mainColor = '#055f9d';
const secondColor = '#ffac4c';
const activeColor = '#055f9d';
const inActiveColor = '#bdbdbd';
const lightTransColor = 'rgba(128, 128, 128, 0.2)';
const allColor = 'rgba(5, 95, 157, 1)';
const newColor = 'rgba(0, 117, 143, 1)';
const dangerColor = 'rgba(237, 35, 28, 1)';
const dangerColor2 = 'rgba(215, 29, 23, 1)';
const successColor = 'rgba(85, 198, 170, 1)';
const closeColor = 'rgba(128, 128, 128, 1)';
const inActiveAllColor = 'rgba(5, 95, 157, 0.4)';
const inActiveNewColor = 'rgba(0, 117, 143, 0.4)';
const inActiveDangerColor = 'rgba(237, 35, 28, 0.4)';
const inActiveSuccessColor = 'rgba(85, 198, 170, 0.4)';
const inActiveCloseColor = 'rgba(128, 128, 128, 0.4)';
const blueColor = '#acc3e6';
const brownColor = '#996f57';
const brownSoftColor = '#ca845d';
const invisibleColor = 'rgba(255, 255, 255, 0)';

export {
  activeColor,
  inActiveColor,
  mainColor,
  bgMainColor,
  textColor,
  secondColor,
  allColor,
  newColor,
  dangerColor,
  dangerColor2,
  successColor,
  closeColor,
  inActiveAllColor,
  inActiveNewColor,
  inActiveDangerColor,
  inActiveSuccessColor,
  inActiveCloseColor,
  blueColor,
  brownColor,
  brownSoftColor,
  brightColor,
  bgTextInput,
  bgCard,
  labelColor,
  mainSchemaColor,
  secondSchemaColor,
  dateTimeColor,
  gradBlue1,
  gradBlue2,
  gradTurquoise1,
  gradTurquoise2,
  gradOrange1,
  gradOrange2,
  gradPurple1,
  gradPurple2,
  bgCardGrad1,
  bgCardGrad2,
  lightTransColor,
  invisibleColor,
};
