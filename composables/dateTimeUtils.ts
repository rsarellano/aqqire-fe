export const elapsedSince = (timestamp: any) => {
  const now: Date = new Date();
  const past: Date = new Date(timestamp);
  const diffTime = now.valueOf() - past.valueOf();
  const seconds = Math.floor(diffTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return {
      time: "seconds",
      value: `${seconds} second${seconds !== 1 ? "s" : ""} ago`,
    };
  } else if (minutes < 60) {
    return {
      time: "minutes",
      value: `${minutes} minute${minutes !== 1 ? "s" : ""} ago`,
    };
  } else if (hours < 24) {
    return {
      time: "hours",
      value: `${hours} hour${hours !== 1 ? "s" : ""} ago`,
    };
  } else if (days < 7) {
    return {
      time: "days",
      value: `${days} day${days !== 1 ? "s" : ""} ago`,
    };
  } else if (weeks < 4) {
    return {
      time: "weeks",
      value: `${weeks} week${weeks !== 1 ? "s" : ""} ago`,
    };
  } else if (months < 12) {
    return {
      time: "months",
      numerical: months,
      value: `${months} month${months !== 1 ? "s" : ""} ago`,
    };
  } else {
    return {
      time: "years",
      value: `${years} year${years !== 1 ? "s" : ""} ago`,
    };
  }
};

export const datetimeToDB = (datetime: Date) => {
  const date = new Date(datetime);
  return date.toISOString(); // Assuming you want to store the datetime in ISO format
};

export const datetimeFromDB = (datetimeString: Date) => {
  return new Date(datetimeString); // Parse datetime string from database
};
