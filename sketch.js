var bg, player_img, button, state = "start", won_State = "none";
var more_btn, btn_2, level_1_sprite, lvl_1_logo, level_2_sprite, lvl_2_logo, lvl_2_logo_locked, level_3_sprite, lvl_3_logo, lvl_3_logo_locked;
var level_4_sprite, lvl_4_logo, lvl_4_logo_locked, level_5_sprite, lvl_5_logo, lvl_5_logo_locked
var Level1_SpaceShip, SpaceShip_img, text_ins, lvl_1_ins;
var fb1, fb2, fb3, fb4;
var fbr1, fbr2, fbr3, fbr4;
var fireballs_right, fireballs_left;
var bg, game_over_img, game_over;
var you_win, you_win_img
var Level1_gameState = "instruction"
var Level2_gameState = "instruction"
var Level3_gameState = "instruction_1"
var Level4_gameState = "loading"
var Level5_gameState = "instructions"
var Level1_setTimeOut_Allowance_1 = true, Level1_setTimeOut_Allowance_2 = true, Level3_setTimeOut_Allowance = true
var Level1_Note, Level1_Note_img, Level2_Note, Level2_Note_img, Level3_Note_1, Level3_Note_2, Level3_Note_img_1, Level3_Note_img_2, Level4_Note, Level4_Note_img
var ok_btn, ok_btn_img, next_level_btn, next_level_btn_img
var planet, astroid, obs_1, obs_2, obs_3, as_1, as_2, as_3, as_4, as_5, Level2_SpaceShip
var eSpaceShips1 = [];
var eSpaceShips2 = [];
var eSpaceShips4 = [];
var eSpaceShips5 = [];
var EnemyFireballs = [];
var gameState = "play"
var Fireballs = []
var Shoot_Time = 0
var Phase = 1
var eSpaceShips1_frequency = 50
var eSpaceShips2_frequency = 267
var eSpaceShips4_frequency = 309
var eSpaceShips5_frequency = 196
var Level_3_PlayerHearts = []
var BossHearts = []
var Level_3_PlayerPosition = "normal"
var Timeout1_allowance = true
var Timeout2_allowance = true
var Timeout3_allowance = true
var Level_3_Player, Level_3_Gate, Boss_Ship, BossLabel, Blast, Level_4_Player
var cols, rows
var w = 30
var grid = []
var stack = [];
var current = null;
var StartX = 0
var StartY = 0
var StartTimer = false
var EnemyFireballs = []
var gameState = "loading"
var call = true;
var Key1, Key2, Key3, Key4, Final_Key
var Maze_SubState = "key1"
var ChangePosition = true
var Loaded = false
var Instructed = false
var Timer, StartTimer, Timer_Green, Timer_Red, posY, test_length, Level_4_Gate, Level_4_Gate_Half_1, Level_4_Gate_Half_2, PymParticles, Load_Sprite, Note, Spiral_Level_4_Gate, You_win
var player_img, bg, Load_bg, Load_bg_1, Load_bg_2, Load_bg_3, Load_bg_4, ok_btn_Img, Fireball_img, game_over_img, you_win_img
var key_1_img, key_2_img, key_3_img, key_4_img, Final_key_img
var key_1_won_img, key_2_won_img, key_3_won_img, key_4_won_img, Final_key_won_img, Level_4_Gate_img, Key_hole_img, Level_4_Gate_Half_1_img, Level_4_Gate_Half_2_img, Spiral_bg
var KeyHole1, KeyHole2, KeyHole3, KeyHole4, KeyHole5
var distanceX = 400
var distanceY = 300
var FireBalls = []
var WaterBalls = []
var SeedBalls = []
var ElectricBalls = []
var SandStorms = []
var Level_5_Player_Attack = []
var Level_5_Player_Defense = []
var Enemy_Attack = []
var Enemy_Defense = []
var Attacked_Level_5_Player_Attack = []
var Attacked_Enemy_Attack = []
var Activated_Enemy_Attack = []
var Level_5_Player, Gem, game_over, won, Alien, Level_5_Note, ok_btn
var Level_5_Player_Defense_Fire, Level_5_Player_Defense_Water, Level_5_Player_Defense_Seed, Level_5_Player_Defense_Electric, Level_5_Player_Defense_Sand
var Level_5_Player_Attack_Fire, Level_5_Player_Attack_Water, Level_5_Player_Attack_Seed, Level_5_Player_Attack_Electric, Level_5_Player_Attack_Sand
var Attack_time = 0
var Defense_Time = 0
var types = ["seed", "fire", "water"]
var anti_types = ["fire", "water", "seed"]
var enemy_attack_type, player_attack_type, attackable_index
var Level_5_Player_Lives = 5
var Enemy_Lives = 5
var Level_5_Player_Hearts = []
var Enemy_Hearts = []
var Post_Win=false, Post_Win_Note, Post_Win_Note_img, Riddle_btn, Riddle_btn_img, Riddle_Note, Riddle_Note_img
var Complete_win_note,Complete_win_note_img


function preload() {
  bg = loadImage("./Images/Starter - Copy.jpg")
  bg1_st2 = loadImage("./Images/Main bg - st 2.jpg")
  bg2 = loadImage("./Images/bg2.jpg")
  player_img = loadImage("/Images/hero.png")
  more_btn = loadImage("/Images/more.png")
  fight_btn = loadImage("./Images/Fight.png")
  lvl_1_logo = loadImage("./Images/Level1_logo.jpg")
  lvl_2_logo = loadImage("/Images/Level2_logo.jpg")
  lvl_2_logo_locked = loadImage("/Images/Level2_logo - locked.jpg")
  lvl_3_logo = loadImage("/Images/Level3_logo.jpg")
  lvl_3_logo_locked = loadImage("/Images/Level3_logo - Locked.jpg")
  lvl_4_logo = loadImage("/Images/Level4_logo.jpg")
  lvl_4_logo_locked = loadImage("/Images/Level4_logo - locked.jpg")
  lvl_5_logo = loadImage("/Images/Level5_logo.jpg")
  lvl_5_logo_locked = loadImage("/Images/Level5_logo - locked.jpg")
  SpaceShip_img = loadImage("/Images/SpaceShip.jpg")
  Level2_SpaceShip_img = loadImage("/Images/SpaceShip - Level - 2.jpg")
  fb1 = loadImage("/Images/fireball(1).png")
  fb2 = loadImage("/Images/fireball(2).png")
  fb3 = loadImage("/Images/fireball(3).png")
  fb4 = loadImage("/Images/fireball(4).png")
  fbr1 = loadImage("/Images/fireball(1) - right.png")
  fbr2 = loadImage("/Images/fireball(2) - right.png")
  fbr3 = loadImage("/Images/fireball(3) - right.png")
  fbr4 = loadImage("/Images/fireball(4) - right.png")
  bg_lv1 = loadImage("/Images/bg.jpg")
  game_over_img = loadImage("/Images/go-bg.jpg")
  you_win_img = loadImage("/Images/you-win.jpg")
  Level1_Note_img = loadImage("/Images/Note_Level_1.jpg")
  Level2_Note_img = loadImage("/Images/Note_Level_2.jpg")
  Level3_Note_img_1 = loadImage("/Images/Note_Level_3_2.jpg")
  Level3_Note_img_2 = loadImage("/Images/Note_Level_3_1.jpg")
  Level4_Note_img = loadImage("/Images/PaperNote.jpg")
  ok_btn_img = loadImage("/Images/ok.png")
  next_level_btn_img = loadImage("/Images/Next-Level.png")
  lock_img = loadImage("/Images/Lock.jpg")
  lvl2_bg = loadImage("/Images/Level-2-bg.jpg")
  lvl3_bg = loadImage("/Images/Level-3-bg.jpg")
  lvl4_bg = loadImage("/Images/Level-4-bg.jpg")
  lvl5_bg = loadImage("/Images/Level-5-bg.jpg")
  planet_img = loadImage("/Images/planet.png")
  astroid_img = loadImage("/Images/asteroid.png")
  obs_1_img = loadImage("/Images/hole.png")
  obs_2_img = loadImage("/Images/wormHole.png")
  obs_3_img = loadImage("/Images/dark_matter.png")
  as_img = loadImage("/Images/astroid.png")
  gate_img = loadImage("/Images/Gate.jpg")
  SpaceShip_img_inverted = loadImage("/Images/Spaceship Inverted.jpg")
  SpaceShip_img_Top = loadImage("/Images/Spaceship Top.jpg")
  SpaceShip_img_Bottom = loadImage("/Images/Spaceship Bottom.jpg")
  Level3_fireball_img = loadImage("/Images/fireball.jpg")
  EnemyFireball_img = loadImage("/Images/EnemyFireball.jpg")
  eSpaceShip1_img = loadImage("/Images/eSpaceShip1.jpg")
  eSpaceShip2_img = loadImage("/Images/eSpaceShip2.jpg")
  eSpaceShip3_img = loadImage("/Images/eSpaceShip3.jpg")
  eSpaceShip4_img = loadImage("/Images/eSpaceShip4.jpg")
  eSpaceShip5_img = loadImage("/Images/eSpaceShip5.jpg")
  game_over_img = loadImage("/Images/go-bg.jpg")
  Heart_img = loadImage("/Images/heart.jpg")
  EnemyHeart_img = loadImage("/Images/EnemyHeart.jpg")
  BossLabel_img = loadImage("/Images/TextLabel.png")
  you_win_img = loadImage("/Images/you-win.jpg")
  Blast_img = loadImage("/Images/Blast.jpg")
  Load_bg_1 = loadImage("/Images/LoadImage - 1.jpg")
  Load_bg_2 = loadImage("/Images/LoadImage - 2.jpg")
  Load_bg_3 = loadImage("/Images/LoadImage - 3.jpg")
  Load_bg_4 = loadImage("/Images/LoadImage - 4.jpg")
  Load_bg = loadAnimation(Load_bg_1, Load_bg_2, Load_bg_3, Load_bg_4)
  ok_btn_Img = loadImage("/Images/ok.png")
  PymParticles_img = loadImage("/Images/pym particles.png")
  Fireball_img = loadImage("/Images/EnemyFireball.jpg")
  key_1_img = loadImage("/Images/Key1.jpg")
  key_2_img = loadImage("/Images/Key2.jpg")
  key_3_img = loadImage("/Images/Key3.jpg")
  key_4_img = loadImage("/Images/Key4.jpg")
  Final_key_img = loadImage("/Images/Fkey.jpg")
  key_1_won_img = loadImage("/Images/Key1 - Won.jpg")
  key_2_won_img = loadImage("/Images/Key2 - Won.jpg")
  key_3_won_img = loadImage("/Images/Key3 - Won.jpg")
  key_4_won_img = loadImage("/Images/Key4 - Won.jpg")
  Final_key_won_img = loadImage("/Images/Fkey - Won.jpg")
  Level_4_Gate_img = loadImage("/Images/door.jpg")
  Key_hole_img = loadImage("/Images/KeyHole.jpg")
  Level_4_Gate_Half_1_img = loadImage("/Images/door - Half-1.jpg")
  Level_4_Gate_Half_2_img = loadImage("/Images/door - half-2.jpg")
  Spiral_bg = loadImage("/Images/Spiral door.jpg")
  alien_img = loadImage("/Images/Alien.jpg")
  fireball_img = loadImage("/Images/Fire ball.jpg")
  enemy_fireball_img = loadImage("/Images/Fire ball - Enemy.jpg")
  waterball_img = loadImage("/Images/Water ball - 1.jpg")
  waterball_enemy_img = loadImage("/Images/Water ball - 1 - Enemy.jpg")
  seedball_img = loadImage("/Images/Seed ball.jpg")
  gem_img = loadImage("/Images/Gem3.png")
  Enemy_Heart_img = loadImage("/Images/EnemyHeart.jpg")
  Heart_img = loadImage("/Images/heart.jpg")
  Level_5_Note_img = loadImage("/Images/Note_Level_5.jpg")
  Post_Win_Note_img = loadImage("/Images/Post_win_note.jpg")
  Riddle_btn_img = loadImage("/Images/Riddle_btn.png")
  Riddle_Note_img = loadImage("/Images/Riddle.jpg")
  Complete_win_note_img = loadImage("/Images/Complete_win.jpg")
}

