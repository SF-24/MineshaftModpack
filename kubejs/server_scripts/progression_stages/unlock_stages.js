CommonAddedEvents.playerChangeDimension(event => {
    if(!Utils.getServer().persistentData.getBoolean(nether_discovered)) Utils.getServer().persistentData.putBoolean("nether_discovered", true);

    if(event.getNewLevel().dimension != "minecraft:the_nether" || event.hasGameStage("stage_nether")) return;
    event.addGameStage("stage_nether")
})
