//https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api
import { reactive } from 'vue'
          
export const store = reactive({
    workTime: 1800,
    breakTime: 300
})