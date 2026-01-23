ServerEvents.recipes(event=>{
    event.remove({output: "minecraft:furnace"})

    // Wooden spikes. TODO: Change recipe
    event.shaped(
        Item.of("supplementaries:bamboo_spikes"),
        [
            'S S',
            'XXX'
        ],
        {
            X: "#minecraft:planks",
            S: "minecraft:stick"
        }
    )

    // Fire striker
    event.shapeless(
        Item.of("kubejs:fire_drill"),
        [
            "2x minecraft:stick",
            "minecraft:string"
        ]
    ).id("kubejs:fire_drill")

    event.shapeless(
        Item.of("kubejs:fire_drill"),
        [
            "2x minecraft:stick",
            "#minecraft:leaves"
        ]
    )

    // Furnace
    event.shaped(
        Item.of("minecraft:furnace"),
        [
            "XXX",
            "XCX",
            "XXX"
        ],
        {
            "X":"#minecraft:stone_crafting_materials",
            "C":["minecraft:coal","minecraft:charcoal","minecraft:blaze_powder"]
        }
    )
})