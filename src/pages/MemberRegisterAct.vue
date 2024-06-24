<script setup>
 
</script>
<template>
    <div>
    <div class="d-flex gap-1 align-items-center">
        <div class="">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left"></i></button>
            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                返回
            </span>
        </div>
        <h2>
            會員註冊與開通
        </h2>
    </div>
    <div class="pb-2  bg-grey filter p-3 mt-3 ">
        <div class="font-support align-self-end" style="font-size: 12px;">
            <ul>
                說明：
                <li> 目前僅供查詢 2019/11/01 後的數據。</li>
                <li>請挑選指定區間進行查詢。</li>
                <li>會員狀態為變動屬性，歷史資料將會與現況有些為落差。</li>
                <li>部份數據視圖可以點擊區間內任一數據切換不同層面的數據視圖，可參考各視圖說明。</li>
            </ul>
        </div>
        <div class="d-flex align-items-end gap-2 justify-content-between border-bottom flex-wrap pb-3">
            <div>
                <div class="font-b4-me">日期範圍</div>
                <div class=" d-flex align-items-center gap-1 " id="">
                    <div class="col flex-fill">
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                aria-label="Username" aria-describedby="basic-addon1" id="member-register-start-date">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>

                    <div>
                        ~
                    </div>
                    <div class="col flex-fill">
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                aria-label="Username" aria-describedby="basic-addon1" id="member-register-end-date">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-fill">
                <label for="" class="font-b4-me">分析類型</label>
                <select class="form-select mt-1" type="select" value="" id="analysisType"
                    onchange="onchangeSelect(this)">

                    <option value="Func_GetActiveSummary">有效會員註冊開通比例總表</option>
                    <option value="Func_GetRegisterSource">有效會員註冊來源</option>
                    <option value="Func_GetLoginSource">有效會員登入來源</option>
                    <option value="Func_GetOpenOtherBU">跨部開通其他單位</option>
                    <option value="Func_GetOpenOurUnit">間接開通我方單位</option>

                </select>
            </div>


            <div class="align-self-end">
                <button class="btn primary text-body-light  " type="button" style="width: 80px;">
                    送出
                </button>
            </div>

        </div>
        <div class="d-flex gap-3 flex-wrap mt-3">
            <div class="hoverDiv w-100  ">
                <div class="shadow-sm p-3 bg-white">
                    <div class="d-flex justify-content-between">
                        <div class="btn-group button-checkbox d-flex" role="group" id="radio-member-activation-group">
                            <input type="radio" class="btn-check" name="radio-member-activation" id="trend-option"
                                autocomplete="off" value="trend-option" checked>
                            <label class="btn text-nowrap" for="trend-option" onclick="createSignUpChart()">趨勢 </label>
                            <input type="radio" class="btn-check" name="radio-member-activation" id="total-option"
                                autocomplete="off" value="total-option">
                            <label class="btn " for="total-option" onclick="createNewsDailyChart()"> 合計
                            </label>
                        </div>

                    </div>

                    <div id="member-activation-chart-area" class="charts" style="width: 100%; height: 40dvh;">
                    </div>

                    <div id="member-activation-chart-daily-news-area" class="charts visually-hidden"
                        style="width: 100%; height: 40dvh;">
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="list-icon position-relative d-inline-block fw-semibold hover-label mb-3">
                        <span class="rounded-circle btn-sm  primary py-0 px-1">
                            <i class="icon-qa"></i></span>
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
</template>