<script setup>
import { ref } from 'vue'

const eletterunitlist = ref([
    { id: 'eletter-unit-list', text: '聯合智網公司' },
    { id: 'media-business-advertising', text: '聯合報融媒體商廣中心' },
    { id: 'business-office-distribution-exhibition-dep', text: ' 聯合報事業處發行展業部' },
    { id: 'udn-ticket-website', text: '聯合數位文創(udn售票網)' },

])


</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 電子報資料</h2>
        </div>
        <div class="bg-grey mt-3 filter p-4">
            <h3>
                明細
            </h3>
            <div class="card border-0 shadow-sm">
                <div class=" row flex-wrap  ">
                    <div class="p-4 d-flex flex-column gap-4  col">
                        <div>
                            <label class="font-support">
                                預計發送日
                            </label>
                            <div class="font-b4-he">
                                20231026
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                建檔人
                            </label>
                            <div class="font-b4-he">
                                40040-1 (Waynetest1)
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                異動人
                            </label>
                            <div class="font-b4-he">
                                40040-1 (Waynetest1)
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                電子報類型
                            </label>
                            <div class="font-b4-he">
                                【 會員 】
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                統計人數
                            </label>
                            <div class="font-b4-he">
                                待發送信件採認不重複計算之 email 數量。
                            </div>
                        </div>
                    </div>
                    <div class="p-4 d-flex flex-column gap-4 col">
                        <div>
                            <label class="font-support">
                                預計發送量
                            </label>
                            <div class="font-b4-he">
                                0
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                發送順序
                            </label>
                            <div class="font-b4-he">
                                1
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                建檔時間
                            </label>
                            <div class="font-b4-he">
                                2023/01/31 10:58:21

                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                異動時間
                            </label>
                            <div class="font-b4-he">
                                2023/01/31 10:58:21

                            </div>
                        </div>
                    </div>
                    <div class="p-4 d-flex flex-column gap-4 col ">
                        <div>
                            <label class="font-support">
                                電子報來源
                            </label>
                            <div class="font-b4-he">
                                經濟日報數位服務部
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                電子報種類
                            </label>
                            <div class="font-b4-he">
                                經濟日報電子報
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                電子報狀態
                            </label>
                            <div class="font-b4-he">
                                <span class="badge  txt-info">編輯中</span>
                            </div>
                        </div>
                        <div>
                            <label class="font-support">
                                電子報名稱
                            </label>
                            <div class="font-b4-he">
                                【代發】 大腸圈
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="mt-4">
                <h3>人口變項名單整檔</h3>
                <div class="card border-0 shadow-sm">
                    <div class="card-body">
                        <div class=" d-flex flex-column gap-2 ">
                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label" style="width: 130px;">
                                    性別
                                </div>
                                <div class="d-flex gap-3 ps-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex"
                                            id="eletter-detail-any-radio" checked>
                                        <label class="form-check-label" for="eletter-detail-any-radio">
                                            不限
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="sex"
                                            id="eletter-detail-male-radio">
                                        <label class="form-check-label" for="eletter-detail-male-radio">
                                            男
                                        </label>
                                    </div>
                                    <div class=" form-check">
                                        <input class="form-check-input" type="radio" name="sex"
                                            id="eletter-detail-female-radio">
                                        <label class="form-check-label" for="eletter-detail-female-radio">
                                            女
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label" style="width: 130px;">
                                    年齡
                                </div>
                                <div class="d-flex gap-3 ps-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="age"
                                            id="eletter-detail-any-radio" checked>
                                        <label class="form-check-label" for="eletter-detail-any-radio">
                                            不限
                                        </label>
                                    </div>
                                    <div class="d-flex justify-content-center gap-1">
                                        <div>
                                            (1)
                                        </div>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-start-select-1" checked style="width:60px"><span> ~</span>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-end-select-1" style="width:60px">
                                    </div>
                                    <div class="d-flex justify-content-center gap-1">
                                        <div>
                                            (2)
                                        </div>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-start-select-2" checked style="width:60px"><span> ~</span>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-end-select-2" style="width:60px">
                                    </div>
                                    <div class="d-flex justify-content-center gap-1">
                                        <div>
                                            (3)
                                        </div>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-start-select-3" checked style="width:60px"><span> ~</span>
                                        <input class="form-control form-select-sm" type="select" name="age"
                                            id="eletter-age-end-select-3" style="width:60px">
                                    </div>

                                </div>
                            </div>

                            <div class="d-flex gap-1">
                                <div class="fw-semibold text-label" style="width: 130px;">
                                    *電子報所屬單位
                                </div>
                                <div class="d-flex gap-3 flex-wrap ps-2" style="row-gap: 0.2rem !important;">
                                    <template v-for="item in eletterunitlist">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" :name="item.text"
                                                :id="item.text">
                                            <label class="form-check-label" :for="item.text">{{item.text}}
                                                </label>
                                        </div>
                                    </template>
                                </div>
                            </div>

                            <div class="d-flex gap-1 align-items-top">
                                <div class="fw-semibold text-label" style="min-width: 130px;">
                                    *居住地
                                </div>
                                <div id="eletter-location-list" class="d-flex gap-3 flex-wrap ps-2"
                                    style="row-gap: 0.2rem !important;">

                                </div>
                            </div>

                            <div class="d-flex gap-1 align-items-top">
                                <div class="fw-semibold text-label" style="min-width: 130px;">
                                    *職業
                                </div>
                                <div id="eletter-profession-list" class="d-flex gap-3 flex-wrap ps-2"
                                    style="row-gap: 0.2rem !important;">

                                </div>
                            </div>

                            <div class="d-flex gap-1 align-items-center">
                                <div class="fw-semibold text-label" style="min-width: 130px;">
                                    固定數量
                                </div>
                                <div class="ps-2">
                                    <input class="form-control form-control-sm" type="text" name="reading" id="reading"
                                        placeholder="智慧檢索編號">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>