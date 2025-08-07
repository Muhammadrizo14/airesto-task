export const generateTimelineFunction = (startTime, endTime, interval) => {
    const timeline = [];
    let currentTime = startTime;

    if(endTime==='00:00'){
        endTime='24:00'
    }
    while (currentTime <= endTime) {
        timeline.push(currentTime);
        const [hour, minute] = currentTime.split(':').map(Number);
        const totalMinutes = hour * 60 + minute;
        const nextTime = totalMinutes + interval;
        const nextHour = Math.floor(nextTime / 60);
        const nextMinute = nextTime % 60;
        currentTime = `${nextHour < 10 ? '0' : ''}${nextHour}:${nextMinute < 10 ? '0' : ''}${nextMinute}`;
    }

    return timeline;
};

import { DateTime } from "luxon";


export const getTop = (timeStr, openingTimeStr, height = 40) => {
    const ZONE = "Asia/Vladivostok";
    // Parse the original date string and convert to the desired time zone
    const time = DateTime.fromJSDate(new Date(timeStr)).setZone(ZONE);

    const [openHours, openMinutes] = openingTimeStr.split(":").map(Number);

    // Set opening time in the same zone
    const opening = time.set({ hour: openHours, minute: openMinutes, second: 0, millisecond: 0 });

    const diffMinutes = time.diff(opening, "minutes").minutes;
    console.log(time,opening,diffMinutes)

    return (diffMinutes * height * 2) / 60;
};


export const getFormatedTime = (timeStr) => {
    const ZONE = "Asia/Vladivostok";

    const time = DateTime.fromISO(timeStr, { setZone: true }).setZone(ZONE);

    return time.toFormat("HH:mm");
};

export const getHeight = (time_from, time_to, height = 40) => {
    return getTop(time_to, "00:00", height) - getTop(time_from, "00:00", height);
};

export function isSameDay(dateStr, compareDate) {
    const eventDate = new Date(dateStr);
    const compareDateObj = new Date(compareDate);
    return (
        eventDate.getFullYear() === compareDateObj.getFullYear() &&
        eventDate.getMonth() === compareDateObj.getMonth() &&
        eventDate.getDate() === compareDateObj.getDate()
    );
}

export const getRussianDateLabel=(inputDate)=> {
    const daysOfWeek = [
        'Воскресенье', 'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота'
    ];

    const input = new Date(inputDate);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // Clear time part for comparison
    input.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);

    if (input.getTime() === today.getTime()) return 'Сегодня';
    if (input.getTime() === tomorrow.getTime()) return 'Завтра';

    return daysOfWeek[input.getDay()];
}


export const getRussianDayMonth=(dateInput)=> {
    const date = new Date(dateInput);

    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
}