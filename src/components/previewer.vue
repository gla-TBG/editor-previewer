<template>
    <div id="previewer">
        <el-select v-model="phone">
            <el-option label="iphone6" :value="0"></el-option>
            <el-option label="iphone6 plus" :value="1"></el-option>
            <el-option label="iphoneX" :value="2"></el-option>
            <el-option label="iphoneXs Max" :value="3"></el-option>
            <el-option label="Galaxy S5" :value="4"></el-option>
            <el-option label="Pixel 2" :value="5"></el-option>
            <el-option label="Pixel 2XL" :value="6"></el-option>
        </el-select>
        <div :class="[phoneSize, 'block-border']" v-html="viewContent"></div>
    </div>
</template>

<script>
    export default {
        name: "previewer",
        props: {
            viewContent: String
        },
        data(){
            return {
                phone: 0,
                phoneSize: ''
            }
        },
        watch: {
            phone: {
                handler: function (newVal) {
                    const phoneObj = {
                        0: 'i6',
                        1: 'i6p',
                        2: 'ix',
                        3: 'ixsm',
                        4: 'gs5',
                        5: 'p2',
                        6: 'p2xl'
                    }
                    this.phoneSize = phoneObj[newVal]
                },
                immediate: true
            }
        }
    }
</script>

<style scoped>
    .block-border {
        padding: 10px;
        border: 1px solid #dcdcdc;
        transition: all 0.3s ease-in-out;
    }
    .i6 {
        width: 375px;
        height: 667px;
    }
    .i6p {
        width: 414px;
        height: 736px;
    }
    .ix {
        width: 375px;
        height: 812px;
    }
    .ixsm {
        width: 414px;
        height: 896px;
    }
    .gs5{
        width: 360px;
        height: 640px;
    }
    .p2{
        width: 411px;
        height: 731px;
    }
    .p2xl{
        width: 411px;
        height: 823px;
    }
</style>