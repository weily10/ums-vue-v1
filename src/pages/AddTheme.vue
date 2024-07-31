<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ref, onMounted } from 'vue'
import router from '../router';

const cards = ref([{
    theme: '範例', badges: ['依文章標題', '111']
}])

let addNewCard = ref(false)
let editCard = ref(false)
let tagModal = ref(false)
let badgesEdit = ref([])
let badges = ref(['依文章標題'])
let smartSearchEditTagTextBox = ref('')
const searchTags = ref([])
const keywordTextBoxSearch = ref('')
const keywordTextBox = ref('')
const inputs = ref([{ inputbox: '' }])
const keywordbadges = ref([])

searchTags.value = [{ name: '薩達' }]

function addCard() {
    cards.value.push({
        theme: keywordTextBox, badges: ['依文章標題']
    })
    console.log(cards);
    addNewCard.value.hide()
}


function smartSearchAddcleanModalInputs() {
    addNewCard.value.show()
}

function next() {
    tagModal.value.show()
}




function removeBadge(index) {
    keywordbadges.value.splice(index, 1)
}

onMounted(() => {
    addNewCard.value = new Modal(document.getElementById('keyword-ad-tag-modal'));
    editCard.value = new Modal(document.getElementById('smart-search-add-tag-edit-modal'));
    tagModal.value = new Modal(document.getElementById('smart-search-add-tagModal'));

});

function smartSearchsendSearchAdKeyword() {
    if (keywordTextBoxSearch.value) {
        searchTags.value.push({ name: keywordTextBoxSearch.value })
    }
}

function smartSearchaddToAnd(index, item) {

    const isSomeEmpty = inputs.value.some(input => input.inputbox == '')
    const x = inputs.value.findIndex(input => input.inputbox === '')
    if (!isSomeEmpty) {
        inputs.value.push({ inputbox: '' })
        const y = inputs.value.findIndex(input => input.inputbox === '')
        inputs.value[y].inputbox = item.name;
    } else {
        inputs.value[x].inputbox = item.name;
    }



}

function addNewCombo() {
    inputs.value.push({ inputbox: '' })
}


function smartSearchaddAdvertisingAddKeyword() {
    inputs.value.forEach(el => {
        if (el.inputbox) {
            keywordbadges.value.push(el.inputbox)
        }

    });

}


function smartSearchAddtoNextPage() {
    router.push({ name: 'MatchmakingAnalysis' })
    tagModal.value.hide()

}


function removeInputs(index) {
    inputs.value.splice(index, 1)
}


