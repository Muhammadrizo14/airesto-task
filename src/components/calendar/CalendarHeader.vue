<template>
  <div class="flex" :style="{ width: `calc(100% - 8px)` }">
    <div class="min-w-[80px]"></div>
    <template v-for="(table, key) in tables" :key="key">
      <div
          class="text-center pt-3 min-w-[80px] bg-gray-100 dark:bg-[#1B1B1D] calendar-header-item w-full flex justify-center"
          :style="{ minWidth: columnWidth }"
      >
        <div
            class="flex items-center justify-center gap-2 min-h-[48px]"
            :style="{ width: columnWidth }"
        >
          <div class="flex flex-col justify-center items-center text-[11px] text-gray-500 dark:text-[#FFFFFFA3]">
            <p>
              #<span class="font-semibold text-[13px] mr-[4px] text-gray-900 dark:text-white">{{ table.number }}</span>
              {{ table.capacity }} чел.
            </p>
            <p>{{ table.zone }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  tables: Array,
  columnWidth: String
});
</script>
