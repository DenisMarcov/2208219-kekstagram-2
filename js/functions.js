// Строки для проверки функций
const stri1 = '2022';
const stri2 = 'Лёша на полке клопа нашёл ';
const stri3 = '1 кефир, 0.5 батона';
// Проверка длины строки
function checkStrinLength(str, lgth) {
  return str.length <= lgth;
}
checkStrinLength(stri1, 20);
// проверка что строка палиндром
function checkPalindrom (str){
  const strCheck = str.replaceAll(' ','').toLowerCase();
  const strCheckPal = str.replaceAll(' ','').toLowerCase().split('').reverse().join('');
  return strCheck === strCheckPal;
}
checkPalindrom(stri2);
// Выделение чисел из строк и чисел
function extractNumbers (str) {
  str = String(str);
  const checkArr = str.replaceAll(' ', '').split('');
  let numStr = '';
  for (const elem of checkArr){
    if (!isNaN(Number(elem))){
      numStr += Number(elem);
    }
  }
  return Number(numStr) || NaN;
}

extractNumbers(stri3);

// module5-task2
function checkTimeMeeting (startWorkDay, endWorkDay, timeMeeting, durationMeeting) {
  const [startHours, startMinutes] = startWorkDay.split(':').map(Number);
  const [endHours, endMinutes] = endWorkDay.split(':').map(Number);
  const [meetingHours, meetingMinutes] = timeMeeting.split(':').map(Number);

  let flag = true;

  if (startHours <= meetingHours && startMinutes <= meetingMinutes && endHours >= meetingHours && endMinutes >= meetingMinutes){
    const durationMeetingHours = Math.floor(durationMeeting / 60);
    const durationMeetingMinutes = durationMeeting % 60;
    if (meetingHours + durationMeetingHours > endHours){
      flag = false;
      return flag;
    } else if (meetingHours + durationMeetingHours === endHours && meetingMinutes + durationMeetingMinutes > endMinutes){
      flag = false;
      return flag;
    }
  } else {
    flag = false;
    return flag;
  }
  return flag;
}
console.log(checkTimeMeeting('8:00', '17:30', '08:00', 900));
