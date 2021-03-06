const { readFileSync, writeFileSync } = require('fs');

const buffer = readFileSync(__dirname + '/enter_high_score_nametable.bin');

const lookup = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-.\'>################qweadzxc###############/##!###########()############################################################################################################################################################### ';

const chars = [...buffer].map(value => lookup[value] || '__NOWAYNOWAY');

console.log(chars.join('').match(/.{35}/g).join('\n'));

const tiles = `
W0W################################
WWW################################
W#W###qwwwwwwwwwwwwwwwwwwwwwwwwe###
W#W###a                        d###
W#W###a                        d###
W#W###a                        d###
W#W###a       GOOD GAME        d###
W#W###a                        d###
X0W###a                        d###
XWW###a                        d###
X#W###a       YOU ARE A        d###
X#W###a                        d###
X#W###a     TETRIS MASTER#     d###
X#W###a                        d###
X#W###a                        d###
X#W###a PLEASE ENTER YOUR NAME d###
Y0W###a                        d###
YWW###a ###################### d###
Y#W###a #    NAME  SCORE  LV # d###
Y#W###a ###################### d###
Y#W###a # 1                  # d###
Y#W###a #                    # d###
Y#W###a # 2                  # d###
Y#W###a #                    # d###
Z0W###a # 3                  # d###
ZWW###a ###################### d###
Z#W###a                        d###
Z#W###zxxxxxxxxxxxxxxxxxxxxxxxxc###
Z#W################################
Z#W################################
Z#W#########A####A##000000##000000#
Z#W#000000##000000#########AAAAAAAA
`;
const practise = Buffer.from(buffer);
[...tiles.trim().split('\n').join('')].forEach((d, i) => {
    if (d !== '#') {
        practise[i] = lookup.indexOf(d);
    }
});

writeFileSync(
    __dirname + '/enter_high_score_nametable_practise.bin',
    require('./rle')(practise),
);
