
// Modded tabs

StartupEvents.modifyCreativeTab("elementary-staffs:grenade", event => {
	event.remove("elementary-staffs:grenade/fire")
    event.setDisplayName("z")
})

StartupEvents.modifyCreativeTab("elementary-staffs:staffs", event => {
    event.remove([
        "elementary-staffs:staff/fire",
        "elementary-staffs:staff/water",
        "elementary-staffs:staff/wind",
        "elementary-staffs:staff/ice",
        "elementary-staffs:staff/poison",
        "elementary-staffs:staff/heal"
    ])
    event.setDisplayName("z")
})

StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.remove([
        "kubejs:fire_drill"
    ])
    event.setDisplayName("z")
})

StartupEvents.modifyCreativeTab("custommachinery:custom_machine", event=>{
    event.remove([
        "custommachinery:configuration_card",
        "custommachinery:box_creator_item",
        "custommachinery:structure_creator"
    ])
})

StartupEvents.registry('creative_mode_tab', event => {
    // event.remove("elementary-staffs:essences")
    // event.remove("elementary-staffs:grenade")
    // event.remove("elementary-staffs:staffs")
    // event.remove("elementary-staffs:arrows")
    // event.remove("kubejs:tab")
    event.create("kubejs:creative_mode").displayName(" Creative Mode Items").icon(()=>"create:creative_motor")
})
