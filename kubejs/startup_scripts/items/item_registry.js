// priority: 0

const $FlintAndSteelItem = Java.loadClass("net.minecraft.world.item.FlintAndSteelItem");
const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");

StartupEvents.registry('item', event => {
    event.create("steel_ingot").tag("modpack:steel_ingots")
    event.create("steel_sheet").tag("modpack:steel_ingots")
    event.create("steel_nugget")
    event.create("nether_ash").burnTime(20)
    if(useHemp) {
        event.create("hemp_fibres").tag("modpack:bindings")
    }

    // Fire Drill
    event.createCustom("fire_drill", () => {
            return new $FlintAndSteelItem(new $ItemProperties().durability(8)); 
        })
        .translationKey("item.kubejs.fire_drill")
})

ItemEvents.modification(event => {
    event.modify("kubejs:fire_drill", item => {
        item.setBurnTime(20)
    })
})