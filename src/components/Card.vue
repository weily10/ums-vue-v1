<script setup>

</script>
<template>
    <div class="result-card-main mt-3" id="rfv-card-main">

        <div class="d-flex justify-content-between">
            <p class="font-support"> (目標) RFV 日期區間：2024/04/01 ~ 2024/04/30</p>
            <div class="position-relative d-inline-block fw-semibold  hover-label">
                <button class="delete-icon-button" @click="deleteItemCard(this)" type="button">
                    <i class="icon-cancel"></i></button>
                <span class="custom-tooltip-2 custom-tooltip-3">
                    刪除
                </span>
            </div>
        </div>
        <div class="accordion" id="collapse">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="#collapse">
                        <div class="d-flex flex-wrap gap-3">
                            <div class="d-flex align-items-start">
                                <b class="me-1 lh-lg">R : </b>
                                <div id="rlist`+ random + `" class=" mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">
                                </div>

                            </div>
                            <div class="d-flex align-items-start">
                                <b class="me-1  lh-lg ">F : </b>
                                <div id="flist`+ random + `" class=" mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <b class="me-1 lh-lg ">V : </b>
                                <div id="vlist`+ random + `" class=" mt-1 d-flex flex-wrap gap-1 fs-6" style="width:370px">
                                </div>
                            </div>
                        </div>

                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#collapse">
                    <div class="accordion-body">
                        <div class="d-flex gap-3 flex-wrap">
                            <ul class="list-group " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> R</b> 最近造訪日 ( 人數 ) </h6>
                                <a class="list-group-item list-group-item-action  r-class`+ random + `"
                                    @click="selectR(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1 ">
                                        <div>00-05天</div>
                                        <div>213,423</div>
                                    </div>
                                </a>
                                <a class="list-group-item list-group-item-actiont-group-item r-class`+ random + `"
                                    @click="rfvManager.selectR(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>06-11天</div>
                                        <div>102,350</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item r-class`+ random + `"
                                    @click="rfvManager.selectR(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>12-17天</div>
                                        <div>77,423</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item r-class`+ random + `"
                                    @click="rfvManager.selectR(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>12-17天</div>
                                        <div>234,423</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item r-class`+ random + `"
                                    @click="rfvManager.selectR(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>12-17天</div>
                                        <div>324,423</div>
                                    </div>
                                </a>
                            </ul>
                            <ul class="list-group " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> F </b>最近造訪日 ( 人數 ) </h6>
                                <a class=" list-group-item list-group-item-actiont-group-item f-class`+ random + `"
                                    @click="rfvManager.selectF(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1 ">
                                        <div>00-05天</div>
                                        <div>213,423</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item f-class`+ random + `"
                                    @click="rfvManager.selectF(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>06-11天</div>
                                        <div>102,350</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item f-class`+ random + `"
                                    @click="rfvManager.selectF(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>12-17天</div>
                                        <div>77,423</div>
                                    </div>
                                </a>
                            </ul>
                            <ul class="list-group  " style="width:370px">
                                <h6 class="dropdown-header mb-1"><b> V </b>最近造訪日 ( 人數 ) </h6>
                                <a class=" list-group-item list-group-item-actiont-group-item v-class`+ random + `"
                                    @click="rfvManager.selectV(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1 ">
                                        <div>00-05天</div>
                                        <div>213,423</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item v-class`+ random + `"
                                    @click="rfvManager.selectV(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>06-11天</div>
                                        <div>102,350</div>
                                    </div>
                                </a>
                                <a class=" list-group-item list-group-item-actiont-group-item v-class`+ random + `"
                                    @click="rfvManager.selectV(` + random + `, this)">
                                    <div class="d-flex justify-content-between py-1">
                                        <div>12-17天</div>
                                        <div>77,423</div>
                                    </div>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>