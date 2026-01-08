global.reloaded_startup = false

ServerEvents.loaded(event => {
    if(global.reloaded_startup) { return; }

    console.log("Kubejs script: Setting gamerules (disabling phantoms and pillagers)")
    Utils.getServer().runCommand("gamerule doPatrolSpawning false")
    Utils.getServer().runCommand("gamerule doInsomnia false")

    console.log("Kubejs script: Reloaded startup scripts to fix creative tabs not fully loading.")
    Utils.getServer().runCommand("kubejs reload startup_scripts")
    console.log("Kubejs script: Running /reload command to bypass bugs.")
    Utils.getServer().runCommand("reload")
    global.reloaded_startup = true

    if (!Utils.getServer().persistentData.contains('nether_discovered')) {  
        Utils.getServer().persistentData.putBoolean('nether_discovered', false)  
    } 
})