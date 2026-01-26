// priority: 2

ServerEvents.recipes(event=>{
    event.shaped(
        Item.of("minecraft:lodestone"),
        [
            'CCC',
            'CIC',
            'CCC'
        ],
        {
            C: "minecraft:cobblestone",
            I: "#modpack:steel_ingots"
        }
    )
    
    event.shapeless(
        Item.of("elementary-staffs:grenade/fire", 8),
        [
            "4x minecraft:blaze_powder",
            "minecraft:glass_bottle"
        ]
    )
})