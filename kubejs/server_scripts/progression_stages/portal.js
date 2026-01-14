// Detect nether portal lighting

const portalItems = new Set([ "minecraft:flint_and_steel", "kubejs:fire_drill", "minecraft:fire_charge" ])



BlockEvents.rightClicked("minecraft:obsidian", event=>{
    Utils.getServer().tell(event.getItem().getId())

    if(portalItems.has(event.getItem().getId())==true) {
        Utils.getServer().tell("Test")    
    }
})
