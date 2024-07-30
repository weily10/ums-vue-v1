<script setup>

import router from '../router/index.js'
 
</script>

<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> RFV條件確認</h2>
        </div>
        <div class="personal-tag-content mt-3" style="min-width: 350px;">
            <div class="bg-white p-3 shadow-sm">
                <h4 class="">(目標) RFV 日期區間：2024/01/01 ~ 2024/01/31</h4>
                <div class="d-flex gap-5 justify-content-between flex-wrap mt-4">
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold ">
                                    R 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>

                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold">
                                    F 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold">
                                    V 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="my-3 p-3 fw-bold position-relative ">
                <hr style="border-style: dashed;">
                <div class="text-primary position-absolute text-center start-50 bg-light p-2" style="top:18%;">OR</div>
            </div>
            <div class="bg-white p-3 shadow-sm">
                <h4 class="">(目標) RFV 日期區間：2024/01/01 ~ 2024/01/31</h4>
                <div class="d-flex gap-5 justify-content-between flex-wrap mt-4">
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold ">
                                    R 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>

                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item  bg-primary text-light">
                                <span class="fw-bold">
                                    F 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold">
                                    V 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-white p-3 shadow-sm">
                <h4 class="">(目標) RFV 日期區間：2024/01/01 ~ 2024/01/31</h4>
                <div class="d-flex gap-5 justify-content-between flex-wrap mt-4">
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold ">
                                    R 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>

                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold">
                                    F 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-fill bg-white  " style="min-width:320px;">

                        <ul class="list-group">
                            <li class="list-group-item bg-primary text-light">
                                <span class="fw-bold">
                                    V 最近造訪日 ( 人數 )
                                </span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 18-23天 </div>
                                <div>76,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 24-30天
                                </div>
                                <div> 88,013</div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div> 30-38天
                                </div>
                                <div> 123,013</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-4">

            <div class="bg-white p-3 shadow-sm text-secondary">
                <ul class="rfv-confirm-info">
                    <li>該條件組合預估 <b>23,840 </b>位符合用戶。</li>
                    <li>建立 <b>2024/01/01 </b>~ <b>2024/01/31</b>數據副本。</li>
                    <li>( 運算資源限制，建立數據副本一次最多 31 天，你可在個人維護功能內進行追加。)</li>
                </ul>
            </div>
            <div class="mt-3 d-flex justify-content-end">
                <button class="btn primary text-body-light " type="button" style="width: 80px;">
                    確定
                </button>
            </div>
        </div>
    </div>
</template>