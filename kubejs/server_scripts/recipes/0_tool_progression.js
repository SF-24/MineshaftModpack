ServerEvents.recipes(event=>{
    // Stone tools
    event.remove({ output: "#modpack:stone_tools"})

    global.swordRecipe(event, 'minecraft:stone_sword', "#minecraft:stone_tool_materials", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.axeRecipe(event, 'minecraft:stone_axe', "#minecraft:stone_tool_materials", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.pickaxeRecipe(event, 'minecraft:stone_pickaxe', "#minecraft:stone_tool_materials", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.shovelRecipe(event, 'minecraft:stone_shovel', "#minecraft:stone_tool_materials", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.hoeRecipe(event, 'minecraft:stone_hoe', "#minecraft:stone_tool_materials", 'minecraft:stick', "#modpack:bindings", useTwoBindings);

    // Iron tools
    event.remove({ output: "#modpack:iron_tools"})
    // event.replaceInput({ output: "#modpack:iron_armour"}, "minecraft:iron_ingot", "create:iron_sheet")

    global.swordRecipe(event, 'minecraft:iron_sword', "#modpack:iron_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.axeRecipe(event, 'minecraft:iron_axe', "#modpack:iron_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.pickaxeRecipe(event, 'minecraft:iron_pickaxe', "#modpack:iron_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.shovelRecipe(event, 'minecraft:iron_shovel', "#modpack:iron_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.hoeRecipe(event, 'minecraft:iron_hoe', "#modpack:iron_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);

    // Gold tools
    event.remove({ output: "#modpack:gold_tools"})
    // event.replaceInput({ output: "#modpack:gold_armour"}, "minecraft:gold_ingot", "create:golden_sheet")
    
    global.swordRecipe(event, 'minecraft:golden_sword', "#modpack:gold_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.axeRecipe(event, 'minecraft:golden_axe', "#modpack:gold_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.pickaxeRecipe(event, 'minecraft:golden_pickaxe', "#modpack:gold_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.shovelRecipe(event, 'minecraft:golden_shovel', "#modpack:gold_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.hoeRecipe(event, 'minecraft:golden_hoe', "#modpack:gold_ingots", 'minecraft:stick', "#modpack:bindings", useTwoBindings);

    // Diamond tools
    // Maybe add distinguishing between diamond ; diamond studded/plated tools.
    // Or some form of rough/polished diamonds
    
    // It would be beneficial to make these require some form of stronger binding/sticks.
    event.remove({ output: "#modpack:diamond_tools"})

    global.swordRecipe(event, 'minecraft:diamond_sword', "minecraft:diamond", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.axeRecipe(event, 'minecraft:diamond_axe', "minecraft:diamond", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.pickaxeRecipe(event, 'minecraft:diamond_pickaxe', "minecraft:diamond", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.shovelRecipe(event, 'minecraft:diamond_shovel', "minecraft:diamond", 'minecraft:stick', "#modpack:bindings", useTwoBindings);
    global.hoeRecipe(event, 'minecraft:diamond_hoe', "minecraft:diamond", 'minecraft:stick', "#modpack:bindings", useTwoBindings);

    // Stone age
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
