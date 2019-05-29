# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Race.destroy_all
Character.destroy_all
Charclass.destroy_all

races = ["Human", "Dwarf (Hill Dwarf)", "Dwarf (Mountain Dwarf)", "Elf (High Elf)", "Elf (Wood Elf)", "Halfling (Lightfoot)", "Halfling (Stout)",
"Dragonborn (Black Dragon Ancestry)", "Dragonborn (Blue Dragon Ancestry)", "Dragonborn (Brass Dragon Ancestry)", "Dragonborn (Bronze Dragon Ancestry)",
"Dragonborn (Copper Dragon Ancestry)", "Dragonborn (Gold Dragon Ancestry)", "Dragonborn (Red Dragon Ancestry)", "Dragonborn (Silver Dragon Ancestry)",
"Dragonborn (White Dragon Ancestry)", "Elf (Dark Elf/Drow)", "Gnome (Forest Gnome)", "Gnome (Rock Gnome)", "Half-Elf", "Half-Orc", "Tiefling", "Aasimar (Celestial Blooded)",
"Aarakocra (Birdfolk)", "Eladrin (Feywild Elf)", "Firbolg (Forest Giant)", "Genasi (Air Blooded)", "Genasi (Earth Blooded)", "Genasi (Fire Blooded)",
"Genasi (Water Blooded)", "Gnome (Deep Gnome/Svirfneblin)", "Kenku (Ravenfolk)", "Lizardfolk", "Minotaur (Krynn-born)", "Tabaxi (Catfolk)", "Triton (Seafolk)",
"Bugbear", "Goblin", "Hobgoblin", "Kobold", "Orc", "Yuan-ti Pureblood", "Changeling", "Beasthide Shifter", "Cliffwalk Shifter", "Longstride Shifter",
"Longtooth Shifter", "Razorclaw Shifter", "Wildhunt Shifter", "Warforged"]

races.each do |race|
  Race.create(name: race)
end

charclasses = ["Barbarian (Path of the Berserker)", "Barbarian (Path of the Bear Totem Warrior)", "Barbarian (Path of the Eagle Totem Warrior)",
"Barbarian (Path of the Wolf Totem Warrior)", "Bard (College of Lore)", "Bard (College of Valor)", "Cleric (Domain of Knowledge)", "Cleric (Domain of Life)",
"Cleric (Domain of Light)", "Cleric (Domain of Nature)", "Cleric (Domain of Tempest)", "Cleric (Domain of Trickery)", "Cleric (Domain of War)",
"Druid (Circle of the Arctic)", "Druid (Circle of the Desert)", "Druid (Circle of the Forest)", "Druid (Circle of the Grassland)", "Druid (Circle of the Mountain)",
"Druid (Circle of the Swamp)", "Druid (Circle of the Underdark)", "Druid (Circle of the Moon)", "Fighter (Champion/Str-based Weapon)", "Fighter (Champion/Dex-based Weapon)",
"Fighter (Battle Master/Str-based Weapon)", "Fighter (Battle Master/Dex-based Weapon)", "Fighter (Eldritch Knight/Str-based Weapon)", "Fighter (Eldritch Knight/Dex-based Weapon)",
"Monk (The Way of the Open Hand)", "Monk (The Way of Shadow)", "Monk (The Way of the Four Elements)", "Paladin (Oath of Devotion)", "Paladin (Oath of the Ancients)",
"Paladin (Oath of Vengeance)", "Ranger (Hunter)", "Ranger (Beast Master)", "Rogue (Thief)", "Rogue (Assassin)", "Rogue (Arcane Trickster)", "Sorcerer (Draconic Bloodline)",
"Sorcerer (Wild Magic)", "Warlock (Pact with The Archfey)", "Warlock (Pact with The Fiend)", "Warlock (Pact with The Great Old One)", "Wizard (Abjuration Tradition)",
"Wizard (Conjuration Tradition)", "Wizard (Divination Tradition)", "Wizard (Enchantment Tradition)", "Wizard (Evocation Tradition)", "Wizard (Illusion Tradition)",
"Wizard (Necromancy Tradition)", "Paladin (Oathbreaker, “Anti-Paladin”)"]

charclasses.each do |charclass|
  Charclass.create(name: charclass)
end

a = Character.create(name: 'Charles', gender: 'Male', race_id: 5, class_value: 5, skill: 'Stealth', inventory: 'empty', exp: 100, strength: 20, dexterity: 40, constitution: 60, wisdom: 20, charisma: 80, hitpoints:20, level: 5, image_url: "no") 