// priority: 0

ServerEvents.tags('item',event => {
    // Food tags
    event.add("modpack:cooked_meat", [
        "minecraft:cooked_mutton",
        "minecraft:cooked_rabbit",
        "minecraft:cooked_porkchop",
        "minecraft:cooked_chicken",
        "minecraft:cooked_beef"
    ])
    event.add("modpack:cooked_fish", [
        "minecraft:cooked_salmon",
        "minecraft:cooked_cod"
    ])
    event.add("modpack:cookead_meat_and_fish", [
        "#modpack:cooked_fish",
        "#modpack:cooked_meat"
    ])

    // Material tags
    event.add("minecraft:stone_tool_materials","minecraft:flint")

    event.add("modpack:bindings", [
        "minecraft:string",
        "minecraft:slime_ball"
    ])

    event.add("modpack:common_ingots", [
        "minecraft:iron_ingot", "minecraft:copper_ingot", "create:iron_sheet", "create:copper_sheet"
    ])

    event.add("modpack:common_sheets", [
        "create:iron_sheet", "create:copper_sheet"
    ])

    event.add("modpack:copper_ingots", [
        "minecraft:copper_ingot", "create:copper_sheet"
    ])

    event.add("modpack:iron_ingots", [
        "minecraft:iron_ingot", "create:iron_sheet"
    ])
    
    event.add("modpack:gold_ingots", [
        "minecraft:gold_ingot", "create:golden_sheet"
    ])

    // Wood tags
    event.remove("minecraft:oak_logs", "minecraft:oak_wood")
    event.remove("minecraft:oak_logs", "minecraft:stripped_oak_wood")
    event.remove("minecraft:oak_logs", "minecraft:stripped_oak_log")
    event.remove("minecraft:planks", [
        "minecraft:mangrove_planks",
        "minecraft:warped_planks",
        "minecraft:bamboo_planks",
        "minecraft:cherry_planks"
    ])

    // Equipment tags
    event.add("minecraft:wooden_sword", "modpack:wooden_tools")
    event.add("minecraft:wooden_pickaxe", "modpack:wooden_tools")                    
    event.add("minecraft:wooden_axe", "modpack:wooden_tools")
    event.add("minecraft:wooden_shovel", "modpack:wooden_tools")
    event.add("minecraft:wooden_hoe", "modpack:wooden_tools")

    event.add("minecraft:stone_sword", "modpack:stone_tools")
    event.add("minecraft:stone_pickaxe", "modpack:stone_tools")                    
    event.add("minecraft:stone_axe", "modpack:stone_tools")
    event.add("minecraft:stone_shovel", "modpack:stone_tools")
    event.add("minecraft:stone_hoe", "modpack:stone_tools")

    event.add("minecraft:iron_sword", "modpack:iron_tools")
    event.add("minecraft:iron_pickaxe", "modpack:iron_tools")                    
    event.add("minecraft:iron_axe", "modpack:iron_tools")
    event.add("minecraft:iron_shovel", "modpack:iron_tools")
    event.add("minecraft:iron_hoe", "modpack:iron_tools")

    event.add("minecraft:golden_sword", "modpack:gold_tools")
    event.add("minecraft:golden_pickaxe", "modpack:gold_tools")                    
    event.add("minecraft:golden_axe", "modpack:gold_tools")
    event.add("minecraft:golden_shovel", "modpack:gold_tools")
    event.add("minecraft:golden_hoe", "modpack:gold_tools")

    event.add("minecraft:diamond_sword", "modpack:diamond_tools")
    event.add("minecraft:diamond_pickaxe", "modpack:diamond")                    
    event.add("minecraft:diamond_axe", "modpack:diamond")
    event.add("minecraft:diamond_shovel", "modpack:diamond")
    event.add("minecraft:diamond_hoe", "modpack:diamond")

    event.add("minecraft:leather_helmet", "modpack:leather_armour")
    event.add("minecraft:leather_chestplate", "modpack:leather_armour")
    event.add("minecraft:leather_leggings", "modpack:leather_armour")
    event.add("minecraft:leather_boots", "modpack:leather_armour")

    event.add("minecraft:chainmail_helmet", "modpack:chain_armour")
    event.add("minecraft:chainmail_chestplate", "modpack:chain_armour")
    event.add("minecraft:chainmail_leggings", "modpack:chain_armour")
    event.add("minecraft:chainmail_boots", "modpack:chain_armour")

    event.add("minecraft:iron_helmet", "modpack:iron_armour")
    event.add("minecraft:iron_chestplate", "modpack:iron_armour")
    event.add("minecraft:iron_leggings", "modpack:iron_armour")
    event.add("minecraft:iron_boots", "modpack:iron_armour")

    event.add("minecraft:golden_helmet", "modpack:gold_armour")
    event.add("minecraft:golden_chestplate", "modpack:gold_armour")
    event.add("minecraft:golden_leggings", "modpack:gold_armour")
    event.add("minecraft:golden_boots", "modpack:gold_armour")
    
    event.add("minecraft:diamond_helmet", "modpack:diamond_armour")
    event.add("minecraft:diamond_chestplate", "modpack:diamond_armour")
    event.add("minecraft:diamond_leggings", "modpack:diamond_armour")
    event.add("minecraft:diamond_boots", "modpack:diamond_armour")
})