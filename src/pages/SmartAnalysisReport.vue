<script setup>
import router from '../router/index.js'

 
function viewArticle(){
    router.push({name:'ViewArticle'})
}
 
</script>

<template>
    <div>
        <div>
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                    <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
                <h2 class="mb-0"> 檢視分析報告</h2>
            </div>
        </div>
        <div class="bg-grey  px-3 mt-3">
            <div class="accordion" id="accordion-ad-keyword-report">
                <div class="accordion-item">
                    <div class="border-bottom">
                        <button class="accordion-button bg-grey" data-bs-toggle="collapse"
                            style="background-color: #FAFAFA !important;"
                            data-bs-target="#smart-ad-keyword-report-collapseParameters" aria-expanded="false" type="button"
                            aria-controls="smart-ad-keyword-report-collapseParameters">
                            <h3 class="mb-0">智慧廣告 </h3>
                        </button>
                    </div>
                    <div id="smart-ad-keyword-report-collapseParameters"
                        class="accordion-collapse collapse show bg-grey p-3" data-bs-parent="#accordion-ad-keyword-report">
                        <ul class="font-b4-me custom-list">
                            <li>
                                主題標籤: <span id="smart-ad-keyword-report-theme-name-span">料理課0327</span>
                            </li>
                            <li>
                                載具與曝光數: <span id="smart-ad-keyword-report-limit-days-span"> Desktop (0) <span
                                        class="text-danger">未達標</span></span>
                            </li>

                            <li>
                                限幾日內上架的文章: <span id="smart-ad-keyword-report-days-within"> 180天</span>
                            </li>
                            <li>
                                限用戶需於幾日內瀏覽相關文章 : <span class="font-b4-he" id="smart-ad-keyword-report-articles-span">
                                    90天</span>
                            </li>
                            <li>
                                限瀏覽篇數達幾篇以上 :<span class="font-b4-he" id="smart-ad-keyword-report-comparison-span"> 1篇</span>
                            </li>
                            <li>
                                文章媒合比對方式 :<span class="font-b4-he" id="smart-ad-keyword-report-comparison-span">
                                    依文章標題、內文、作者、Tags</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-grey mt-3 px-3 mt-3">
            <div class="accordion" id="accordion-ad-keyword-report-2">
                <div class="accordion-item">
                    <div class="border-bottom">
                        <button class="accordion-button bg-grey" style="background-color: #FAFAFA !important;"
                            data-bs-toggle="collapse" data-bs-target="#smart-ad-keyword-report-analysisTableCollapse-2"
                            aria-expanded="false" type="button">
                            <h3 class="mb-0"> 媒合分析</h3>
                        </button>
                    </div>
                </div>
            </div>
            <div id="smart-ad-keyword-report-analysisTableCollapse-2" class="accordion-collapse collapse show bg-grey p-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" style="width: 60px;" class="text-end align-text-top">項次 </th>
                            <th scope="col" style="width: 90px;" class="text-end align-text-top">標籤編號</th>
                            <th scope="col" style="width: 120px;" class="text-center align-text-top">檢視文章資訊</th>
                            <th scope="col" style="width: 90px;" class="text-start align-text-top">標籤名稱</th>
                            <th scope="col" class="text-center  align-text-top">文章含有以下組合關鍵字</th>
                            <th scope="col" style="width: 120px" class="text-end  align-text-top">符合文章數</th>
                            <th scope="col" class="text-end  align-text-top">不重複文章數</th>
                            <th scope="col" class="text-end  align-text-top">不重複用戶名單數</th>
                            <th scope="col" class="text-end  align-text-top">90 天到訪用戶數</th>
                            <th scope="col" class="text-end  align-text-top">90 天到訪會員數 </th>
                            <th scope="col" class="text-center  align-text-top">90 天到訪可投放廣告/EDM行銷用戶數</th>
                            <th scope="col" class="text-end  align-text-top">不重複用戶各單位標籤占比</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-end">12</td>
                            <td class="text-end">20200</td>
                            <td class="text-center">
                                <button class="btn primary btn-sm" @click="viewArticle()">檢視文章</button>
                            </td>
                            <td class="text-start">標籤名稱</td>
                            <td class="text-center"><span class="badge primary"> 依文章標題</span></td>
                            <td class="text-end">3,428</td>
                            <td class="text-end">0</td>
                            <td class="text-end">0</td>
                            <td class="text-end">0</td>
                            <td class="text-end">0</td>
                            <td class="text-center">0 / 0</td>
                            <td class="text-end">0%</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <div class="mt-2 d-flex justify-content-end gap-2">
            <button type="button" class="btn secondary">離開</button>
            <button type="button" class="btn primary" data-bs-toggle="modal"
                data-bs-target="#smart-ad-keyword-report-confirmation-modal">建立智慧檢索分析</button>
        </div>
        <div class="modal fade" id="smart-ad-keyword-report-confirmation-modal" data-bs-backdrop="static" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3>確認執行?</h3>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        即將建立一筆智慧檢索分析任務排序，請確認是否執行?
                        確認後， 請至洞察分析中分析清單查閱。
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn " data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary" @click="reportConfirmExecuteKeywordAd()">確定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



