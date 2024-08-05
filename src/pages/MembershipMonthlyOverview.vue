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
                會員單月概覽
            </h2>
        </div>
        <div class="pb-2  bg-grey filter p-3 mt-3">

            <div class="d-flex align-items-center gap-2 justify-content-between border-bottom flex-wrap pb-3">
                <div class="flex-fill">
                    <label for="datefiltergroup" class="font-b4-me">事業單位</label>
                    <select class="form-select " type="select" value="" id="">
                        <option value="2"  >聯合新聞網</option>
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
            <div class="mt-3">
                <h3>聯合新聞網 2023/09 (月累計)</h3>
                <div class="d-flex flex-wrap mt-3 gap-3">
                    <div class=" card p-4  border-0 shadow-sm p-3 text-center flex-fill">
                        <h4>
                            累計至當月有效會員數
                        </h4>
                        <h1 class="mt-2">
                            8,719
                        </h1>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center flex-fill">
                        <h4>
                            累計至當月未認證會員數

                        </h4>
                        <h1 class="mt-2">
                            1234
                        </h1>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center flex-fill">
                        <h4>
                            累計至當月可行銷會員數
                        </h4>
                        <h1 class="mt-2">
                            634
                        </h1>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center flex-fill">
                        <h4>
                            累計至當月手機認證會員數

                        </h4>
                        <h1 class="mt-2">
                            214
                        </h1>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <h3> 聯合新聞網 2023/08 (月趨勢)</h3>
                <div class="d-flex flex-wrap mt-3 gap-3">
                    <div class=" card p-4  border-0 shadow-sm p-3 text-center flex-fill">
                        <h4>
                            累計至當月有效會員數
                        </h4>
                        <h1 class="mt-2">
                            8,719
                        </h1>
                        <div class="d-flex justify-content-around mx-auto" style="width:300px">
                            <div style="font-size: small;">

                                <div class="text-danger fw-medium "><i class="icon-double-down pe-1"></i>100%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比去年該月</div>
                            </div>
                            <div style="font-size: small;">

                                <div class="text-success fw-medium "><i class="icon-double-up pe-1"></i>23%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比上月 </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center flex-fill">
                        <h4>
                            當月增減未認證會員數
                        </h4>
                        <h1 class="mt-2">
                            1234
                        </h1>
                        <div class="d-flex justify-content-around mx-auto" style="width:300px">
                            <div style="font-size: small;">

                                <div class="text-danger fw-medium "><i class="icon-double-down pe-1"></i>100%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比去年該月</div>
                            </div>
                            <div style="font-size: small;">

                                <div class="text-success fw-medium "><i class="icon-double-up pe-1"></i>23%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比上月 </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center flex-fill">
                        <h4>
                            當月不重複登入人數
                        </h4>
                        <h1 class="mt-2">
                            634
                        </h1>
                        <div class="d-flex justify-content-around mx-auto" style="width:300px">
                            <div style="font-size: small;">
                                <div class="text-danger fw-medium "><i class="icon-double-down pe-1"></i>100%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比去年該月</div>
                            </div>
                            <div style="font-size: small;">
                                <div class="text-success fw-medium "><i class="icon-double-up pe-1"></i>23%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比上月 </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex flex-wrap mt-3 gap-3 ">
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center  flex-fill">
                        <h4>
                            當月新增可行銷會員數
                        </h4>
                        <h1 class="mt-2">
                            2142
                        </h1>
                        <div class="d-flex justify-content-around mx-auto" style="width:300px">
                            <div style="font-size: small;">

                                <div class="text-danger fw-medium "><i class="icon-double-down pe-1"></i>100%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比去年該月</div>
                            </div>
                            <div style="font-size: small;">

                                <div class="text-success fw-medium "><i class="icon-double-up pe-1"></i>23%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比上月 </div>
                            </div>
                        </div>
                    </div>
                    <div class=" card p-4  border-0 shadow-sm p-3  text-center  flex-fill">
                        <h4>
                            當月新增手機認證會員數
                        </h4>
                        <h1 class="mt-2">
                            358
                        </h1>
                        <div class="d-flex justify-content-around mx-auto" style="width:300px">
                            <div style="font-size: small;">

                                <div class="text-danger fw-medium "><i class="icon-double-down pe-1"></i>100%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比去年該月</div>
                            </div>
                            <div style="font-size: small;">

                                <div class="text-success fw-medium "><i class="icon-double-up pe-1"></i>23%</div>
                                <div class="text-body-tertiary" style="font-size: x-small;">同比上月 </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="border-top mt-3 pt-3 d-flex flex-wrap gap-3">
                <div class="shadow-sm p-3 flex-fill bg-white">
                    <div id="newswebsite-chart" class=" pt-0 px-2 pb-0 mx-auto" style="width: 70vh; height: 60vh;">

                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="shadow-sm p-3 bg-white">
                        <div id="reg-method-chart" class="chart-size-2 pt-0 px-2 pb-0 mx-auto"></div>
                    </div>
                    <div class="shadow-sm p-3 mt-3 bg-white">
                        <div id="source-proportion-chart" class="chart-size-2 pt-0 px-2 pb-0 mx-auto"> </div>
                    </div>
                </div>
            </div>
            <div class="border-top mt-3 pt-3 d-flex flex-wrap gap-3">
                <div>
                    <div class="shadow-sm p-3 bg-white">
                        <div id="login-method-chart" class="chart-size-2 pt-0 px-2 pb-0 mx-auto"></div>
                    </div>

                </div>
                <div class="shadow-sm p-3 flex-fill bg-white">
                    <div id="1-chart" class=" pt-0 px-2 pb-0 mx-auto" style="width: 70vh; height: 30vh;">

                    </div>
                </div>

            </div>
            <div class="border-top mt-3 pt-3 d-flex flex-wrap ">
                <h3>uDesign有設計 2023/11 (月報表)</h3>
                <table class="table table-striped mb-0">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start border-end " rowspan="3">日期/<br>數據 </th>
                            <th scope="col" class="text-center border-end" colspan="10">每日新增會員 (總數、註冊方式、來源) </th>

                            <th scope="col" class="text-end" rowspan="3"> 累計未認證會員數</th>
                            <th scope="col" class="text-end" rowspan="3"> 每日模糊化會員數</th>
                            <th scope="col" class="text-end" rowspan="3"> 每日不重複登入人數</th>
                            <th scope="col" class="text-center border-end border-start" colspan="5" rowspan="2">每日不重複登入方式佔比
                            </th>
                            <th scope="col" class="text-end" rowspan="3">每日新增可行銷會員數 </th>
                            <th scope="col" class="text-end" rowspan="3">每日新增手機認證會員數</th>

                        </tr>
                        <tr>
                            <th scope="col" class="text-end border-end" rowspan="2">
                                總數
                            </th>
                            <th scope="col" class="text-center " colspan="7">
                                註冊方式
                            </th>
                            <th scope="col" class="text-center  border-end border-start" colspan="2">來源</th>
                        </tr>
                        <tr>
                            <th scope="col" class="text-end">手機註冊</th>
                            <th scope="col" class="text-end">FB</th>
                            <th scope="col" class="text-end"> EMAIL <br>註冊</th>
                            <th scope="col" class="text-end"> 雙認證</th>
                            <th scope="col" class="text-end"> LINE</th>
                            <th scope="col" class="text-end"> APPLE</th>
                            <th scope="col" class="text-end "> GOOGLE</th>
                            <th scope="col" class="text-end border-start"> 直接註冊</th>
                            <th scope="col" class="text-end  border-end"> 間接開通</th>
                            <th scope="col" class="text-end border-start"> UDN<br> 帳號</th>
                            <th scope="col" class="text-end "> FB</th>
                            <th scope="col" class="text-end"> LINE</th>
                            <th scope="col" class="text-end"> APPLE</th>
                            <th scope="col" class="text-end border-end"> GOOGLE</th>

                        </tr>
                    </thead>
                    <tbody id="monthly-report-udesign-table-body">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>