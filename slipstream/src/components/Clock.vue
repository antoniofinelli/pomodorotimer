<script>
import { def } from '@vue/shared';
import { onMounted } from 'vue';
import { store } from '../store';
export default{
    props:['msg', 'title', 'amg'],
    //state
    data(){
        return{
            displayTime: "00:00",
            remainingSeconds: 3599,
            breakTime: store.breakTime,
            workTime: store.workTime,
            paused: false,
            onBreak: false,
            timerRef: null,
            buttonText:"Start"
        }
    },
    //actions
    methods:{
        startTimer(){
            if(!this.timerRef){
                const timer = setInterval(this.addSecond, 1000)
                this.timerRef = timer
                this.updateButtonText()
            }else{
                this.pause()
            }
        },
        addSecond(){
            this.checkFlip()
            if(!this.paused){
                this.remainingSeconds--;
                this.setDisplayTime()
            }
        },
        checkFlip(){
            if(this.remainingSeconds == 0){
                //If you are on a break, switch to a working session
                if (this.onBreak){
                    this.work()
                }
                //If you are working, switch to a break session
                else{
                    this.break()
                }    
            }  
        },
        work(){
            this.onBreak = false;
            this.remainingSeconds = this.workTime;
        },
        break(){
            this.onBreak = true;
            this.remainingSeconds = this.breakTime;
        },
        pause(){
            this.paused = !this.paused
            this.updateButtonText()
        },
        updateButtonText(){
            if(this.paused){
                this.buttonText = "Resume"
            }else{
                this.buttonText = "Pause"
            }
        },
        setDisplayTime(){
            var remainingSeconds = this.remainingSeconds % 60
            var minutes = Math.floor(this.remainingSeconds/60)

            if(remainingSeconds < 10){
                remainingSeconds = "0" + remainingSeconds
            }
            if(minutes < 10){
                minutes = "0" + minutes
            }
            
            this.displayTime = minutes + ":" + remainingSeconds

        }

    },
    mounted(){
        console.log('mounted')
        this.work()
        this.setDisplayTime()
    }
}


</script>

<template>
    <div>
        <h1 class="timer">
            {{ displayTime }}
        </h1>
        <h1 v-if=onBreak>
            You are on break!
        </h1>
        <h1 v-else>
            You are working!
        </h1>
        <br>
        <h1>    
            <button @click="startTimer()">{{buttonText}}</button>
        </h1>
    </div>
</template>

<style>
.timer{
    font-size: 200px;
    font-weight: bold;
    font-family: Unbounded;

}
@media (max-width: 1024px) {
  .timer{
    font-size: 100px;
}
}

</style>