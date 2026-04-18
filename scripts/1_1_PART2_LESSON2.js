
const items = [
 { name: 'Sword',  price: 150 },
 { name: 'Shield', price: 80  },
 { name: 'Potion', price: 30  },
];

items.forEach(item => {
    console.log(`${item.name}: ${item.price} gold`)
});






const treasures = [
  { name: 'Ruby',      gold: 200 },
  { name: 'Gold coin', gold: 10  },
  { name: 'Diamond',   gold: 500 },
];

let total = 0

treasures.forEach(t => {
    total = total + t.gold
})

console.log(`Total: ${total}`)










const party = [
  { name: 'Kester', hp: 80, class: 'Warrior' },
  { name: 'Aya',   hp: 40, class: 'Mage'    },
  { name: 'Kai',   hp: 95, class: 'Rogue'   },
];

party.forEach(m =>{
    const status = m.hp <50
        ? 'low HP!'
        : 'healthy';
    console.log(`${m.name}: ${m.hp} - ${status}`);

})

const healthyNames = party
    .filter(m => m.hp >=50)
    .map(m=> m.name);
console.log(healthyNames);

const weapons = [
  { name: 'Dragonslayer',  rarity: 'legendary' },
  { name: 'Rusty Dagger',  rarity: 'common'    },
  { name: 'Starfall Bow',  rarity: 'legendary' },
  { name: 'Wood Club',     rarity: 'common'    },
  { name: 'Soul Reaper',   rarity: 'legendary' },
  { name: 'Iron Sword',    rarity: 'uncommon'  },
];

const legnedary = weapons.filter(w => w.rarity === 'legendary');
legnedary.forEach(w => console.log(`${w.name} (${w.rarity})`))