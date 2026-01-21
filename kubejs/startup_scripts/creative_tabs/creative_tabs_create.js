StartupEvents.registry('creative_mode_tab', event => {
    // event.remove("elementary-staffs:essences")
    // event.remove("elementary-staffs:grenade")
    // event.remove("elementary-staffs:staffs")
    // event.remove("elementary-staffs:arrows")
    // event.remove("kubejs:tab")
    event.create("a_tab:rotary_power").displayName("Rotary Power").icon(()=>"create:cogwheel")
})

// Create palletes
StartupEvents.modifyCreativeTab("create:palettes", event => {
    event.remove([
        "create:oak_window",
        "create:oak_window_pane",
        "create:ornate_iron_window_pane",
        "create:ornate_iron_window"
    ])
})

// Create
StartupEvents.modifyCreativeTab("create:base", event => {
    event.remove([
        "create:pulse_extender",
        "create:pulse_repeater",
        "create:powered_latch",
        "create:powered_toggle_latch",
        "create:analog_lever",
        "create:goggles",

        "create:controller_rail",
        "create:creative_motor",
        "create:creative_crate",
        "create:creative_fluid_tank",
        "create:creative_blaze_cake",
        "create:wand_of_symmetry",
        "create:handheld_worldshaper",
        "create:schematicannon",
        "create:schematic_and_quill",
        "create:schematic_table",
        "create:schematic",
        "create:empty_schematic",

        "create:crushed_raw_copper",
        "create:crushed_raw_iron",
        "create:crushed_raw_gold",
        "create:iron_sheet",
        "create:golden_sheet",
        "create:copper_sheet",
        "create:copper_nugget",
        
        // Basics
        "create:andesite_encased_shaft",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:gearbox",
        "create:vertical_gearbox",
        "create:clutch",

        // Power sources
        "create:large_water_wheel",
        "create:windmill_bearing",

        // Power uses
        "create:encased_fan",
        "create:millstone",

        // Copper
        "create:fluid_pipe",
        "create:mechanical_pump",
        "create:fluid_tank"
    ])
})

StartupEvents.modifyCreativeTab("a_tab:rotary_power", event => {
    event.remove("minecraft:paper")
    
    event.add([
        // Basics
        "create:andesite_encased_shaft",
        "create:cogwheel",
        "create:large_cogwheel",
        "create:gearbox",
        "create:vertical_gearbox",
        "create:clutch",

        // Power sources
        "create:large_water_wheel",
        "create:windmill_bearing",

        // Power uses
        "create:encased_fan",
        "create:millstone",

        // Copper
        "create:fluid_pipe",
        "create:mechanical_pump",
        "create:fluid_tank"
    ])
})

