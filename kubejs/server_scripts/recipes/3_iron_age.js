// priority: 2

ServerEvents.recipes(event=>{

    event.shaped(
        Item.of("minecraft:spyglass"), 
        [
            'O',
            'G',
            'G'
        ],
        {
            O: "minecraft:glass",
            G: "minecraft:gold_ingot"
        }
    )
})