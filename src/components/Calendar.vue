<template>
  <div class="my-[16px] h-screen overflow-x-auto scroll-container custom-scroll w-full text-gray-900 dark:text-white pb-3 relative">
    <div class="flex flex-col sticky text-gray-900 dark:text-white top-0 z-[99999] bg-white dark:bg-[#1B1B1D]">
      <CalendarHeader :tables="bookingData.tables" :columnWidth="columnWidth" />
    </div>
    <div class="h-screen overflow-y-visible w-full custom-scroll relative bg-white dark:bg-[#1B1B1D]">
      <div class="flex w-full">
        <TimelineColumn :timeLine="timeLine" :height="height" :columnWidth="columnWidth" />
        <BookingGrid :tables="bookingData.tables" :timeLine="timeLine" :height="height" :width="width" :columnWidth="columnWidth" />
      </div>
    </div>
  </div>
  <ScaleControl @changeScale="changeScale" :scalePercentage="scalePercentage" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useBookingStore } from '@/stores/booking.js';
import { storeToRefs } from 'pinia';
import { generateTimelineFunction, getFormatedTime, getTop } from '@/helper/function.js';

import CalendarHeader from '@/components/calendar/CalendarHeader.vue';
import TimelineColumn from '@/components/calendar/TimelineColumn.vue';
import BookingGrid from '@/components/calendar/BookingGrid.vue';
import ScaleControl from '@/components/calendar/ScaleControl.vue';

const MIN_HEIGHT = 40;
const MIN_WIDTH = 80;
const STEP = 4;

const bookingStore = useBookingStore();
const { bookingData, height, width } = storeToRefs(bookingStore);

const timeLine = ref(
    generateTimelineFunction(
        bookingData.value.restaurant.opening_time,
        bookingData.value.restaurant.closing_time,
        30
    )
);

const columnWidth = computed(() => `${width.value}px`);

const scalePercentage = computed(() => {
  // Calculate percentage based on how much we've scaled from MIN_HEIGHT
  // MIN_HEIGHT is considered as 50%
  const basePercentage = 50;
  const additionalPercentage = Math.round(((height.value - MIN_HEIGHT) / MIN_HEIGHT) * 100);
  return basePercentage + additionalPercentage;
});

function changeScale(direction) {
  width.value=document.querySelector('.calendar-header-item').offsetWidth
  if (direction === 'in' && height.value < 240   && width.value < 240) {
    height.value += STEP;
    width.value += 16;
  } else if (direction === 'out' && height.value > MIN_HEIGHT && width.value > MIN_WIDTH) {
    height.value -= STEP;
    width.value -= 16;
  }
  bookingStore.updateEventPositionsWithNewWidth(width.value);
}
</script>

