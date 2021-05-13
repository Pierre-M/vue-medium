<template>
  <button
    class="command-item"
    :class="{ disabled, active }"
    type="button"
    :disabled="disabled"
    @click="$emit('click')"
    v-html="icon"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommandItem",
  props: {
    icon: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
});
</script>

<style lang="scss" scoped>
.command-item {
  --command-item-color: var(--ui-clear);

  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
  color: var(--command-item-color);

  &:not([disabled]) {
    cursor: pointer;
  }

  &.active {
    --command-item-color: var(--ui-primary-alt);
  }

  &[disabled] {
    opacity: 0.3;
  }
}
</style>
