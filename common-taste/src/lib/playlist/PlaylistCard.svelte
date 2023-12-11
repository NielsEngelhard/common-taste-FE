<script>
    import Card from "$lib/basic_components/Card.svelte";
    import CustomButton from "$lib/basic_components/CustomButton.svelte";

    export let playlist;
</script>

<div>
    <Card>
        <div class="poll">
            <h3>{playlist.name}</h3>
            <p>Total participants: {playlist.totalParticipants}</p>

            <div class="image-container">
                <img src="/arnold.jpg" class="" />
            </div>

            <div class="stats">
                <ul>
                    <li class="cl-green">
                        2934
                        <span>Approved</span>
                    </li>
                    <li class="cl-blue">
                        2934
                        <span>Pending</span>
                    </li>
                    <li class="cl-red">
                        2934
                        <span>Rejected</span>
                    </li>
                </ul>
            </div>

            <div>
                <div class="d-inline-block">
                    <CustomButton flat={true}>Info</CustomButton>
                </div>

                <div class="d-inline-block">
                    <CustomButton flat={true}>Listen</CustomButton>
                </div>

                <div class="d-inline-block vote-container">
                    <CustomButton flat={true}>Vote</CustomButton>
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
        font-size: 1.5em;
        border-right: solid 1px var(--neutral-text-color);
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
</style>