function setup() {
  var canvas = createCanvas(displayWidth - 4, displayHeight - 151)
  button = createSprite(10 * displayWidth / 12, 9.2 * displayHeight / 12)
  button.addImage("btn", more_btn)
  lvl_1_ins = createElement("h1")
  lvl_1_ins.position(displayWidth / 3.8, (displayHeight / 25))
  lvl_1_ins.html("Use up and down keys to move")
  lvl_1_ins.style("font-size", "50px")
  lvl_1_ins.style("color", "white")
  lvl_1_ins.hide()
  btn_2 = createSprite(displayWidth / 2.5, displayHeight / 2.3)
  btn_2.addImage("fight", fight_btn)
  btn_2.scale = 1.5
  btn_2.visible = false
  level_1_sprite = createSprite(displayWidth / 5, displayHeight / 4)
  level_1_sprite.addImage("logo", lvl_1_logo)
  level_1_sprite.scale = 0.25
  level_1_sprite.visible = false
  level_2_sprite = createSprite(displayWidth / 2, displayHeight / 4)
  level_2_sprite.addImage("logo", lvl_2_logo_locked)
  level_2_sprite.scale = 0.27
  level_2_sprite.visible = false
  level_3_sprite = createSprite(displayWidth / 1.25, displayHeight / 4)
  level_3_sprite.addImage("logo", lvl_3_logo_locked)
  level_3_sprite.scale = 0.25
  level_3_sprite.visible = false
  level_4_sprite = createSprite(displayWidth * 7 / 20, displayHeight / 1.6)
  level_4_sprite.addImage("logo", lvl_4_logo_locked)
  level_4_sprite.scale = 0.25
  level_4_sprite.visible = false
  level_5_sprite = createSprite(displayWidth * 13 / 20, displayHeight / 1.6)
  level_5_sprite.addImage("logo", lvl_5_logo_locked)
  level_5_sprite.scale = 0.26
  level_5_sprite.visible = false
  state = "start"

  Level1_SpaceShip = createSprite(displayWidth / 2, 0.8 * displayHeight)
  Level1_SpaceShip.addImage("img", SpaceShip_img)
  Level1_SpaceShip.scale = 0.05
  Level1_SpaceShip.visible = false
  Level1_SpaceShip.setCollider("rectangle", 0, 0, 500, 500)
  fireballs_left = new Group()
  fireballs_right = new Group()
  Level1_Note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Level1_Note.addImage(Level1_Note_img)
  Level1_Note.scale = 1.1
  Level1_Note.visible = false
  text_ins = createElement("h1")
  text_ins.html("Phase 2")
  text_ins.style("color", "black")
  text_ins.style("font-size", "200px")
  text_ins.position(displayWidth / 4, (displayHeight / 5))
  text_ins.hide()

  planet = createSprite(displayWidth / 2.05, displayHeight / 2.25)
  planet.addImage(planet_img)
  planet.scale = 0.5
  planet.visible = false
  astroid = createSprite(displayWidth / 2.05, displayHeight / 3.5)
  astroid.addImage(astroid_img)
  astroid.scale = 0.1
  astroid.visible = false
  obs_1 = createSprite(displayWidth / 2.05, displayHeight / 4.5)
  obs_1.addImage(obs_1_img)
  obs_1.scale = 0.1
  obs_1.visible = false
  obs_2 = createSprite(displayWidth / 2.05, displayHeight / 7)
  obs_2.addImage(obs_2_img)
  obs_2.scale = 0.075
  obs_2.visible = false
  obs_3 = createSprite(displayWidth / 2.05, displayHeight / 15)
  obs_3.addImage(obs_3_img)
  obs_3.scale = 0.15
  obs_3.visible = false
  as_1 = createSprite(displayWidth / 2.05, displayHeight / 3.2)
  as_1.addImage(as_img)
  as_1.scale = 0.05
  as_1.visible = false
  as_2 = createSprite(displayWidth / 2.05, displayHeight / 3.5)
  as_2.addImage(as_img)
  as_2.scale = 0.05
  as_2.visible = false
  as_3 = createSprite(displayWidth / 2.05, displayHeight / 4)
  as_3.addImage(as_img)
  as_3.scale = 0.05
  as_3.visible = false
  as_4 = createSprite(displayWidth / 2.05, displayHeight / 4.5)
  as_4.addImage(as_img)
  as_4.scale = 0.05
  as_4.visible = false
  as_5 = createSprite(displayWidth / 2.05, displayHeight / 5)
  as_5.addImage(as_img)
  as_5.scale = 0.05
  as_5.visible = false
  Level2_SpaceShip = createSprite(displayWidth / 30, displayHeight / 2.3)
  Level2_SpaceShip.addImage(Level2_SpaceShip_img)
  Level2_SpaceShip.scale = 0.05
  Level2_SpaceShip.visible = false
  Level2_Note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Level2_Note.addImage(Level2_Note_img)
  Level2_Note.scale = 1.1
  Level2_Note.visible = false

  Level_3_Gate = createSprite(displayWidth / 1.2, displayHeight / 2.5)
  Level_3_Gate.addImage(gate_img)
  Level_3_Gate.scale = 1.15
  Level_3_Gate.visible = false
  Level_3_Player = createSprite(displayWidth / 15, displayHeight / 2.2)
  Level_3_Player.addImage(Level2_SpaceShip_img, "Normal")
  Level_3_Player.scale = 0.035
  Level_3_Player.visible = false
  game_over = createSprite(displayWidth / 2, displayHeight / 2)
  game_over.addImage("bg", game_over_img)
  game_over.visible = false
  you_win = createSprite(displayWidth / 2, displayHeight / 2.5)
  you_win.addImage("bg", you_win_img)
  you_win.visible = false
  you_win.scale = 2
  Boss_Ship = createSprite(displayWidth / 2, displayHeight / 2.5)
  Boss_Ship.addImage(eSpaceShip3_img)
  Boss_Ship.scale = 0.5
  Boss_Ship.visible = false
  BossLabel = createSprite(displayWidth / 2, displayHeight / 2.5)
  BossLabel.addImage(BossLabel_img)
  BossLabel.scale = 1.25
  BossLabel.visible = false
  Blast = createSprite(displayWidth / 2.5, displayHeight / 2)
  Blast.addImage(Blast_img)
  Blast.scale = 0.25
  Blast.visible = false
  edges = createEdgeSprites();
  for (let y = displayHeight / 15; y < (displayHeight - 151); y += displayHeight / 8) {
    eSpaceShips1.push(CreateSpaceShip(displayWidth / 3.2, y, eSpaceShip1_img, 0.3))
  }
  for (let y = displayHeight / 12; y < (displayHeight - 151); y += displayHeight / 8) {
    eSpaceShips2.push(CreateSpaceShip(displayWidth / 2, y, eSpaceShip2_img, 0.125))
  }
  for (let y = displayHeight / 18; y < (displayHeight - 151); y += displayHeight / 12) {
    eSpaceShips4.push(CreateSpaceShip(displayWidth / 1.65, y, eSpaceShip4_img, 0.15))
  }
  for (let y = displayHeight / 10; y < (displayHeight - 151); y += displayHeight / 8) {
    eSpaceShips5.push(CreateSpaceShip(displayWidth / 2.45, y, eSpaceShip5_img, 0.3))
  }
  for (let i = 1; i < 6; i++) {
    x = i * displayWidth / 20
    CreateHeart(x, displayHeight / 20, Heart_img, Level_3_PlayerHearts)
  }
  for (let i = 0; i < 10; i++) {
    x = (i * displayWidth / 20) + (displayWidth / 2)
    CreateHeart(x, displayHeight / 20, EnemyHeart_img, BossHearts)
  }
  ArrayVisibility(Level_3_PlayerHearts, false)
  ArrayVisibility(BossHearts, false)
  ArrayVisibility(eSpaceShips1, false)
  ArrayVisibility(eSpaceShips2, false)
  ArrayVisibility(eSpaceShips4, false)
  ArrayVisibility(eSpaceShips5, false)
  Level3_Note_1 = createSprite(displayWidth / 2, displayHeight / 2.5)
  Level3_Note_1.addImage(Level3_Note_img_1)
  Level3_Note_1.scale = 1.1
  Level3_Note_1.visible = false
  Level3_Note_2 = createSprite(displayWidth / 2, displayHeight / 2.5)
  Level3_Note_2.addImage(Level3_Note_img_2)
  Level3_Note_2.scale = 1.1
  Level3_Note_2.visible = false

  cols = floor(width / w / 2.25)
  rows = floor(height / w / 0.99)
  StartX = displayWidth / 3.5
  StartY = displayHeight / 100
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      var cell = new Cell(r, c)
      grid.push(cell)
    }
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i].walls[0].visible = false
    grid[i].walls[1].visible = false
    grid[i].walls[2].visible = false
    grid[i].walls[3].visible = false
  }
  current = grid[0];
  Timer = createSprite(displayWidth / 1.075, displayHeight / 2.5, 20, 480)
  Timer.shapeColor = rgb(0, 180, 0)
  Timer.visible = false
  Timer_Red = 0
  Timer_Green = 180
  posY = Timer.y
  test_length = 480
  PymParticles = createSprite(displayWidth / 3.85, displayHeight / 2.15)
  PymParticles.addImage(PymParticles_img)
  PymParticles.scale = 0.25
  PymParticles.visible = false
  Level_4_Gate = createSprite(displayWidth / 1.3, displayHeight / 1.375)
  Level_4_Gate.addImage(Level_4_Gate_img)
  Level_4_Gate.scale = 0.3
  Level_4_Gate.visible = false
  KeyHole1 = MakeKeyHole(displayWidth / 2, displayHeight / 2, 5)
  KeyHole2 = MakeKeyHole(displayWidth / 2, displayHeight / 2, 5)
  KeyHole3 = MakeKeyHole(displayWidth / 2, displayHeight / 2, 5)
  KeyHole4 = MakeKeyHole(displayWidth / 2, displayHeight / 2, 5)
  KeyHole5 = MakeKeyHole(displayWidth / 2, displayHeight / 2, 5)
  Key1 = MakeKey(76, key_1_img)
  Key2 = MakeKey(286, key_2_img)
  Key3 = MakeKey(190, key_3_img)
  Key4 = MakeKey(0, key_4_img)
  Final_Key = MakeKey(399, Final_key_img)
  Final_Key.scale = 0.2
  Load_Sprite = createSprite(displayWidth / 2, displayHeight / 2.5)
  Load_bg.frameDelay = 10
  Load_Sprite.addAnimation("Load_bg", Load_bg)
  Load_Sprite.scale = 1.85
  Load_Sprite.visible = false
  Level4_Note = createSprite(displayWidth / 2.05, displayHeight / 2.5)
  Level4_Note.addImage(Level4_Note_img)
  Level4_Note.scale = 1.25
  Level4_Note.visible = false
  Spiral_Level_4_Gate = createSprite(displayWidth / 2, displayHeight / 2)
  Spiral_Level_4_Gate.addImage(Spiral_bg)
  Spiral_Level_4_Gate.scale = 2
  Spiral_Level_4_Gate.visible = false
  Level_4_Gate_Half_1 = createSprite(1.09 * displayWidth / 3, displayHeight / 2.5)
  Level_4_Gate_Half_1.addImage(Level_4_Gate_Half_1_img)
  Level_4_Gate_Half_1.scale = 2
  Level_4_Gate_Half_1.visible = false
  Level_4_Gate_Half_2 = createSprite(1.931 * displayWidth / 3, displayHeight / 2.5)
  Level_4_Gate_Half_2.addImage(Level_4_Gate_Half_2_img)
  Level_4_Gate_Half_2.scale = 2
  Level_4_Gate_Half_2.visible = false
  Level_4_Player = createSprite(displayWidth / 30, displayHeight / 2.3)
  Level_4_Player.addImage(player_img)
  Level_4_Player.scale = 0.25
  Level_4_Player.visible = false
  setInterval(TimeIt, 1000);
  setInterval(ChangeColour, 666);

  Level_5_Player = createSprite(displayWidth / 7, displayHeight / 3)
  Level_5_Player.addImage(player_img)
  Level_5_Player.scale = 1.5
  Level_5_Player.visible = false
  Alien = createSprite(displayWidth / 1.25, displayHeight / 2.3)
  Alien.addImage(alien_img)
  Alien.scale = 0.75
  Alien.visible = false
  Level_5_Player_Defense_Fire = createSprite(displayWidth / 7, displayHeight / 1.5)
  Level_5_Player_Defense_Fire.addImage(fireball_img)
  Level_5_Player_Defense_Fire.scale = 0.075
  Level_5_Player_Defense_Fire.visible = false
  Level_5_Player_Defense_Water = createSprite(displayWidth / 5.5, displayHeight / 1.5)
  Level_5_Player_Defense_Water.addImage(waterball_img)
  Level_5_Player_Defense_Water.scale = 0.25
  Level_5_Player_Defense_Water.visible = false
  Level_5_Player_Defense_Seed = createSprite(displayWidth / 10, displayHeight / 1.5)
  Level_5_Player_Defense_Seed.addImage(seedball_img)
  Level_5_Player_Defense_Seed.scale = 0.15
  Level_5_Player_Defense_Seed.visible = false
  Level_5_Player_Attack_Fire = createSprite(displayWidth / 7, displayHeight / 1.325)
  Level_5_Player_Attack_Fire.addImage(fireball_img)
  Level_5_Player_Attack_Fire.scale = 0.075
  Level_5_Player_Attack_Fire.visible = false
  Level_5_Player_Attack_Water = createSprite(displayWidth / 5.5, displayHeight / 1.325)
  Level_5_Player_Attack_Water.addImage(waterball_img)
  Level_5_Player_Attack_Water.scale = 0.25
  Level_5_Player_Attack_Water.visible = false
  Level_5_Player_Attack_Seed = createSprite(displayWidth / 10, displayHeight / 1.325)
  Level_5_Player_Attack_Seed.addImage(seedball_img)
  Level_5_Player_Attack_Seed.scale = 0.15
  Level_5_Player_Attack_Seed.visible = false
  Gem = createSprite(displayWidth / 1.06, displayHeight / 2.3)
  Gem.addImage("bg", gem_img)
  Gem.scale = 0.4
  Gem.visible = false
  for (let i = 1; i < 6; i++) {
    x = i * displayWidth / 20
    CreateHeart(x, displayHeight / 20, Heart_img, Level_5_Player_Hearts)
  }
  for (let i = 0; i < 5; i++) {
    x = (i * displayWidth / 20) + (displayWidth / 1.4)
    CreateHeart(x, displayHeight / 20, Enemy_Heart_img, Enemy_Hearts)
  }
  ArrayVisibility(Level_5_Player_Hearts, false)
  ArrayVisibility(Enemy_Hearts, false)
  Level_5_Note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Level_5_Note.addImage(Level_5_Note_img)
  Level_5_Note.scale = 1.1
  Level_5_Note.visible = false

  game_over = createSprite(displayWidth / 2, displayHeight / 2)
  game_over.addImage("bg", game_over_img)
  game_over.visible = false
  you_win = createSprite(displayWidth / 2, displayHeight / 2.5)
  you_win.addImage("bg", you_win_img)
  you_win.scale = 2
  you_win.visible = false
  next_level_btn = createSprite(displayWidth / 1.125, displayHeight / 1.35)
  next_level_btn.addImage(next_level_btn_img)
  next_level_btn.scale = 0.8
  next_level_btn.visible = false
  Post_Win_Note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Post_Win_Note.addImage(Post_Win_Note_img)
  Post_Win_Note.scale = 1.1
  Post_Win_Note.visible = false
  Riddle_btn = createSprite(displayWidth / 1.525, displayHeight / 1.35)
  Riddle_btn.addImage(Riddle_btn_img)
  Riddle_btn.scale = 0.75
  Riddle_btn.visible = false
  Riddle_Note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Riddle_Note.addImage(Riddle_Note_img)
  Riddle_Note.scale = 1.1
  Riddle_Note.visible = false
  ok_btn = createSprite(displayWidth / 1.125, displayHeight / 1.35)
  ok_btn.addImage(ok_btn_img)
  ok_btn.scale = 0.75
  ok_btn.visible = false
  Complete_win_note = createSprite(displayWidth / 2, displayHeight / 2.5)
  Complete_win_note.addImage(Complete_win_note_img)
  Complete_win_note.scale = 1.1
  Complete_win_note.visible = false
}

