<template>
  <div class="flex w-full">
    <template v-for="(table, key) in tables" :key="key">
      <div class="flex flex-col min-w-[80px] w-full relative" :style="{ minWidth: columnWidth }">
        <!-- Time slots -->
        <template v-for="(time, ti) in timeLine" :key="ti">
          <div class="border-t border-r border-gray-200 dark:border-[#FFFFFF29] cursor-pointer bg-white dark:bg-[#1B1B1D]" :style="{ height: `${height}px`, minWidth: columnWidth }"></div>
        </template>

        <!-- Events -->
        <template v-for="(event, index) in table.events" :key="index">
          <div
              class="absolute w-full border-b border-r border-l-4 calendar-item cursor-pointer"
              :style="{
              top: `${event.top}px`,
              left: `${event.left}px`,
              height: `${event.height}px`,
              background: event.backgroundColor,
              borderColor: event.borderColor,
              width: `${event.width}px`,
              '--w': `${width}px`
            }"
          >
            <div class="h-full calendar-item-info">
              <div class="flex flex-col items-start pl-[8px] h-full text-[11px]">
                <span v-if="event.type === 'reservation'">№ {{ event.id }}</span>
                <span class="font-semibold">{{ event.label }}
                  <span class="text-[8px]" v-if="event.type === 'reservation'">чел</span>
                </span>
                <span v-if="event.isShowTag"
                      class="rounded-[4px] p-[2px] block font-semibold text-[8px] text-nowrap"
                      :style="{ background: event.tagBackgroundColor, color: event.tagColor }">
                  {{ event.status }}
                </span>
                <span v-if="event.type === 'reservation'" class="flex gap-0.5 items-center text-[11px]">
                  <IconPhone />{{ event.phone_number }}
                </span>
                <span>{{ getFormatedTime(event.start) }} - {{ getFormatedTime(event.end) }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import IconPhone from '@/components/icons/IconPhone.vue';
import { getFormatedTime } from '@/helper/function.js';

defineProps({
  tables: Array,
  timeLine: Array,
  height: Number,
  width: Number,
  columnWidth: String
});
</script>

<style scoped>
.calendar-item {
  overflow: hidden;
}

.calendar-item:hover {
  min-width: var(--w) !important;
  width: max(var(--w)) !important;
  overflow: visible;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Fix for dark mode hover effect */
:root.dark .calendar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

:root.dark .calendar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.calendar-item-info {
  width: var(--w) !important;
}
</style>
