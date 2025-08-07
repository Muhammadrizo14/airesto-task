<template>
  <div class="bg-white dark:bg-[#222222] fixed bottom-[24px] right-[24px] p-[8px] rounded-[8px] border border-gray-200 dark:border-[#FFFFFF29] shadow-md z-[9999999]">
    <h3 class="font-semibold text-gray-900 dark:text-white text-[13px] text-center pb-[4px]">
      Масштаб <span class="text-[12px] text-gray-400 dark:text-gray-300">{{ scalePercentage }}%</span>
    </h3>
    <div class="flex items-center justify-center gap-[8px] px-[8px]">
      <div class="rounded-[4px] bg-gray-100 dark:bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer text-gray-900 dark:text-white" @click="$emit('changeScale', 'out')">
        <IconMinus />
      </div>
      <div class="rounded-[4px] bg-gray-100 dark:bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer text-gray-900 dark:text-white" @click="$emit('changeScale', 'in')">
        <IconPlus />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMinus from "@/components/icons/IconMinus.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

defineProps({
  scalePercentage: {
    type: Number,
    default: 100
  }
});
</script>