function draw() {
  background(bg)
  image(player_img, displayWidth / 200, displayHeight / 12, displayWidth / 4, displayHeight / 2.5)
  if (state === "start" && mousePressedOver(button)) {
    state = "start_1"
  }
  if (state == "start_1") {
    background(bg1_st2)
    image(player_img, displayWidth / 200, displayHeight / 12, displayWidth / 4, displayHeight / 2.5)
    button.visible = false
    if (mousePressedOver(btn_2)) {
      state = "Level_Arcade"
    }
    btn_2.visible = true
  }
  if (state === "Level_Arcade") {
    background(bg2)
    btn_2.visible = false
    level_1_sprite.visible = true
    level_2_sprite.visible = true
    level_3_sprite.visible = true
    level_4_sprite.visible = true
    level_5_sprite.visible = true
    next_level_btn.visible = false
    you_win.visible = false
    if (won_State === "none") {
      if (mousePressedOver(level_1_sprite)) {
        state = "Level1"
        Level1_gameState = "instruction"
        frameCount = 0
      }
    }
    if (won_State === "1") {
      level_2_sprite.addImage("logo_unlock", lvl_2_logo)
      level_2_sprite.changeImage("logo_unlock")
      if (mousePressedOver(level_2_sprite)) {
        Level2_gameState = "instruction"
        state = "Level2"
        frameCount = 0
      }
      Level1_SpaceShip.visible = false
    }
    if (won_State === "2") {
      level_3_sprite.addImage("logo_unlock", lvl_3_logo)
      level_3_sprite.changeImage("logo_unlock")
      if (mousePressedOver(level_3_sprite)) {
        state = "Level3"
        Level3_gameState = "instruction_1"
        frameCount = 0
        SetArrayVelocity(eSpaceShips1, 2, 0)
        SetArrayVelocity(eSpaceShips2, 4, 0)
        SetArrayVelocity(eSpaceShips4, 5, 0)
        SetArrayVelocity(eSpaceShips5, 3, 0)
      }
    }
    if (won_State === "3") {
      level_4_sprite.addImage("logo_unlock", lvl_4_logo)
      level_4_sprite.changeImage("logo_unlock")
      if (mousePressedOver(level_4_sprite)) {
        Level4_gameState = "loading"
        state = "Level4"
        for (let i = 0; i < grid.length; i++) {
          grid[i].walls[0].visible = true
          grid[i].walls[1].visible = true
          grid[i].walls[2].visible = true
          grid[i].walls[3].visible = true
        }
        Level_4_Player.visible = true
        Load_Sprite.visible = true
        PymParticles.visible = true
        Level_4_Gate.visible = true
        Timer.visible = true
        Level4_Note.visible = true
        ok_btn.visible = true
      }
    }
    if (won_State === "4") {
      level_5_sprite.addImage("logo_unlock", lvl_5_logo)
      level_5_sprite.changeImage("logo_unlock")
      if (mousePressedOver(level_5_sprite)) {
        state = "Level5"
        Level5_gameState = "instructions"
        Level_5_Note.visible = true
        ok_btn.visible = true
        Level_5_Player_Attack_Fire.visible = true
        Level_5_Player_Attack_Water.visible = true
        Level_5_Player_Attack_Seed.visible = true
        Level_5_Player_Defense_Fire.visible = true
        Level_5_Player_Defense_Water.visible = true
        Level_5_Player_Defense_Seed.visible = true
        Alien.visible = true
        Level_5_Player.visible = true
        ArrayVisibility(Level_5_Player_Hearts, true)
        ArrayVisibility(Enemy_Hearts, true)
        Gem.visible = true
      }
      if (mousePressedOver(level_2_sprite)) {
        Level2_gameState = "instruction"
        state = "Level2"
        frameCount = 0
      }
    }
  }
  if (state === "Level1") {
    Level1_SpaceShip.visible = true
    level_1_sprite.visible = false
    level_2_sprite.visible = false
    level_3_sprite.visible = false
    level_4_sprite.visible = false
    level_5_sprite.visible = false
    background(bg_lv1)
    if (Level1_gameState === "instruction") {
      Level1_Note.visible = true
      ok_btn.visible = true
      if (mousePressedOver(ok_btn)) {
        Level1_gameState = "play"
        Level1_Note.visible = false
        ok_btn.visible = false
      }
    }
    if (frameCount > 50) {
      if (keyDown(UP_ARROW)) {
        Level1_SpaceShip.y = Level1_SpaceShip.y - displayHeight / 300
      }
      else if (keyDown(DOWN_ARROW)) {
        Level1_SpaceShip.y = Level1_SpaceShip.y + displayHeight / 300
      }
    }
    if (fireballs_right.isTouching(Level1_SpaceShip) || fireballs_left.isTouching(Level1_SpaceShip)) {
      Level1_gameState = "over"
      lvl_1_ins.hide()
      game_over.scale = 1
      game_over.visible = true
      fireballs_right.destroyEach()
      fireballs_left.destroyEach()
    }

    if (Level1_SpaceShip.y < 0 && Level1_gameState == "play") {
      if (Level1_setTimeOut_Allowance_1 === true) {
        setTimeout(function () {
          text_ins.show()
          fireballs_right.destroyEach()
          fireballs_left.destroyEach()
        }, 2000)
        Level1_setTimeOut_Allowance_1 = false
      }
      if (Level1_setTimeOut_Allowance_2 === true) {
        setTimeout(function () {
          text_ins.hide()
          Level1_SpaceShip.x = displayWidth / 2
          Level1_SpaceShip.y = 0.8 * displayHeight
          fireballs_right.destroyEach()
          fireballs_left.destroyEach()
          Level1_gameState = "P2"
        }, 4000)
        Level1_setTimeOut_Allowance_2 = false
      }
    }

    if (Level1_SpaceShip.y < 0 && Level1_gameState == "P2") {
      lvl_1_ins.hide()
      Level1_gameState = "won"
      Level1_SpaceShip.visible = false
      won_State = "1"
      you_win.scale = 2
      you_win.visible = true
      next_level_btn.visible = true
      fireballs_right.destroyEach()
      fireballs_left.destroyEach()
    }

    if (Level1_gameState == "play") {
      CreateFireball_left(6.5)
      CreateFireball_right(-6.5)
      if (Level1_SpaceShip.y < displayHeight / 2 && Level1_SpaceShip.y > displayHeight / 3) {
        fireballs_left.setVelocityXEach(7.5)
        fireballs_right.setVelocityXEach(-7.5)
      }
      else if (Level1_SpaceShip.y < displayHeight / 3 && Level1_SpaceShip.y > displayHeight / 4) {
        fireballs_left.setVelocityXEach(8.5)
        fireballs_right.setVelocityXEach(-8.5)
      }
      else if (Level1_SpaceShip.y < displayHeight / 4) {
        fireballs_left.setVelocityXEach(10.5)
        fireballs_right.setVelocityXEach(-10.5)
      }
      lvl_1_ins.show()
    }
    if (Level1_gameState == "P2") {
      lvl_1_ins.show()
      CreateFireball_left(8.5)
      CreateFireball_right(-8.5)
      if (Level1_SpaceShip.y < displayHeight / 2 && Level1_SpaceShip.y > displayHeight / 3) {
        fireballs_left.setVelocityXEach(9.5)
        fireballs_right.setVelocityXEach(-9.5)
      }
      else if (Level1_SpaceShip.y < displayHeight / 3 && Level1_SpaceShip.y > displayHeight / 4) {
        fireballs_left.setVelocityXEach(10.5)
        fireballs_right.setVelocityXEach(-10.5)
      }
      else if (Level1_SpaceShip.y < displayHeight / 4) {
        fireballs_left.setVelocityXEach(12.5)
        fireballs_right.setVelocityXEach(-12.5)
      }
    }
    if (Level1_gameState === "won") {
      if (mousePressedOver(next_level_btn)) {
        state = "Level_Arcade"
      }
    }
  }
  if (state === "Level2") {
    background(lvl2_bg)
    if (Level2_gameState === "instruction") {
      Level2_Note.visible = true
      ok_btn.visible = true
      if (mousePressedOver(ok_btn)) {
        Level2_gameState = "play"
        Level2_Note.visible = false
        ok_btn.visible = false
      }
    }
    if (Level2_gameState === "play") {
      level_5_sprite.visible = false
      level_4_sprite.visible = false
      level_3_sprite.visible = false
      level_2_sprite.visible = false
      level_1_sprite.visible = false
      obs_1.visible = true
      obs_2.visible = true
      obs_3.visible = true
      astroid.visible = true
      as_1.visible = true
      as_2.visible = true
      as_3.visible = true
      as_4.visible = true
      as_5.visible = true
      planet.visible = true
      Level2_SpaceShip.visible = true
      astroid.setSpeed(8, astroid.getDirection() + 3)
      obs_1.setSpeed(10, obs_1.getDirection() + 2.6)
      obs_2.setSpeed(12, obs_2.getDirection() + 2.15)
      obs_3.setSpeed(16, obs_3.getDirection() + 2.45)
      as_1.setSpeed(14, as_1.getDirection() + 6)
      as_2.setSpeed(12, as_2.getDirection() + 5)
      as_3.setSpeed(9, as_3.getDirection() + 3)
      as_4.setSpeed(6, as_4.getDirection() + 2)
      as_5.setSpeed(4.5, as_5.getDirection() + 1.25)

      if (keyDown(UP_ARROW)) {
        Level2_SpaceShip.y = Level2_SpaceShip.y - displayHeight / 150
      }
      if (keyDown(DOWN_ARROW)) {
        Level2_SpaceShip.y = Level2_SpaceShip.y + displayHeight / 150
      }
      if (keyDown(LEFT_ARROW)) {
        Level2_SpaceShip.x = Level2_SpaceShip.x - displayWidth / 200
      }
      if (keyDown(RIGHT_ARROW)) {
        Level2_SpaceShip.x = Level2_SpaceShip.x + displayWidth / 200
      }
      if (Post_Win === false) {
        if (obs_1.isTouching(Level2_SpaceShip) || obs_2.isTouching(Level2_SpaceShip) || obs_3.isTouching(Level2_SpaceShip) || as_1.isTouching(Level2_SpaceShip) || as_2.isTouching(Level2_SpaceShip) || as_3.isTouching(Level2_SpaceShip) || as_4.isTouching(Level2_SpaceShip) || as_5.isTouching(Level2_SpaceShip) || astroid.isTouching(Level2_SpaceShip)) {
          Level2_gameState = "over"
          game_over.visible = true
          stop_all()
        }
      }
      if(Post_Win===true){
        if (obs_2.isTouching(Level2_SpaceShip) || obs_3.isTouching(Level2_SpaceShip) || as_1.isTouching(Level2_SpaceShip) || as_2.isTouching(Level2_SpaceShip) || as_3.isTouching(Level2_SpaceShip) || as_4.isTouching(Level2_SpaceShip) || as_5.isTouching(Level2_SpaceShip) || astroid.isTouching(Level2_SpaceShip)) {
          Level2_gameState = "over"
          game_over.visible = true
          stop_all()
        }
        if(obs_1.isTouching(Level2_SpaceShip)){
          state="complete_win"
          stop_all()
        }
      }
      if (Level2_SpaceShip.isTouching(planet)) {
        Level2_gameState = "won"
        won_State = "2"
        you_win.visible = true
        next_level_btn.visible = true
        stop_all()
      }
    }
    if (Level2_gameState === "won") {
      if (mousePressedOver(next_level_btn)) {
        state = "Level_Arcade"
      }
    }
  }
  if (state === "Level3") {
    background(lvl3_bg)
    if (Level3_gameState === "instruction_1") {
      Level3_Note_1.visible = true
      ok_btn.visible = true
      if (mousePressedOver(ok_btn)) {
        Shoot_Allowance_Time = frameCount
        Level3_gameState = "play"
        Level3_Note_1.visible = false
        ok_btn.visible = false
      }
    }
    if (Level3_gameState === "play") {
      if (Phase === 1) {
        Level_3_Player.visible = true
        Level_3_Gate.visible = true
        level_1_sprite.visible = false
        level_2_sprite.visible = false
        level_3_sprite.visible = false
        level_4_sprite.visible = false
        level_5_sprite.visible = false

        ArrayVisibility(eSpaceShips1, true)
        ArrayVisibility(eSpaceShips2, true)
        ArrayVisibility(eSpaceShips4, true)
        ArrayVisibility(eSpaceShips5, true)

        if (keyDown(UP_ARROW)) {
          Level_3_Player.y = Level_3_Player.y - displayHeight / 200
        }
        if (keyDown(DOWN_ARROW)) {
          Level_3_Player.y = Level_3_Player.y + displayHeight / 200
        }
        if (keyWentDown("space")) {
          if (frameCount > Shoot_Time + 25) {
            CreateFireball(6, 0)
            Shoot_Time = frameCount
          }
        }

        for (let i = 0; i < EnemyFireballs.length; i++) {
          if (EnemyFireballs[i].isTouching(Level_3_Player)) {
            Level3_gameState = "over"
          }
        }

        if (eSpaceShips1.length === 0) {
          eSpaceShips5_frequency = 50
          eSpaceShips2_frequency = 196
          eSpaceShips4_frequency = 267
        }
        if (eSpaceShips5.length === 0) {
          eSpaceShips2_frequency = 50
          eSpaceShips4_frequency = 196
        }
        if (eSpaceShips2.length === 0) {
          eSpaceShips4_frequency = 50
        }

        if (eSpaceShips1.length === 0 && eSpaceShips2.length === 0 && eSpaceShips4.length === 0 && eSpaceShips5.length === 0) {
          Level3_gameState = "instruction_2"
        }

        CheckFireballCollision(eSpaceShips1)
        CheckFireballCollision(eSpaceShips2)
        CheckFireballCollision(eSpaceShips4)
        CheckFireballCollision(eSpaceShips5)

        eSpaceShips_movement(eSpaceShips1, 2)
        eSpaceShips_movement(eSpaceShips2, 4)
        eSpaceShips_movement(eSpaceShips4, 5)
        eSpaceShips_movement(eSpaceShips5, 3)

        FireESpaceShips(eSpaceShips1, eSpaceShips1_frequency, 2, 215)
        FireESpaceShips(eSpaceShips2, eSpaceShips2_frequency, 4, 175)
        FireESpaceShips(eSpaceShips4, eSpaceShips4_frequency, 5, 165)
        FireESpaceShips(eSpaceShips5, eSpaceShips5_frequency, 3, 185)
        Level_3_Player.collide(edges)
      }
      if (Phase === 2) {
        if (Level3_setTimeOut_Allowance === true) {
          setTimeout(function () {
            BossLabel.visible = false
            ArrayVisibility(Level_3_PlayerHearts, true)
            ArrayVisibility(BossHearts, true)
            Boss_Ship.visible = true
            Boss_Ship.velocityX = Math.floor(random(4, 12))
            Boss_Ship.velocityY = Math.floor(random(4, 12))
            Phase = 2
          }, 4000)
          Level3_setTimeOut_Allowance = false
        }
        if (keyDown(UP_ARROW)) {
          Level_3_Player.y = Level_3_Player.y - displayHeight / 300
        }
        if (keyDown(DOWN_ARROW)) {
          Level_3_Player.y = Level_3_Player.y + displayHeight / 300
        }
        if (keyDown(LEFT_ARROW)) {
          Level_3_Player.x = Level_3_Player.x - displayWidth / 400
        }
        if (keyDown(RIGHT_ARROW)) {
          Level_3_Player.x = Level_3_Player.x + displayWidth / 400
        }

        if (keyWentDown("space")) {
          if (Level_3_PlayerPosition == "normal") {
            if (frameCount > Shoot_Time + 35) {
              CreateFireball(4, 0)
              Shoot_Time = frameCount
            }
          }
          if (Level_3_PlayerPosition == "inverted") {
            if (frameCount > Shoot_Time + 35) {
              CreateFireball(-4, 0)
              Shoot_Time = frameCount
            }
          }
          if (Level_3_PlayerPosition == "top") {
            if (frameCount > Shoot_Time + 35) {
              CreateFireball(0, 4)
              Shoot_Time = frameCount
            }
          }
          if (Level_3_PlayerPosition == "bottom") {
            if (frameCount > Shoot_Time + 35) {
              CreateFireball(0, -4)
              Shoot_Time = frameCount
            }
          }
        }

        if (Level_3_Player.x > Boss_Ship.x + displayWidth / 10) {
          Level_3_Player.addImage(SpaceShip_img_inverted, "Inverted")
          Level_3_Player.changeImage("Inverted")
          Level_3_PlayerPosition = "inverted"
        }
        if (Level_3_Player.x < Boss_Ship.x - displayWidth / 10) {
          Level_3_Player.addImage(Level2_SpaceShip_img, "Normal")
          Level_3_Player.changeImage("Normal")
          Level_3_PlayerPosition = "normal"
        }
        if (Level_3_Player.x < Boss_Ship.x + displayWidth / 10 && Level_3_Player.x > Boss_Ship.x - displayWidth / 10) {
          if (Level_3_Player.y < Boss_Ship.y) {
            Level_3_Player.addImage(SpaceShip_img_Top, "Top")
            Level_3_Player.changeImage("Top")
            Level_3_PlayerPosition = "top"
          }
          if (Level_3_Player.y > Boss_Ship.y) {
            Level_3_Player.addImage(SpaceShip_img_Bottom, "Bottom")
            Level_3_Player.changeImage("Bottom")
            Level_3_PlayerPosition = "bottom"
          }
        }

        Level_3_PlayerLives = Level_3_PlayerHearts.length
        BossLives = BossHearts.length

        if (Level_3_PlayerHearts[Level_3_PlayerLives]) {
          Level_3_PlayerHearts[Level_3_PlayerLives].visible = false
        }
        if (BossHearts[BossLives]) {
          BossHearts[BossLives].visible = false
        }

        for (let i = 0; i < Fireballs.length; i++) {
          if (Fireballs[i].isTouching(Boss_Ship)) {
            Fireballs[i].remove()
            Fireballs.splice(i, 1)
            BossHearts[BossLives - 1].remove()
            BossHearts.splice(BossLives - 1, 1)
            break
          }
        }

        for (let i = 0; i < EnemyFireballs.length; i++) {
          if (EnemyFireballs[i].isTouching(Level_3_Player) || Boss_Ship.isTouching(Level_3_Player)) {
            EnemyFireballs[i].remove()
            EnemyFireballs.splice(i, 1)
            Level_3_PlayerHearts[Level_3_PlayerLives - 1].remove()
            Level_3_PlayerHearts.splice(Level_3_PlayerLives - 1, 1)
            break
          }
        }
        if (Level_3_PlayerLives === 0) {
          Level3_gameState = "over"
        }
        if (BossLives === 0) {
          SetArrayVelocity(Fireballs, 0, 0)
          SetArrayVelocity(EnemyFireballs, 0, 0)
          Boss_Ship.velocityX = 0
          Boss_Ship.velocityY = 0
          Blast.x = Boss_Ship.x
          Blast.y = Boss_Ship.y
          Blast.visible = true
          ChangePosition = true
          Level3_gameState = "won"
        }


        if (frameCount % 35 === 0) {
          CreateEnemyFireball(Boss_Ship.x, Boss_Ship.y, Math.floor(random(-7, 8)), Math.floor(random(-7, 8)), -1)
        }
        for (let i = 0; i < EnemyFireballs.length; i++) {
          EnemyFireballs[i].bounceOff(edges)
        }
        Boss_Ship.bounceOff(Level_3_Player)
        Level_3_Player.collide(edges)
        Boss_Ship.bounceOff(edges)
      }
    }
    if (Level3_gameState === "instruction_2") {
      Level3_Note_2.visible = true
      ok_btn.visible = true
      DestroyArray(Fireballs)
      DestroyArray(EnemyFireballs)
      if (mousePressedOver(ok_btn)) {
        Level3_gameState = "play"
        BossLabel.visible = true
        Level3_Note_2.visible = false
        ok_btn.visible = false
        Phase = 2
        DestroyArray(Fireballs)
        DestroyArray(EnemyFireballs)
      }
    }
    if (Level3_gameState === "over") {
      Level_3_Player.visible = false
      DestroyArray(eSpaceShips1)
      DestroyArray(eSpaceShips2)
      DestroyArray(eSpaceShips4)
      DestroyArray(eSpaceShips5)
      DestroyArray(Fireballs)
      DestroyArray(EnemyFireballs)
      Boss_Ship.velocityX = 0
      Boss_Ship.velocityY = 0
      Boss_Ship.visible = false
      ArrayVisibility(BossHearts, false)
      game_over.visible = true
    }
    if (Level3_gameState === "won") {
      setTimeout(function () {
        if (Timeout1_allowance === true) {
          DestroyArray(Fireballs)
          DestroyArray(EnemyFireballs)
          Blast.scale = 0.5
        }
      }, 2500)
      setTimeout(function () {
        if (Timeout2_allowance === true) {
          Blast.scale = 1
          Timeout1_allowance = false
        }
      }, 5000)
      setTimeout(function () {
        if (Timeout3_allowance === true) {
          Timeout2_allowance = false
          Blast.scale = 2
        }
      }, 10000);
      setTimeout(function () {
        Blast.visible = false
        Boss_Ship.visible = false
        Timeout3_allowance = false
      }, 12000);
      setTimeout(function () {
        Level_3_Player.changeImage("Normal")
        if (ChangePosition === true) {
          Level_3_Player.x = displayWidth / 2
          Level_3_Player.y = displayHeight / 2.5
          Level_3_Player.velocityX = 3
          Level_3_Player.scale = 0.1
          ChangePosition = false
        }
      }, 15000);
      DestroyArray(eSpaceShips1)
      DestroyArray(eSpaceShips2)
      DestroyArray(eSpaceShips4)
      DestroyArray(eSpaceShips5)
      Boss_Ship.velocityX = 0
      Boss_Ship.velocityY = 0
      DestroyArray(Fireballs)
      DestroyArray(EnemyFireballs)
      DestroyArray(Level_3_PlayerHearts)
      if (Level_3_Player.x > Level_3_Gate.x) {
        you_win.visible = true
        Level_3_Player.velocityX = 0
        next_level_btn.visible = true
        won_State = "3"
      }
      if (mousePressedOver(next_level_btn)) {
        state = "Level_Arcade"
        Level_3_Player.visible = false
        Level_3_Gate.visible = false
      }
    }
  }
  if (state === "Level4") {
    background(lvl4_bg)
    if (Level4_gameState === "loading") {
      level_1_sprite.visible = false
      level_2_sprite.visible = false
      level_3_sprite.visible = false
      level_4_sprite.visible = false
      level_5_sprite.visible = false

      if (mousePressedOver(ok_btn)) {
        Level4_Note.visible = false
        ok_btn.visible = false
        Instructed = true
      }
      current.visited = true;

      // STEP 1
      var next = current.checkNeighbors();
      if (next != null) {
        next.visited = true;

        // STEP 2
        stack.push(current);

        // STEP 3
        removeWalls(current, next);

        // STEP 4
        current = next;
      } else if (stack.length > 0) {
        current = stack.pop(stack.length - 1);
      }
      if (call) {
        setTimeout(() => {
          Load_Sprite.visible = false
          Loaded = true
        }, 30000);
        call = false;
      }
      if (Loaded === true && Instructed === true) {
        Level4_gameState = "pym"
      }
    }
    if (Level4_gameState === "pym") {
      for (let i = 0; i < grid.length; i++) {
        grid[i].walls[0].visible = true
        grid[i].walls[1].visible = true
        grid[i].walls[2].visible = true
        grid[i].walls[3].visible = true
      }
      grid[0].walls[1].remove()

      Level_4_CreateEnemyFireball(PymParticles.x, PymParticles.y, Math.floor(random(3, 8)), Math.floor(random(-9, 8)), 100, 15)

      if (keyDown(UP_ARROW)) {
        Level_4_Player.y = Level_4_Player.y - displayHeight / 150
      }
      if (keyDown(DOWN_ARROW)) {
        Level_4_Player.y = Level_4_Player.y + displayHeight / 150
      }
      if (keyDown(LEFT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x - displayWidth / 200
      }
      if (keyDown(RIGHT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x + displayWidth / 200
      }
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < 4; j++) {
          Level_4_Player.collide(grid[i].walls[j])
        }
      }
      for (let i = 0; i < EnemyFireballs.length; i++) {
        if (EnemyFireballs[i].isTouching(Level_4_Player)) {
          EnemyFireballs[i].remove()
          EnemyFireballs.splice(i, 1)
          DestroyArray(EnemyFireballs)
          Level4_gameState = "over"
          break
        }
      }
      if (Level_4_Player.isTouching(PymParticles)) {
        Level_4_Player.scale = 0.1
        DestroyArray(EnemyFireballs)
        Level4_gameState = "maze"
      }
    }
    if (Level4_gameState === "over") {
      game_over.visible = true
      for (let i = 0; i < grid.length; i++) {
        grid[i].walls[0].visible = false
        grid[i].walls[1].visible = false
        grid[i].walls[2].visible = false
        grid[i].walls[3].visible = false
      }
    }
    if (Level4_gameState === "maze") {
      PymParticles.visible = false

      if (Level_4_Player.x > grid[0].x) {
        StartTimer = true
      }

      if (test_length > 1 && posY > 0) {
        Timer.height = test_length
        Timer.y = posY
      }
      else {
        Level4_gameState = "over"
      }

      if (keyDown(UP_ARROW)) {
        Level_4_Player.y = Level_4_Player.y - displayHeight / 150
      }
      if (keyDown(DOWN_ARROW)) {
        Level_4_Player.y = Level_4_Player.y + displayHeight / 150
      }
      if (keyDown(LEFT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x - displayWidth / 200
      }
      if (keyDown(RIGHT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x + displayWidth / 200
      }
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < 4; j++) {
          Level_4_Player.collide(grid[i].walls[j])
        }
      }
      Maze_SubState_Handler("key1", "key2", Key1)
      Maze_SubState_Handler("key2", "key3", Key2)
      Maze_SubState_Handler("key3", "key4", Key3)
      Maze_SubState_Handler("key4", "key5", Key4)

      if (Maze_SubState === "key5") {
        Final_Key.visible = true
        if ((Level_4_Player.x > grid[399].x && Level_4_Player.x < grid[399].x + w) && (Level_4_Player.y > grid[399].y && Level_4_Player.y < grid[399].y + w)) {
          grid[grid.length - 1].walls[3].remove()
          Level4_gameState = "final"
          Final_Key.visible = false
        }
      }
    }
    if (Level4_gameState === "final") {
      if (keyDown(UP_ARROW)) {
        Level_4_Player.y = Level_4_Player.y - displayHeight / 150
      }
      if (keyDown(DOWN_ARROW)) {
        Level_4_Player.y = Level_4_Player.y + displayHeight / 150
      }
      if (keyDown(LEFT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x - displayWidth / 200
      }
      if (keyDown(RIGHT_ARROW)) {
        Level_4_Player.x = Level_4_Player.x + displayWidth / 200
      }
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < 4; j++) {
          Level_4_Player.collide(grid[i].walls[j])
        }
      }
      if (Level_4_Player.x > Level_4_Gate.x) {
        Level_4_Gate.x = displayWidth / 2
        Level_4_Gate.y = displayHeight / 2.5
        Level_4_Gate.scale = 2
        KeyHole1.x = Level_4_Gate.x + displayWidth / 80
        KeyHole2.x = Level_4_Gate.x + displayWidth / 80
        KeyHole3.x = Level_4_Gate.x + displayWidth / 80
        KeyHole4.x = Level_4_Gate.x + displayWidth / 80
        KeyHole5.x = Level_4_Gate.x + displayWidth / 80
        KeyHole1.y = displayHeight / 1.6 - (displayHeight / 7.5)
        KeyHole2.y = displayHeight / 1.6 - (displayHeight / 15)
        KeyHole3.y = displayHeight / 1.6
        KeyHole4.y = displayHeight / 1.6 + (displayHeight / 15)
        KeyHole5.y = displayHeight / 1.6 + (displayHeight / 7.5)
        KeyHole1.visible = true
        KeyHole2.visible = true
        KeyHole3.visible = true
        KeyHole4.visible = true
        KeyHole5.visible = true
        Key1.y = KeyHole1.y
        Key2.y = KeyHole2.y
        Key3.y = KeyHole3.y
        Key4.y = KeyHole4.y
        Final_Key.y = KeyHole5.y
        Key1.x = KeyHole1.x - displayWidth / 10
        Key2.x = KeyHole2.x - displayWidth / 10
        Key3.x = KeyHole3.x - displayWidth / 10
        Key4.x = KeyHole4.x - displayWidth / 10
        Final_Key.x = KeyHole5.x - displayWidth / 10
        Key1.visible = true
        Key2.visible = true
        Key3.visible = true
        Key4.visible = true
        Final_Key.visible = true
        Key1.addImage("Won", key_1_won_img)
        Key1.changeImage("Won")
        Key2.addImage("Won", key_2_won_img)
        Key2.changeImage("Won")
        Key3.addImage("Won", key_3_won_img)
        Key3.changeImage("Won")
        Key4.addImage("Won", key_4_won_img)
        Key4.changeImage("Won")
        Final_Key.addImage("Won", Final_key_won_img)
        Final_Key.changeImage("Won")
        Level4_gameState = "won"
      }
    }
    if (Level4_gameState === "won") {
      for (let i = 0; i < grid.length; i++) {
        grid[i].walls[0].visible = false
        grid[i].walls[1].visible = false
        grid[i].walls[2].visible = false
        grid[i].walls[3].visible = false
      }
      if (Key1.x > KeyHole1.x - Key1.width / 2) {
        Key1.velocityX = 0
      }
      else {
        Key1.velocityX = 1
      }
      if (Key1.x > KeyHole1.x - Key1.width / 2 && Key2.x < KeyHole2.x - Key2.width / 2) {
        Key2.velocityX = 1
      }
      else {
        Key2.velocityX = 0
      }
      if (Key2.x >= KeyHole2.x - Key2.width / 2 && Key3.x < KeyHole3.x - Key3.width / 2) {
        Key3.velocityX = 1
      }
      else {
        Key3.velocityX = 0
      }
      if (Key3.x > KeyHole3.x - Key3.width / 2 && Key4.x < KeyHole4.x - Key4.width / 2) {
        Key4.velocityX = 1
      }
      else {
        Key4.velocityX = 0
      }
      if (Key4.x > KeyHole4.x - Key4.width / 2 && Final_Key.x < KeyHole5.x - Final_Key.width / 2) {
        Final_Key.velocityX = 1
      }
      else {
        Final_Key.velocityX = 0
      }
      if (Final_Key.x > KeyHole5.x - Final_Key.width / 2) {
        Level_4_Gate.visible = false
        Key1.visible = false
        Key2.visible = false
        Key3.visible = false
        Key4.visible = false
        Final_Key.visible = false
        KeyHole1.visible = false
        KeyHole2.visible = false
        KeyHole3.visible = false
        KeyHole4.visible = false
        KeyHole5.visible = false
        Level_4_Gate_Half_1.visible = true
        Level_4_Gate_Half_2.visible = true
        Spiral_Level_4_Gate.visible = true
        if (Level_4_Gate_Half_1.x < displayWidth * 0.9 / 3) {
          Level_4_Gate_Half_1.velocityX = 0
          if (ChangePosition === true) {
            Level_4_Player.x = Level_4_Gate_Half_1.x
            Level_4_Player.y = Spiral_Level_4_Gate.y
            Level_4_Player.scale = 0.5
            Level_4_Player.velocityX = 1
            ChangePosition = false
          }
          if (Level_4_Player.x > Spiral_Level_4_Gate.x) {
            Level_4_Player.velocityX = 0
            you_win.visible = true
            next_level_btn.visible = true
          }
          else {
            Level_4_Player.velocityX = 2
          }
        }
        else {
          Level_4_Gate_Half_1.velocityX = -1
        }
        if (Level_4_Gate_Half_2.x > displayWidth * 2.1 / 3) {
          Level_4_Gate_Half_2.velocityX = 0
        }
        else {
          Level_4_Gate_Half_2.velocityX = 1
        }
      }
      if (mousePressedOver(next_level_btn)) {
        won_State = "4"
        state = "Level_Arcade"
        Level_4_Player.visible = false
        Level_4_Gate_Half_1.visible = false
        Level_4_Gate_Half_2.visible = false
        Spiral_Level_4_Gate.visible = false
        Timer.visible = false
        for (let i = 0; i < grid.length; i++) {
          grid[i].walls[0].visible = false
          grid[i].walls[1].visible = false
          grid[i].walls[2].visible = false
          grid[i].walls[3].visible = false
        }
      }
    }

    Level_4_Player.collide(edges)
  }
  if (state === "Level5") {
    background(lvl5_bg)
    if (Level5_gameState === "instructions") {
      level_1_sprite.visible = false
      level_2_sprite.visible = false
      level_3_sprite.visible = false
      level_4_sprite.visible = false
      level_5_sprite.visible = false
      if (mousePressedOver(ok_btn)) {
        Level_5_Note.visible = false
        ok_btn.visible = false
        Level5_gameState = "play"
      }
    }
    if (Level5_gameState === "play") {
      Level_5_Player_Lives = Level_5_Player_Hearts.length
      Enemy_Lives = Enemy_Hearts.length
      if (mousePressedOver(Level_5_Player_Attack_Fire) && frameCount > Attack_time + 50) {
        Attack_time = frameCount
        Make_Ball("attack", "fire", "player")
      }
      if (mousePressedOver(Level_5_Player_Attack_Water) && frameCount > Attack_time + 50) {
        Attack_time = frameCount
        Make_Ball("attack", "water", "player")
      }
      if (mousePressedOver(Level_5_Player_Attack_Seed) && frameCount > Attack_time + 50) {
        Attack_time = frameCount
        Make_Ball("attack", "seed", "player")
      }

      if (mousePressedOver(Level_5_Player_Defense_Fire)) {
        len = Level_5_Player_Defense.length
        for (let i = 0; i < Enemy_Attack.length; i++) {
          if (Attacked_Enemy_Attack.includes(Enemy_Attack[i]) === false) {
            attackable_index = i
            break
          }
        }
        if (attackable_index != null) {
          if (Enemy_Attack[attackable_index] && frameCount > Defense_Time + 5 && Attacked_Enemy_Attack.includes(Enemy_Attack[attackable_index]) === false) {
            Make_Ball("defense", "fire", "player", Enemy_Attack[attackable_index].y)
            Defense_Time = frameCount
            Attacked_Enemy_Attack.push(Enemy_Attack[attackable_index])
          }
        }

      }
      if (mousePressedOver(Level_5_Player_Defense_Seed)) {
        len = Level_5_Player_Defense.length
        for (let i = 0; i < Enemy_Attack.length; i++) {
          if (Attacked_Enemy_Attack.includes(Enemy_Attack[i]) === false) {
            attackable_index = i
            break
          }
        }
        if (attackable_index != null) {
          if (Enemy_Attack[attackable_index] && frameCount > Defense_Time + 5 && Attacked_Enemy_Attack.includes(Enemy_Attack[attackable_index]) === false) {
            Make_Ball("defense", "seed", "player", Enemy_Attack[attackable_index].y)
            Defense_Time = frameCount
            Attacked_Enemy_Attack.push(Enemy_Attack[attackable_index])
          }
        }
      }
      if (mousePressedOver(Level_5_Player_Defense_Water)) {
        len = Level_5_Player_Defense.length
        for (let i = 0; i < Enemy_Attack.length; i++) {
          if (Attacked_Enemy_Attack.includes(Enemy_Attack[i]) === false) {
            attackable_index = i
            break
          }
        }
        if (attackable_index != null) {
          if (Enemy_Attack[attackable_index] && frameCount > Defense_Time + 5 && Attacked_Enemy_Attack.includes(Enemy_Attack[attackable_index]) === false) {
            Make_Ball("defense", "water", "player", Enemy_Attack[attackable_index].y)
            Defense_Time = frameCount
            Attacked_Enemy_Attack.push(Enemy_Attack[attackable_index])
          }
        }
      }


      if (frameCount % 100 === 0) {
        r = Math.floor(random(0, 3))
        enemy_attack_type = types[r]
        if (Enemy_Lives === 5) {
          Make_Ball("attack", enemy_attack_type, "enemy", null, 2.5)
        }
        if (Enemy_Lives === 4) {
          Make_Ball("attack", enemy_attack_type, "enemy", null, 3)
        }
        if (Enemy_Lives === 3) {
          Make_Ball("attack", enemy_attack_type, "enemy", null, 3.5)
        }
        if (Enemy_Lives === 2) {
          Make_Ball("attack", enemy_attack_type, "enemy", null, 4)
        }
        if (Enemy_Lives === 1) {
          Make_Ball("attack", enemy_attack_type, "enemy", null, 4.5)
        }
      }

      if (Level_5_Player_Attack.length > 0) {
        if (Level_5_Player_Attack.length > Enemy_Defense.length) {
          if ((Attacked_Level_5_Player_Attack.includes(Level_5_Player_Attack[Level_5_Player_Attack.length - 1])) === false) {
            player_attack_type = Type_Determiner(Level_5_Player_Attack[Level_5_Player_Attack.length - 1])
            index = types.indexOf(player_attack_type)
            probability = Math.floor(random(1, 10))
            if (Enemy_Lives >= 3) {
              if (probability % 3 === 0) {
                random_array = [0, 1, 2]
                index_to_remove = random_array.indexOf(index)
                random_array.splice(index_to_remove, 1)
                Make_Ball("defense", anti_types[random_array[Math.floor(random(0, random_array.length))]], "enemy", Level_5_Player_Attack[Level_5_Player_Attack.length - 1].y, 2.5)
              }
              else {
                Make_Ball("defense", anti_types[index], "enemy", Level_5_Player_Attack[Level_5_Player_Attack.length - 1].y, 2.5)
              }
            }
            if (Enemy_Lives < 3) {
              if (probability % 4 === 0) {
                random_array = [0, 1, 2]
                index_to_remove = random_array.indexOf(index)
                random_array.splice(index_to_remove, 1)
                Make_Ball("defense", anti_types[random_array[Math.floor(random(0, random_array.length))]], "enemy", Level_5_Player_Attack[Level_5_Player_Attack.length - 1].y, 2.5)
              }
              else {
                Make_Ball("defense", anti_types[index], "enemy", Level_5_Player_Attack[Level_5_Player_Attack.length - 1].y, 2.5)
              }
            }
            Attacked_Level_5_Player_Attack.push(Level_5_Player_Attack[Level_5_Player_Attack.length - 1])
          }
        }
      }
      for (let i = 0; i < Level_5_Player_Attack.length; i++) {
        stroke(180, 0, 0)
        strokeWeight(3)
        noFill()
        ellipse(Level_5_Player_Attack[i].x, Level_5_Player_Attack[i].y, 60)
      }
      for (let i = 0; i < Enemy_Attack.length; i++) {
        stroke(180, 0, 0)
        strokeWeight(3)
        noFill()
        ellipse(Enemy_Attack[i].x, Enemy_Attack[i].y, 60)
      }
      for (let i = 0; i < Level_5_Player_Defense.length; i++) {
        stroke(0, 0, 180)
        strokeWeight(3)
        noFill()
        ellipse(Level_5_Player_Defense[i].x, Level_5_Player_Defense[i].y, 60)
      }
      for (let i = 0; i < Enemy_Defense.length; i++) {
        stroke(0, 0, 180)
        strokeWeight(3)
        noFill()
        ellipse(Enemy_Defense[i].x, Enemy_Defense[i].y, 60)
      }
      for (let i = 0; i < Level_5_Player_Attack.length; i++) {
        if (Level_5_Player_Attack[i].x > Alien.x - Alien.width / 2) {
          Level_5_Player_Attack[i].remove()
          Level_5_Player_Attack.splice(i, 1)
          Enemy_Hearts[Enemy_Lives - 1].remove()
          Enemy_Hearts.splice(Enemy_Lives - 1, 1)
        }
      }
      for (let i = 0; i < Level_5_Player_Defense.length; i++) {
        if (Level_5_Player_Defense[i].x > Alien.x - Alien.width / 2) {
          Level_5_Player_Defense[i].remove()
          Level_5_Player_Defense.splice(i, 1)
        }
      }
      for (let i = 0; i < Enemy_Defense.length; i++) {
        if (Enemy_Defense[i].x < (Level_5_Player.x + Level_5_Player.width / 1.65)) {
          Enemy_Defense[i].remove()
          Enemy_Defense.splice(i, 1)
        }
      }
      for (let i = 0; i < Enemy_Attack.length; i++) {
        if (Enemy_Attack[i].x < (Level_5_Player.x + Level_5_Player.width / 1.65)) {
          Enemy_Attack[i].remove()
          Enemy_Attack.splice(i, 1)
          Level_5_Player_Hearts[Level_5_Player_Lives - 1].remove()
          Level_5_Player_Hearts.splice(Level_5_Player_Lives - 1, 1)
        }
      }
      for (let i = 0; i < Enemy_Attack.length; i++) {
        for (let j = 0; j < Level_5_Player_Defense.length; j++) {
          if (Enemy_Attack[i].isTouching(Level_5_Player_Defense[j])) {
            enemy_attack_type = Type_Determiner(Enemy_Attack[i])
            player_defense_type = Type_Determiner(Level_5_Player_Defense[j])
            if ((types.indexOf(enemy_attack_type)) === (anti_types.indexOf(player_defense_type))) {
              Enemy_Attack[i].remove()
              Enemy_Attack.splice(i, 1)
              Level_5_Player_Defense[j].remove()
              Level_5_Player_Defense.splice(j, 1)
            }
            else if (Activated_Enemy_Attack.includes(Enemy_Attack[i]) === false) {
              Level_5_Player_Defense[j].remove()
              Level_5_Player_Defense.splice(j, 1)
              Activated_Enemy_Attack.push(Enemy_Attack[i])
            }
          }
        }
      }
      for (let i = 0; i < Level_5_Player_Attack.length; i++) {
        for (let j = 0; j < Enemy_Defense.length; j++) {
          if (Level_5_Player_Attack[i].isTouching(Enemy_Defense[j])) {
            player_attack_type = Type_Determiner(Level_5_Player_Attack[i])
            enemy_defense_type = Type_Determiner(Enemy_Defense[j])
            if ((types.indexOf(player_attack_type)) === (anti_types.indexOf(enemy_defense_type))) {
              Level_5_Player_Attack[i].remove()
              Level_5_Player_Attack.splice(i, 1)
              Enemy_Defense[j].remove()
              Enemy_Defense.splice(j, 1)
            }
            else {
              Enemy_Defense[j].remove()
              Enemy_Defense.splice(j, 1)
            }
          }
        }
      }
      if (Level_5_Player_Lives === 0) {
        Level5_gameState = "over"
      }
      if (Enemy_Lives === 0) {
        Level5_gameState = "won"
      }
    }
    if (Level5_gameState === "over") {
      game_over.visible = true
      DestroyArray(Enemy_Attack)
      DestroyArray(Enemy_Defense)
      DestroyArray(Level_5_Player_Defense)
      DestroyArray(Level_5_Player_Attack)
      DestroyArray(Level_5_Player_Hearts)
      DestroyArray(Enemy_Hearts)
      Level_5_Player_Attack_Water.visible = false
      Level_5_Player_Attack_Fire.visible = false
      Level_5_Player_Attack_Seed.visible = false
      Level_5_Player_Defense_Water.visible = false
      Level_5_Player_Defense_Fire.visible = false
      Level_5_Player_Defense_Seed.visible = false
      Gem.visible = false
      Level_5_Player.visible = false
      Alien.visible = false
    }
    if (Level5_gameState === "won") {
      Post_Win = true
      Post_Win_Note.visible = true
      Riddle_btn.visible = true
      if (mousePressedOver(Riddle_btn)) {
        Post_Win_Note.visible = false
        Riddle_btn.visible = false
        Riddle_Note.visible = true
        ok_btn.visible = true
      }
      if (mousePressedOver(ok_btn)) {
        Post_Win_Note.visible = false
        Riddle_btn.visible = false
        ok_btn.visible = false
        Riddle_Note.visible = false
        state = "Level_Arcade"
      }
      DestroyArray(Enemy_Attack)
      DestroyArray(Enemy_Defense)
      DestroyArray(Level_5_Player_Defense)
      DestroyArray(Level_5_Player_Attack)
      DestroyArray(Level_5_Player_Hearts)
      DestroyArray(Enemy_Hearts)
      Level_5_Player_Attack_Water.visible = false
      Level_5_Player_Attack_Fire.visible = false
      Level_5_Player_Attack_Seed.visible = false
      Level_5_Player_Defense_Water.visible = false
      Level_5_Player_Defense_Fire.visible = false
      Level_5_Player_Defense_Seed.visible = false
      Gem.visible = false
      Level_5_Player.visible = false
      Alien.visible = false
    }

    Colour_Attacks()
    Colour_Defenses()
  }
  if(state==="complete_win"){
    Complete_win_note.visible=true
  }
  drawSprites()
}

