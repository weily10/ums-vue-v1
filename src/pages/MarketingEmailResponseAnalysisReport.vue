<script setup>
import router from '../router';
import { ref } from 'vue'


const data = ref[{
    item1: {
        text: '寄送成功',
        align: 'text-start'
    },
    item2: {
        text: 123412,
        align: 'text-end'
    },
    item3: {
        text: 31233,
        align: 'text-end'
    },
    item4: {
        text: 1233,
        align: 'text-end'
    },
    item5: {
        text: 133,
        align: 'text-end'
    },
    item6: {
        text: 353,
        align: 'text-end'
    },
    item7: {
        text: 3245,
        align: 'text-end'
    }

},
{
    item1: {
        text: '開信	',
        align: 'text-start'
    },
    item2: {
        text: 1212,
        align: 'text-end'
    },
    item3: {
        text: 1243,
        align: 'text-end'
    },
    item4: {
        text: 3123,
        align: 'text-end'
    },
    item4: {
        text: 1233,
        align: 'text-end'
    },
    item5: {
        text: 133,
        align: 'text-end'
    },
    item6: {
        text: 353,
        align: 'text-end'
    },
    item7: {
        text: 3245,
        align: 'text-end'
    }

},
{
    item1: {
        text: '點開',
        align: 'text-start'
    },
    item2: {
        text: 12314,
        align: 'text-end'
    },
    item3: {
        text: 3123,
        align: 'text-end'
    },
    item4: {
        text: 3123,
        align: 'text-end'
    },
    item4: {
        text: 1233,
        align: 'text-end'
    },
    item5: {
        text: 133,
        align: 'text-end'
    },
    item6: {
        text: 353,
        align: 'text-end'
    },
    item7: {
        text: 3245,
        align: 'text-end'
    },

}]



</script>

