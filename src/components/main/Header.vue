<template>
  <div class="h-[44px] w-full bg-white dark:bg-[#ffffff0d] py-0 px-[20px] flex justify-between items-center">
    <h2 class="font-semibold text-[11px] text-gray-900 dark:text-white">AIRESTO | {{bookingData.restaurant.restaurant_name}}</h2>
    <div class="flex items-center gap-[8px]">
      <div class="input-wrapper">
        <IconSearch/>
        <input class="h-[28px] text-gray-900 dark:text-white bg-gray-100 dark:bg-[#1B1B1D] py-0 px-[36px] border rounded-lg border-gray-200 dark:border-[#ffffff29]" placeholder="⌘+Л поиск по имени"/>
      </div>
      <button class="rounded-sm text-gray-900 dark:text-white w-[24px] cursor-pointer h-[24px] bg-gray-100 dark:bg-[#ffffff0d] flex items-center justify-center">
        <IconMoon/>
      </button>
      <button class="rounded-sm cursor-pointer text-gray-900 dark:text-white h-[24px] bg-gray-100 dark:bg-[#ffffff0d] flex items-center justify-start px-[6px]"><IconLogout/> Выйти</button>
    </div>
  </div>
</template>
<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconLogout from "@/components/icons/IconLogout.vue";
import {useBookingStore} from "@/stores/booking.js";
import {storeToRefs} from "pinia";
import IconMoon from "@/components/icons/IconMoon.vue";

const bookingStore=useBookingStore();
const {bookingData}=storeToRefs(bookingStore)


</script>