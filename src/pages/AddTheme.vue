<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ref, onMounted } from 'vue'
import router from '../router';

const cards = ref([{
    theme: '範例', badges: ['依文章標題', '111'], searchTags: ['tag1', 'tag2'], inputs: [{ inputbox: '' }], keywordbadges: []
}])

let addNewCard = ref(false)
let editCard = ref(false)
let tagModal = ref(false)
let badgesEdit = ref([])
let badges = ref(['依文章標題'])
let smartSearchEditTagTextBox = ref('')
const searchTags = ref([])
const keywordTextBoxSearch = ref([])
const keywordTextBox = ref('')
const keywordbadges = ref([])

searchTags.value = [{ name: '薩達' }]

function addCard() {
    cards.value.push({
        theme: '', badges: ['依文章標題'], searchTags: ['tag2'], inputs: [{ inputbox: '' }], keywordbadges: []
    })
}





function removeBadge(index) {
    keywordbadges.value.splice(index, 1)
}

onMounted(() => {


});

function smartSearchsendSearchAdKeyword(item, index) {
    if (keywordTextBoxSearch.value[index]) {
        item.searchTags.push(keywordTextBoxSearch.value[index])
        keywordTextBoxSearch.value[index] = ''
    }
}

function smartSearchaddToAnd(item, mainitem) {


    const isSomeEmpty = mainitem.inputs.some(input => input.inputbox == '')
    const x = mainitem.inputs.findIndex(input => input.inputbox === '')
    if (!isSomeEmpty) {
        mainitem.inputs.push({ inputbox: '' })
        const y = mainitem.inputs.findIndex(input => input.inputbox === '')
        mainitem.inputs[y].inputbox = item;
    } else {
        mainitem.inputs[x].inputbox = item;
    }



}

function addNewCombo(item) {
    item.inputs.push({ inputbox: '' })
}


function smartSearchaddAdvertisingAddKeyword(item) {


    let inputValues = item.inputs.map(input => input.inputbox)
    console.log('inputValues', inputValues);
    let isFull = inputValues.every(function (value) {
        return value.trim() !== ''
    })
    if (isFull) {
        let inputVal = inputValues.join(' & ')
        item.keywordbadges.push(inputVal)
    }

}




function removeInputs(item, index) {
    item.inputs.splice(index, 1)
}




</script>

