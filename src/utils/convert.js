/* eslint-disable array-callback-return */
export const getCurrentWeek = (currentDate) => {
  const dayOfWeek = currentDate.getDay();

  const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek;

  const monday = new Date(currentDate);
  monday.setDate(currentDate.getDate() - adjustedDay + 1);

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Tên ngày viết tắt
  const weekDays = [];
  const weekDates = [];

  Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    weekDays.push(dayNames[i]);

    const dayOfMonth = day.getDate().toString().padStart(2, "0");
    weekDates.push(dayOfMonth);
  });

  return { weekDays, weekDates };
};

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getData = () => {
  const data = getCurrentWeek(new Date());
  const results = data.weekDays.map((date, i) => {
    if (i === 0 || i === 1) {
      return {
        date: date,
        numberDate: data.weekDates[i],
        id: generateUUID(),
        workouts: [
          {
            id: generateUUID(),
            name: "Chest Day - with Arm exercises",
            total: 2,
            exercises: [
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
            ],
          },
          {
            id: generateUUID(),
            name: "Gym",
            total: 2,
            exercises: [
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
            ],
          },
          {
            id: generateUUID(),
            name: "Cadio",
            total: 2,
            exercises: [
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
            ],
          },
        ],
      };
    }
    if (i === 4) {
      return {
        date: date,
        numberDate: data.weekDates[i],
        id: generateUUID(),
        workouts: [
          {
            id: generateUUID(),
            name: "Chest Day - with Arm exercises",
            total: 2,
            exercises: [
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
            ],
          },

          {
            id: generateUUID(),
            name: "Cadio",
            total: 2,
            exercises: [
              {
                id: generateUUID(),
                name: "Bench Press Medium Grip",
                information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
                rep: 3,
              },
              {
                id: generateUUID(),
                name: "Exercise B",
                information: "50 lb x 5",
                rep: 3,
              },
            ],
          },
        ],
      };
    }
    return {
      id: generateUUID(),
      date: date,
      numberDate: data.weekDates[i],
      workouts: [],
    };
  });

  return results;
};
