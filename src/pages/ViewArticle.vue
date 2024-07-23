<script setup>
import router from '../router';


function goback(){
    router.go(-1)
}

function goTofullArticle(){
    router.push({name:'ViewFullArticle'})
}

</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 智慧檢索</h2>
        </div>
        <div class="bg-grey mt-3 p-3">
            <div class="accordion " id="accordionArticleCondition">
                <div class="accordion-item shadow-sm">
                    <h2 class="accordion-header custom-acc-button">
                        <button class="accordion-button border-bottom" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseArticleCondition" aria-expanded="true"
                            aria-controls="collapseArticleCondition">
                            <h3>條件</h3>
                        </button>
                    </h2>

                    <div id="collapseArticleCondition" class="accordion-collapse collapse show "
                        data-bs-parent="#accordionArticleCondition">
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

            <div class="accordion mt-3" id="accordionTop5">
                <div class="accordion-item shadow-sm">
                    <h2 class="accordion-header custom-acc-button">
                        <button class="accordion-button border-bottom" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsetop5" aria-expanded="true" aria-controls="collapsetop5">
                            <h3>通貨膨脹－ TOP5 文章列表</h3>
                        </button>
                    </h2>
                    <div id="collapsetop5" class="accordion-collapse collapse show " data-bs-parent="#accordionTop5">
                        <div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" style="width: 30px;" class="text-center align-text-top"><input
                                                class="form-check-input" type="checkbox"></th>
                                        <th scope="col" style="width: 90px;" class="text-center align-text-top">關鍵字</th>
                                        <th scope="col" style="width: 60px;" class="text-center align-text-top">項次</th>
                                        <th scope="col" style="width: 90px;" class="text-center align-text-top">出版日</th>
                                        <th scope="col" class="text-start  align-text-top">來源</th>
                                        <th scope="col" style="width: 120px" class="text-center  align-text-top">文章編號</th>
                                        <th scope="col" class="text-start  align-text-top">文章標題</th>
                                        <th scope="col" style="min-width: 60px" class="text-start  align-text-top">連結</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center" rowspan="5"><input class="form-check-input" type="checkbox">
                                        </td>
                                        <td class="text-center border-end" rowspan="5"><span class="badge primary p-2">
                                                俄軍</span></td>
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
                                    <tr>
                                        <td colspan="9" class="text-center align-middle">
                                            <button class="btn secondary" @click="goTofullArticle()">
                                                全部文章(409)
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center" rowspan="6"><input class="form-check-input" type="checkbox">
                                        </td>
                                        <td class="text-center border-end" rowspan="6"><span class="badge primary p-2">
                                                循環經濟</span></td>
                                        <td class="text-center">1</td>
                                        <td class="text-center">
                                            2023-09-25 19:13:31
                                        </td>
                                        <td class="text-start">聯合報</td>

                                        <td class="text-center">21314</td>
                                        <td class="text-start"> TPASS受好評 「園縣市高峰會」上鍾東錦盼關注國1楊頭進度</td>
                                        <td class="text-start"><a href="">https://udn.com/news/story/7324/7464372</a> </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">1</td>
                                        <td class="text-center">
                                            2023-09-24 08:30:21
                                        </td>
                                        <td class="text-start">聯合報</td>

                                        <td class="text-center">7461162</td>
                                        <td class="text-start">TPASS受好評 「園縣市高峰會」上鍾東錦盼關注國1楊頭進度</td>
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
                                        <td class="text-start">TPASS受好評 「園縣市高峰會」上鍾東錦盼關注國1楊頭進度</td>
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
                                        <td class="text-start">TPASS受好評 「園縣市高峰會」上鍾東錦盼關注國1楊頭進度</td>
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
                                        <td class="text-start">TPASS受好評 「園縣市高峰會」上鍾東錦盼關注國1楊頭進度</td>
                                        <td class="text-start"><a href="">https://udn.com/news/story/122663/7461162</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="9" class="text-center align-middle">
                                            <button class="btn secondary" @click="goTofullArticle()">
                                                全部文章(409)</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2 d-flex justify-content-center  mt-2">
            <button type="button" class="btn primary w-25" @click="goback()">回到上一頁</button>
        </div>

    </div>
</template>


<style scoped>



</style>