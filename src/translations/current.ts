
//@ts-check
import { ref } from 'vue'
import translation from './fi.json'
type Dictionary = { [index: string]: string }
export const translations = ref(translation as Dictionary)

