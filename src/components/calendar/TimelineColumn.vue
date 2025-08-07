<template>
  <div
      class="min-w-[80px] w-full max-w-[80px] flex sticky left-0 text-gray-900 dark:text-white z-[99999]"
      :style="{ width: columnWidth }"
  >
    <div class="flex flex-col w-full">
      <template v-for="(time, key) in timeLine" :key="key">
        <div class="flex items-center justify-center relative bg-gray-100 dark:bg-[#1B1B1D]" :style="{ height: `${height}px` }">
          <div class="absolute top-0 text-gray-500 dark:text-[#FFFFFFA3]" v-if="key > 0">{{ time }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  timeLine: Array,
  height: Number,
  columnWidth: String
});
</script>