function CreateFireball_left(vel) {
  if (frameCount % 50 == 0) {
    var fireball = createSprite(displayWidth / 2 - (displayWidth / 2 + 10), (Math.ceil(random(0, 0.6) * 1000)))
    fireball.addAnimation("fb_anime", fb1, fb2, fb3, fb4);
    fireball.velocityX = vel
    fireball.scale = 0.4;
    fireball.lifetime = 380
    fireballs_left.add(fireball)
  }
}
function CreateFireball_right(vel) {
  if (frameCount % 50 == 0) {
    var fireball = createSprite(displayWidth / 2 + (displayWidth / 2 + 10), (Math.ceil(random(0, 0.6) * 1000)))
    fireball.addAnimation("fb_anime", fbr1, fbr2, fbr3, fbr4);
    fireball.velocityX = vel
    fireball.scale = 0.4;
    fireball.lifetime = 380
    fireballs_right.add(fireball)
  }
}

function stop_all() {
  astroid.setSpeed(0, astroid.getDirection() + 2.65)
  obs_1.setSpeed(0, obs_1.getDirection() + 1.65)
  obs_2.setSpeed(0, obs_2.getDirection() + 2.15)
  obs_3.setSpeed(0, obs_3.getDirection() + 3.65)
  as_1.setSpeed(0, as_1.getDirection() + 14)
  as_2.setSpeed(0, as_2.getDirection() + 10)
  as_3.setSpeed(0, as_3.getDirection() + 7.5)
  as_4.setSpeed(0, as_4.getDirection() + 5.5)
  as_5.setSpeed(0, as_5.getDirection() + 4.5)
  obs_1.visible = false
  obs_2.visible = false
  obs_3.visible = false
  astroid.visible = false
  as_1.visible = false
  as_2.visible = false
  as_3.visible = false
  as_4.visible = false
  as_5.visible = false
  planet.visible = false
  Level2_SpaceShip.visible = false
}

