<script>
    export let type = "accent";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
    <slot />
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }

    .info {
        background-color: var(--info-color);
        color: var(--secondary-text-color);
    }

    .alert {
        background-color: var(--alert-color);
        color: var(--secondary-text-color);
    }

    .accent {
        background-color: var(--accent-color);
        color: var(--secondary-text-color);
    }

    .flat {
        box-shadow: none;
    }

    .info.inverse {
        background-color: transparent;
        color: var(--info-color);
        border: 2px solid var(--info-color);
    }

    .alert.inverse {
        background-color: transparent;
        color: var(--alert-color);
        border: 2px solid var(--alert-color);
    }

    .accent.inverse {
        background-color: transparent;
        color: var(--accent-color);
        border: 2px solid var(--accent-color);
    }
</style>
