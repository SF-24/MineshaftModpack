ServerEvents.recipes(event=>{
    event.remove({ output: "create:oak_window" })
    event.shaped(Item.of("create:oak_window"),[
        ' X ',
        'XGX'
    ],
    {
        'X':"#minecraft:planks",
        'G':"minecraft:glass"
    })
})