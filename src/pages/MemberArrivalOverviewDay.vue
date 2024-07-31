<script setup>
import router from '../router';
</script>

<template>
    <div>
        <div class="d-flex gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left "></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                會員到站概覽 (日累計)
            </h2>
        </div>
        <div class="pb-2  bg-grey filter p-3 mt-3 ">
            <div class="d-flex align-items-center gap-2 justify-content-between  flex-wrap pb-3">
                <div class="flex-fill">
                    <label for="" class="font-b4-me">數位平台</label>
                    <select class="form-select " type="select" value="" id="">
                        <option value="2" selected="selected">聯合新聞網</option>
                        <option value="23" selected="false">經濟日報</option>
                        <option value="1" selected="false">udn 買東西</option>
                        <option value="14" selected="false">udn售票網</option>
                        <option value="22" selected="false">uDesign有設計</option>
                        <option value="6" selected="false">願景工作室</option>
                        <option value="8" selected="false">健康事業部</option>
                        <option value="25" selected="false">經濟日報專業展</option>
                        <option value="10" selected="false">融媒體策展中心（美容展）</option>
                        <option value="20" selected="false">有行旅</option>
                        <option value="34" selected="false">融媒體橘世代</option>
                        <option value="26" selected="false">行動發展部</option>
                        <option value="31" selected="false">娛樂生活事業部</option>
                        <option value="32" selected="false">聯合報</option>
                        <option value="999" selected="false">數據發展部</option>
                        <option value="9" selected="false">教育事業部</option>
                        <option value="11" selected="false">聯合報發行展業部</option>
                    </select>
                </div>
                <div class="flex-fill">
                    <label for="datefiltergroup" class="font-b4-me">事業單位</label>
                    <select class="form-select " type="select" value="" id="">
                        <option value="2" selected="selected">聯合新聞網</option>
                        <option value="23" selected="false">經濟日報</option>
                        <option value="1" selected="false">udn 買東西</option>
                        <option value="14" selected="false">udn售票網</option>
                        <option value="22" selected="false">uDesign有設計</option>
                        <option value="6" selected="false">願景工作室</option>
                        <option value="8" selected="false">健康事業部</option>
                        <option value="25" selected="false">經濟日報專業展</option>
                        <option value="10" selected="false">融媒體策展中心（美容展）</option>
                        <option value="20" selected="false">有行旅</option>
                        <option value="34" selected="false">融媒體橘世代</option>
                        <option value="26" selected="false">行動發展部</option>
                        <option value="31" selected="false">娛樂生活事業部</option>
                        <option value="32" selected="false">聯合報</option>
                        <option value="999" selected="false">數據發展部</option>
                        <option value="9" selected="false">教育事業部</option>
                        <option value="11" selected="false">聯合報發行展業部</option>
                    </select>
                </div>
                <div class="flex-fill">
                    <label for="" class="font-b4-me">統計月份</label>
                    <select class="form-select " type="select" value="" id="membership-monthly-data-month"
                        onchange="onchangeSelect(this)">
                        <option value="20231101">2023 11月</option>

                        <option value="20231001">2023 10月</option>

                        <option value="20230901">2023 09月</option>

                        <option value="20230801">2023 08月</option>

                        <option value="20230701">2023 07月</option>

                        <option value="20230601">2023 06月</option>

                        <option value="20230501">2023 05月</option>

                        <option value="20230401">2023 04月</option>

                        <option value="20230301">2023 03月</option>

                        <option value="20230201">2023 02月</option>

                        <option value="20230101">2023 01月</option>

                        <option value="20221201">2022 12月</option>

                        <option value="20221101">2022 11月</option>

                        <option value="20221001">2022 10月</option>

                        <option value="20220901">2022 09月</option>

                        <option value="20220801">2022 08月</option>

                        <option value="20220701">2022 07月</option>

                        <option value="20220601">2022 06月</option>

                        <option value="20220501">2022 05月</option>

                        <option value="20220401">2022 04月</option>

                        <option value="20220301">2022 03月</option>

                        <option value="20220201">2022 02月</option>

                        <option value="20220101">2022 01月</option>

                        <option value="20211201">2021 12月</option>

                        <option value="20211101">2021 11月</option>

                        <option value="20211001">2021 10月</option>

                        <option value="20210901">2021 09月</option>

                        <option value="20210801">2021 08月</option>

                        <option value="20210701">2021 07月</option>

                        <option value="20210601">2021 06月</option>

                        <option value="20210501">2021 05月</option>

                        <option value="20210401">2021 04月</option>

                        <option value="20210301">2021 03月</option>

                        <option value="20210201">2021 02月</option>

                        <option value="20210101">2021 01月</option>

                        <option value="20201201">2020 12月</option>

                        <option value="20201101">2020 11月</option>

                        <option value="20201001">2020 10月</option>

                        <option value="20200901">2020 09月</option>

                        <option value="20200801">2020 08月</option>

                        <option value="20200701">2020 07月</option>

                        <option value="20200601">2020 06月</option>

                        <option value="20200501">2020 05月</option>

                        <option value="20200401">2020 04月</option>

                        <option value="20200301">2020 03月</option>

                        <option value="20200201">2020 02月</option>

                        <option value="20200101">2020 01月</option>

                        <option value="20191201">2019 12月</option>

                        <option value="20191101">2019 11月</option>

                        <option value="20191001">2019 10月</option>

                        <option value="20190901">2019 09月</option>

                        <option value="20190801">2019 08月</option>

                        <option value="20190701">2019 07月</option>

                        <option value="20190601">2019 06月</option>

                        <option value="20190501">2019 05月</option>

                        <option value="20190401">2019 04月</option>

                        <option value="20190301">2019 03月</option>

                        <option value="20190201">2019 02月</option>

                        <option value="20190101">2019 01月</option>
                    </select>
                </div>


                <div class="align-self-end">
                    <button class="btn primary text-body-light  " type="button" style="width: 80px;">
                        送出
                    </button>
                </div>


            </div>
            <div class="d-flex justify-content-start gap-3">
                <div class="form-check" style="cursor: pointer;">
                    <input type="checkbox" class="form-check-input" id="excludeUDNDigital">
                    <label for="excludeUDNDigital" class="form-check-label"> 排除聯合報數位版</label>
                </div>
                <div class="form-check" style="cursor: pointer;">
                    <input type="checkbox" class="form-check-input" id="excludeEDD">
                    <label for="excludeEDD" class="form-check-label"> 排除經濟日報數位版</label>
                </div>
            </div>
            <ul class="text-danger mt-3">
                說明：
                <li>聯合數位文創 ( 有設計、售票網 ) 未加入GA360，故無法呈現會員到站數。</li>
                <li>聯合知識庫、發燒車訊頻道未帶入udn會員帳號，故無法呈現會員到站數。</li>
                <li>因 Google 全球資料運算時程之故，每日數據為累計至前一日23:59:59。</li>
            </ul>
            <hr>

        </div>
    </div>
</template>