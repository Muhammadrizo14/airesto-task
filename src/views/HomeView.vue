<template>
  <Header/>
  <Filter/>
  <Calendar/>
</template>

<script setup>
import Header from "@/components/main/Header.vue";
import Filter from "@/components/main/Filter.vue";
import Calendar from "@/components/Calendar.vue";
import {onMounted} from "vue";
import {useBookingStore} from "@/stores/booking.js";

const bookingStore = useBookingStore();
onMounted(async () => {
  await bookingStore.getBooking()
})
</script>


