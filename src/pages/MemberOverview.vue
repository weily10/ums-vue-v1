<script setup>

</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                    <i class="bi bi-arrow-left"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                會員即時概覽
            </h2>
        </div>
        <div class="pb-2 mt-3  bg-grey filter p-3 ">
            <div class="d-flex align-items-center gap-2 justify-content-between border-bottom   pb-3">
                <div>
                    <label for="datefiltergroup" class="font-b4-me">事業單位</label>
                    <select class="form-select " type="select" value="" id="">
                        <option selected>聯合報系集團</option>
                        <option value="2">聯合新聞網</option>
                        <option value="23">經濟日報</option>
                        <option value="1">udn 買東西</option>
                        <option value="14">udn售票網</option>
                        <option value="22">uDesign有設計</option>
                        <option value="6">願景工作室</option>
                        <option value="8">健康事業部</option>
                        <option value="25">經濟日報專業展</option>
                        <option value="10">融媒體策展中心（美容展）</option>
                        <option value="20">有行旅</option>
                        <option value="34">融媒體橘世代</option>
                        <option value="26">行動發展部</option>
                        <option value="31">娛樂生活事業部</option>
                        <option value="32">聯合報</option>
                        <option value="999">數據發展部</option>
                        <option value="9">教育事業部</option>
                        <option value="11">聯合報發行展業部</option>
                    </select>
                </div>
                <div class="font-support align-self-end" style="font-size: 12px;">
                    <ul class="mb-0">
                        說明：
                        <li> 資料更新頻率原則上為每小時。</li>
                        <li>會員身分、訂閱等狀態為變動屬性，部分累計屬性數據可能出現逆成長之狀況。</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex gap-3 flex-wrap mt-3">
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                累計至今不重複會員數 ( 含待認證、跨部開通會員數 )
                            </span>
                        </div>
                        <div class="rounded-circle fs-1 text-light align-self-center txt-success d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-person"></i>
                        </div>

                        <h1 class="align-self-center">
                            6,772,421
                        </h1>
                        <h4 class="align-self-center">
                            累計不重複會員數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                累計至今不重複會員數 ( 含待認證、跨部開通會員數 )
                            </span>
                        </div>
                        <div class="rounded-circle fs-4 text-light align-self-center dark-grey-surface  d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-people"></i>
                        </div>

                        <h1 class="align-self-center">
                            6,772,421
                        </h1>
                        <h4 class="align-self-center">
                            累計不重複會員數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                累計至今不重複會員數 ( 含待認證、跨部開通會員數 )
                            </span>
                        </div>
                        <div class="rounded-circle fs-1 text-light align-self-center txt-error d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-envelope"></i>
                        </div>

                        <h1 class="align-self-center">
                            1,556,812
                        </h1>
                        <h4 class="align-self-center">
                            累計 E-mail 可行銷會員數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>

            </div>
            <div class="d-flex gap-3 flex-wrap mt-3">
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                手機狀態為已認證之有效會員數
                            </span>
                        </div>
                        <div class="rounded-circle fs-1 text-light align-self-center txt-warning d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-phone"></i>
                        </div>

                        <h1 class="align-self-center">
                            5,621
                        </h1>
                        <h4 class="align-self-center">
                            累計手機認證會員數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                2022/01/18 Email 、手機、OpenId 登入總次數
                            </span>
                        </div>
                        <div class="rounded-circle fs-3 text-light align-self-center secondary d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-box-arrow-in-right"></i>
                        </div>

                        <h1 class="align-self-center">
                            0
                        </h1>
                        <h4 class="align-self-center">
                            當日累計會員登入次數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
            </div>
            <div class="d-flex gap-3 flex-wrap mt-3">
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                2022/01/18 Email 、手機、OpenId 登入之不重複人數
                            </span>
                        </div>
                        <div class="rounded-circle fs-2 text-light align-self-center txt-like d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-person-gear"></i>
                        </div>

                        <h1 class="align-self-center">
                            910
                        </h1>
                        <h4 class="align-self-center">
                            當日累計會員登入人數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                2022/01/23 CMS 資料交換之不重複新聞篇數
                            </span>
                        </div>
                        <div class="rounded-circle fs-3 text-light align-self-center chart-surface d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-newspaper"></i>
                        </div>

                        <h1 class="align-self-center">
                            0
                        </h1>
                        <h4 class="align-self-center">
                            當日累計不重複新聞篇數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
                <div class="card border-0 shadow-sm ps-3 pe-3 pb-2 pt-3 d-flex flex-column flex-fill" style="width: 25vh;">
                    <div class=" d-flex flex-column ">
                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label  align-self-end">
                            <span class="rounded-circle btn-sm  primary py-0 px-1">
                                <i class="bi bi-question"></i></span>
                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                style=" top: 100%;right: -50%;">
                                累計至今未完成認證之會員數
                            </span>
                        </div>
                        <div class="rounded-circle fs-1 text-light align-self-center txt-info d-flex justify-content-center align-items-center opacity-50"
                            style="width:50px;height:50px">
                            <i class="bi bi-shield-lock"></i>
                        </div>

                        <h1 class="align-self-center">
                            44,937
                        </h1>
                        <h4 class="align-self-center">
                            累計未認證會員數
                        </h4>
                    </div>
                    <span class="font-support mt-4">
                        最新更新時間：2022/01/18 08:59:59

                    </span>
                </div>
            </div>
        </div>
    </div>
</template>