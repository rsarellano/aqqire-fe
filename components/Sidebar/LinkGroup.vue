<template>
  <li
    class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
    :class="activeCondition && 'bg-stone-900'">
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>

<script setup lang="ts">
  const props = defineProps({
    activeCondition: Boolean,
  });

  const expanded = ref(props.activeCondition);
  const handleClick = () => {
    expanded.value = !expanded.value;
  };
</script>
