import Holidays from 'date-holidays';

const  hd = new Holidays();

export default function isHolyday(day, code) {
  hd.init(code);
  return hd.isHoliday(new Date(day));
};
