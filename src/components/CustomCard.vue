<script setup>
import { ref } from 'vue'

let recentVisits = ref([])
let recentVisitsF = ref([])
let recentVisitsV = ref([])
let badges = ref([])
let badgesF = ref([])
let badgesV = ref([])
let accordionIndex = ref('')
const props = defineProps({
    index1: Number,
    type: String,
    days: Number
})


const emit = defineEmits(['deleteItemCard'])

// console.log(props.index1);

 

recentVisits.value = [{ days: props.days, number: '213,414' }, { days: '15-30天', number: '223,111' }, { days: '30-45天', number: '22,414' }]

recentVisitsF.value = [{ days: props.days, number: '213,414' }, { days: '15-30天', number: '223,111' }, { days: '30-45天', number: '22,414' }, { days: '312天', number: '3,141,414' }]

recentVisitsV.value = [{ days: props.days, number: '213,414' }, { days: '15-30天', number: '223,111' }, { days: '30-45天', number: '22,414' }, { days: '310-415天', number: '22,414' }]



recentVisits.value.forEach(item => {
    item.color = ''
})

function onclick() {
    emit('deleteItemCard')
    console.log('cara',props.days,recentVisits.value[0].days);
    // console.log(accordionIndex.value);
}





function selectR(item, index) {
    if (recentVisits.value[index].color === 'activeClass') {
        recentVisits.value[index].color = ''
        let index1 = badges.value.findIndex(obj => obj['number'] === item.number && obj['days'] === item.days)
        badges.value.splice(index1, 1)
    } else {
        let a = badges.value.some(obj => obj['number'] === item.number && obj['days'] === item.days)
        if (!a) {
            badges.value.push({
                days: item.days,
                number: item.number
            })
        }
        recentVisits.value[index].color = 'activeClass'
    }
}


function selectF(item, index) {
    if (recentVisitsF.value[index].color === 'activeClass') {
        recentVisitsF.value[index].color = ''
        let index1 = badgesF.value.findIndex(obj => obj['number'] === item.number && obj['days'] === item.days)
        badgesF.value.splice(index1, 1)
    } else {
        let a = badgesF.value.some(obj => obj['number'] === item.number && obj['days'] === item.days)
        if (!a) {
            badgesF.value.push({
                days: item.days,
                number: item.number
            })
        }
        recentVisitsF.value[index].color = 'activeClass'
    }
}


function selectV(item, index) {
    if (recentVisitsV.value[index].color === 'activeClass') {
        recentVisitsV.value[index].color = ''
        let index1 = badgesV.value.findIndex(obj => obj['number'] === item.number && obj['days'] === item.days)
        badgesV.value.splice(index1, 1)
    } else {
        let a = badgesV.value.some(obj => obj['number'] === item.number && obj['days'] === item.days)
        if (!a) {
            badgesV.value.push({
                days: item.days,
                number: item.number
            })
        }
        recentVisitsV.value[index].color = 'activeClass'
    }
}

</script>
<template>
     
    <div class="result-card-main mt-3"  >
        <div class="d-flex justify-content-between">
            <p class="font-support"> (目標) RFV 日期區間：2024/04/01 ~ 2024/04/30</p>
            <div class="position-relative  fw-semibold  hover-label">
                <button class="btn" @click="onclick" type="button" :id="props.type">
                    <i class="bi bi-x"></i></button>
                <span class="custom-tooltip-2 custom-tooltip-3">
                    刪除
                </span>
            </div>
        </div>
        <div class="accordion" :id="'accordionID' + accordionIndex + props.type">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapseOne' + accordionIndex + props.type" aria-expanded="true"
                        :aria-controls="'#collapse' + accordionIndex">
                        <div class="d-flex flex-wrap gap-3">
                            <div class="d-flex align-items-start">
                                <b class="me-1 lh-lg">R : </b>
                                <div class=" mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">

                                    <template v-for="(item, index) in badges" :key="index">
                                        <span class="badge" style="font-size:12px">{{ item.days }} - {{ item.number
                                        }}</span>
                                    </template>
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <b class="me-1  lh-lg ">F : </b>

                                <div class="mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">
                                    <template v-for="(item, index) in badgesF" :key="index">
                                        <span class="badge" style="font-size:12px">{{ item.days }} - {{ item.number
                                        }}</span>
                                    </template>
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <b class="me-1 lh-lg ">V : </b>
                                <div id="vlist`+ random + `" class="mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">
                                    <template v-for="(item, index) in badgesV" :key="index">
                                        <span class="badge" style="font-size:12px">{{ item.days }} - {{ item.number}}</span>
                                    </template>
                                </div>
                            </div>
                        </div>

                    </button>
                </h2>
                <div :id="'collapseOne' + accordionIndex + props.type" class="accordion-collapse collapse show"
                    :data-bs-parent="'#accordionID' + accordionIndex + props.type">
                    <div class="accordion-body">
                        <div class="d-flex gap-3 flex-wrap">
                            <ul class="list-group " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> R</b> 最近造訪日 ( 人數 ) </h6>
                                <template v-for="(item, index) in recentVisits" :key="index">
                                    <a class="list-group-item list-group-item-action" :class="item.color"
                                        @click="selectR(item, index)">
                                        <div class="d-flex justify-content-between py-1 ">
                                            <div>{{ item.days }}</div>
                                            <div>{{ item.number }}</div>
                                        </div>
                                    </a>
                                </template>
                            </ul>
                            <ul class="list-group " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> F </b>最近造訪日 ( 人數 ) </h6>
                                <template v-for="(item, index) in recentVisitsF" :key="index">
                                    <a class="list-group-item list-group-item-action" :class="item.color"
                                        @click="selectF(item, index)">
                                        <div class="d-flex justify-content-between py-1 ">
                                            <div>{{ item.days }}</div>
                                            <div>{{ item.number }}</div>
                                        </div>
                                    </a>
                                </template>
                            </ul>
                            <ul class="list-group  " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> V </b>最近造訪日 ( 人數 ) </h6>
                                <template v-for="(item, index) in recentVisitsV" :key="index">
                                    <a class=" list-group-item list-group-item-action" :class="item.color"
                                        @click="selectV(item, index)">
                                        <div class="d-flex justify-content-between py-1 ">
                                            <div>{{ item.days }}</div>
                                            <div>{{ item.number }}</div>
                                        </div>
                                    </a>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.list-group>.list-group-item {
    cursor: pointer;
}


.activeClass {
    background-color: #0d6efd;
    color: white;
}
</style>