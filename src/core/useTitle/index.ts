import { ref, watch } from 'vue'
import { isString } from '../../shared'
import type { ConfigurableDocument } from '../_configurable'
export interface UseTitleOptions extends ConfigurableDocument {
  /**
   * Observe `document.title` changes using MutationObserve
   *
   * @default false
   */
  observe?: boolean
  /**
   * The template string to parse the title (e.g., '%s | My Website')
   *
   * @default '%s'
   */
  titleTemplate?: string
}
export function useTitle(newTitle, options: UseTitleOptions) {
  const { titleTemplate = '%s' } = options
  const title = ref(newTitle ?? document?.title ?? null)

  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = titleTemplate.replace('%s', t)
  }, {
    immediate: true,
  })

  return title
}
