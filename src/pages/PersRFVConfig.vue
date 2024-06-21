<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ref, onMounted } from 'vue'
import Card from '../components/CustomCard.vue'


let cards = ref([])
let cards2 = ref([])
let addItemModalMain = ref(false)
let filterByTime = ref('month-or-season-month')
let rdays = ref(0)
let activeId = ref('')
let btnCliked = ref('')



function addModal(e) {
    activeId.value = e.target.id
    addItemModalMain.value.show()
}


function addRFV(e) {
    console.log(activeId.value);

    const newdays = { days: rdays.value }
    activeId.value === 'addMainButton' ? cards.value.push({ days: rdays }) : cards2.value.push({ ...newdays })
    console.log(cards2.value);
    addItemModalMain.value.hide()

}


onMounted(() => {
    addItemModalMain.value = new Modal(document.getElementById('addItemModalMain'));
});


function deleteItem(e) {
    cards.value.splice(e.value, 1)
 }


function deleteOthers(index) {
    console.log(index)
    cards2.value.splice(index, 1)

}


</script>
<template>
    <div class="personal-rfv-add-page">

        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> RFV條件設定</h2>
        </div>

        <div class="personal-tag-content mt-3">
            <div>
                <div id="cards-list-main" class="mt-2">
                    <template v-for="(item, index) in cards" :key="index">
                        <Card :index1="index" @deleteItemCard="deleteItem(index)" type="main" :days="item.days"
                            :index="'card' + index"></Card>
                    </template>
                </div>
                <div class="empty-div" v-show="cards.length <= 0">
                    <button id="addMainButton" type="button" class="btn bg-secondary-subtle" @click="addModal">新增母體
                        <i class="bi bi-plus"></i></button>
                </div>

                <div class="btn-group button-checkbox d-flex my-3" role="group" id="rfv-switch" style="width: 15rem;">
                    <input type="radio" class="btn-check" name="rfv-switch-name" id="rfv-switch-and" autocomplete="off"
                        value="rfv-switch-and" checked>
                    <label class="btn text-nowrap" for="rfv-switch-and">AND </label>
                    <input type="radio" class="btn-check" name="rfv-switch-name" id="rfv-switch-or" autocomplete="off"
                        value="rfv-switch-or">
                    <label class="btn " for="rfv-switch-or"> OR </label>
                    <input type="radio" class="btn-check" name="rfv-switch-name" id="rfv-switch-not" autocomplete="off"
                        value="rfv-switch-not">
                    <label class="btn " for="rfv-switch-not"> NOT </label>
                </div>
                <div id="cards-list-attached" class="mt-2">
                    <template v-for="(item, index) in cards2" :key="'card'+index">
                         <Card @deleteItemCard="deleteOthers(index)" :index1="index" type="other" :days="item.days">
                        </Card>
                    </template>
                    <div class="empty-div mt-3" v-show="cards2.length < 2">
                        <button id="addAttachButton" type="button" class="btn bg-secondary-subtle" @click="addModal">新增附體
                            <i class="icon-add"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="next-btn-align">
            <button class="btn primary" @click="toConfirmPage()">下一步</button>
        </div>
        <div class="modal fade  modal-lg" id="addItemModalMain" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header d-flex justify-content-between">

                        <h4 class="modal-title" id="">新增<span class="rfc-modal-title">母體</span></h4>
                        <button type="button" class="custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body gap-2">
                        <div class="d-flex   gap-3 flex-wrap  pb-3 ">
                            <div class="btn-group button-checkbox d-flex " role="group" id="month-or-season"
                                style="width: 10rem;">
                                <input type="radio" class="btn-check" name="filter-by-time" id="month-or-season-month"
                                    autocomplete="off" value="month-or-season-month" checked v-model="filterByTime">
                                <label class="btn text-nowrap" for="month-or-season-month">月 </label>
                                <input type="radio" class="btn-check" name="filter-by-time" id="season" autocomplete="off"
                                    value="season" v-model="filterByTime">
                                <label class="btn " for="season"> 季 </label>
                            </div>
                            <div>
                                <div class="col flex-fill">
                                    <div class="input-group " id="rfv-month-input"
                                        v-show="filterByTime === 'month-or-season-month'">
                                        <input class="form-control" type="month" id="personal-rfv-datepicker-month-input"
                                            name="start" min="2018-03" max="2025-01" value="2024-05" />
                                    </div>
                                    <div class="input-group" id="rfv-season-input" v-show="filterByTime === 'season'">
                                        <select class="form-select" aria-label="Default select example"
                                            style="width: 14rem;">
                                            <option selected>選擇季</option>
                                            <option value="1">2023 一季</option>
                                            <option value="2">2023 二季</option>
                                            <option value="3">2023 三季</option>
                                            <option value="3">2023 四季</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-fill" style="width: 15rem">
                                <select class="form-select " type="select" value="" id="rfv-add-unit-select">
                                    <option selected value="udn">聯合報系(45k)</option>
                                    <option value="finance">股票 (20k)</option>
                                </select>
                            </div>
                        </div>
                        <div class="rfc-modal-adv">
                            <p class="text-gray-400">
                                進階條件
                            </p>
                            <div class="d-flex flex-column gap-3 ">
                                <div class="d-flex gap-2 align-items-center ">
                                    <b>R:</b>以 <input id="r-number" type="number" placeholder="最小數字" class="form-control"
                                        min="0" style=" width:5rem" v-model="rdays"><span>天為一個區間 </span>
                                </div>
                                <div class="d-flex gap-2 align-items-center">
                                    <b>F:</b>以 <input id="r-number" type="number" placeholder="最小數字" class="form-control"
                                        value="0" min="0" style=" width:5rem"><span>天為一個區間 </span>
                                </div>
                                <div class="d-flex gap-2 align-items-center">
                                    <b>V:</b>以 <input id="r-number" type="number" placeholder="最小數字" class="form-control"
                                        value="0" min="0" style=" width:5rem"><span>篇為一個區間 ( 最多呈現 10 組 ) </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button id="add-item-modal-btn" type="button" class="btn primary" @click="addRFV">新增</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.custom-btn-close {
    background-color: white;
}

.next-btn-align {
    display: flex;
    justify-content: right;
    margin-top: 1rem;
}

.result-card-main {
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(94, 93, 93, 0.25);
    padding: 16px;
}




.rfv-confirm-info li {
    padding-block: 3px;
}

input[type="month"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
}


.readingList label {
    cursor: pointer;
}
</style>