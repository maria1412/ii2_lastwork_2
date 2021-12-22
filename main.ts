tiles.setTilemap(tilemap`レベル1`)
let Flag = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . . b b 9 d 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 1 1 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 9 9 9 b . 
    . b 9 3 9 9 9 9 9 9 9 1 9 9 b . 
    . b 5 3 d 9 9 9 9 9 9 9 9 9 b . 
    . b 5 3 3 9 9 9 9 9 9 9 d 9 b . 
    . b b 5 3 3 3 9 9 9 d d 5 b b . 
    . . b d 5 3 3 3 3 3 d 5 b b . . 
    . . . b d 5 d 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 23)
controller.moveSprite(mySprite)
game.onUpdate(function () {
    if (Flag == 1) {
        tiles.setTilemap(tilemap`レベル2`)
    } else if (Flag == 2) {
        tiles.setTilemap(tilemap`レベル4`)
    } else if (Flag == 3) {
        tiles.setTilemap(tilemap`レベル5`)
    }
})
