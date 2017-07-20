

// console.log("i am here");

class Boot {

  preload() {
    console.log("Boot.preload")
  }
  create() {
    console.log("Boot.create")
    game.state.start("Load")
  }

}

class Load {

  preload() {
    console.log("Loading...")
    this.load.spritesheet("spider", "assets/New Piskel clone clone.png", 150, 150, 1)
    this.load.spritesheet("background", "assets/New Piskel (7).png", 320, 320, 1)
  }
  create() {
    console.log("Loaded.")
    game.state.backgroundcolor = "#FF0000"
    game.state.start("Play")
  }

}

class Play {
  preload(){
    this.bg = this.add.sprite(0,0,"background")
    /*
    this.bg.animations.add(bg name)
    this.bg.animations.play(bg name,(speed) 3,true)
    */
  }


  create() {
    console.log("Playing...")

    //spider
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.spider = this.add.sprite(10, 10, "spider")
    game.physics.arcade.enable(this.spider)
    this.spider.body.collideWorldBounds = true


    //spider1
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.spider = this.add.sprite(10, 10, "spider")
    game.physics.arcade.enable(this.spider)
    this.spider1.body.collideWorldBounds = true
    this.spider1.body.gravity.y = 1000
    this.spider1.body.bounce.setTo(1.0)
    this.spider1.body.velocity.y = -400
    this.spider1.body.velocity.x = 400



    this.cursor = game.input.keyboard.createCursorKeys()
  }

  update() {

    game.physics.arcade.collide(this.spider,this.spider1,this.handleCollision)

    if (this.cursor.left.isDown)  {
      this.spider.body.velocity.x = -100
    }
    if (this.cursor.right.isDown) {
      this.spider.body.velocity.x = 100

    }
    if (this.cursor.up.isDown){
      this.spider.body.velocity.y = -100

    }
    if (this.cursor.down.isDown){
      this.spider.body.velocity.y = 100

    }
  }

}


var game = new Phaser.Game(320,568);
game.state.add("Boot", Boot)
game.state.add("Load", Load)
game.state.add("Play", Play)
game.state.start("Boot")
