<script>
    import Header from "$lib/Base/Header.svelte";
    import Footer from "$lib/Base/Footer.svelte";
    import Tabs from "../lib/Base/Nav/Tabs.svelte";
    import "../styles/global.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<Header />

<main>
    <Tabs />

    <slot />
</main>

<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
        min-height: 50vh;
    }
</style>
