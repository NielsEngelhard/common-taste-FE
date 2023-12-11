<script>
    import Card from "$lib/basic_components/Card.svelte";
    import CustomButton from "$lib/basic_components/CustomButton.svelte";

    export let playlist;
</script>

<div>
    <Card>
        <div class="poll">
            <h3 class="d-inline-block">{playlist.name}</h3>

            <h3 class="d-inline-block provider accent-color">
                {#if playlist.playlistProvider == "spotify"}
                    <i class="fa-brands fa-spotify"></i>
                {:else if playlist.playlistProvider == "applemusic"}
                    <i class="fa-brands fa-apple"></i>
                {:else if playlist.playlistProvider == "deezer"}
                    <i class="fa-brands fa-deezer"></i>
                {:else if playlist.playlistProvider == "youtube"}
                    <i class="fa-brands fa-youtube"></i>
                {/if}
            </h3>

            <p>Total participants: {playlist.totalParticipants}</p>

            <div class="image-container">
                <img src="/arnold.jpg" class="" />
            </div>

            <div class="stats">
                <ul>
                    <li>
                        <span class="--accent-color"
                            >{playlist.passedSongs}</span
                        >
                        <span>Approved</span>
                    </li>
                    <li>
                        <span class="info-color">{playlist.pendingSongs}</span>
                        <span>Pending</span>
                    </li>
                    <li>
                        <span class="alert-color">{playlist.rejectedSongs}</span
                        >
                        <span>Rejected</span>
                    </li>
                </ul>
            </div>

            <div>
                <div class="d-inline-block">
                    <CustomButton flat={true}
                        ><i class="fa-solid fa-circle-info"></i> INFO</CustomButton
                    >
                </div>

                <div class="d-inline-block">
                    <CustomButton flat={true}
                        ><i class="fa-solid fa-play"></i> PLAY</CustomButton
                    >
                </div>

                <div class="d-inline-block vote-container">
                    <CustomButton flat={true}
                        ><i class="fa-regular fa-comments"></i> VOTE</CustomButton
                    >
                </div>
            </div>
        </div>
    </Card>
</div>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .vote-container {
        float: right;
    }

    .stats {
        color: var(--neutral-text-color);
    }

    .stats li {
        width: 32%;
        text-align: center;
        display: inline-block;

        border-right: solid 1px var(--neutral-text-color);
    }

    .stats li > span:first-child {
        font-size: 1.5em;
    }

    .stats li:last-child {
        border: none;
    }

    .stats li span {
        display: block;
        text-transform: uppercase;
        font-size: 0.5em;
        margin-top: 0.6em;
        font-weight: 700;
    }

    .image-container img {
        border-radius: 10px;
        max-width: 100%;
    }

    .provider {
        float: right;
        font-size: 2em;
    }
</style>
