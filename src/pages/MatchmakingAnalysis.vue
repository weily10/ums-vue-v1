<script setup>
import router from '../router';


function back(){
    router.go(-1)
}

</script>
<template>
    <div>
        <div class="d-flex gap-2">
            <button class="btn rounded-circle btn-sm "   type="button" @click="back()">
                <i class="bi bi-arrow-left"></i>
            </button>
            <h2 class="mb-0"> 智慧檢索</h2>
      
        </div>
        <div class="bg-grey mt-3 p-3">
            <div class="d-flex justify-content-between p-0 border-bottom">
                <h3>條件</h3>
                <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                    data-bs-target="#collapseParameters" aria-expanded="false" type="button">
                    <i class="icon-down fs-6 "></i>
                </button>
            </div>
            <div id="collapseParameters" class="collapse show  mt-2">
                <ul class="font-b4-me">
                    <li>
                        主題名稱:<span id="theme-name-span">12天</span>
                    </li>
                    <li>
                        限幾日內上架的文章: <span id="limit-days-span">12天</span>
                    </li>

                    <li>
                        限用戶需於幾日內瀏覽相關文章 : <span id="days-within">1天</span>
                    </li>
                    <li>
                        限瀏覽篇數達幾篇以上 : <span class="font-b4-he" id="articles-span">1篇</span>
                    </li>
                    <li>
                        文章媒合比對方式 :<span class="font-b4-he" id="comparison-span"> 依文章標題、內文、作者、Tags</span>
                    </li>

                </ul>
            </div>

        </div>
        <div class="bg-grey mt-3 p-3 mt-3">
            <div class="border-bottom d-flex justify-content-between p-0 ">
                <h3>媒合分析
                </h3>
                <button class="rounded-circle btn-sm rotate collapsed up p-0" data-bs-toggle="collapse"
                    data-bs-target="#analysisTableCollapse" aria-expanded="false" type="button">
                    <i class="icon-down fs-6 "></i>
                </button>
            </div>
            <div id="analysisTableCollapse" class="collapse show mt-2">
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
                data-bs-target="#confirmation-modal">建立智慧檢索分析</button>
        </div>
        <div class="modal fade" id="confirmation-modal" data-bs-backdrop="static" tabindex="-1"
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
                        <button type="button" class="btn primary" @click="confirmExecute()">確定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>