import { writable } from 'svelte/store'

const PlaylistStore = writable([
    {
        id: 1,
        name: "dummy store item 1",
        totalParticipants: 2,
        pendingSongs: 10,
        passedSongs: 2,
        rejectedSongs: 10,
        passThresholdPercentage: 50,
        playlistProvider: "spotify"
    },
    {
        id: 2,
        name: "dummy store item 2",
        totalParticipants: 10,
        pendingSongs: 5,
        passedSongs: 333,
        rejectedSongs: 44,
        passThresholdPercentage: 25,
        playlistProvider: "spotify"
    }		
]);

export default PlaylistStore;