<template>
    <div class="">
        <form name="smarSearchForm">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left "></i></button>
                <h2 class="mb-0">新增策展主題
                </h2>
            </div>
            <div class="bg-grey mt-3 filter p-3">
                <div class="row">
                    <div class="col">
                        <label for="input-theme-name" class="font-b4-me">主題名稱 <span class="text-danger"> *</span> </label>
                        <div class="input-1" id="smart-search-add-theme-name-group">
                            <input name="smartSearchAddThemeName" id="smart-search-add-theme-name" type="text"
                                class="form-control" placeholder="請輸入策展主題名稱">
                        </div>
                    </div>
                    <div class="col">
                        <label for="input-days-within-article" class="font-b4-me">限用戶需於幾日內瀏覽相關文章 <span class="text-danger">
                                *</span> </label>
                        <div class="input-1" id="smart-search-add-input-days-within-article-group">
                            <input type="number" max="90" min="0" class="form-control" value="1"
                                id="smart-search-add-input-days-within-article" placeholder="最大限制 90 天"
                                name="smartSearchAddDaysWithinArticle">
                        </div>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col">
                        <label for="input-published-articles" class="font-b4-me">限幾日內上架的文章 <span class="text-danger">
                                *</span>
                        </label>
                        <div class="input-1" id="smart-search-add-input-published-articles-group">
                            <input type="number" max="180" min="1" class="form-control"
                                name="smartSearchAddPublishedAticles" value="1"
                                id="smart-search-add-input-published-articles" placeholder="最大限制 360 天">

                        </div>

                    </div>
                    <div class="col">
                        <label for="input-group" class="font-b4-me">限瀏覽篇數達幾篇以上 <span class="text-danger"> *</span> </label>
                        <div class="input-1" id="smart-search-add-input-article-numbers-group">
                            <input name="smartSearchAddArticleNumbers" class="form-control"
                                id="smart-search-add-input-article-numbers" placeholder="" type="number">

                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <label class="font-b4-me">文章媒合比對方式 </label>
                    <div class="col mt-1 d-flex gap-1">
                        <span class="badge primary"> 依文章標題</span>
                        <span class="badge primary">內文</span>
                        <span class="badge primary">作者</span>
                        <span class="badge primary">Tags</span>
                    </div>
                </div>
                <hr>

                <!-- 標籤 -->
                <label class="font-b4-me  ">策展面向</label>
                <div class="cards-area mt-2 d-flex  gap-3 flex-wrap">
                    <template v-for="(item, index) in cards" :key="index">

                        <div class="flexitem accordion flex-fill" style="min-width: 420px; width: 650px;"
                            :id="'addItemAccordion' + index">
                            <div class="accordion-item">
                                <h2 class="accordion-header custom-acc-button">
                                    <button class="accordion-button border-bottom" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#addItem' + index" aria-expanded="true" aria-controls="addItem">
                                        <span class="fw-semibold"> 策展面向</span>

                                    </button>
                                </h2>
                                <div :id="'addItem' + index" class="accordion-collapse collapse show"
                                    :data-bs-parent="'#addItemAccordion' + index">
                                    <div class="card  border-0 p-2">
                                        <div class="card-body">
                                            <form name="smartSearchAddModalContent">
                                                <div class="  ">
                                                    <div id="smart-search-add-collapseContent" class="bg-gray">
                                                        <div class="w-100" id="smart-search-add-input-tag-title-group ">
                                                            <label for="keywordTextBox" class="font-b4-me">標籤 <span
                                                                    class="text-danger">
                                                                    *</span></label>
                                                            <input v-model="item.theme" class="form-control mt-1"
                                                                type="text" />
                                                        </div>
                                                        <div class="row  pt-3">
                                                            <div class="col">
                                                                <div class="d-flex gap-2 align-items-end  w-full">
                                                                    <div class="w-100">
                                                                        <label for="keywordTextBox"
                                                                            class="font-b4-me mb-1">關鍵字相似詞搜尋
                                                                        </label>
                                                                        <div class="input-group ">

                                                                            <input type="text" class="form-control "
                                                                                id="smart-search-add-keywordTextBox"
                                                                                placeholder="關鍵字相似詞搜尋"
                                                                                v-model="keywordTextBoxSearch[index]">
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn primary text-body-light btn-sm "
                                                                        style="height:33.6px;width:80px;" type="button"
                                                                        @click="smartSearchsendSearchAdKeyword(item, index)">
                                                                        查詢
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row mt-3">
                                                            <div class="col">
                                                                <label for="input-group" class="font-b4-me">相似詞預覽</label>
                                                                <div class="mt-1 font-b4-he">
                                                                    <div class="d-flex gap-3">
                                                                        <template v-for="(item1, index1) in item.searchTags"
                                                                            :key="index1">
                                                                            <div class="hover-label rounded-4 p-2 "
                                                                                style="background-color: rgb(230, 230, 230); ">

                                                                                <div
                                                                                    class="d-flex gap-1 align-items-center">

                                                                                    <div>{{ item1 }}</div>
                                                                                    <div class=" rounded d-flex align-items-center"
                                                                                        type="button"
                                                                                        @click="smartSearchaddToAnd(item1, item)">
                                                                                        <i class="bi bi-plus"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="">
                                                                                    <span
                                                                                        class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1">
                                                                                        新增相似詞
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </template>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3   pt-3">
                                                            <label for="input-group" class="font-b4-me">文章需同時存在(and)</label>
                                                            <div class="mt-1">
                                                                <div id="smart-search-add-input-keyword-group"
                                                                    class="d-flex gap-2 align-items-center flex-wrap">
                                                                    <template v-for="(item2, index2) in item.inputs"
                                                                        :key="index2">
                                                                        <div class="input-group" style="width: 200px;">
                                                                            <input type="text" class="form-control"
                                                                                placeholder="" v-model="item2.inputbox">

                                                                            <div
                                                                                class="list-icon position-relative d-inline-block fw-semibold hover-label">
                                                                                <button
                                                                                    class="input-group-text rounded-start-0"
                                                                                    id="smart-search-add-and-input-addon"
                                                                                    type="button" :disabled="index2 === 0"
                                                                                    @click="removeInputs(item, index2)">
                                                                                    <i class="bi bi-trash"></i>
                                                                                </button>
                                                                                <span
                                                                                    class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                                                    style=" top: 100%;right: -50%;">
                                                                                    刪除
                                                                                </span>
                                                                            </div>

                                                                        </div>
                                                                    </template>

                                                                    <div
                                                                        class="position-relative d-inline-block hover-label">
                                                                        <div class="sub-context border bg-grey p-2 rounded d-flex align-items-center"
                                                                            style="height:33px" type="button"
                                                                            @click="addNewCombo(item)">
                                                                            <i class="bi bi-plus"></i>
                                                                        </div>
                                                                        <span
                                                                            class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                                            style=" top: 100%;right: -50%;">
                                                                            新增組合
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div id="smart-search-add-input-keyword-group-error-msg"
                                                                    class="text-danger" style="display: none;">
                                                                    <span>請輸入關鍵字後，再送出! (確保每個欄位都有資料)</span>
                                                                </div>

                                                                <button class="btn primary text-body-light btn-sm mt-2 "
                                                                    style="height:33.6px" type="button"
                                                                    @click="smartSearchaddAdvertisingAddKeyword(item)">
                                                                    加入關鍵字
                                                                </button>

                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <label class="font-b4-me">關鍵字預覽 </label>
                                                            <div class="d-flex mt-1 gap-2 flex-wrap">
                                                                <template v-for="(item, index) in item.keywordbadges"
                                                                    :key="index">
                                                                    <div class="badge primary d-flex align-items-center"
                                                                        id="smart-search-add-badge-`+ randomNumber + `"
                                                                        style="width: fit-content;">
                                                                        <div class="badge-title">{{ item }}</div>
                                                                        <button
                                                                            class="badge-delete-btn rounded-circle btn-sm bg-transparent ps-1 pe-0 pt-1 is-first-class"
                                                                            @click="removeBadge(index)" type="button">
                                                                            <i class="bi bi-x-circle text-white fs-6"></i>
                                                                        </button>
                                                                    </div>
                                                                </template>
                                                            </div>
                                                            <div class="font-support no-badge-message align-self-center text-danger"
                                                                v-show="item.keywordbadges.length <= 0">
                                                                須有至少一筆 !
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="border bg-grey p-3 rounded sub-context my-3 d-flex justify-content-center">
                    <button type="button" class="btn bg-secondary-subtle" @click="addCard()">新增下一筆
                        <i class="bi bi-plus"></i></button>
                </div>

            </div>
            <div class="d-flex justify-content-end">
                <button id="smart-search-add-nextbtnid" class="btn primary text-body-light mt-3 me-0 mb-2 " type="button"
                    @click="next()">
                    下一步
                </button>
            </div>
        </form>
    </div>
</template>


<style scoped>
.badge {
    background-color: #da8d00 !important;
}


.sub-context {
    border-style: dashed !important;
}
</style>