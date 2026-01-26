// Stuff to do with the create mod.

ServerEvents.recipes(event => {
    event.remove({ output: "create:wand_of_symmetry" })
    event.remove({ output: "create:gearbox" })
    event.remove({ output: "create:cogwheel" }),
    event.remove({ output: "create:large_cogwheel" })
    event.remove({ output: "create:crafting_blueprint" })
    event.remove({ output: "create:schematic_and_quill"})
    event.remove({ output: "create:empty_schematic"})
    event.remove({ output: "create:sweet_roll"})

    event.remove({ output: "custommachinery:configuration_card"}) // Adv machinery

    // Basic kinetic components
    event.shaped(Item.of("create:cogwheel", 4),
        [' X ',
         'XSX',
         ' X '
        ],
        {
            X: "#minecraft:planks",
            S: "#modpack:common_ingots"
        }
    )

    event.shaped(Item.of("create:large_cogwheel"),
        ['TXT',
         'XSX',
         'TXT'
        ],
        {
            X: "#minecraft:planks",
            S: "#modpack:common_ingots",
            T: "minecraft:sticks"
        }
    )

    event.shaped(Item.of("create:andesite_encased_shaft",8),
        [
            'PIP'
        ],
        {
            I: "#modpack:common_ingots",
            P: "#minecraft:planks"
        }
    )

    // Gearboxes
    event.shaped(Item.of("create:gearbox"),
        [
            'PGP',
            'GSG',
            'PGP'
        ],
        {
            G: "create:cogwheel",
            S: "minecraft:stick",
            P: "#minecraft:planks"
        }
    )

    event.shaped(Item.of("create:vertical_gearbox"),
        [
            'PGP',
            'GSG',
            'PGP'
        ],
        {
            P: "create:cogwheel",
            S: "minecraft:stick",
            G: "#minecraft:planks"
        }
    )

    // Chasis
    event.shaped(Item.of("create:radial_chassis"),
        [
            ' P ',
            'IPI',
            ' P '
        ],
        {
            P: "#minecraft:planks",
            I: "#modpack:common_ingots"
        }
    )

    // Redstone Clutch
    event.shaped(Item.of("create:clutch"),
        [
            'PPP',
            'PRP',
            'PGP'
        ],
        {
            P: "#minecraft:planks",
            R: "minecraft:redstone",
            G: "#modpack:gold_ingots"
        }
    ) 
})