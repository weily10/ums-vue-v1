<script setup>
import router from '../router';
function goback(){
    router.go(-1)
}
</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button">
                <i class="bi bi-arrow-left fs-6 py-1 " @click="goback()"></i></button>
            <h2 class="mb-0"> 智慧檢索</h2>
        </div>
        <div class="bg-grey p-3 mt-3">
            <div class="accordion " id="accordionCondition">
                <div class="accordion-item shadow-sm">
                    <h2 class="accordion-header custom-acc-button">
                        <button class="accordion-button border-bottom " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseCondition" aria-expanded="true" aria-controls="collapseCondition">
                            <h3>條件</h3>
                        </button>
                    </h2>

                    <div id="collapseCondition" class="accordion-collapse collapse show "
                        data-bs-parent="#accordionCondition">
                        <div id="full-article-params" class="collapse show  mt-2 p-3">
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
                </div>
            </div>



            <div class="accordion   mt-3  mt-3" id="accordionArticle">
                <div class="accordion-item shadow-sm">
                    <h2 class="accordion-header custom-acc-button">
                        <button class="accordion-button border-bottom  " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTable" aria-expanded="true" aria-controls="collapseOne">
                            【循環經濟】 － 關鍵字全文章列表
                        </button>

                    </h2>

                    <div id="collapseTable" class="accordion-collapse collapse show " data-bs-parent="#accordionArticle">
                        <div id="keyword-full-article-table" class="collapse show ">
                            <div class="mt-2 d-flex flex-column gap-2">
                                <button class="btn secondary ms-auto me-2"> 下載文章</button>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="width: 60px;" class="text-center align-text-top">項次</th>
                                            <th scope="col" style="width: 90px;" class="text-center align-text-top">出版日</th>
                                            <th scope="col" class="text-start  align-text-top">來源</th>
                                            <th scope="col" style="width: 120px" class="text-center  align-text-top">文章編號
                                            </th>
                                            <th scope="col" class="text-start  align-text-top">文章標題</th>
                                            <th scope="col" class="text-start  align-text-top">連結</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">
                                                2023-09-24 08:30:21
                                            </td>
                                            <td class="text-start">聯合報</td>

                                            <td class="text-center">7461162</td>
                                            <td class="text-start">巴赫姆特前線奏捷 烏軍指揮官讚西方重砲「把俄軍打趴」</td>
                                            <td class="text-start"><a href="">https://udn.com/news/story/122663/7461162</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">
                                                2023-09-24 08:30:21
                                            </td>
                                            <td class="text-start">聯合報</td>

                                            <td class="text-center">7461162</td>
                                            <td class="text-start">巴赫姆特前線奏捷 烏軍指揮官讚西方重砲「把俄軍打趴」</td>
                                            <td class="text-start"><a href="">https://udn.com/news/story/122663/7461162</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">
                                                2023-09-24 08:30:21
                                            </td>
                                            <td class="text-start">聯合報</td>

                                            <td class="text-center">7461162</td>
                                            <td class="text-start">巴赫姆特前線奏捷 烏軍指揮官讚西方重砲「把俄軍打趴」</td>
                                            <td class="text-start"><a href="">https://udn.com/news/story/122663/7461162</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-center">
                                                2023-09-24 08:30:21
                                            </td>
                                            <td class="text-start">聯合報</td>

                                            <td class="text-center">7461162</td>
                                            <td class="text-start">巴赫姆特前線奏捷 烏軍指揮官讚西方重砲「把俄軍打趴」</td>
                                            <td class="text-start"><a href="">https://udn.com/news/story/122663/7461162</a>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-2 d-flex justify-content-center  mt-3">
                <button type="button" class="btn primary w-25" @click="goback()">回到上一頁</button>
            </div>

        </div>
    </div>
</template>