function CreateFireball(velX, velY) {
  var fireball = createSprite(Level_3_Player.x, Level_3_Player.y)
  fireball.addImage(Level3_fireball_img)
  fireball.velocityX = velX
  fireball.velocityY = velY
  fireball.scale = 0.1
  fireball.lifetime = 175
  Fireballs.push(fireball)
}

function CreateEnemyFireball(x, y, speedX, speedY, lifetime) {
  var E_fireball = createSprite(x, y)
  E_fireball.addImage(EnemyFireball_img)
  E_fireball.velocityX = -speedX
  E_fireball.velocityY = speedY
  E_fireball.scale = 0.1
  E_fireball.lifetime = lifetime
  EnemyFireballs.push(E_fireball)
}

function CreateSpaceShip(x, y, image, resize) {
  var eSpaceShip = createSprite(x, y)
  eSpaceShip.addImage(image)
  eSpaceShip.scale = resize
  return eSpaceShip
}

function SetArrayVelocity(array, velY, velX) {
  if (array != []) {
    for (let i = 0; i < array.length; i++) {
      array[i].velocityY = velY
      array[i].velocityX = velX
    }
  }
}
function eSpaceShips_movement(array, vel) {
  if (array.length != 0) {
    if (array[array.length - 1].y >= (displayHeight * 0.761)) {
      SetArrayVelocity(array, -vel, 0)
    }
    if (array[0].y <= (displayHeight * 0.032)) {
      SetArrayVelocity(array, vel, 0)
    }
  }
}

