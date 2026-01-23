// priority: 2

// Building blocks
StartupEvents.modifyCreativeTab("minecraft:building_blocks", event => {})

// Decoration blocks
StartupEvents.modifyCreativeTab("minecraft:colored_blocks", event => {
    event.addBefore(
        "minecraft:dragon_head",
        "supplementaries:enderman_head"
    )
    event.addAfter("minecraft:armor_stand",[
        "supplementaries:hat_stand","supplementaries:globe","supplementaries:hourglass"

    ])
    event.addBefore("minecraft:dragon_egg",[
        "supplementaries:clock_block", "supplementaries:notice_board","supplementaries:urn","supplementaries:bamboo_spikes"
    ])
    event.add([
        "create:oak_window",
        "create:oak_window_pane",
        "create:ornate_iron_window",
        "create:ornate_iron_window_pane"
    ])
})

// Redstone
StartupEvents.modifyCreativeTab("minecraft:redstone_blocks", event => {
    event.remove("supplementaries:dispenser_minecart")
    event.addAfter("minecraft:hopper","create:chute")
    event.addAfter("minecraft:lever","create:analog_lever")
    event.addAfter("minecraft:comparator",[
        "create:pulse_extender",
        "create:pulse_repeater",
        "create:powered_latch",
        "create:powered_toggle_latch",
    ])
})

// Transportation
StartupEvents.modifyCreativeTab("minecraft:functional_blocks", event => {
    event.remove([
        "#supplementaries:presents",
        "#supplementaries:flags",
        "supplementaries:globe",
        "supplementaries:hourglass",
        "supplementaries:hat_stand",
        "supplementaries:urn",
        "supplementaries:enderman_head",
        "supplementaries:bamboo_spikes",
        "supplementaries:clock_block",
        "supplementaries:notice_board"
    ])
    event.addAfter("minecraft:hopper_minecart", "supplementaries:dispenser_minecart")
    event.addAfter("minecraft:activator_rail", "create:controller_rail")
    event.add("create:minecart_coupling")
})

// Misc
StartupEvents.modifyCreativeTab("minecraft:natural_blocks", event => {
    event.remove([])
    event.addAfter(
        "minecraft:music_disc_pigstep",
        "supplementaries:music_disc_heave_ho"
    )
    event.addAfter(
        "minecraft:piglin_banner_pattern",
        "supplementaries:dragon_banner_pattern"
    )
    event.addAfter(
        "minecraft:gold_ingot",
        [
            "create:crushed_raw_iron",
            "create:crushed_raw_copper",
            "create:crushed_raw_gold",
            "create:iron_sheet",
            "create:copper_sheet",
            "create:golden_sheet",
            "minecraft:iron_nugget",
            "create:copper_nugget",
            "minecraft:gold_nugget"
        ]
    )
})

// Foodstuff

StartupEvents.modifyCreativeTab("minecraft:food_and_drinks", event => {})

// Tools

const guidebook = Item.of("lavender:dynamic_book",'{BookId:"modpack:guidebook"}')

StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", event => {
    event.remove([
        "supplementaries:music_disc_heave_ho"
    ])
    event.add(["minecraft:bundle",guidebook,"create:goggles"])
    event.addBefore("minecraft:flint_and_steel","kubejs:fire_drill")
})

// Combat
StartupEvents.modifyCreativeTab("minecraft:combat", event => {
	event.add([
        "elementary-staffs:grenade/fire",
        "elementary-staffs:staff/fire",
        "elementary-staffs:staff/water",
        "elementary-staffs:staff/wind",
        "elementary-staffs:staff/ice",
        "elementary-staffs:staff/poison",
        "elementary-staffs:staff/heal"
    ])
})

// Brewing
StartupEvents.modifyCreativeTab("minecraft:ingredients", event => {
    event.remove([
        "supplementaries:dragon_banner_pattern"
    ])}
)

// Creative Mode
StartupEvents.modifyCreativeTab("kubejs:creative_mode", event => {
    event.remove("minecraft:paper")
    event.add([
        "create:creative_motor",
        "create:creative_crate",
        "create:creative_fluid_tank",
        "create:creative_blaze_cake",
        "create:wand_of_symmetry",
        "create:handheld_worldshaper",
        
        "create:schematicannon",
        "create:schematic_table",
        "create:schematic_and_quill",
        "create:empty_schematic",

        "custommachinery:configuration_card",
        "custommachinery:box_creator_item",
        "custommachinery:structure_creator"
    ])
})

