Events.on(ContentInitEvent, () => {
    Blocks.worldMessage.maxTextLength = 1500;
    Blocks.worldMessage.maxNewlines = 200;
});