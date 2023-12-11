<script>
    import { fade, slide } from "svelte/transition";
    import { flip } from "svelte/animate";
    import PlaylistStore from "../../../stores/PlaylistStore";
    import PlaylistCard from "$lib/playlist/PlaylistCard.svelte";
</script>

<div class="playlists">
    <div class="playlist-list">
        {#each $PlaylistStore as playlist (playlist.id)}
            <div in:fade out:slide animate:flip={{ duration: 500 }}>
                <PlaylistCard {playlist} />
            </div>
        {/each}
    </div>
</div>

<style>
    .playlist-list {
        display: grid;
        grid-template-columns: 1fr 1fr; /* 2 items as default */
    }

    @media (max-width: 768px) {
        .playlist-list {
            grid-template-columns: 1fr; /* Change to 1 item for mobile */
        }
    }
</style>
