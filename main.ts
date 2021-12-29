scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.baDing.play()
    tiles.setTilemap(tilemap`レベル4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 0))
    info.startCountdown(30)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    music.baDing.play()
    tiles.setTilemap(tilemap`レベル5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.baDing.play()
    tiles.setTilemap(tilemap`レベル2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`レベル1`)
mySprite = sprites.create(img`
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
let PlayerSpeed = 25
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.startCountdown(20)
forever(function () {
    if (0 > -4096 && 0 < -3050) {
        mySprite.vx = Math.map(0, -4096, -3050, 0, 80 * PlayerSpeed)
    } else if (0 > -1 && 0 > -1000) {
        mySprite.vx = Math.map(0, -1, -1080, 0, -80 * PlayerSpeed)
    } else if (0 > 1 && 0 > 1050) {
        mySprite.vy = Math.map(-1, 1, 1050, 0, 60 * PlayerSpeed)
    } else if (0 > 4096 && 0 > 3100) {
        mySprite.vy = Math.map(-1, 4097, 3100, 0, -60 * PlayerSpeed)
    }
})