function smartSearchsendSearchAdKeywordEdit(){
    
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
                <div class="cards-area mt-2  gap-3 flex-wrap">
                    <template v-for="(item, index) in cards" :key="index">

                        <div class="accordion" :id="'addItemAccordion' + index">
                            <div class="accordion-item">
                                <h2 class="accordion-header custom-acc-button">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
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
                                                            <input name="keywordTextBox" id="keywordTextBox"
                                                                class="form-control mt-1" type="text" value="" />
                                                        </div>
                                                        <div class="row  pt-3">
                                                            <div class="col">
                                                                <div class="d-flex gap-2 align-items-end">
                                                                    <div>
                                                                        <label for="keywordTextBox"
                                                                            class="font-b4-me mb-1">關鍵字相似詞搜尋
                                                                        </label>
                                                                        <div class="input-group input-group ">
                                                                            <span
                                                                                class="input-group-text border-end-0 bg-white icon-search"
                                                                                id="basic-addon6"></span>
                                                                            <input type="text"
                                                                                class="form-control border-start-0 "
                                                                                id="smart-search-add-keywordTextBox"
                                                                                placeholder="關鍵字相似詞搜尋"
                                                                                v-model="keywordTextBoxSearch">
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn primary text-body-light btn-sm "
                                                                        style="height:33.6px;width:80px;" type="button"
                                                                        @click="smartSearchsendSearchAdKeyword()">
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
                                                                        <template v-for="(item, index) in searchTags"
                                                                            :key="index">
                                                                            <div class="hover-label rounded-4 p-2 "
                                                                                style="background-color: rgb(230, 230, 230); ">

                                                                                <div
                                                                                    class="d-flex gap-1 align-items-center">

                                                                                    <div>{{ item.name }}</div>
                                                                                    <div class=" rounded d-flex align-items-center"
                                                                                        type="button"
                                                                                        @click="smartSearchaddToAnd(index, item)">
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
                                                                    <template v-for="(item, index) in inputs" :key="index">
                                                                        <div class="input-group" style="width: 200px;">
                                                                            <input type="text" class="form-control"
                                                                                placeholder="" v-model="item.inputbox">

                                                                            <div
                                                                                class="list-icon position-relative d-inline-block fw-semibold hover-label">
                                                                                <button
                                                                                    class="input-group-text rounded-start-0"
                                                                                    id="smart-search-add-and-input-addon"
                                                                                    type="button" :disabled="index === 0"
                                                                                    @click="removeInputs(index)">
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
                                                                            @click="addNewCombo()">
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
                                                                    @click="smartSearchaddAdvertisingAddKeyword()">
                                                                    加入關鍵字
                                                                </button>

                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <label class="font-b4-me">關鍵字預覽 </label>
                                                            <div class="d-flex mt-1 gap-2 flex-wrap">
                                                                <template v-for="(item, index) in keywordbadges"
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
                                                            <div
                                                                class="font-support no-badge-message align-self-center text-danger" v-show="keywordbadges.length <= 0">
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
                        <div id="accordionsAdd" class=" mt-3">

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
        <div class="modal fade" id="smart-search-add-tagModal" tabindex="-1" aria-labelledby="resultModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 條件確認 </h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3">
                            <div>
                                <ul class="font-b4-me">
                                    <li>
                                        主題名稱:<span id="smart-search-add-theme-name-span">12天</span>
                                    </li>
                                    <li>
                                        限幾日內上架的文章: <span id="smart-search-add-limit-days-span">12天</span>
                                    </li>

                                    <li>
                                        限用戶需於幾日內瀏覽相關文章 : <span id="smart-search-add-days-within">1天</span>
                                    </li>
                                    <li>
                                        限瀏覽篇數達幾篇以上 : <span class="font-b4-he" id="smart-search-add-articles-span">1篇</span>
                                    </li>
                                    <li>
                                        文章媒合比對方式 :<span class="font-b4-he" id="smart-search-add-comparison-span">
                                            依文章標題、內文、作者、Tags</span>
                                    </li>

                                </ul>
                            </div>
                            <div class="border-top">
                                <table class="table table-striped ">
                                    <thead>
                                        <tr>
                                            <th scope="col">項次 </th>
                                            <th scope="col">標籤名稱</th>
                                            <th scope="col">文章含有以下組合關鍵字</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">12</td>
                                            <td class="text-center">頑石轉型社企 讓文化有溫度
                                            </td>
                                            <td class="text-center">@陽光行動</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn " data-bs-dismiss="modal">修改</button>
                        <button type="button" class="btn primary" @click="smartSearchAddtoNextPage()">執行分析</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="keyword-ad-tag-modal">
            <div class="modal-dialog modal-lg">
                <form class="modal-content" name="smartSearchAddModalContent">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">新增標籤</h1>
                    </div>
                    <div class="modal-body bg-grey">
                        <div id="smart-search-add-collapseContent" class="bg-gray p-2">
                            <div class="w-100" id="smart-search-add-input-tag-title-group ">
                                <label for="keywordTextBox" class="font-b4-me">標籤 <span class="text-danger">
                                        *</span></label>
                                <input name="keywordTextBox" id="keywordTextBox" class="form-control mt-1" type="text"
                                    v-model="keywordTextBox" />
                            </div>
                            <div class="row mt-3  border-top pt-3">
                                <div class="col">
                                    <div class="d-flex gap-2 align-items-end">
                                        <div class="input-group input-group ">
                                            <span class="input-group-text border-end-0 bg-white bi bi-search"
                                                id="basic-addon6"></span>
                                            <input type="text" class="form-control border-start-0 "
                                                id="smart-search-add-keywordTextBox" placeholder="關鍵字相似詞搜尋"
                                                v-model="keywordTextBoxSearch">
                                        </div>
                                        <button class="btn primary text-body-light btn-sm "
                                            style="height:33.6px;width:80px;" type="button"
                                            @click="smartSearchsendSearchAdKeyword()">
                                            查詢
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col">
                                    <label for="input-group" class="font-b4-me">相似詞預覽</label>
                                    <div class="mt-1 font-b4-he">
                                        <div class="d-flex gap-3" id="smart-search-add-list-found-keywords">
                                            <template v-for="(item, index) in searchTags" :key="index">
                                                <div class="hover-label rounded-4 p-2 "
                                                    style="background-color: rgb(230, 230, 230); ">

                                                    <div class="d-flex gap-1 align-items-center">

                                                        <div>{{ item.name }}</div>
                                                        <div class=" rounded d-flex align-items-center" type="button"
                                                            @click="smartSearchaddToAnd(index, item)">
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
                            <div class="mt-3 border-top pt-3">
                                <label for="input-group" class="font-b4-me">文章需同時存在(and)</label>
                                <div class="mt-1">
                                    <div id="smart-search-add-input-keyword-group"
                                        class="d-flex gap-2 align-items-center flex-wrap">
                                        <template v-for="(item, index) in inputs" :key="index">
                                            <div class="input-group" style="width: 200px;">
                                                <input type="text" class="form-control" placeholder=""
                                                    v-model="item.inputbox">
                                                <div
                                                    class="list-icon position-relative d-inline-block fw-semibold hover-label">
                                                    <button class="input-group-text rounded-start-0"
                                                        id="smart-search-add-and-input-addon" type="button"
                                                        :disabled="index === 0" @click="removeInputs(index)">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                        style=" top: 100%;right: -50%;">
                                                        刪除
                                                    </span>
                                                </div>
                                            </div>
                                        </template>

                                        <div id="smart-search-add-add-and-item-button"
                                            class="position-relative d-inline-block hover-label">
                                            <div class="sub-context border bg-grey p-2 rounded d-flex align-items-center"
                                                style="height:33px" type="button" @click="addNewCombo()">
                                                <i class="bi bi-plus"></i>
                                            </div>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                新增組合
                                            </span>
                                        </div>
                                    </div>
                                    <div id="smart-search-add-input-keyword-group-error-msg" class="text-danger"
                                        style="display: none;">
                                        <span>請輸入關鍵字後，再送出! (確保每個欄位都有資料)</span>
                                    </div>

                                    <button class="btn primary text-body-light btn-sm mt-2 " style="height:33.6px"
                                        type="button" @click="smartSearchaddAdvertisingAddKeyword()">
                                        加入關鍵字
                                    </button>

                                </div>
                            </div>
                            <div class="mt-3">
                                <label class="font-b4-me">關鍵字預覽 </label>
                                <div class="d-flex mt-1 gap-2 flex-wrap" id="smart-search-add-badges-group">
                                    <template v-for="(item, index) in keywordbadges" :key="index">
                                        <div class="badge primary d-flex align-items-center"
                                            id="smart-search-add-badge-`+ randomNumber + `" style="width: fit-content;">
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
                                    v-show="keywordbadges.length <= 0"> 須有至少一筆 ! </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn secondary" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary" @click="addCard">新增</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="smart-search-add-tag-edit-modal" name="smartSearchTagEditModal">
            <div class="modal-dialog modal-lg">
                <form class="modal-content" name="smartSearchAddEditModalContent">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">編輯標籤</h1>
                    </div>
                    <div class="modal-body bg-grey">
                        <div id="smart-search-add-edit-collapseContent" class=" p-2">
                            <div class="w-100" id="smart-search-add-edit-input-tag-title-group ">
                                <label for="smartSearchEditTagTextBox" class="font-b4-me">標籤 <span class="text-danger">
                                        *</span></label>
                                <input name="smartSearchEditTagTextBox" id="smartSearchEditTagTextBox"
                                    class="form-control mt-1" type="text" v-model="smartSearchEditTagTextBox" />
                            </div>
                            <div class="row mt-3  border-top pt-3">
                                <div class="col">
                                    <div class="d-flex gap-2 align-items-end">
                                        <div class="input-group input-group ">
                                            <span class="input-group-text border-end-0 bg-white bi bi-search"></span>
                                            <input type="text" class="form-control border-start-0 "
                                                id="smart-search-add-edit-keywordTextBox" placeholder="關鍵字相似詞搜尋">
                                        </div>

                                        <button class="btn primary text-body-light btn-sm "
                                            style="height:33.6px;width:80px;" type="button"
                                            @click="smartSearchsendSearchAdKeywordEdit()">
                                            送出
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col">
                                    <label for="input-group" class="font-b4-me">相似詞預覽</label>
                                    <div class="mt-1 font-b4-he">
                                        <div class="d-flex gap-3" id="smart-search-add-edit-list-found-keywords">
                                            <div class="hover-label rounded-4 p-2 "
                                                style="background-color: rgb(230, 230, 230); ">
                                                <div class="d-flex gap-1 align-items-center">
                                                    <div>篇文章</div>
                                                    <div class=" rounded d-flex align-items-center" type="button"
                                                        @click="smartSearchaddToAndEdit(this)">
                                                        <i class="bi bi-plus"></i>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1">
                                                        新增相似詞
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 pt-3 border-top">
                                    <label for="input-group" class="font-b4-me">文章需同時存在(and)</label>
                                    <div class="mt-1">
                                        <div id="smart-search-add-edit-input-keyword-group"
                                            class="d-flex gap-2 align-items-center flex-wrap">
                                            <div id="smart-search-add-edit-and-input-group" class="input-group"
                                                style="width: 200px;">
                                                <input type="text" class="form-control" id="smart-search-add-edit-and-input"
                                                    placeholder="">

                                                <div
                                                    class="list-icon position-relative d-inline-block fw-semibold hover-label">
                                                    <button class="input-group-text rounded-start-0"
                                                        id="smart-search-add-edit-and-input-addon" type="button" disabled>
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                        style=" top: 100%;right: -50%;">
                                                        刪除
                                                    </span>
                                                </div>

                                            </div>
                                            <div id="smart-search-add-edit-add-and-item-button"
                                                class="position-relative d-inline-block hover-label">
                                                <div class="sub-context border bg-grey p-2 rounded d-flex align-items-center"
                                                    style="height:33px" type="button" @click="addAndAdEditKeywordInput()">
                                                    <i class="bi bi-plus"></i>
                                                </div>
                                                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                    style=" top: 100%;right: -50%;">
                                                    新增組合
                                                </span>
                                            </div>
                                        </div>

                                        <button class="btn primary text-body-light btn-sm mt-2 " style="height:33.6px"
                                            type="button" @click="smartSearchaddEditAdvertisingAddKeyword()">
                                            加入關鍵字
                                        </button>
                                        <div id="smart-search-add-edit-input-keyword-group-error-msg" class="text-danger"
                                            style="display: none;">
                                            <span>請輸入關鍵字後，再送出! (確保每個欄位都有資料)</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="mt-3">
                                    <label class="font-b4-me">關鍵字預覽 </label>
                                    <div class="d-flex mt-1 gap-2 flex-wrap" id="smart-search-add-edit-badges-group">
                                        <template v-for="(item, index) in badgesEdit">

                                            <div class="badge primary d-flex align-items-center"
                                                id="smart-search-add-edit-badge-`+ index + `">
                                                <div class="badge-title">{{ item }}</div>
                                                <button
                                                    class="badge-delete-btn rounded-circle btn-sm bg-transparent ps-1 pe-0   is-first-class text-white"
                                                    @click="removeBadge(index)" type="button">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>

                                            </div>

                                        </template>
                                    </div>
                                    <div class="font-support no-badge-message align-self-center text-danger"
                                        v-show="badgesEdit.length <= 0"> 須有至少一筆 !
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn secondary" data-bs-dismiss="modal">取消</button>
                        <button id="smartSearcheditConfirmData" type="button" class="btn primary">新增</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal fade" id="tagModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 條件確認 </h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3">
                            <div>
                                <ul class="font-b4-me">
                                    <li>
                                        主題名稱:<span id="theme-name-span">12天</span>
                                    </li>
                                    <li>
                                        限幾日內上架的文章: <span id="limit-days-span">12天</span>
                                    </li>

                                    <li>
                                        限用戶需於幾日內瀏覽相關文章 : <span id="days-within">1天</span>
                                    </li>
                                    <li>
                                        限瀏覽篇數達幾篇以上 : <span class="font-b4-he" id="articles-span">1篇</span>
                                    </li>
                                    <li>
                                        文章媒合比對方式 :<span class="font-b4-he" id="comparison-span"> 依文章標題、內文、作者、Tags</span>
                                    </li>

                                </ul>
                            </div>
                            <div class="border-top">
                                <table class="table table-striped ">
                                    <thead>
                                        <tr>
                                            <th scope="col">項次 </th>
                                            <th scope="col">標籤名稱</th>
                                            <th scope="col">文章含有以下組合關鍵字</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">12</td>
                                            <td class="text-center">頑石轉型社企 讓文化有溫度
                                            </td>
                                            <td class="text-center">@陽光行動</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn " data-bs-dismiss="modal">修改</button>
                        <button type="button" class="btn primary" @click="toNextPage()">執行分析</button>
                    </div>
                </div>
            </div>
        </div>
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