const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getTopNotifications(notifications, n = 10) {
  return [...notifications]
    .sort((a, b) => {
      const weightDiff = priorityMap[b.Type] - priorityMap[a.Type];

      if (weightDiff !== 0) return weightDiff;

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, n);
}