function FireESpaceShips(array, frequency, speed, lifetime) {
  if (array != [] && frameCount > Shoot_Allowance_Time + 50) {
    if (frameCount % frequency === 0) {
      len = array.length - 1
      Ship_Numbers = []
      for (let i = 0; i <= len; i++) {
        Ship_Numbers.push(i)
      }
      if (array.length > 3) {
        for (let i = 0; i < (array.length - 3); i++) {
          index = Math.floor(random(0, Ship_Numbers.length))
          Ship_Numbers.splice(index, 1)
        }
        for (let i = 0; i < 3; i++) {
          CreateEnemyFireball(array[Ship_Numbers[i]].x, array[Ship_Numbers[i]].y, speed, 0, lifetime)
        }
      }
      else {
        for (let i = 0; i < Ship_Numbers.length; i++) {
          CreateEnemyFireball(array[Ship_Numbers[i]].x, array[Ship_Numbers[i]].y, speed, 0, lifetime)
        }
      }
    }
  }
}

function ArrayVisibility(array, value) {
  if (array != []) {
    for (let i = 0; i < array.length; i++) {
      array[i].visible = value
    }
  }
}

function SpriteFinder(array, x, y) {
  if (array != []) {
    index = null
    for (let i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) {
        index = i
        break
      }
    }
    return index
  }
}

