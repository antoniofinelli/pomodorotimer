<script>
    import { store } from '../store';
    
    export default {
        data(){
            return{
                newWorkTime: store.workTime,
                newBreakTime: store.breakTime
            }
        },
        methods:{
            updateSettings(){
                store.workTime = this.newWorkTime
                store.breakTime = this.newBreakTime
            }
        }
    }
</script>

<template>
    <div class = "settingsPane">
        <label for="workTime">Time Per Working Session</label>
        <input id= "workTime" v-model.number="newWorkTime" type = "text" :placeholder='workTime'>
        <label for="breakTime">Time Per Break Session</label>
        <input id= "breakTime" v-model.number="newBreakTime" type = "text" :placeholder='breakTime'>
        <br>
        <button @click="updateSettings()">Enter</button>
        
    </div>
</template>
