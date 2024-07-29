<script setup>
import { ref } from 'vue'
import router from '../router';

const array = ref([])


array.value = [{
    account: '0000',
    name: '0000',
    email: 'rkf67781@cndps.com',
    status: '正常'
}]

function gotoUserDetail() {
    router.push({ name: 'AccInssuanceAdd' })
}

</script>

<template>
    <div>
        <div class="d-flex gap-1 align-items-center">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button">
                    <i class="bi bi-arrow-left" @click="goback()"></i></button>

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
                                        onclick="gotoCopyPage()">
                                        <i class="bi bi-pencil-fill fs-6"></i></button>
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        onclick="gotoCopyPage()">
                                        <i class="bi bi-person-fill-x fs-6"></i></button>
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        onclick="gotoCopyPage()">
                                        <i class="bi bi-chat-right-dots fs-6"></i></button>
                                </td>
                            </tr>
                        </template>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="user-acc-dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要將此帳號停權？
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">確定</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="user-acc-otp-dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要寄送OTP認證信至該帳號？
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">確定</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>