// Priority: 0

global.swordRecipe = (event, item, toolMaterial, stickMaterial, bindings, useTwoBindings) => {
    if(useTwoBindings) {
        event.shaped(Item.of(item),
            [ 
                ' C ',
                ' C ',
                'BSB'
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    } else {
        event.shaped(Item.of(item),
            [ 
                ' C',
                ' C',
                'BS'
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    }
}

global.axeRecipe = (event, item, toolMaterial, stickMaterial, bindings, useTwoBindings) => {
    if(useTwoBindings) {
        event.shaped(Item.of(item),
            [ 
                'BCC',
                'BSC',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    } else {
        event.shaped(Item.of(item),
            [ 
                'BCC',
                ' SC',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    }
}

global.shovelRecipe = (event, item, toolMaterial, stickMaterial, bindings, useTwoBindings) => {
    if(useTwoBindings) {
        event.shaped(Item.of(item),
            [ 
                'BCB',
                ' S ',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    } else {
        event.shaped(Item.of(item),
            [ 
                'BC',
                ' S',
                ' S'
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    }
}

global.pickaxeRecipe = (event, item, toolMaterial, stickMaterial, bindings, useTwoBindings) => {
    if(useTwoBindings) {
        event.shaped(Item.of(item),
            [ 
                'CCC',
                'BSB',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    } else {
        event.shaped(Item.of(item),
            [ 
                'CCC',
                'BS ',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    }
}

global.hoeRecipe = (event, item, toolMaterial, stickMaterial, bindings, useTwoBindings) => {
    if(useTwoBindings) {
        event.shaped(Item.of(item),
            [ 
                'BCC',
                'BS ',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    } else {
        event.shaped(Item.of(item),
            [ 
                'BCC',
                ' S ',
                ' S '
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )

        event.shaped(Item.of(item),
            [ 
                'CC',
                'BS',
                ' S'
            ],
            {
                C: toolMaterial,
                S: stickMaterial,
                B: bindings
            }
        )
    }
}