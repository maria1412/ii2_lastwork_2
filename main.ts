scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTilemap(tilemap`レベル4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    tiles.setTilemap(tilemap`レベル5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTilemap(tilemap`レベル2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 300, 300)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`レベル1`)
let Flag = 0
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 1))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
