import {getHeight, getTop} from "@/helper/function.js";


export const toMinutes = isoString => {
    const date = new Date(isoString);
    return date.getHours() * 60 + date.getMinutes();
};

export function transformEvent(event, openingTime,height) {
    const startMin = toMinutes(event.start);
    const endMin = toMinutes(event.end);

    return {
        ...event,
        startMin,
        endMin,
        top: getTop(event.start, openingTime, height),
        height: getHeight(event.start, event.end, height),
    };
}

export function groupByOverlap(events) {
    const groups = [];

    for (const event of events) {
        let placed = false;
        for (const group of groups) {
            const last = group[group.length - 1];
            if (event.startMin < last.endMin) {
                group.push(event);
                placed = true;
                break;
            }
        }
        if (!placed) groups.push([event]);
    }

    return groups;
}

export function positionEventsWithOverlap(groups,base_width) {
    const positioned = [];

    for (const group of groups) {
        for (let i = 0; i < group.length; i++) {
            const event = group[i];

            console.log(group)
            const overlaps = group.filter(
                (other, j) =>
                    i !== j &&
                    event.startMin < other.endMin &&
                    event.endMin > other.startMin
            );

            // Проверяем: есть ли перекрытия более чем на 30 минут
            const overlapWithDelay = group.find(
                other =>
                    other !== event &&
                    event.startMin < other.endMin &&
                    event.endMin > other.startMin &&
                    Math.abs(event.startMin - other.startMin) > 30
            );

            let left = 0;
            let width = base_width;

            // if (overlapWithDelay && overlapWithDelay.startMin > event.startMin) {
            //   // Текущий event раньше, он на полную ширину
            //   left = 0;
            //   width = base_width.value;
            // } else if (overlapWithDelay && overlapWithDelay.startMin < event.startMin) {
            //   // Текущий event позже, отступаем на 4px
            //   left = 4;
            //   width = base_width.value - 4;
            // }


            if (overlaps.length > 0) {
                console.log('pix')
                // Обычное деление ширины при пересечениях
                const overlapIndex = group
                    .slice(0, i)
                    .filter(e => event.startMin < e.endMin && event.endMin > e.startMin)
                    .length;
                console.log(overlapIndex)
                const total = overlaps.length + 1;
                width = (base_width - (total - 1)) / total;
                left = overlapIndex * width;
            }

            positioned.push({
                ...event,
                left,
                width,
                zIndex: 10 + i,
            });
        }
    }

    return positioned;
}