<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 電子報回應分析報表</h2>
        </div>
        <div class="bg-grey p-3">
            <h3>電子報整合報表</h3>
            <div class="card shadow-sm border-0 p-4">
                <div class=" d-flex flex-wrap">
                    <div class="d-flex flex-column gap-4  col">
                        <div style="width: 150px;">
                            <label class="font-support">
                                需求單位
                            </label>
                            <div class="font-b4-he">
                                經濟日報
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                發送日期
                            </label>
                            <div class="font-b4-he">
                                2024/01/11
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                電子報寄送者名稱
                            </label>
                            <div class="font-b4-he">
                                聯合報系會員
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-4  col">


                        <div style="width: 150px;">
                            <label class="font-support">
                                系統送出郵件數
                            </label>
                            <div class="font-b4-he">
                                51911
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                退信數量
                            </label>
                            <div class="font-b4-he">
                                0
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                寄送成功郵件數
                            </label>
                            <div class="font-b4-he">
                                51911
                            </div>
                        </div>
                    </div>
                    <div class=" d-flex flex-column gap-4  col ">


                        <div style="width: 150px;">
                            <label class="font-support">
                                退信率
                            </label>
                            <div class="font-b4-he">
                                0%
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                開信人數
                            </label>
                            <div class="font-b4-he">
                                4658
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                開信率
                            </label>
                            <div class="font-b4-he">
                                0%
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-4 col">
                        <div style="width: 150px;">
                            <label class="font-support">
                                點開人數
                            </label>
                            <div class="font-b4-he">
                                324
                            </div>
                        </div>
                        <div style="width: 150px;">
                            <label class="font-support">
                                點開率
                            </label>
                            <div class="font-b4-he">
                                6%
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="mt-4">
                <h3>電子報人口變項報表</h3>
                <div class="card shadow-sm border-0 p-4">
                    <div class="d-flex flex-wrap flex-column">
                        <div class="d-flex  gap-4  col justify-content-between ">
                            <div>
                                <label class="font-support">需求單位</label>
                                <div class="font-b4-he">經濟日報</div>
                            </div>
                            <div>
                                <label class="font-support">發送日期</label>
                                <div class="font-b4-he">2024/01/11</div>
                            </div>
                            <div>
                                <label class="font-support">電子報寄送者名稱</label>
                                <div class="font-b4-he">聯合報系會員</div>
                            </div>
                            <div>
                                <label class="font-support">電子報發送主旨</label>
                                <div class="font-b4-he">[限時48HR開放]全球主要房市都在跌台灣新年房市卻有明顯[漲相]</div>
                            </div>
                        </div>
                        <hr class="mt-4" style="border-color: #a3a0a0;">
                        <div class="d-flex justify-content-between gap-3">
                            <table class="table table-striped mt-4" style="width: 35%;">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-start border-end">發送狀態<button
                                                class="bg-transparent rounded-circle p-0 text-white">
                                            </button>

                                        </th>
                                        <th scope="col" class="text-end border-end border-end">數量 <button
                                                class="bg-transparent rounded-circle p-0 text-white">
                                            </button>
                                        </th>
                                        <th scope="col" class="text-end">男 <button
                                                class="bg-transparent rounded-circle p-0 text-white">
                                            </button>
                                        </th>
                                        <th scope="col" class="text-end border-end">女<button
                                                class="bg-transparent rounded-circle p-0 text-white">
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="marketing-enewsletter-sex-table">
                                    <tr>
                                        <td>寄送成功</td>
                                        <td class="text-end border-start">323
                                        </td>
                                        <td class="text-end">
                                            13124
                                        </td>
                                        <td class="text-end">
                                            1234
                                        </td>


                                    </tr>
                                    <tr>
                                        <td class="text-start">
                                            開信
                                        </td>
                                        <td class="text-end border-start">
                                            3213
                                        </td>
                                        <td class="text-end">
                                            23114
                                        </td>
                                        <td class="text-end">
                                            323
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">
                                            點開
                                        </td>
                                        <td class="text-end border-start">
                                            2133
                                        </td>
                                        <td class="text-end">
                                            2342
                                        </td>
                                        <td class="text-end">
                                            2344
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="table table-striped mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-start border-end">發送狀態
                                        </th>

                                        <th scope="col" class="text-end">年領14歲以下</th>
                                        <th scope="col" class="text-end">年領15歲至24歲
                                        </th>
                                        <th scope="col" class="text-end">年領25歲至34歲</th>
                                        <th scope="col" class="text-end">年領35歲至44歲</th>
                                        <th scope="col" class="text-end">年領45歲至54歲</th>
                                        <th scope="col" class="text-end border-end">年領55以上</th>
                                    </tr>
                                </thead>
                                <tbody id="marketing-enewsletter-age-table">
                                    <template v-for="(item, index) in data" :key="index">
                                        <tr>
                                            <td>
                                                {{ item.text }}
                                            </td> 
                                            <td>
                                                
                                            </td> 
                                            <td>
                                                
                                            </td> 
                                        </tr>
                                    </template>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div class="">
                            <h4>

                            </h4>
                            <table class="table table-striped mt-4">
                                <thead>
                                    <th scope="col" class="text-start border-end">發送狀態
                                    </th>
                                    <th scope="col" class="text-end ">基隆市<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">台北市<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">新北市<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">桃園市<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">新竹市<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">新竹縣<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">苗栗縣<button
                                            class="bg-transparent rounded-circle p-0 text-white">
                                        </button>
                                    </th>
                                    <th scope="col" class="text-end ">台中市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">彰化市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">南投市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">雲林市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">嘉義市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">嘉義縣<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">台南市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">高雄市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">屏東市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">台東市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">花蓮市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                    <th scope="col" class="text-end ">宜蘭市<button
                                            class="bg-transparent rounded-circle p-0 text-white"> </button>
                                    </th>
                                </thead>
                                <tbody id="marketing-enewsletter-cities-table">


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <h3>電子報連結點擊數</h3>
                <div class="card shadow-sm border-0 p-4">
                    <div style="width: 150px;">
                        <label class="font-support">
                            電子報扁號
                        </label>
                        <div class="font-b4-he">
                            (9573)
                        </div>
                    </div>
                    <table class="table table-striped mt-4">
                        <thead>
                            <tr>
                                <th class="text-start">連結編號順序</th>
                                <th class="text-start">連結網址</th>
                                <th class="text-end">不重複會員數</th>

                            </tr>
                        </thead>
                        <tbody id="newsletter-link-clicks-table">

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    </div>
</template>