
// Food tooltips

let foodItems = Ingredient.all.stacks.toList().filter(stack => { return stack.item.foodProperties != null })
ItemEvents.tooltip(event => {
    event.addAdvanced(foodItems, (item, advanced, text) => {
        if(item.isEdible()) {
            let shanks = advanced.valueOf(foodItems.getNutrition()) / 2
            text.add(Text.gray("Hunger: ").append(Text.gray('${shanks}')))
        }
    })
})