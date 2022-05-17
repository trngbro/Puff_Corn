namespace SpriteKind {
    export const skill1_boss_map3 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (x0 == 1) {
        if (nv_map2.isHittingTile(CollisionDirection.Bottom)) {
            nv_map2.vy += -200
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (skill1_boss_map32.overlapsWith(nv_map3)) {
        nv_map3.destroy(effects.spray, 500)
        game.showLongText("Hay thu lai nao", DialogLayout.Bottom)
        boss.destroy()
        pause(1000)
        skill1_boss_map32.destroy()
        Map3()
    }
    if (skill2_boss_map3.overlapsWith(nv_map3)) {
        nv_map3.destroy(effects.spray, 500)
        game.showLongText("Hay thu lai nao", DialogLayout.Bottom)
        boss.destroy()
        skill2_boss_map3.destroy()
        pause(1000)
        Map3()
    }
    if (skill3_boss_map3.overlapsWith(nv_map3)) {
        nv_map3.destroy(effects.spray, 500)
        game.showLongText("Hay thu lai nao", DialogLayout.Bottom)
        boss.destroy()
        skill3_boss_map3.destroy()
        pause(1000)
        Map3()
    }
})
function boss_map3 () {
    boss = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Enemy)
    boss.setStayInScreen(true)
    boss.ay = 500
    tiles.placeOnRandomTile(boss, sprites.dungeon.collectibleRedCrystal)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.showLongText("This is the exit that leads to another place", DialogLayout.Bottom)
    x0 = 1
    Map3()
})
function Map2 () {
    nv_map1.destroy()
    scene.setBackgroundImage(assets.image`map2`)
    tiles.setCurrentTilemap(tilemap`level2`)
    nv_map2 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 a b 3 a a 3 b a 3 3 f . 
        . f 3 3 f f a a a a f f 3 3 f . 
        . f a a f d f a a f d f a a f . 
        . f a a a d f 1 1 f d a a a f . 
        f f a a f 1 1 1 1 1 1 f a a f f 
        f a a f f f 1 1 1 1 f f f a 4 f 
        . f d d f b b b b b b f d d f . 
        . . d d c d d d d d d c d d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(nv_map2, 100, 0)
    nv_map2.ay = 500
    tiles.placeOnRandomTile(nv_map2, assets.tile`myTile16`)
    scene.cameraFollowSprite(nv_map2)
    characterAnimations.loopFrames(
    nv_map2,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 d b 3 d d 3 3 f . 
        . . f 3 3 3 3 f f d d d 3 3 f . 
        . . f b b b b f 9 f d d d 3 f . 
        . . f b b b b d 9 f 1 1 d f . . 
        . f f b b b b f 1 1 1 1 f . . . 
        . f b b b b f f f 4 4 4 f . . . 
        . . f b b f 1 1 d d d d f . . . 
        . . . f f 4 1 1 4 4 4 4 f . . . 
        . . . . f b 4 4 b 4 b 4 b f . . 
        . . . . f f 4 1 4 1 4 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.FacingUp, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    nv_map2,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 b b 3 b b 3 3 3 3 f . . 
        . f 3 3 b b b f f 3 3 3 3 f . . 
        . f 3 b b b f 8 f b b b b f . . 
        . . f b 1 1 f 8 b b b b b f . . 
        . . . f 1 1 1 1 f b b b b f f . 
        . . . f b b b f f f b b b b f . 
        . . . f d d d b 1 1 f b b f . . 
        . . . f d d d b 1 1 b f f . . . 
        . . f b d b d b b b b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    nv_map2,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 d b 3 d d 3 3 f . 
        . . f 3 3 3 3 f f d d d 3 3 f . 
        . . f b b b b f 9 f d d d 3 f . 
        . . f b b b b d 9 f 1 1 d f . . 
        . f f b b b b f 1 1 1 1 f . . . 
        . f b b b b f f f 4 4 4 f . . . 
        . . f b b f 1 1 d d d d f . . . 
        . . . f f 4 1 1 4 4 4 4 f . . . 
        . . . . f b 4 4 b 4 b 4 b f . . 
        . . . . f f 4 1 4 1 4 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    nv_map2,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 b b 3 b b 3 3 3 3 f . . 
        . f 3 3 b b b f f 3 3 3 3 f . . 
        . f 3 b b b f 8 f b b b b f . . 
        . . f b 1 1 f 8 b b b b b f . . 
        . . . f 1 1 1 1 f b b b b f f . 
        . . . f b b b f f f b b b b f . 
        . . . f d d d b 1 1 f b b f . . 
        . . . f d d d b 1 1 b f f . . . 
        . . f b d b d b b b b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.NotMoving)
    )
    game.showLongText("This is the mountain god Blicz that protects the center of the forest", DialogLayout.Bottom)
    game.showLongText("Try to climb over the mountain and be careful on high", DialogLayout.Bottom)
}
function Map4 () {
    nv_map3.destroy()
    boss.destroy()
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddddd333dddddddddd
        dddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddddd3dddddddddddddddddddddddddddddddddddddddddd3dddddddddd
        dddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd33333ddddddddd
        dddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddddd33333ddddddddd
        ddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddddd333333ddddddddd
        dddddddddddddddddd3333333ddddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddddd33333333dddddddd
        dddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd333333d3dddddddd
        dddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddddd333333d3dddddddd
        ddddddddddbdddddddd3333dddddddddddddddddddddddddddddbdddddddd3333ddddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddddbddddddd33333dddddddddd
        ddddddddddbddddddd3333333dddddddddddddddddddddddddddbddddddd3333333ddddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddddbdddddd33333333dddddddd
        ddddddddddbdddddd33333333dddddddddddddddddddddddddddbdddddd33333333ddddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddddbddddd333333333dddddddd
        ddddddddddbdddd333333333333dddddddddddddddddddddddddbddddd33333333333ddddddddddddddddddddddddddbdddd333333333333dddddddddddddddddddddddddbdddd333333333333dddddd
        ddddddddddbdddd333333333333dddddddddddddddddddddddddbddddd33333333333ddddddddddddddddddddddddddbdddd333333333333dddddddddddddddddddddddddbdddd333333333333dddddd
        33ddddddddbdd3d33333333333333ddddbdddddddd33ddddddddbddd3d3333333333333dddddbddddddd33dddddddddbdd3d33333333333333ddddbddddddd33dddddddddbdd3d33333333333333dddd
        3333ddddddbdd3333333333333333ddddbddddddd33333ddddddbddd333333333333333dddddbdddddd33333dddddddbdd3333333333333333ddddbdddddd333333ddddddbdd3333333333333333dddd
        333333ddddbddd333333333333333ddddbdddddd33333333ddddbdddd33333333333333dddddbddddd33333333dddddbddd333333333333333ddddbddddd333333333ddddbddd333333333333333dddd
        333333ddddbddd333333333333333ddddbdddddd33333333ddddbdddd33333333333333dddddbddddd33333333dddddbddd333333333333333ddddbddddd333333333ddddbddd333333333333333dddd
        3333333ddddbddddd333333333333ddddbdddddd333333333ddddbbdddd333333333333dddddbddddd3333333333ddddbdddd3333333333333ddddbddddd3333333333ddddbdddd3333333333333dddd
        3333333dddddbddddd3333333444444dbbddddd3d33333333ddddddbdddd33333334444444dbbdddd3d333333333dddddbdddd33333334444444dbbdddd3d333333333dddddbdddd33333333444444db
        33333333dddddbb33333333444444444bddddd3dd333333333ddddddbb33333334444444444bdddd3dd3333333333dddddbb33333334444444444bdddd3dd3333333333dddddbb33333333444444444b
        333333ddddddddbbb33333333443443bbddddddd33333333dddddddddbb333333334434433bbdddddd33333333dddddddddbb333333334443443bbdddddd333333333ddddddddbb333333333443443bb
        333333ddddddddbbb33333333443443bbddddddd33333333dddddddddbb333333334434433bbdddddd33333333dddddddddbb333333334443443bbdddddd333333333ddddddddbb333333333443443bb
        3333333dddddd3333b333333343334bb3dddddd3333333333ddddddd333b333333343334bbb3ddddd33333333333dddddd333b3333333443334bb3ddddd33333333333dddddd333b3333333343334bb3
        33b33dddddd333333333333333333bbddddddd333333b33dddddd333333333333333333bbbdddddd333333b33ddddddd333333333333333333bbdddddd333333bb33dddddd333333333333333333bbdd
        33b3333ddddd3333333333333333bbdddddddd333333b3333dddddd333333333333333bbdddddddd333333b33333ddddd3333333333333333bbddddddd333333bb3333ddddd3333333333333333bbddd
        33b3333ddddd3333333333333333bbdddddddd333333b3333dddddd333333333333333bbdddddddd333333b33333ddddd3333333333333333bbddddddd333333bb3333ddddd3333333333333333bbddd
        33b33b33dddddd3333344444333333dddddddd333333b33b33ddddddd333344444333333dddddddd333333b33b333dddddd3333444443333333ddddddd333333bb33b33dddddd3333444444333333ddd
        33b33b33ddddd344444444444333333333dddd333333b33b33dddddd344444444443333333333ddd333333b33b333ddddd344444444443333333333ddd333333bb33b33ddddd34444444444433333333
        33b3b333dddd4444444444443344433333dddd333333b3b333ddddd4444444444433444333333ddd333333b3b3333dddd4444444444433344433333ddd333333bb3b333dddd444444444444334443333
        33bbb3443d33344444444444443444333dddddd33333bbb3443d333344444444444434443333ddddd33333bbb34443d33344444444444443444333ddddd33333bbbb3443d33344444444444443444333
        33bbb3443d33344444444444443444333dddddd33333bbb3443d333344444444444434443333ddddd33333bbb34443d33344444444444443444333ddddd33333bbbb3443d33344444444444443444333
        33bb34433344444444444444444344433ddddd333333bb344333444444444444444443444433dddd333333bb344433344444444444444444344433dddd333333bbb34433344444444444444444344433
        3bb3333344444444444444444444333333333333333bb3333344444444444444444444333333333333333bb3333334444444444444444444433333333333333bbb333334444444444444444444433333
        bb3333444444444444444443bb3333333333b33333bb3333444444444444444443bb3333333333b33333bb3333444444444444444443bbb333333333b33333bb33333444444444444444443bb3333333
        b33334333344434443443443bb3334433333b33333b33334333344443443443443bb3334443333b33333b33334333334443443443443bbb333443333b33333b333334333344434434434443bb3334433
        b33334333344434443443443bb3334433333b33333b33334333344443443443443bb3334443333b33333b33334333334443443443443bbb333443333b33333b333334333344434434434443bb3334433
        b3b333333444344333444333bb333b443333b33333b3b333333444434433444333bb333b444333b33333b3b333333344434433444333bbb333b44333b33333b3bb333333444344334443333bb333b443
        b3b333333433343333334333bb333b333333b3333bb3b333333433334333334333bb333b333333b3333bb3b333333343334333334333bbb333b33333b3333bb3bb333333433343333343333bb333b333
        bbb333333334333444333333bb333b3333333b333bbbb333333334433344333333bb333b3333333b333bbbb333333333433344333333bbb333b333333b333bbbbb333333334333443333333bb333b333
        bbb333333334333444333333bb333b3333333b333bbbb333333334433344333333bb333b3333333b333bbbb333333333433344333333bbb333b333333b333bbbbb333333334333443333333bb333b333
        bb3333333344334443333333bb333b3333333b333bbb3333333344433443333333bb333b3333333b333bbb3333333334433443333333bbb333b333333b333bbb33333333344334433333333bb333b333
        3333333333433333333b3333bb33b33333333bbb3b3333333333433333333b3333bb33b33333333bbb3b3333333333343333333b3333bbb33b3333333bbb3b3333333333343333333b33333bb33b3333
        3333333333333333333b3333bbb3b3333333333bbb3333333333333333333b3333bbb3b3333333333bbb3333333333333333333b3333bbbb3b333333333bbb3333333333333333333b33333bbb3b3333
        3333333333333333333b3333bbbb3333333333333b3333333333333333333b3333bbbb3333333333333b3333333333333333333b3333bbbbb333333333333b3333333333333333333b33333bbbb33333
        3333333333333333333b3333bbbb3333333333333b3333333333333333333b3333bbbb3333333333333b3333333333333333333b3333bbbbb333333333333b3333333333333333333b33333bbbb33333
        3333333333333333333b3333bbbb3334443333333b3333333333333333333b3333bbbb3333444333333b3333333333333333333b3333bbbbb333444333333b3333333333333333333b33333bbbb33344
        4443344433333333333b3333bbb33344433333333b4443344433333333333b3333bbb33344443333333b4443344443333333333b3333bbbb3334443333333b4444334443333333333b33333bbb333444
        4444334443333333333b3333bbb3344433444444444444334443333333333b3333bbb3344443344444444444334444333333333b3333bbbb334443344444444444433444333333333b33333bbb334443
        4444334443333333333b3333bbb3344433444444444444334443333333333b3333bbb3344443344444444444334444333333333b3333bbbb334443344444444444433444333333333b33333bbb334443
        443333b444333333333b3333bbb333334444444444443333b444333333333b3333bbb333333444444444443333bb44433333333b3333bbbb333334444444444433333b44433333333b33333bbb333334
        444443b33333333bb33b3333bbb333344444444444444443b333333333b33b3333bbb333334444444444444443bb33333333b33b3333bbbb333344444444444444443b33333333b33b33333bbb333344
        444444443333333bb33b3333bbbb344443444444444444444433333333b33b3333bbbb344444344444444444444443333333b33b3333bbbbb34444344444444444444443333333b33b33333bbbb34444
        444344443333333bb33b3333bbb4444b43334434444443444433333333b33b3333bbb44444b4334434444443444443333333b33b3333bbbb4444b4334434444444344443333333b33b33333bbb4444b4
        444344443333333bb33b3333bbb4444b43334434444443444433333333b33b3333bbb44444b4334434444443444443333333b33b3333bbbb4444b4334434444444344443333333b33b33333bbb4444b4
        44333bb3bb33333bb33b3333bbbb444b334443333444333bb3bb333333b33b3333bbbb4444b33443333444333bbb3bb33333b33b3333bbbbb444b334433334443333bb3bb33333b33b33333bbbb444b3
        b4333bb3b333333bbb3bb333bbbb333bb333333333b4333bb3b3333333bb3bb333bbbb3333bb33333333b4333bbb3b333333bb3bb333bbbbb333bb33333333b43333bb3b333333bb3bb3333bbbb333bb
        b3333bbbb33333333bbbb333bbbb333bb333333333b3333bbbb33333333bbbb333bbbb3333bb33333333b3333bbbbb3333333bbbb333bbbbb333bb33333333b33333bbbb3333333bbbb3333bbbb333bb
        b3333bbbb33333333bbbb333bbbb333bb333333333b3333bbbb33333333bbbb333bbbb3333bb33333333b3333bbbbb3333333bbbb333bbbbb333bb33333333b33333bbbb3333333bbbb3333bbbb333bb
        b3333bb33333333333bbb333bbbb333bb333333333b3333bb33333333333bbb333bbbb3333bb33333333b3333bbb3333333333bbb333bbbbb333bb33333333b33333bb3333333333bbb3333bbbb333bb
        b3333bb333333333333bbb33bbbb333bb333333333b3333bb333333333333bbb33bbbb3333bb33333333b3333bbb33333333333bbb33bbbbb333bb33333333b33333bb33333333333bbbb33bbbb333bb
        3b333bb333333333333bbb33bbbb333bb3333333333b333bb333333333333bbb33bbbb3333bb333333333b333bbb33333333333bbb33bbbbb333bb333333333b3333bb33333333333bbbb33bbbb333bb
        3bb3bbb33334434444334b33bbbb333bb333b333333bb3bbb33334443444334b33bbbb3333bb33b333333bb3bbbb3333443444334b33bbbbb333bb33b333333bbb3bbb3333443444334bb33bbbb333bb
        3bb3bbb33334434444334b33bbbb333bb333b333333bb3bbb33334443444334b33bbbb3333bb33b333333bb3bbbb3333443444334b33bbbbb333bb33b333333bbb3bbb3333443444334bb33bbbb333bb
        3bbbbbb33344444444444443bbbbb33bb333b333333bbbbbb33344444444444443bbbbb333bb33b333333bbbbbbb3334444444444443bbbbbb33bb33b333333bbbbbbb33344444444444443bbbbb33bb
        33bbbbb3344444444444444bbbbbb3bb33bbb3333333bbbbb3344444444444444bbbbbb3bbb33bb3333333bbbbbb334444444444444bbbbbbb3bb33bb3333333bbbbbb3344444444444444bbbbbb3bb3
        333bbbb3334434444444434bbbbbb3bb33bb333333333bbbb3334443444444434bbbbbb3bbb33b333333333bbbbb333443444444434bbbbbbb3bb33b3333333333bbbb3334434444444334bbbbbb3bb3
        333bbbb3334434444444434bbbbbb3bb33bb333333333bbbb3334443444444434bbbbbb3bbb33b333333333bbbbb333443444444434bbbbbbb3bb33b3333333333bbbb3334434444444334bbbbbb3bb3
        333bbb33443344444443433bbbbbb3bb3b33333333333bbb33443334444443433bbbbbb3bbb3b3333333333bbb33344334444443433bbbbbbb3bb3b33333333333bbb33443344444434333bbbbbb3bb3
        333bbb33333443344433433bbbbbb3bbb333333333333bbb33333444334433433bbbbbb3bbbb33333333333bbb33333344334433433bbbbbbb3bbb333333333333bbb33333443344334333bbbbbb3bbb
        333bbb333b34333333333333bbbbbbb33333333333333bbb333b34433333333333bbbbbbbb3333333333333bbb3333b3433333333333bbbbbbbb33333333333333bbb333b34333333333333bbbbbbb33
        333bbb333b33333333333333bbbbbbb33333333333333bbb333b33333333333333bbbbbbbb3333333333333bbb3333b3333333333333bbbbbbbb33333333333333bbb333b33333333333333bbbbbbb33
        333bbb333b33333333333333bbbbbbb33333333333333bbb333b33333333333333bbbbbbbb3333333333333bbb3333b3333333333333bbbbbbbb33333333333333bbb333b33333333333333bbbbbbb33
        333bbb333b3b333333333333bbbbbbb33333333333333bbb333b3bb33333333333bbbbbbbb3333333333333bbb3333b3b33333333333bbbbbbbb33333333333333bbb333b3b333333333333bbbbbbb33
        333bbb333b3b333333333333bbbbbb333333333333333bbb333b3bb33333333333bbbbbb333333333333333bbb3333b3b33333333333bbbbbbb333333333333333bbb333b3b333333333333bbbbbb333
        333bbb333b3b333333333333bbbbb3333333333333333bbb333b3bb33333333333bbbbb3333333333333333bbb3333b3b33333333333bbbbbb3333333333333333bbb333b3b333333333333bbbbb3333
        333bb3333bbb333333333333bbbbb3333333333333333bb3333bbbb33333333333bbbbb3333333333333333bb33333bbb33333333333bbbbbb3333333333333333bb3333bbb333333333333bbbbb3333
        333bb3333bbb333333333333bbbbb3333333333333333bb3333bbbb33333333333bbbbb3333333333333333bb33333bbb33333333333bbbbbb3333333333333333bb3333bbb333333333333bbbbb3333
        333bb333bbb3333333333333bbbbb3333333333333333bb333bbb3333333333333bbbbb3333333333333333bb3333bbb333333333333bbbbbb3333333333333333bb333bbb3333333333333bbbbb3333
        33bbb333b3333333333dd333bbbbb3d3333333333333bbb333b3333333333dd333bbbbb3dd333333333333bbb3333b333333333dd333bbbbbb3d333333333333bbbb333b333333333dd3333bbbbb3d33
        33bbb333b33333333333dd3bbbbbb33dd33333d33333bbb333b33333333333dd3bbbbbb333dd3333d33333bbb3333b3333333333dd3bbbbbbb33dd3333d33333bbbb333b3333333333ddd3bbbbbb33dd
        33bbb333b33333333333dd3bbbbbb33dd33333d33333bbb333b33333333333dd3bbbbbb333dd3333d33333bbb3333b3333333333dd3bbbbbbb33dd3333d33333bbbb333b3333333333ddd3bbbbbb33dd
        33bbb3bbb33333333333333bbbbbbb33d3333dd33333bbb3bbb33333333333333bbbbbbb333d333dd33333bbb3bbbb3333333333333bbbbbbbb33d333dd33333bbbb3bbb33333333333333bbbbbbb33d
        33bbbbbb333333333d33333bbbbbbb3333333d33dd33bbbbbb333333333d33333bbbbbbb3333333d33dd33bbbbbbb33333333d33333bbbbbbbb333333d33dd33bbbbbbb33333333d333333bbbbbbb333
        d3bbbbb33dd3333ddd3333dbbbbbbbd3333333333dd3bbbbb33dd33333dd3333dbbbbbbbdd333333333dd3bbbbbb33dd3333dd3333dbbbbbbbbd333333333dd3bbbbbb33dd3333dd33333dbbbbbbbd33
        ddbbbbb333dd33ddd33d3ddbbbbbbbd333dd33333dddbbbbb333ddd33dd33d3ddbbbbbbbdd333d33333dddbbbbbb333dd33dd33d3ddbbbbbbbbd333d33333dddbbbbbb333dd33dd33d3dddbbbbbbbd33
        ddbbbbb333dd33ddd33d3ddbbbbbbbd333dd33333dddbbbbb333ddd33dd33d3ddbbbbbbbdd333d33333dddbbbbbb333dd33dd33d3ddbbbbbbbbd333d33333dddbbbbbb333dd33dd33d3dddbbbbbbbd33
        ddbbb333333333d333dddddbbbbbbbdd3ddd33d33dddbbb3333333333d33dddddbbbbbbbddd3dd33d33dddbbb3333333333d33dddddbbbbbbbbdd3dd33d33dddbbbb333333333d33ddddddbbbbbbbdd3
        ddbbbd333333333333dddddbbbbbbbdddd333dddddddbbbd333333333333dddddbbbbbbbddddd33dddddddbbbd333333333333dddddbbbbbbbbdddd33dddddddbbbbd33333333333ddddddbbbbbbbddd
        ddbbbd333d33ddd333dddddbbbbbbbddddddddddddddbbbd333d333ddd33dddddbbbbbbbddddddddddddddbbbd3333d33ddd33dddddbbbbbbbbdddddddddddddbbbbd333d33ddd33ddddddbbbbbbbddd
        ddbbbd333d33ddd333dddddbbbbbbbddddddddddddddbbbd333d333ddd33dddddbbbbbbbddddddddddddddbbbd3333d33ddd33dddddbbbbbbbbdddddddddddddbbbbd333d33ddd33ddddddbbbbbbbddd
        ddbbbd33ddd3ddddd3dddddbbbbbbbddddddddddddddbbbd33ddd33dddd3dddddbbbbbbbddddddddddddddbbbd333ddd3dddd3dddddbbbbbbbbdddddddddddddbbbbd33ddd3dddd3ddddddbbbbbbbddd
        ddbbbddddddddddddddddddbbbbbbbddddddddddddddbbbddddddddddddddddddbbbbbbbddddddddddddddbbbddddddddddddddddddbbbbbbbbdddddddddddddbbbbddddddddddddddddddbbbbbbbddd
        ddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbbdddddddddddddbbbb3dddddddddddddddddbbbbbbbddd
        ddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbbdddddddddddddbbbb3dddddddddddddddddbbbbbbbddd
        ddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbddddddddddddddbbb3dddddddddddddddddbbbbbbbbdddddddddddddbbbb3dddddddddddddddddbbbbbbbddd
        ddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbbdddddddddddddbbbbbdddddddddddddddddbbbbbbbddd
        ddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbbdddddddddddddbbbbbdddddddddddddddddbbbbbbbddd
        ddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbbdddddddddddddbbbbbdddddddddddddddddbbbbbbbddd
        ddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbddddddddddddddbbbbdddddddddddddddddbbbbbbbbdddddddddddddbbbbbdddddddddddddddddbbbbbbbddd
        ddbbbb3ddddddddddddddddbbbbbbbddddddddddddddbbbb3ddddddddddddddddbbbbbbbddddddddddddddbbbb33dddddddddddddddbbbbbbbbdddddddddddddbbbbb3ddddddddddddddddbbbbbbbddd
        ddbbbbbddddddddddddddddbbbbbbbddddddddddddddbbbbbddddddddddddddddbbbbbbbddddddddddddddbbbbbbdddddddddddddddbbbbbbbbdddddddddddddbbbbbbddddddddddddddddbbbbbbbddd
        ddbbbbbddddddddddddddddbbbbbbbddddddddddddddbbbbbddddddddddddddddbbbbbbbddddddddddddddbbbbbbdddddddddddddddbbbbbbbbdddddddddddddbbbbbbddddddddddddddddbbbbbbbddd
        ddbbbbb3dddddddddddddd3bbbbbbb3dddddddddddddbbbbb3dddddddddddddd3bbbbbbb33ddddddddddddbbbbbb3ddddddddddddd3bbbbbbbb3ddddddddddddbbbbbb3dddddddddddddd3bbbbbbb3dd
        ddbbbbb3dddddddddddddd3bbbbbbb3dddddddddddddbbbbb3dddddddddddddd3bbbbbbb33ddddddddddddbbbbbb3ddddddddddddd3bbbbbbbb3ddddddddddddbbbbbb3dddddddddddddd3bbbbbbb3dd
        ddbbbbb3ddddddddddddddbbbbbbbb3dddddddddddddbbbbb3ddddddddddddddbbbbbbbb33ddddddddddddbbbbbb3dddddddddddddbbbbbbbbb3ddddddddddddbbbbbb3ddddddddddddddbbbbbbbb3dd
        d3bbbbbbddddddddddddddbbbbbbbbbdddddddddddd3bbbbbbddddddddddddddbbbbbbbbbbddddddddddd3bbbbbbbdddddddddddddbbbbbbbbbbddddddddddd3bbbbbbbddddddddddddddbbbbbbbbbdd
        d3bbbbbbddddddddddddd3bbbbbbbbbdddddddddddd3bbbbbbddddddddddddd3bbbbbbbbbbddddddddddd3bbbbbbbdddddddddddd3bbbbbbbbbbddddddddddd3bbbbbbbdddddddddddd33bbbbbbbbbdd
        d3bbbbbbddddddddddddd3bbbbbbbbbdddddddddddd3bbbbbbddddddddddddd3bbbbbbbbbbddddddddddd3bbbbbbbdddddddddddd3bbbbbbbbbbddddddddddd3bbbbbbbdddddddddddd33bbbbbbbbbdd
        3bbbbbbb3ddddddddddddbbbbbbbb44444444444443bbbbbbb3ddddddddddddbbbbbbbb44444444444443bbbbbbbb3dddddddddddbbbbbbbbb4444444444443bbbbbbbb3dddddddddddbbbbbbbbb4444
        444444bbbdddddddddd33bbb444444444444444444444444bbbdddddddddd33bbb444444444444444444444444bbbbddddddddd33bbb4444444444444444444444444bbbddddddddd33bbbb444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
    nv_map4 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 a b 3 a a 3 b a 3 3 f . 
        . f 3 3 f f a a a a f f 3 3 f . 
        . f a a f d f a a f d f a a f . 
        . f a a a d f 1 1 f d a a a f . 
        f f a a f 1 1 1 1 1 1 f a a f f 
        f a a f f f 1 1 1 1 f f f a 4 f 
        . f d d f b b b b b b f d d f . 
        . . d d c d d d d d d c d d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    nv_map4.setPosition(36, 79)
    scene.cameraFollowSprite(nv_map4)
    game.showLongText("Ban co giet khong", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        game.showLongText("ngu", DialogLayout.Bottom)
        game.showLongText("thank you for play", DialogLayout.Bottom)
        game.over(false)
    }
    if (story.checkLastAnswer("No")) {
        game.showLongText("hay", DialogLayout.Bottom)
        game.showLongText("thank you for play", DialogLayout.Bottom)
        game.over(false)
    }
}
function Map3 () {
    nv_map2.destroy()
    nv_map3 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 a b 3 a a 3 b a 3 3 f . 
        . f 3 3 f f a a a a f f 3 3 f . 
        . f a a f d f a a f d f a a f . 
        . f a a a d f 1 1 f d a a a f . 
        f f a a f 1 1 1 1 1 1 f a a f f 
        f a a f f f 1 1 1 1 f f f a 4 f 
        . f d d f b b b b b b f d d f . 
        . . d d c d d d d d d c d d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(nv_map3, 100, 100)
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbddd666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbddd666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbdddd6666666666666666666666666666666666666666666666666666666666666
        66666666666666666dd666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbddd666666666666666666666666666666666666666666666666666666666666
        66666666666666bbddddd666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666
        66666666666666bbddddd666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666
        6666666666666bbbbbbbdd6666666666666666666666666666666666666666666666666666666666dddddddbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666
        6666666666666bbbbbbbbd6666666666666666666666666666666666666666666666666666666dddddddddddbbbbbbbbbbbddb6666666666666666666666666666666666666666666666666666666666
        666666666666bbbbbbbbbddbb61ddd66666666666666666666666666666666666666666666666dddbbbbbbdbbbbbbbbbbbbbdbbb66666666666666666666666666666666666666666666666666666666
        666666666666bbbbbbbbbddbb61ddd66666666666666666666666666666666666666666666666dddbbbbbbdbbbbbbbbbbbbbdbbb66666666666666666666666666666666666666666666666666666666
        666666666666bbbbbbbbbddbbbddddddddd66666666666666666666666666666666666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbb66ddd66666666666666666666666666666666666666666666666666
        666666666666bbbbbbbbbddbbbbbbbbbddddd666666666666666666666666666666666666661ddbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd666666666666666666666666666666666666666666666666
        6661ddddddddbbbbbbbbbbdbbbbbbbbbdddddb6666666666666666666666666666666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbddd66666666666666666666666666666666666666666666666
        6661ddddddddbbbbbbbbbbdbbbbbbbbbdddddb6666666666666666666666666666666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbddd66666666666666666666666666666666666666666666666
        66dddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666661dbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbdd66666666666666666666666666666666666666666666666
        61ddbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666ddddbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666
        6ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666dddbddbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666
        6ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666dddbddbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666
        ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666dddbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666
        ddbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb6666666666666666666666666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb6666666666666666666666666666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb6666666666666666666666666666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666
        bbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbb6666666666666666666666666666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666
        6bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbb66666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbdd6666666666666666666666666bbdddd66666666666666666
        6bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbb666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbdb66666666666666666666666bbbbbddddd666666666666666
        6bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbb666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbdb66666666666666666666666bbbbbddddd666666666666666
        66bbbbbbbbbbbbbbbbbbbbbbbbbb66666116666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbb6666666666666666666666bbbbbbbbbddd66bbbbb6666666
        666bbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbb66666666666666666ddddddbbbbbbbbbbdddbbbbdd1166666
        66661bbbbbbbbbb6661bbbbbb166666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbb66666666666666666ddddddddddbbbbbbbbddbbbbdddd16666
        66661bbbbbbbbbb6661bbbbbb166666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbb66666666666666666ddddddddddbbbbbbbbddbbbbdddd16666
        6666666666666666666611166666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbdbbbbbbbb6666666666666666666bdbbbbbbbddbbbbbbbbddbbbbbbbdd6666
        666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbb66666666666666666666d66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd6666
        6666666666666666666666666666666666666666666666666666666ddddd666666666666666666666666666666bbbbb66666666666666666666ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd1666
        6666666666666666666666666666666666666666666666666666666ddddd666666666666666666666666666666bbbbb66666666666666666666ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd1666
        66666666666666666666666666666666666666666666ddddddddddddddddddd666666666666666666666666666666666666666666666666666dddbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdd6666
        666666666666666666666666666666666666666666bbdddbbbdddddbbbbbbdddd6666666666666666666666666666666666666666666666666bbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbdd6666
        66666666666666666666666666666666dddddddddbbbbbbbbbbbddbbbbbbbbbddd666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd16666
        66666666666666666666666666666666dddddddddbbbbbbbbbbbddbbbbbbbbbddd666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd16666
        666666666666666666666666666666bddddddbdddddbbbbbbbbbbbbbbbbbbbbbbddbb666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbdd166666
        6666666666666666666666666666bbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbdbbbbbbdd666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbd1166666
        6666666666666666666666666661ddbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbdddd66666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbb16666666
        6666666666666666666666666661ddbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbdddd66666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbb16666666
        666666666666666666666bddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbddd666666666666666666666666666666666666bbb6666666bbbbbbbbbbbbb66666666bbb6666666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbdd66666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666bbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666
        666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666bbbbbbbbbb6666666bb66666666666666666666bbbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666e666666666666666666ee66666666666
        666666666666666666e6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eee6eeee66666666666666666ee6e666ccc6c6
        666666666666666666e6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eee6eeee66666666666666666ee6e666ccc6c6
        c666666666666666eee6e66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666eeeeee9ee66666666666666eeeeee6666c66cc
        c6ee6666666666eeeeeee6666666666666666666666666666666666ee666666666666666666666666666666666666666666666666666666666666666666eee5eee66666666666666eeeeebee66ccc66c
        eeeeecc6666666eeeeeee666666666666666666666666666666666eeeee666666666666666666666666666666666666666666666666666666666666666eee555eee6666666666666eeee55eee6cc6666
        eeeeecc6666666eeeeeee666666666666666666666666666666666eeeee666666666666666666666666666666666666666666666666666666666666666eee555eee6666666666666eeee55eee6cc6666
        eeeeeee6666666eee5eeeee66666666666666666cc66666ccc6666eeeeee66cc6666666666666666666666666666666666cc6666666666cc6666666666eee55eeee66666666666666ee555eee6ccc666
        ee5eeeecc66666ee555eee666666cc6666666666cc6666666666eee55eee666666666cc6cc6666666cc66666666c666666cc6666c66666ccc66666666666eeeeee6666666c666666eeee5eec66ccccc6
        e555ee9cc66c6eeee5eeeeecc666cc66cc666666666666666666eee5eeee666666666c666c666666666666c6666c666666666666c66666c6666666cccc6eeeeeeecc6666ccc66666eeeeeeccccccccc6
        e555ee9cc66c6eeee5eeeeecc666cc66cc666666666666666666eee5eeee666666666c666c666666666666c6666c666666666666c66666c6666666cccc6eeeeeeecc6666ccc66666eeeeeeccccccccc6
        eeeeee99cc666eeeeeeeee666666666cc666666c666666cc6666eeeeeee66666666c6666666666ccc66666cc66666c666c6cc6666ccc66666ccc66cccc67eee7e9cc66666cc666666eeeeeecccccc666
        eeeeee9cc666666eeeeee666666cc66666666c66666666666666eeeeeee6c6cc666c66c6666666ccc6666666c666cc66666666666ccc6666666c666cc6677777799c66666cc666cc666679e99cc9cc66
        977ee9ccc66667797777c666666cc66666666c6666666a6666666e9eeee6666c666666c66c6666666666cc6cc666c666cc666666666666666666666666677777999ccc6666c666cc666777799cc9cc66
        977ee9ccc66667797777c666666cc66666666c6666666a6666666e9eeee6666c666666c66c6666666666cc6cc666c666cc666666666666666666666666677777999ccc6666c666cc666777799cc9cc66
        777799c9766677797777666666666aa76c6677666777aa6677cc7977e7777766666c6666cc66666667766c6aa667c666776c766666676cc677cc7aa6c6667779997ccc6666c66666776777799cc9cc66
        77779777777679777777767cc7766a7767c677767777aaaaa777797777777776677c6677666776cc677779a6a677776677677666666767c677c779a6c7767797777c777c77666c7a7aa777cc99cccc66
        77779777a7777c777797767cc776aaa777777777777777777777777777777777c77c7777777777777777777aa777777777777777aaa777777777aa7aa7777777777777777777667a7a7779979c7797c6
        77779777a7777c777797767cc776aaa777777777777777777777777777777777c77c7777777777777777777aa777777777777777aaa777777777aa7aa7777777777777777777667a7a7779979c7797c6
        77777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777aa777777777777777777777777777a777777cc7797c6
        77777777777777777777777777a7777777777777777777777777777a777777777777777777777aaa7777777777777777777aa77777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777a777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777777777a7777777777777777777777777777
        77777777777777777777777777a777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777777777a7777777777777777777777777777
        777777777777777777777777777777777777aa77777777777777777a77777777777777777777777777777777777a777777777777777777777777777777777777777a7777777777777777777777777777
        777777777777aa7777777777777777777777aa77777777aa7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777a7777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        7777777777777777777777777777777777777777777777a7777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777a77777777777777777777777777777aaa7777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777aa777777777777777777777777777777777777
        7777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777
        7aa77777777777777777aa7777777777a7777777aa7777777777777a777777777777777777777777777777777777777777777a7777777777777777777777777777777777777777777777777777777777
        7aa77777777777777777777777777777a7777777777777777777777aa7777777777777777777777777777777777777777777aa77777777777777777777777777777777777aa777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777b7777777777777777777777777777777777777777777777777777777777777777777aa7777777
        `)
    tiles.setCurrentTilemap(tilemap`level5`)
    nv_map3.setStayInScreen(true)
    tiles.placeOnRandomTile(nv_map3, sprites.dungeon.collectibleBlueCrystal)
    x1 = 1
    characterAnimations.loopFrames(
    nv_map3,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 d b 3 d d 3 3 f . 
        . . f 3 3 3 3 f f d d d 3 3 f . 
        . . f b b b b f 9 f d d d 3 f . 
        . . f b b b b d 9 f 1 1 d f . . 
        . f f b b b b f 1 1 1 1 f . . . 
        . f b b b b f f f 4 4 4 f . . . 
        . . f b b f 1 1 d d d d f . . . 
        . . . f f 4 1 1 4 4 4 4 f . . . 
        . . . . f b 4 4 b 4 b 4 b f . . 
        . . . . f f 4 1 4 1 4 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    nv_map3,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 b b 3 b b 3 3 3 3 f . . 
        . f 3 3 b b b f f 3 3 3 3 f . . 
        . f 3 b b b f 8 f b b b b f . . 
        . . f b 1 1 f 8 b b b b b f . . 
        . . . f 1 1 1 1 f b b b b f f . 
        . . . f b b b f f f b b b b f . 
        . . . f d d d b 1 1 f b b f . . 
        . . . f d d d b 1 1 b f f . . . 
        . . f b d b d b b b b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    nv_map3,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b c f . 
        f f b b b b b b b b b b c f . . 
        . f c c c f f f f f f f e c . . 
        . . . f b b d b d d e 4 4 e . . 
        . . . f f 1 1 d 1 d e e f . . . 
        . . . . . f b b f f f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b c f 
        . f c b b b b b b b b b b b b f 
        . . f c b b b b b b b b b b f f 
        . . c e f f f f f f f c c c f . 
        . . e 4 4 e d d b d b b f . . . 
        . . . f e e d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    nv_map3,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 d b 3 d d 3 b d 3 3 f . 
        . f 3 3 f f d d d d f f 3 3 f . 
        . f b b f b f d d f b f b b f . 
        . f b b d b f 1 1 f b d b b f . 
        f f b b f 1 1 1 1 1 1 f b b f f 
        f b b f f f d d d d f f f b b f 
        . f d d f b d d d d b f d d f . 
        . . d 4 c d d d d d d c 4 d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    boss_map3()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    game.showLongText("This is the exit that leads to another place", DialogLayout.Bottom)
    x0 = 1
    Map2()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    Map3()
    game.showLongText("This is a forbidden land guarded by a Guardian God", DialogLayout.Bottom)
    game.showLongText("Let's destroy the Guardian with the Witch's item", DialogLayout.Bottom)
})
function Map1 () {
    nv1_talk1.destroy()
    nv2_talk1.destroy()
    scene.setBackgroundColor(10)
    tiles.setCurrentTilemap(tilemap`level1`)
    nv_map1 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 a b 3 a a 3 b a 3 3 f . 
        . f 3 3 f f a a a a f f 3 3 f . 
        . f a a f d f a a f d f a a f . 
        . f a a a d f 1 1 f d a a a f . 
        f f a a f 1 1 1 1 1 1 f a a f f 
        f a a f f f 1 1 1 1 f f f a 4 f 
        . f d d f b b b b b b f d d f . 
        . . d d c d d d d d d c d d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(nv_map1, 100, 100)
    tiles.placeOnRandomTile(nv_map1, sprites.builtin.field0)
    scene.cameraFollowSprite(nv_map1)
    game.showLongText("The princess has reached the edge of the forest. Ahead is a dark forest", DialogLayout.Full)
    game.showLongText("Find a way to get over it", DialogLayout.Bottom)
    tiles.placeOnRandomTile(nv_map1, sprites.builtin.forestTiles0)
    characterAnimations.loopFrames(
    nv_map1,
    [img`
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . f 3 3 3 3 d b 3 d d 3 3 f . 
        . . f 3 3 3 3 f f d d d 3 3 f . 
        . . f b b b b f 9 f d d d 3 f . 
        . . f b b b b d 9 f 1 1 d f . . 
        . f f b b b b f 1 1 1 1 f . . . 
        . f b b b b f f f 4 4 4 f . . . 
        . . f b b f 1 1 d d d d f . . . 
        . . . f f 4 1 1 4 4 4 4 f . . . 
        . . . . f b 4 4 b 4 b 4 b f . . 
        . . . . f f 4 1 4 1 4 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 4 4 f . . . 
        . . . . f f b f 5 4 5 5 4 f . . 
        . . . f b 3 3 e 4 5 5 5 5 f . . 
        . . f b 3 3 3 3 e 4 4 4 e f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 e b 3 e e 3 3 f . 
        . . f 3 3 3 3 f f e e e 3 3 f . 
        . f f b b b b f b f e e e f . . 
        . f b b b b b e 1 f 4 4 e . . . 
        . f b b b b b f 4 4 4 4 f . . . 
        . . f b b b 4 4 e d d d f . . . 
        . . . f f f 4 4 e d d d f . . . 
        . . . f b b e e b b d d d f . . 
        . . . . f b d d 1 d 1 d b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    nv_map1,
    [img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 b b 3 b b 3 3 3 3 f . . 
        . f 3 3 b b b f f 3 3 3 3 f . . 
        . f 3 b b b f 8 f b b b b f . . 
        . . f b 1 1 f 8 b b b b b f . . 
        . . . f 1 1 1 1 f b b b b f f . 
        . . . f b b b f f f b b b b f . 
        . . . f d d d b 1 1 f b b f . . 
        . . . f d d d b 1 1 b f f . . . 
        . . f b d b d b b b b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    nv_map1,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b c f . 
        f f b b b b b b b b b b c f . . 
        . f c c c f f f f f f f e c . . 
        . . . f b b d b d d e 4 4 e . . 
        . . . f f 1 1 d 1 d e e f . . . 
        . . . . . f b b f f f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        f c b b b b b b b b b b b b c f 
        f b b b b b b b b b b b b b b f 
        . f c c b b b b b b b b c c f . 
        . . e 4 c f f f f f f c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 3 3 3 3 3 3 e f . . . 
        . . f b 3 3 3 3 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f b 3 3 3 3 3 3 3 3 3 3 b f . 
        . f b b 3 3 3 3 3 3 3 3 b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b c f 
        . f c b b b b b b b b b b b b f 
        . . f c b b b b b b b b b b f f 
        . . c e f f f f f f f c c c f . 
        . . e 4 4 e d d b d b b f . . . 
        . . . f e e d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    nv_map1,
    [img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 d b 3 d d 3 b d 3 3 f . 
        . f 3 3 f f d d d d f f 3 3 f . 
        . f b b f b f d d f b f b b f . 
        . f b b d b f 1 1 f b d b b f . 
        f f b b f 1 1 1 1 1 1 f b b f f 
        f b b f f f d d d d f f f b b f 
        . f d d f b d d d d b f d d f . 
        . . d 4 c d d d d d d c 4 d . . 
        . . d f b d b d b d b b f d . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b e e 4 4 4 4 4 f b b f . 
        . . f 4 4 4 e d d d b f e f . . 
        . . f e 4 4 e d d d d c 4 e . . 
        . . . f e e d d b d b b f e . . 
        . . . f f 1 d 1 d 1 1 f f . . . 
        . . . . . f f f b b f . . . . . 
        `,img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . f e 3 3 3 3 3 3 3 3 3 3 e f . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f b 3 f f e e e e f f 3 b f . 
        f f b b f b f e e f b f b b f f 
        f b b b e 1 f 4 4 f 1 e b b b f 
        . f b b f 4 4 4 4 4 e e b b f . 
        . . f e f b d d d e 4 4 4 f . . 
        . . e 4 c d d d d e 4 4 e f . . 
        . . e f b b d b d d e e f . . . 
        . . . f f 1 1 d 1 d 1 f f . . . 
        . . . . . f b b f f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile.overlapsWith(boss)) {
        hp_boss += randint(-50, -10)
        projectile.destroy()
        console.log("test")
    }
    if (hp_boss < 0) {
        x1 += 1
        pause(2000)
        Map4()
    }
})
let projectile: Sprite = null
let x1 = 0
let nv_map4: Sprite = null
let nv_map1: Sprite = null
let skill3_boss_map3: Sprite = null
let skill2_boss_map3: Sprite = null
let boss: Sprite = null
let nv_map3: Sprite = null
let skill1_boss_map32: Sprite = null
let nv_map2: Sprite = null
let x0 = 0
let hp_boss = 0
let nv2_talk1: Sprite = null
let nv1_talk1: Sprite = null
scene.setBackgroundImage(img`
    ddddddddddddddddddddddddddddddddddd111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddd1111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd11111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddd1111111111111111111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd1111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd111111111111111111cc1111111111111111111111111d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd11111111111111111111ccccc11111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddd111111111111111111111cccccc111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddd1111111d11111d111111111cccccccc11111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddddddddddddddddddddddddddddddd
    dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddddddddddddddddddddddddddddddd
    dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbdddddddddddddddddddddddddddddddddddddddddddddd
    dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddddddddddddddddddddddd
    dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbbddddddddddddddbdddddddddddddddddddddddddddddddddd
    ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddd
    dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbbbbbbbbbbbbbbbbbdddddddbddddddddddddddddddddddddddddddd
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddd
    bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
    bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddd
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbdddddddddddddddddd
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbddddddbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbcbbcbbbbbbbbbbbbddddddcddddddd
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbdddddddd
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbdddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbddddd
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbdd
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbb
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbcbb
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcddddddddddddbbbbbbcbbbbbbbbbbbbbb
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbddddddddcddddddddddbbbbbbcbcbbbbbb
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcddddddddddddddddddddddbbbbbcbbbbbb
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddbbbbbbbcbbbb
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbb
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddcddddddddddddddddddddbbbbbbbbbbb
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddddddddddddddddcddddddddddddbbbbccbbbb
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbccbbbc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddbbbbbbbbbb
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddcdddddddddddbbbbbbbbb
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbddddddddddddddddddddddddddddddbdcddddddddcddddddddddcbbbbbbbbb
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbddddddddcdbddddddddddddddddddddbbbbbbbbb
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbddddddddddddddddbbddddddddddbbbbbbbbb
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbdddddddddcdddddddddddddddddddddbbbbbbbbb
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbddddddddddddddddddddddddddddbbbbbbbbb
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbddddddddddddddddddddcdddddddddddddbbbbbbbb
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddddddddddddddddddddddddddddddddbbbbbbbb
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddddddddddddddddddddddddddddddddbbbbbbbb
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddddddddddddddddddddcbdddddddddddbbbbbbbb
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbddddddddddddddddddddddddddddddddddbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddddddcddddddddddddddddddddddddddbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddddddddddddddddddddddddddddddddddbbbbbbb
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbddddddddddddddddddddddddddddddddbbbbbbc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcdddddddddddddddddddddddddddddddddbbbbbb
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcddddddddddddddddddddcddddddddddddddbbbbb
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbdddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddbbbb
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcdcdddddddddddddddddcbddddddddddddddcddddbbbb
    cccccccccccccccccccccdccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddbddddddddddddcbcddddbbbb
    ccccccccccccccccccdccddddccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddcdddddbddddddddddccddddddddddddddddddbbb
    cccccccccccccccddcddcccddddccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcddddddddddddddddddddddddddddddddddddddddddddbbb
    cccccccdccddddcddddddcddddddcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcdddddddddddddddddddcddddddddddddddbdddddddddddbbb
    ccdcccdddddddddddddddddddddcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbddddddddddddddddddddcddddddddddddddddddddddddddddbbbb
    cddcccddddddddddddddddddddddbcdcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbdddccccbdcdddddcbcdddcddcddddddddddccdddcdddddddddddddddbddddddddddddbbbbb
    dcdddddddddddddddddddddddddddddbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccddddddddddddddddcbddddddddddddddddcdddddddddddddddddddccddddddddddddbbbbbb
    dddddddddddddddddddddddddddddddcdddcdcdddcbcfcbccdccbddddddddddddddddddddddddddddbbbcdddddddddddddddddddcdbddddddddddddcdddddddddddddddddddddddddddddddddbbbbbbb
    ddddddddddddddddddddddddddddddddddddcdddddddffdfcddddccddddddddddddddddddddddddbdccdddddddddddddddddddddcddddcdddddddddddddddddddddddddddddddddddddddddbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddbdbdddddbcfbddddddcccbcbcbdddddddddddddccccddddddddddddddddddddddddddddddddddddddddddcdddddddccdddddddddddddddddddbbbbbbbbbb
    ddddddddddddddddddddddddddddccdddddddddddddddddcdddddddddcddccccddbdbbbdddcfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddbbbbbbbbbbbb
    dddddddddddddddddddcdddddddddddddddddddddddddddddddddddcdbdddddddddddddddddcddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddcddddddcdddddddddddddddddddddbddddcbddddddddddcddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbcbbcbbbbb
    ddddddddddddddddddddddddddddddddcdddddddbdddddddddddddddddddddddddddddcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddbbbbbbbbbcbbcbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddbddddddbddddddddddddddddddddddbdcddddcdddddddddddddddcddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbb
    `)
nv1_talk1 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 4 b 3 4 4 3 b 4 3 3 f . 
    . f 3 3 f f 4 4 4 4 f f 3 3 f . 
    . f 4 4 f 1 f 4 4 f 1 f 4 4 f . 
    . f 4 4 4 1 f d d f 1 4 4 4 f . 
    f f 4 4 f d d d d d d f 4 4 f f 
    f 4 4 f f f d d d d f f f 4 4 f 
    . f d d f b b b b b b f d d f . 
    . . d d c d d d d d d c d d . . 
    . . d f b d b d b d b b f d . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
nv2_talk1 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
nv1_talk1.setPosition(50, 82)
nv2_talk1.setPosition(100, 81)
hp_boss = 500
Map1()
game.onUpdate(function () {
    if (x1 == 1) {
        if (boss.vy < 0) {
            boss.setImage(img`
                ....................6666666.......................
                ....................6666666.......................
                ...............666666667777666.6666666............
                ...............666666667777666.6666666............
                ..............677777777777777767777766............
                .........66666677777555777775577777766666.........
                .........66666677777555777775577777766666.........
                .......667776666666755555775557777767777766666....
                .......6677766777777775555555577777777766667776...
                .......6677766777777775555555577777777766667776...
                ....666666667777777777777557777777777766666666....
                .6666667777677777777555775575555577777777667776...
                .6666667777677777777555775575555577777777667776...
                6666667777767777777555777555775555577777766777666.
                6666667777767777777555777555775555577777766777666.
                .6666677766777777777777775557777777777777776776666
                .cc67766677777677777777777757777777777677777666...
                .cc67766677772227777777777757777722777677777666...
                ccc7776666666222277777777777777722277776666666666c
                ccc7666666667722227777777777777222277777766677766c
                ccc7666666667772222777777777722222777777766677766c
                c6666667777677777227777777777227766666777666667776
                66666677766666677777667777776677766777666776666666
                66666677766666677777667777776677766777666776666666
                cccc776667776677777766677777666776677776677766cccc
                ccc77766677766777776777667776676666677766777666ccc
                ccc77766677766777776777667776676666677766777666ccc
                .66666c667766667766777766666667776666666666666ccc.
                .66666c667766667766777766666667776666666666666ccc.
                .ccccc6666676666666777666666667776677766666cccccc.
                ....ccccc777cc677667666666676667766677766666ccccc.
                ....ccccc777cc677667666666676667766677766666ccccc.
                ....ccc66776cc7776666676666777666666666cc66666ccc.
                ......c66ccc66766cc66677766777c6666c66666ccccc....
                ......c66ccc66766cc66677766777c6666c66666ccccc....
                ......cccccccc6cc6666667766677ccc66cccc66ccccc....
                .........cccccccc666cc666cc666ccccccccccccc.......
                .........cccccccc666cc666cc666ccccccccccccc.......
                ...........ccc.cccc6cc6ccccc66cccccc..ccc.........
                ...........ccc.cccc6cc6ccccc66cccccc..ccc.........
                .................cccccccccccccccc.................
                ....................ffeeeeeeeee...................
                ....................ffeeeeeeeee...................
                ...................feeeeeeeeeefee.................
                ..............eeeeeeeefeeeeefffeeee...............
                ..............eeeeeeeefeeeeefffeeee...............
                ...................ffffffeeeff...eee..............
                .......................ffeee......................
                .......................ffeee......................
                .........................ee.......................
                `)
        } else if (boss.vy > 0) {
            boss.setImage(img`
                ...............................5555...............
                .............55.................55555555..........
                ...........5555.....................5555..........
                ..........55.55.........86........................
                .........5555......6688867886.....................
                .......555.........8666877688868..................
                ......55............868777767768......5...........
                .....55..........688667777776688......55..........
                ................67767777777778666......55.........
                .................6776667767666868.......55........
                ..........5.......866667667677688.......555.......
                .........5.......8666666666667778........5555.....
                .......555......667766666666666676.........55.....
                ......555......67766667666776667776.........5.....
                .....555......886667776676557666688...............
                ...5555......67766777665555777666768..............
                ..5555......6776666665557667776666776.............
                ..55.........8667775557766676677776776............
                ..55..........8777666666667776777776688...........
                ............6887766776677677777777776776..........
                ..........8866666677767777777777766666778.........
                .........86666666777667767777766666776668.........
                ..........88677666666777677677665567776668........
                ..........86776677666666666666667755666668.55.....
                ........886666677766667666666776677556668...5.....
                ......5.6668666676667766767767766677566668...5....
                .....5..88866666666777677677667666666776668..55...
                ....55...86668866666765776776666667766666668..5...
                ...55....86688666666555776666667667776666688..55..
                ...5.....668866666655666666666677666666688.....5..
                ..55......8866686665566666677667776666668......5..
                ...........866886656666666677667776666668......5..
                ...........86886668666666667666666666888..........
                ............88866886686666666666666668............
                ........5.....86886668666866668666868.............
                .......55.....88866688668866688866888......5......
                ......55........8888888688888ce868.........55.....
                .....55...............e88e88.ec.8...........55....
                ....55.................eeee..e..............55....
                ...55..........5.......ceef.ce...5..........5.5...
                ...5........5555.......ceefcec...5555........55...
                ...........555.........feefce.....5555........5...
                ..........555..........fceeec.....55.5........5...
                .........555...........ffceec......555555.........
                ........555.........................55555.........
                .....................................5..555.......
                ......................................5..55.......
                ..................................................
                ..................................................
                ..................................................
                `)
        } else {
            boss.setImage(img`
                .....................ccccc66666...................
                .....................ccccc66666...................
                .....................ccccc66666...................
                ...................cc6665577666cc.................
                ...................cc6665577666cc.................
                ................ccc66777775577766ccc..............
                ................ccc66777775577766ccc..............
                ................ccccc666777766666666..............
                ................ccccc666777766666666..............
                ..............ccccc66ccc666666677ccccc............
                ..............ccccc66ccc666666677ccccc............
                ...........666cc666666667777777ccccc66ccc.........
                ...........666cc666666667777777ccccc66ccc.........
                ...........ccc776666666666776666677777666.........
                ...........ccc776666666666776666677777666.........
                ...........ccc667777777777777777777766ccc.........
                ...........ccc667777777777777777777766ccc.........
                ...........ccccc66677777777777777666ccccc.........
                ...........ccccc66677777777777777666ccccc.........
                .........cc66677ccccc77766667776666677666cc.......
                .........cc66677ccccc77766667776666677666cc.......
                .........cc777777776666666666667777777777cc.......
                .........cc777777776666666666667777777777cc.......
                .........cc66677777777777777777777777766666.......
                .........cc66677777777777777777777777766666.......
                .........ccccc7777766777777766677777666666666.....
                .........ccccc7777766777777766677777666666666.....
                .........ccccc7777766777777766677777666666666.....
                ......ccc6677766ccccc666776666666666667777766.....
                ......ccc6677766ccccc666776666666666667777766.....
                ......ccc777777777766666666666666777777777766.....
                ......ccc777777777766666666666666777777777766.....
                ......ccccc77777777777777777777777777777766cc.....
                ......ccccc77777777777777777777777777777766cc.....
                .........cc666776667777777667777777766777cc.......
                .........cc666776667777777667777777766777cc.......
                ...........ccccc6666677766666667766666ccc.........
                ...........ccccc6666677766666667766666ccc.........
                ..............ccccccc666cc66666ccccccc............
                ..............ccccccc666cc66666ccccccc............
                ...................cccccccccccccc.................
                ...................cccccccccccccc.................
                ........................eeee......................
                ........................eeee......................
                .....................eeeeeeeeee...................
                .....................eeeeeeeeee...................
                ...................eeeeeeeeeeeeee.................
                ...................eeeeeeeeeeeeee.................
                ........................eeee......................
                ........................eeee......................
                `)
        }
        if (boss.isHittingTile(CollisionDirection.Bottom)) {
            boss.vy += -300
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (x1 == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, nv_map3, -100, 0)
    }
})
game.onUpdateInterval(2000, function () {
    if (x1 == 1) {
        skill1_boss_map32 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . 
            f . . . . 7 7 7 f 7 7 7 7 . . . 
            7 f . . 7 7 7 f 7 7 7 f 7 7 7 . 
            . 7 f f 7 7 f 7 7 7 f 7 7 7 f 7 
            . . 7 7 f f f f f f f f f f 7 . 
            . . . . 7 7 7 f 7 7 f 7 7 7 . . 
            . . . . . . 7 7 f 7 7 f 7 . . . 
            . . . . . . . 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, 100, -100)
        skill2_boss_map3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . 
            f . . . . 7 7 7 f 7 7 7 7 . . . 
            7 f . . 7 7 7 f 7 7 7 f 7 7 7 . 
            . 7 f f 7 7 f 7 7 7 f 7 7 7 f 7 
            . . 7 7 f f f f f f f f f f 7 . 
            . . . . 7 7 7 f 7 7 f 7 7 7 . . 
            . . . . . . 7 7 f 7 7 f 7 . . . 
            . . . . . . . 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, 100, 0)
        skill3_boss_map3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 7 . . . . . 
            f . . . . 7 7 7 f 7 7 7 7 . . . 
            7 f . . 7 7 7 f 7 7 7 f 7 7 7 . 
            . 7 f f 7 7 f 7 7 7 f 7 7 7 f 7 
            . . 7 7 f f f f f f f f f f 7 . 
            . . . . 7 7 7 f 7 7 f 7 7 7 . . 
            . . . . . . 7 7 f 7 7 f 7 . . . 
            . . . . . . . 7 7 7 7 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, 100, 50)
    }
})
