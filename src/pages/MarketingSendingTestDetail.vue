<script setup>

</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> 電子報測試寄發資料設定</h2>
        </div>
        <div class="bg-grey mt-3 filter p-4">

            <div class="card border-0 shadow-sm">
                <h3 class="card-title" style="color:#005FC3">
                    電子報測試寄發
                </h3>
                <div class="card-body">
                    <div class="row flex-wrap">
                        <div class=" d-flex flex-column gap-4  col">
                            <div>
                                <label class="font-support">
                                    發行日期
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
                                    寄件者
                                </label>
                                <div class="font-b4-he">
                                    dddgcp-noreply
                                </div>
                            </div>


                        </div>
                        <div class=" d-flex flex-column gap-4 col">
                            <div>
                                <label class="font-support">
                                    發行項次
                                </label>
                                <div class="font-b4-he">
                                    0
                                </div>
                            </div>
                            <div>
                                <label class="font-support">
                                    預計發送數量
                                </label>
                                <div class="font-b4-he">
                                    1
                                </div>
                            </div>
                            <div>
                                <label class="font-support">
                                    建檔日期
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
                            <div>
                                <label class="font-support">
                                    寄件者E-mail
                                </label>
                                <div class="font-b4-he">
                                    dddgcp@udngroup.com.tw
                                </div>
                            </div>

                        </div>
                        <div class=" d-flex flex-column gap-4 col ">
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
                                    電子報名稱
                                </label>
                                <div class="font-b4-he">
                                    111【尚未產生EDM】
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
                    </div>
                    <div class="border-top mt-4 pt-3 d-flex flex-column gap-3">
                        <div>
                            <label for="testemail">測試收件者 E-mail</label>
                            <input type="text" id="testemail" class="form-control mt-1"
                                placeholder="(可用【半形逗號】分隔一次設定多組收件者 e.g. A@gmail.com,B@gmail.com)">
                        </div>
                        <div>
                            <label for="emailsubject">測試郵件主旨 </label>
                            <input type="text" id="emailsubject" class="form-control mt-1" placeholder="測試郵件主旨">
                        </div>
                        <div>
                            <label for="testsendinghost">測試寄發主機</label>
                            <select class="form-select mt-1" type="select" value="" id="testsendinghost">
                                <option value="1" selected>Omicard 測試寄發</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 d-flex gap-2">
            <div class="text-danger me-auto align-text-top">
                ＊注意：若使用的是SendGrid測試寄發，其寄件人與寄件信箱會統一是為 聯合報系數據發展部(dddgcp@udngroup.com.tw)
            </div>
            <button class="btn secondary text-body-light">
                預覽
            </button>
            <button class="btn primary text-body-light ">
                確認發送測試信
            </button>
        </div>
    </div>
</template>