// Stuff to do with the create mod.

ServerEvents.recipes(event => {
    event.remove({ output: "create:wand_of_symmetry" })
    event.remove({ output: "create:gearbox" })
    event.remove({ output: "create:cogwheel" }),
    event.remove({ output: "create:large_cogwheel" })

    event.shaped(Item.of("create:cogwheel",4),
        [' X ',
         'XSX',
         ' X '
        ],
        {
            X: "#minecraft:planks",
            S: "create:shaft"
        }
    )

    event.shaped(Item.of("create:large_cogwheel"),
        ['TXT',
         'XSX',
         'TXT'
        ],
        {
            X: "#minecraft:planks",
            T: "minecraft:stick",
            S: "minecraft:iron_ingot"
        }
    )

    event.shaped(Item.of("create:andesite_encased_shaft",8),
        [
            'PIP'
        ],
        {
            I: "minecraft:iron_ingot",
            P: "#minecraft:planks"
        }
    )
})