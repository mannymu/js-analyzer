<script setup lang="ts">
import { PropType, computed } from 'vue';

const map = {
  xs: '12px',
  sm: '14px',
  normal: '16px',
};

const emit = defineEmits(['click']);

const props = defineProps({
  size: {
    type: String as PropType<keyof typeof map>,
    default: 'normal',
  },
  icon: String,
  active: Boolean,
  class: String,
});

const react = computed(() => {
  const size = map[props.size];
  return {
    width: Number.parseInt(size) + 4 + 'px',
    height: Number.parseInt(size) + 4 + 'px',
  };
});
</script>
<template>
  <span
    :style="{
      ...react,
    }"
    class="inline-flex items-center justify-center cursor-pointer hover:bg-active rounded-md"
    :class="class"
    @click="(e) => $emit('click', e)"
  >
    <i
      :style="{
        fontSize: map[props.size],
      }"
      :class="[
        props.icon,
        {
          'text-active': props.active,
          'text-normal': !props.active,
        },
      ]"
      class="inline-block text-normal text-xs iconfont hover:text-active"
    ></i>
    <slot />
  </span>
</template>
