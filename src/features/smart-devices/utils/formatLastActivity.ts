const MS_IN_DAY = 24 * 60 * 60 * 1000;

type DayRelation = "TODAY" | "YESTERDAY" | "OLDER";

const startOfDay = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const getDayRelation = (timestamp: number): DayRelation => {
  const todayStart = startOfDay(new Date()).getTime();
  const yesterdayStart = todayStart - MS_IN_DAY;

  switch (true) {
    case timestamp >= todayStart:
      return "TODAY";
    case timestamp >= yesterdayStart:
      return "YESTERDAY";
    default:
      return "OLDER";
  }
};

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

const getDayLabel = (relation: DayRelation, date: Date): string => {
  switch (relation) {
    case "TODAY":
      return "Dnes";
    case "YESTERDAY":
      return "Včera";
    default:
      return formatDate(date);
  }
};

export const formatLastActivity = (timestamp: number): string => {
  const activityDate = new Date(timestamp);

  const relation = getDayRelation(timestamp);
  const dayLabel = getDayLabel(relation, activityDate);
  const time = formatTime(activityDate);

  return `${dayLabel}, ${time}`;
};
