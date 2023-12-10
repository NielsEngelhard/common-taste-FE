<script>
    import Header from "$lib/Base/Header.svelte";
    import Footer from "$lib/Base/Footer.svelte";
    import Tabs from "../lib/Base/Nav/Tabs.svelte";
    import "../styles/global.css";
</script>

<Header />

<Tabs />

<main>
    <slot />
</main>

<Footer />
