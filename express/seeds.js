const mongoose = require('mongoose');
const heroes = require("./models/lolBase")

mongoose.connect('mongodb://127.0.0.1:27017/lolBaseX', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log(err);
});

const hero1 = new heroes({
    name: "THE LADY OF LUMINOSITY LUX",
    backstory: "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve her family's noble status. Nonetheless, Lux's optimism and resilience have led her to embrace her unique talents, and she now covertly wields them in service of her homeland.",
    abilities: [
        { title: "ILLUMINATION", description: "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.", icon: "LuxIlluminatingFraulein.png" },
        { title: "LIGHT BINDING", description: "Lux releases a sphere of light that binds and deals damage to up to two enemy units.", icon: "LuxLightBinding.png" },
        { title: "PRISMATIC BARRIER", description: "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.", icon: "LuxLightStrikeKugel.png" },
        { title: "LUCENT SINGULARITY", description: "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.", icon: "LuxPrismaticWave.png" },
        { title: "FINAL SPARK", description: "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.", icon: "LuxR.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Lux_0.jpg"
})


hero1.save(function (err, hero1) {
    console.log("Hero 1 is saved.")
    if (err) return console.error(err);
})

const hero2 = new heroes({
    name: "THE NINE-TAILED FOX AHRI",
    backstory: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
    abilities: [
        { title: "ESSENCE THEFT", description: "When Ahri strikes 9 enemies with her abilities, her next ability also heals her for each enemy hit.", icon: "Ahri_SoulEater2.png" },
        { title: "ORB OF DECEPTION", description: "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.", icon: "AhriOrbofDeception.png" },
        { title: "FOX-FIRE", description: "Ahri gains a brief burst of movement speed and releases three fox-fires, that lock onto and attack nearby enemies.", icon: "AhriFoxFire.png" },
        { title: "CHARM", description: "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her. The target temporarily takes increased damage from Ahri.", icon: "AhriSeduce.png" },
        { title: "SPIRIT RUSH", description: "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.", icon: "AhriTumble.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Ahri_0.jpg"
})


hero2.save(function (err, hero2) {
    console.log("Hero 2 is saved.")
    if (err) return console.error(err);
})

const hero3 = new heroes({
    name: "THE PRODIGAL EXPLORER EZREAL",
    backstory: "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere",
    abilities: [
        { title: "RISING SPELL FORCE", description: "Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.", icon: "Ezreal_RisingSpellForce.png" },
        { title: "MYSTIC SHOT", description: "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.", icon: "EzrealQ.png" },
        { title: "ESSENCE FLUX", description: "Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.", icon: "EzrealW.png" },
        { title: "ARCANE SHIFT", description: "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.", icon: "EzrealE.png" },
        { title: "SPIRIT RUSH", description: "Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).", icon: "EzrealR.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Ezreal_0.jpg"
})


hero3.save(function (err, hero3) {
    console.log("Hero 3 is saved.")
    if (err) return console.error(err);
})

const hero4 = new heroes({
    name: "THE EYE OF TWILIGHT SHEN",
    backstory: "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader,the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing  the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
    abilities: [
        { title: "KI BARRIER", description: "After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.", icon: "Shen_Passive.png" },
        { title: "TWILIGHT ASSAULT", description: "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.", icon: "ShenQ.png" },
        { title: "SPIRIT'S REFUGE", description: "Attacks that would hit Shen or his allies near his spirit blade are blocked.", icon: "ShenW.png" },
        { title: "SHADOW DASH", description: "Shen dashes in a direction, taunting enemies in his path.", icon: "ShenE.png" },
        { title: "STAND UNITED", description: "Shen shields target allied champion from incoming damage, and soon after teleports to their location.", icon: "ShenR.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Shen_0.jpg"
})


hero4.save(function (err, hero4) {
    console.log("Hero 4 is saved.")
    if (err) return console.error(err);
})

const hero5 = new heroes({
    name: "THE UNBREAKABLE SPEAR PANTHEON",
    backstory: "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn resilience that goes along with it. Atreus now opposes the divine as Pantheon reborn, his unbreakable will fueling the fallen Aspect's weapons on the field of battle.",
    abilities: [
        { title: "MORTAL WILL", description: "Every few spells or attacks, Pantheon's next spell is empowered.", icon: "Pantheon_Passive.png" },
        { title: "COMET SPEAR", description: "Pantheon either thrusts his spear or throws his spear in the chosen direction.", icon: "PantheonQ.png" },
        { title: "SHIELD VAULT", description: "Pantheon dashes to a target, damaging and stunning them.", icon: "PantheonW.png" },
        { title: "AEGIS ASSAULT", description: "Pantheon sets his shield, becoming invulnerable to damage from the front and striking repeatedly with his spear", icon: "PantheonE.png" },
        { title: "GRAND STARFALL", description: "Pantheon composes himself and then leaps into the air, landing at a chosen location as a comet.", icon: "PantheonR.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Pantheon_0.jpg"
})


hero5.save(function (err, hero5) {
    console.log("Hero 5 is saved.")
    if (err) return console.error(err);
})

const hero6 = new heroes({
    name: "THE DEMON JESTER SHACO",
    backstory: "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls he torments. He uses toys and simple tricks to deadly effect, finding the results of his bloody “games” hilarious—and for those who hear a dark chuckle in the dead of night, the Demon Jester may have marked them as his next plaything.",
    abilities: [
        { title: "BACKSTAB", description: "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.", icon: "Jester_CarefulStrikes.png" },
        { title: "DECEIVE", description: "Shaco becomes Invisible and teleports to target location. His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.", icon: "Deceive.png" },
        { title: "JACK IN THE BOX", description: "Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.", icon: "JackInTheBox.png" },
        { title: "TWO-SHIV POISON", description: "Shaco's Shivs passively poison targets on hit, slowing their movement speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.", icon: "TwoShivPoison.png" },
        { title: "HALLUCINATE", description: "Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets). Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.", icon: "HallucinateFull.png" },
    ],
    price: [
        { inGamePrice: '3150', realMoneyPrice: '790' },
    ],
    image: "Shaco_0.jpg"
})


hero6.save(function (err, hero6) {
    console.log("Hero 6 is saved.")
    if (err) return console.error(err);
})

const hero7 = new heroes({
    name: "THE CHAIN WARDEN THRESH",
    backstory: "Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness. His victims suffer far beyond their brief mortal coil as Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture for all eternity.",
    abilities: [
        { title: "DAMNATION", description: "Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.", icon: "Thresh_Passive.png" },
        { title: "DEATH SENTENCE", description: "Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.", icon: "ThreshQ.png" },
        { title: "DARK PASSAGE", description: "Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.", icon: "ThreshW.png" },
        { title: "FLAY", description: "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.", icon: "ThreshE.png" },
        { title: "THE BOX", description: "A prison of walls that slow and deal damage if broken.", icon: "ThreshRPenta.png" },
    ],
    price: [
        { inGamePrice: '4800', realMoneyPrice: '880' },
    ],
    image: "Thresh_0.jpg"
})


hero7.save(function (err, hero7) {
    console.log("Hero 7 is saved.")
    if (err) return console.error(err);
})

const hero8 = new heroes({
    name: "THE MACHINE HERALD VIKTOR",
    backstory: "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere",
    abilities: [
        { title: "GLORIOUS EVOLUTION", description: "Viktor can augment his basic abilities when he gets kills on enemies.", icon: "Viktor_Passive.png" },
        { title: "SIPHON POWER", description: "Viktor blasts an enemy unit dealing magic damage, gaining a shield and empowering his next basic attack. Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus Movement Speed after casting.", icon: "ViktorPowerTransfer.png" },
        { title: "GRAVITY FIELD", description: "Viktor conjures a heavy gravitational field that slows enemies in its radius. Enemies who stay within the device for too long are stunned. Augment: Viktor's non-periodic spells apply a slow to enemies.", icon: "ViktorGravitonField.png" },
        { title: "DEATH RAY", description: "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing damage to all enemies in its path. Augment: An explosion follows the Death Ray's wake, dealing magic damage.", icon: "ViktorDeathRay.png" },
        { title: "CHAOS STORM", description: "Viktor conjures a singularity on the field which deals magic damage and interrupts enemy channels. The singularity then periodically does magic damage to all nearby enemies. Viktor can redirect the singularity. Augment: The Chaos Storm moves 25% faster.", icon: "ViktorChaosStorm.png" },
    ],
    price: [
        { inGamePrice: '4800', realMoneyPrice: '880' },
    ],
    image: "Viktor_0.jpg"
})


hero8.save(function (err, hero8) {
    console.log("Hero 8 is saved.")
    if (err) return console.error(err);
})

const hero9 = new heroes({
    name: "SCORN OF THE MOON DIANA",
    backstory: "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
    abilities: [
        { title: "MOONSILVER BLADE", description: "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.", icon: "Diana_Passive_LunarBlade.png" },
        { title: "CRESCENT STRIKE", description: "Unleashes a bolt of lunar energy in an arc dealing magic damage. Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.", icon: "DianaQ.png" },
        { title: "PALE CASCADE", description: "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.", icon: "DianaOrbs.png" },
        { title: "LUNAR RUSH", description: "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage. Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.", icon: "DianaTeleport.png" },
        { title: "MOONFALL", description: "Diana reveals and draws in all nearby enemies and slows them. If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.", icon: "DianaR.png" },
    ],
    price: [
        { inGamePrice: '6300', realMoneyPrice: '975' },
    ],
    image: "Diana_0.jpg"
})


hero9.save(function (err, hero9) {
    console.log("Hero 9 is saved.")
    if (err) return console.error(err);
})

const hero10 = new heroes({
    name: "THE RUINED KING VIEGO",
    backstory: "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving wraith tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
    abilities: [
        { title: "SOVEREIGN'S DOMINATION", description: "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.", icon: "Viego_Passive.RuinedKing.png" },
        { title: "BLADE OF THE RUINED KING", description: "Viego's spectral blade passively deals bonus percent current health damage on-hit and strikes twice vs. enemies he recently hit with an ability, stealing health. Viego can activate this abilty to thrust his zweihander forward, impaling enemies in front of him.", icon: "ViegoQ.png" },
        { title: "SPECTRAL MAW", description: "Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.", icon: "ViegoW.png" },
        { title: "DEATH RAY", description: "Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, movement speed, and attack speed.", icon: "ViegoE.png" },
        { title: "CHAOS STORM", description: "Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.", icon: "ViegoR.png" },
    ],
    price: [
        { inGamePrice: '6300', realMoneyPrice: '975' },
    ],
    image: "Viego_0.jpg"
})


hero10.save(function (err, hero8) {
    console.log("Hero 10 is saved.")
    if (err) return console.error(err);
})