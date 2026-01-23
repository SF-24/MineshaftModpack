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
})