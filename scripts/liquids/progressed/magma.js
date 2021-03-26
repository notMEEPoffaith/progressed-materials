const moltenRock = extendContent(Liquid, "magma", {
  isHidden(){
    return true;
  }
});
moltenRock.localizedName = "Magma";
moltenRock.description = "Actually, it's supposed to be lava... ...and notMEEPoffaith was here and made it H O T and have super low viscosity. Oh and it's also BLUE!";
moltenRock.details = "How the heck are you reading this?";
moltenRock.flammability = 1000000000;
moltenRock.temperature = 1000000000;
moltenRock.heatCapacity = 0;
moltenRock.viscosity = 0.1;
moltenRock.color = Color.valueOf("59C6F5");
moltenRock.barColor = Color.valueOf("59C6F5");
moltenRock.lightColor = Color.valueOf("59C6F5");
