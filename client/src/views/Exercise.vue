<template>
    <div>
        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure >
                        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{exercise.title}}</p>
                </div>
                </div>

                <div class="content">
                <b>Type: </b> {{exercise.type}}
                <br>
                <b>Duration: </b> {{exercise.time}}
                <br>
                <b>Video Link: </b> <a v-bind:href="exercise.link" target="_blank"> Youtube Video </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Exercise_Server } from "../models/Exercises";
import { Exercise } from "../models/my-fetch-exercises";

export default {
    data: () => ({
        exercise: {}
    }),
    async created(){
        this.exercise = Exercise.Exercise;
    }
}
</script>
