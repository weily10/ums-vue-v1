<script setup>
import { ref, onMounted } from 'vue'
import router from '../router';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ConfirmModal from '../components/ConfirmModal.vue'


const array = ref([])
const deleteModal = ref(false)
const deleteModal1 = ref(false)
const id = ref('user-acc-dialog')
const message = ref('確定要寄送OTP認證信至該帳號？')


array.value = [{
    account: '0000',
    name: '0000',
    email: 'rkf67781@cndps.com',
    status: '正常'
}]


onMounted(() => {
    deleteModal.value = new Modal(document.getElementById('user-acc-dialog'))
})




function gotoUserDetail() {
    router.push({ name: 'AccInssuanceAdd' })
}


function closeModal() {
    deleteModal.value.hide()
}

function openStopAccConf() {
    message.value = '確定要將此帳號停權？'
    deleteModal.value.show()
}


function openStopAccConf1() {
    message.value = '確定要寄送OTP認證信至該帳號？'
    deleteModal.value.show()
}



</script>

<template>
    <div>
        <div class="d-flex gap-1 align-items-center">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button">
                    <i class="bi bi-arrow-left " @click="goback()"></i></button>

            </div>
            <h2 class="mb-0">
                使用者帳號核發
            </h2>
            <div class="d-flex ms-auto ">
                <button class="btn secondary text-light d-flex align-items-center gap-1" @click="gotoUserDetail()">新增
                    <i class="bi bi-plus"></i></button>
            </div>
        </div>
        <div class="mb-2 d-flex flex-column mt-3 bg-grey p-3">
            <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3 mt-2">
                <div class="col flex-fill">
                    <label for="acc-inssuance-account-word-group" class="font-b4-me">登入帳號</label>
                    <div class="input-group" id="acc-inssuance-account-word-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon6"></span>
                        <input type="text" class="form-control border-start-0 " id="acc-inssuance-account-word"
                            placeholder="登入帳號">
                    </div>
                </div>
                <div class="col flex-fill">
                    <label for="acc-inssuance-name-search-word-group" class="font-b4-me">姓名</label>
                    <div class="input-group" id="acc-inssuance-name-search-word-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon5"></span>
                        <input type="text" class="form-control border-start-0 " id="acc-inssuance-name-search-word"
                            placeholder="姓名">
                    </div>
                </div>
                <div class="col flex-fill">
                    <label for="email-group" class="font-b4-me">Email</label>
                    <div class="input-group" id="email-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon4"></span>
                        <input type="text" class="form-control border-start-0 " id="marketing-search-word"
                            placeholder="Email">
                    </div>
                </div>
                <div class=" pt-4 d-flex gap-2">
                    <button class="btn primary" type="button" @click="">
                        查詢
                    </button>
                </div>
            </div>
            <div class="mt-3">
                <h4>使用者帳號</h4>

                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start">帳號 </th>
                            <th scope="col" class="text-start"> 姓名 </th>
                            <th scope="col" class="text-start">Email </th>
                            <th scope="col" class="text-center">狀態 </th>
                            <th scope="col" class="text-center">處理 </th>
                        </tr>
                    </thead>
                    <tbody id="user-acc-table">
                        <template v-for="(item, index) in array" :key="index">
                            <tr>
                                <td>
                                    {{ item.account }}
                                </td>
                                <td>
                                    {{ item.name }}
                                </td>
                                <td>
                                    {{ item.email }}
                                </td>
                                <td>
                                    {{ item.status }}
                                </td>
                                <td class="text-center">
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="router.push({ name: 'AccInssuanceAdd' })">
                                        <i class="bi bi-pencil-fill fs-6"></i></button>
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="openStopAccConf()">
                                        <i class="bi bi-person-fill-x fs-6"></i></button>
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="openStopAccConf1()">
                                        <i class="bi bi-chat-right-dots fs-6"></i></button>
                                </td>
                            </tr>
                        </template>

                    </tbody>
                </table>
            </div>
        </div>
        <ConfirmModal :id="id" @confirmClose="closeModal" :message="message"></ConfirmModal>
        <ConfirmModal :id="id" @confirmClose="closeModal" :message="message"></ConfirmModal>


    </div>
</template>