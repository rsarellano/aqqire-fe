import type { Ref } from "vue";

export default function updateRefValue<T>(ref: Ref<T>, value: T) {
  ref.value = value;
}
