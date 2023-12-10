<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let tabItems = [
        {
            Name: "Home",
            Href: "/",
        },
        {
            Name: "Profile",
            Href: "/profile",
        },
        {
            Name: "Playlists",
            Href: "/app/playlists",
        },
    ];

    let activeTabItem;

    onMount(async () => {
        setCurrentActiveTabBasedOnUrlPath();
    });

    function changeTab(newTabName) {
        activeTabItem = newTabName;
    }

    function setCurrentActiveTabBasedOnUrlPath() {
        var currentUrlPath = $page.url.pathname;

        var matchingTabItemWithPath = tabItems.find(
            (item) => item.Href == currentUrlPath,
        );

        activeTabItem = matchingTabItemWithPath.Name;
    }
</script>

<div class="tabs">
    <ul>
        {#each tabItems as tabItem}
            <li>
                <a href={tabItem.Href} on:click={() => changeTab(tabItem.Name)}>
                    <div class:activeTabItem={tabItem.Name === activeTabItem}>
                        {tabItem.Name}
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }

    .activeTabItem {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>
