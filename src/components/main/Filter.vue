<template>
  <div class="px-[20px] bg-white dark:bg-[#1B1B1D]">
    <h1 class="text-gray-900 dark:text-white font-bold text-[20px] mt-[32px]">Бронирования</h1>
    <div class="mt-[16px]">
      <h4 class="text-gray-500 dark:text-[#FFFFFFA3]">Дата</h4>
      <div class="flex items-center justify-start gap-[8px] mt-[8px]">
        <template v-for="(day,key) in bookingData.available_days" :key="key">
          <div :class="day===filter.date?'bg-blue-500 text-white dark:bg-[#007AFF] dark:text-white':'bg-gray-100 text-gray-900 dark:bg-[#FFFFFF0A] dark:text-white'" @click="changeDate(day)" class="rounded-md min-h-[36px] py-[4px] px-[8px] cursor-pointer">
            <p class="text-[11px] font-semibold">{{getRussianDayMonth(day)}}</p>
            <p class="text-[11px]">{{getRussianDateLabel(day)}}</p>
          </div>
        </template>
      </div>
    </div>
    <div class="mt-[16px]">
      <h4 class="text-gray-500 dark:text-[#FFFFFFA3]">Отображаемые зоны</h4>
      <div class="flex items-center justify-start gap-[8px] mt-[8px] ">
        <template v-for="(zone,key) in filter.zones" :key="key">
          <div :class="zone?'bg-blue-500 text-white dark:bg-[#007AFF] dark:text-white':'bg-gray-100 text-gray-900 dark:bg-[#FFFFFF0A] dark:text-white'" @click="toggleZone(key)" class="rounded-md py-[4px] px-[8px] cursor-pointer">
            <p class="text-[11px]">{{key}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useBookingStore} from "@/stores/booking.js";
import {storeToRefs} from "pinia";
import {getRussianDateLabel, getRussianDayMonth} from "@/helper/function.js";

const bookingStore=useBookingStore();
const {filter,bookingData}=storeToRefs(bookingStore)
 async function toggleZone(key) {
   console.log(key)
   filter.value.zones[key] = !filter.value.zones[key]
   await bookingStore.getBooking()
   const w = document.querySelector('.calendar-header-item').offsetWidth
   bookingStore.updateEventPositionsWithNewWidth(w)
 }

async function changeDate(day) {
  filter.value.date = day
  await bookingStore.getBooking()
}
</script>