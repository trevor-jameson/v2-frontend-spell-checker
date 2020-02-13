import { FETCHED_SPELLS } from "../actionTypes";
import { spellsReducer } from './spellsReducer'

    const spellsList = [
      {
        id: 1,
        name: "Acid Arrow",
        desc:
          "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
        highlvl:
          "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
        page: "phb 259",
        range: "90 feet",
        components: "V S M",
        ritual: false,
        concentration: false,
        duration: "Instantaneous",
        castingtime: "1 action",
        material: "Powdered rhubarb leaf and an adderâ€™s stomach.",
        lvl: 2,
        school: "Evocation",
        klasses: "Wizard"
      },
      {
        id: 2,
        name: "Acid Splash",
        desc:
          "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.This spellâ€™s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        highlvl: null,
        page: "phb 211",
        range: "60 feet",
        components: "V S",
        ritual: false,
        concentration: false,
        duration: "Instantaneous",
        castingtime: "1 action",
        material: null,
        lvl: 0,
        school: "Conjuration",
        klasses: "Sorcerer Wizard"
      },
    ];

describe("Spells state reducer in redux store", () => {
  it("Intializes with an empty spell array", () => {
    const initialAction = { type: "@@INIT" };
    expect(spellsReducer(undefined, initialAction)).toEqual([]);
  });
  it("Updates state with the newly fetched spells array", () => {
    const fetchedSpellsAction = {
      type: FETCHED_SPELLS,
      spells: spellsList
    };
    const prevState = [];
    expect(spellsReducer(prevState, fetchedSpellsAction)).toEqual(spellsList);
  });
});