import {onMounted, ref} from 'vue'
import {defineStore} from 'pinia'
import {data} from "@/helper/const.js";
import {normalizeEvents} from "@/helper/normalize.js";
import {getHeight, getTop, isSameDay} from "@/helper/function.js";
import apiClient from "../../apiClient.js";
import {groupByOverlap, positionEventsWithOverlap, transformEvent} from "@/helper/data.js";

export const useBookingStore = defineStore('booking', () => {
  const bookingData=ref({...data})
  const filter=ref({
    zones:{
      '1 этаж':true,
      '2 этаж':true,
      'Банкетный зал':true
    },
    date:data.current_day,
  })
  const width = ref(80); // numeric width
  const height = ref(40); // row height in px

  const getBooking =  async () => {
    try {
      const response = await apiClient.get(`api/booking`);
      bookingData.value = response.data;
    } catch (e) {

    }
    bookingData.value.tables = [...data.tables]
    base_width.value = width.value ?? document.querySelector('.calendar-header-item').clientWidth

    bookingData.value.tables = bookingData.value.tables
        .filter(table => filter.value.zones[table.zone]) // Filter based on the zone
        .map(table => {
          const allEvents = normalizeEvents(table.orders, table.reservations);

          const selectedDayEvents = allEvents.filter(event =>
              isSameDay(event.start, filter.value.date)
          );

          const events = positionedEvents(selectedDayEvents);
          console.log(table.zone)
          return {
            ...table,
            events
          }
        });

  }

  function updateEventPositionsWithNewWidth(w) {
    bookingData.value.tables.forEach(table => {
      const allEvents = table.events.map(event => transformEvent(event, bookingData.value.restaurant.opening_time,height.value))
          .sort((a, b) => a.startMin - b.startMin);
      base_width.value=w
      const groups = groupByOverlap(allEvents);
      table.events = positionEventsWithOverlap(groups,base_width.value);
    });
  }

  const positionedEvents = ((events) => {
    const eventsWithTime = events
        .map(event => transformEvent(event, bookingData.value.restaurant.opening_time,height.value))
        .sort((a, b) => a.startMin - b.startMin);

    const groups = groupByOverlap(eventsWithTime);
    return positionEventsWithOverlap(groups,base_width.value);
  });

  const base_width=ref(0)
  onMounted(() => {
    console.log(document.querySelector('.calendar-header-item').clientWidth)
    base_width.value=document.querySelector('.calendar-header-item').clientWidth
  })


  return {
    bookingData,
    getBooking,
    updateEventPositionsWithNewWidth,
    filter,
    height,
    width
  }
})
