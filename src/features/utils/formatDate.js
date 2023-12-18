export const  handleFormatDate=(date)=> {
    const days = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
    const months = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];

    const newDate = new Date(date);

    const dayWeek = days[newDate.getUTCDay()];
    const dayMonth = newDate.getUTCDate();
    const month = months[newDate.getUTCMonth()];
    const hour = newDate.getUTCHours();
    const minutes = newDate.getUTCMinutes().toString().padStart(2, "0");

    return `${dayWeek}, ${dayMonth} de ${month} - ${hour}:${minutes}`;
  }
