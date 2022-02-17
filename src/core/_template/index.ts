import { ref } from 'vue'

export function useCounter(initVal = 0) {
  const counter = ref(initVal)
  const inc = (delta = 1) => (counter.value += delta)
  const dec = (delta = 1) => (counter.value -= delta)
  return { inc, dec }
}
