<script setup>
import router from '../router';

</script>
<template>
    <div>
        <div class="d-flex gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="icon-arrowback fs-6 py-1 "></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                會員趨勢概覽
            </h2>
        </div>
        <div class="pb-2 mt-3  bg-grey filter p-3 ">
            <div class="font-support align-self-end" style="font-size: 12px;">
                <ul>
                    說明：
                    <li> 目前僅供查詢 2019/11/01 後的數據。</li>
                    <li>請挑選指定區間進行查詢。</li>
                    <li>會員狀態為變動屬性，歷史資料將會與現況有些為落差。</li>
                    <li>部份數據視圖可以點擊區間內任一數據切換不同層面的數據視圖，可參考各視圖說明。</li>
                </ul>
            </div>
            <div class="d-flex align-items-center gap-2 justify-content-between border-bottom flex-wrap pb-3">
                <div>
                    <div class="font-b4-me">日期範圍</div>

                    <div class=" d-flex align-items-center gap-1 " id="">
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    id="member-trend-ovw-start-date-btn">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>

                        <div>
                            ~
                        </div>
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    id="member-trend-ovw-end-date-btn">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-fill">
                    <label class="font-b4-me">事業單位</label>
                    <select class="form-select mt-1 " type="select" value="" id="">
                        <option value="2">聯合新聞網</option>
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
                    <label for="analysisType" class="font-b4-me">分析類型</label>
                    <select class="form-select mt-1" type="select" value="" id="analysisType"
                        onchange="onchangeSelect(this)">

                        <option value="Func_GetNewMembers" selected>新增會員數</option>

                        <option value="Func_GetUniqueMembers">不重複會員數</option>

                        <option value="Func_GetEDMMembers">E-mail 可行銷會員數</option>

                        <option value="Func_GetMobileMembers">手機認證會員數</option>

                        <option value="Func_GetLoginMembersTimes">會員登入次數</option>

                        <option value="Func_GetLoginMembers">會員登入人數</option>

                        <option value="Func_GetUncertifiedMembers">未認證會員數</option>

                        <option value="getFuzyMembers">未認證已模糊化會員數</option>

                        <option value="Func_GetUniqueNews">新聞網站不重複新聞篇數</option>

                        <option value="Func_GetMembersAge">會員年齡 (即時數據)</option>

                        <option value="Func_GetMembersGender">會員性別 (即時數據)</option>

                        <option value="Func_GetMembersAddress">會員居住地 (即時數據)</option>

                    </select>
                </div>


                <div class="align-self-end">
                    <button class="btn primary text-body-light  " type="button" style="width: 80px;">
                        送出
                    </button>
                </div>

            </div>
            <div class="d-flex gap-3 flex-wrap mt-3">
                <div class="w-100">
                    <div class="card shadow-sm border-0">
                        <div id="member-area-chart-area" class="charts" style="width: 100%; height: 40dvh;">
                        </div>
                        <div class="d-flex justify-content-end   ">
                            <div class="list-icon position-relative d-inline-block fw-semibold hover-label">
                                <span class="rounded-circle btn-sm  primary py-0 px-1">
                                    <i class="bi bi-question"></i></span>
                                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                    style=" top: 100%;right: -50%;">
                                    累計至今不重複會員數 ( 含待認證、跨部開通會員數 )
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>