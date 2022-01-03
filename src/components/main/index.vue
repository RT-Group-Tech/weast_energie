<template>
    <div class="wrapper clearfix" id="wrapperParallax">
        <main-header></main-header>
        <main-root></main-root>
        <main-footer></main-footer>
        <div class="back-top" id="back-to-top" data-hover=""><i class="energia-arrow-up"></i></div>
    </div>
</template>

<script>
    import mainRoot from './root.vue';
    import mainHeader from '../layout/header.vue';
    import mainFooter from '../layout/footer.vue';
    export default {
        name: "indexComponent",
        components: {
            mainRoot,
            mainHeader,
            mainFooter
        }
    }
</script>