function CheckFireballCollision(array) {
  for (let i = 0; i < Fireballs.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (Fireballs[i].isTouching(array[j])) {
        Fireballs[i].remove()
        Fireballs.splice(i, 1)
        array[j].remove()
        array.splice(j, 1)
        break
      }
    }
  }
}

function CreateHeart(x, y, image, array) {
  var heart = createSprite(x, y)
  heart.addImage(image)
  heart.scale = 0.1
  array.push(heart)
}

function DestroyArray(array) {
  const len = array.length
  for (let i = 0; i < len; i++) {
    array[array.length - 1].remove()
    array.splice(array.length - 1, 1)
  }
}
function Level4_index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return 0;
  }
  return j + (i * cols);
}

function Cell(i, j) {
  this.rows = i
  this.cols = j
  this.walls = []
  this.visited = false
  this.x = this.rows * w + StartX
  this.y = this.cols * w + StartY
  this.walls[0] = createWall(this.x + w / 2, this.y, w, 3)
  this.walls[1] = createWall(this.x, this.y + w / 2, 3, w)
  this.walls[2] = createWall(this.x + w / 2, this.y + w, w, 3)
  this.walls[3] = createWall(this.x + w, this.y + w / 2, 3, w)
  this.index = function () {
    return index(this.rows, this.cols);
  }
  this.highlight = function (r, g, b) {
    var x = this.rows * w + StartX
    var y = this.cols * w + StartY
    fill(r, g, b, 200)
    noStroke()
    rect(x, y, w, w)
  }
  this.checkNeighbors = function () {
    this.neighbors = []
    this.top = grid[Level4_index(this.rows - 1, this.cols)]
    this.right = grid[Level4_index(this.rows, this.cols + 1)]
    this.bottom = grid[Level4_index(this.rows + 1, this.cols)]
    this.left = grid[Level4_index(this.rows, this.cols - 1)]


    if (this.top && !this.top.visited) {
      this.neighbors.push(this.top)
    }
    if (this.right && !this.right.visited) {
      this.neighbors.push(this.right)
    }
    if (this.bottom && !this.bottom.visited) {
      this.neighbors.push(this.bottom)
    }
    if (this.left && !this.left.visited) {
      this.neighbors.push(this.left)
    }
    if (this.neighbors.length > 0) {
      var r = floor(random(0, this.neighbors.length))
      return this.neighbors[r];
    }
    else {
      return null;
    }
  }
}


