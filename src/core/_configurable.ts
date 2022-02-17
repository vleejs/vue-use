import { isClient } from '../shared'

export interface ConfigurableDocument {
  document?:Document
}



export const defaultDocument  = isClient ? window.document :null