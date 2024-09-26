export const upgradeTypes = {
    CLICK: 'click',
    PASSIVE: 'passive',
    MULTIPLIER: 'multiplier',
    SPECIAL: 'special'
};

export const upgrades = [
    {
        id: 1,
        name: "Faster Clicks",
        description: "Increases clicks from clicking by 0.5",
        cost: 20,
        multiplyCost: 1.23,
        amount: 0,
        visible: false,
        type: upgradeTypes.CLICK,
        effect: {
            clickValue: 0.5 // This is the additional value added to each click
        }
    },
    {
        id: 2,
        name: "Auto Clicker",
        description: "Automatically clicks 0.2 per second",
        cost: 275,
        multiplyCost: 1.4,
        amount: 0,
        visible: false,
        type: upgradeTypes.PASSIVE,
        effect: {
            autoClicksPerSecond: 0.2 // This adds to auto-clicks per second
        }
    },
    {
        id: 3,
        name: "Double Trouble",
        description: "Doubles the additional clicks you get from clicking and from upgrades.",
        cost: 1000,
        multiplyCost: 100,
        amount: 0,
        visible: false,
        type: upgradeTypes.MULTIPLIER,
        effect: {
            clickMultiplier: 2 // This will double the additional click value
        }
    },
    {
        id: 4,
        name: "Golden Touch",
        description: "40% chance of getting an additional click value times 10.",
        cost: 10000,
        multiplyCost: 1.40,
        amount: 0,
        visible: false,
        type: upgradeTypes.SPECIAL,
        effect: {
            goldenClickChance: 0.40, // Chance to activate
            goldenClickMultiplier: 10 // Multiplier for golden click
       }
   }
];