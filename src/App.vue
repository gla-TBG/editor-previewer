<template>
    <div id="app">
        <div class="flex-box">
            <editor :catch-data="catchData"></editor>
            <previewer :view-content="viewContent"></previewer>
        </div>
    </div>
</template>

<script>
    import Editor from './components/editor'
    import Previewer from './components/previewer.vue'

    export default {
        name: 'App',
        components: {
            Editor, Previewer
        },
        data() {
            return {
                viewContent: ''
            }
        },
        methods: {
            catchData(e) {
                console.log(e)
                this.viewContent = e
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .flex-box {
        display: flex;
        justify-content: space-around;
    }
</style>
