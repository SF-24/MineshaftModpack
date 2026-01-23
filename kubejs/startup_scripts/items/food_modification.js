// Food tag

ItemEvents.modification(event => {
    // Ingredients:
    // Sweet berries, glow berries, melon, 
    // potato, carrot, raw meat

    // Meats
    // High quality
    event.modify("minecraft:porkchop", item=>item.setFoodProperties(food=>food.hunger(2.0).saturation(1.2)))
    event.modify("minecraft:beef", item=>item.setFoodProperties(food=>food.hunger(2.0).saturation(1.2)))
    event.modify("minecraft:rabbit", item=>item.setFoodProperties(food=>food.hunger(2.0).saturation(1.2)))
    
    // Lower quality
    event.modify("minecraft:chicken", item=>item.setFoodProperties(food=>food.hunger(2.0).saturation(0.8)))
    event.modify("minecraft:mutton", item=>item.setFoodProperties(food=>food.hunger(2.0).saturation(0.8)))
  
    // Ingredients
    // Potato: using vanilla
    // Berries and melon
    event.modify("minecraft:sweet_berries", item=>item.setFoodProperties(food=>food.hunger(1.0).fastToEat(true)))
    event.modify("minecraft:glow_berries", item=>item.setFoodProperties(food=>food.hunger(1.0).fastToEat(true)))
    event.modify("minecraft:melon_slice", item=>item.setFoodProperties(food=>food.hunger(1.0).fastToEat(false)))
    event.modify("minecraft:carrot", item=>item.setFoodProperties(food=>food.hunger(2.0)))

})