function removeWalls(a, b) {
  var x = a.rows - b.rows;
  if (x == 1) {
    a.walls[1].remove();
    b.walls[3].remove();
  } else if (x == -1) {
    a.walls[3].remove();
    b.walls[1].remove();
  }
  var y = a.cols - b.cols;
  if (y == 1) {
    a.walls[0].remove();
    b.walls[2].remove();
  } else if (y == -1) {
    a.walls[2].remove();
    b.walls[0].remove();
  }
}
function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return 0;
  }
  return j + (i * cols);
}
function createWall(x, y, w, h) {
  var newwall = createSprite(x, y, w, h);
  newwall.shapeColor = rgb(255, 94, 0);
  newwall.visible = true;
  return newwall;
}
function MakeKeyHole(x, y) {
  var keyhole = createSprite(x, y)
  keyhole.addImage(Key_hole_img)
  keyhole.scale = 0.25
  keyhole.visible = false
  return keyhole
}
function MakeKey(cell, image) {
  var key = createSprite(grid[cell].x + w / 2, grid[cell].y + w / 2)
  key.addImage(image)
  key.scale = 0.15
  key.visible = false
  return key
}
function Level_4_CreateEnemyFireball(x, y, speedX, speedY, lifetime, frequency) {
  if (frameCount % frequency === 0) {
    var E_fireball = createSprite(x, y)
    E_fireball.addImage(Fireball_img)
    E_fireball.velocityX = -speedX
    E_fireball.velocityY = speedY
    E_fireball.scale = 0.1
    E_fireball.lifetime = lifetime
    EnemyFireballs.push(E_fireball)
  }
}
function Maze_SubState_Handler(CurrentState, NextState, CurrentKey) {
  if (Maze_SubState === CurrentState) {
    CurrentKey.visible = true
    if (CurrentState == "key1") {
      cell = 76
    }
    if (CurrentState == "key2") {
      cell = 286
    }
    if (CurrentState == "key3") {
      cell = 190
    }
    if (CurrentState == "key4") {
      cell = 0
    }
    if ((Level_4_Player.x > grid[cell].x && Level_4_Player.x < grid[cell].x + w) && (Level_4_Player.y > grid[cell].y && Level_4_Player.y < grid[cell].y + w)) {
      Maze_SubState = NextState
      CurrentKey.visible = false
    }
  }
}
function TimeIt() {
  if (StartTimer === true) {
    test_length = test_length - 2
    posY = posY + 1
  }
}

function ChangeColour() {
  if (StartTimer === true) {
    if (Timer_Red === 180 && Timer_Green === 0) {
      Timer.shapeColor = rgb(0, 0, 0)
    }
    else {
      if (Timer_Red < 180) {
        Timer_Red = Timer_Red + 1
      }
      if (Timer_Red === 180) {
        Timer_Green -= 1
      }
      Timer.shapeColor = rgb(Timer_Red, Timer_Green, 0)
    }
  }
}

function Make_Ball(use, type, name, y, enemy_velocity) {
  if (use === "attack") {
    var ball = createSprite(displayWidth / 4, ((Math.floor(random(1, 8))) * displayHeight / 10))
  }
  else {
    var ball = createSprite(displayWidth / 4, y)
  }

  if (type === "fire") {
    if (name === "player") {
      ball.addImage(fireball_img)
    }
    else {
      ball.addImage(enemy_fireball_img)
    }
    ball.scale = 0.075
    FireBalls.push(ball)
  }
  else if (type === "water") {
    if (name === "player") {
      ball.addImage(waterball_img)
    }
    else {
      ball.addImage(waterball_enemy_img)
    }
    ball.scale = 0.25
    WaterBalls.push(ball)
  }
  else if (type === "seed") {
    ball.scale = 0.15
    ball.addImage(seedball_img)
    SeedBalls.push(ball)
  }

  if (name === "player") {
    ball.x = displayWidth / 4
    ball.velocityX = 2.5
    if (use === "attack") {
      Level_5_Player_Attack.push(ball)
    }
    else {
      Level_5_Player_Defense.push(ball)
    }
  }
  else if (name === "enemy") {
    ball.x = displayWidth / 1.5
    ball.velocityX = -enemy_velocity
    if (use === "attack") {
      Enemy_Attack.push(ball)
    }
    else {
      Enemy_Defense.push(ball)
    }
  }
}


function Colour_Attacks() {
  noFill()
  stroke(180, 0, 0)
  strokeWeight(3)
  ellipse(Level_5_Player_Attack_Fire.x, Level_5_Player_Attack_Fire.y, 50)
  ellipse(Level_5_Player_Attack_Seed.x, Level_5_Player_Attack_Seed.y, 50)
  ellipse(Level_5_Player_Attack_Water.x, Level_5_Player_Attack_Water.y, 50)
}
function Colour_Defenses() {
  noFill()
  stroke(0, 0, 180)
  strokeWeight(3)
  ellipse(Level_5_Player_Defense_Fire.x, Level_5_Player_Defense_Fire.y, 50)
  ellipse(Level_5_Player_Defense_Seed.x, Level_5_Player_Defense_Seed.y, 50)
  ellipse(Level_5_Player_Defense_Water.x, Level_5_Player_Defense_Water.y, 50)
}

function Type_Determiner(ball) {
  if (FireBalls.includes(ball)) {
    type = "fire"
  }
  if (SeedBalls.includes(ball)) {
    type = "seed"
  }
  if (WaterBalls.includes(ball)) {
    type = "water"
  }
  return type
}