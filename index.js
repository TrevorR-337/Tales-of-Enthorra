/*
  pages, page switching
  page ui, some dynamic
  inventory
  dialogue
  quests
  map, travel, detour and search, waypoints and paths
  so. many. fucking. menus.
  user data -> status, stats and skills, history log, journal, active and inactive quests
  saving, loading, deleting
  random encounters and happenings, lists of random per region, some special, random finds,
  looting, foraging, picking fruits, hunting
  crafting, mining, foraging
  story
  
*/

let dialogueData = [
    {
      type: "basic",
      quests: null,
      text: "string 1",
      response: "response 1"
    },
    {
      type: "tangent",
      quests: null,
      text: "string 2",
      response: "response 2",
      subtexts: [
        {
          type: "basic",
          quests: null,
          text: "substring 1",
          response: "subresponse 1"
        },
        {
          type: "basic",
          quests: null,
          text: "substring 2",
          response: "subresponse 2"
        }
      ]
    }
]
