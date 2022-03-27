import { ChordType } from "@tonaljs/tonal"

export const chordTypes = [
  '',
  'min',
  '7',
  'M7',
  'm7',
  'mM7',
  'dim',
  'aug',
  'add9',
  'sus4',
  '7sus4'
]

ChordType.add(["1P", "3M", "5A", "9M"], ["aug9"])
ChordType.add(["1P", "3M", "5P", "6M", "9M"], ["6(9)"])
ChordType.add(["1P", "3M", "5P", "7m", "9M"], ["7(9)"])
ChordType.add(["1P", "3M", "5P", "7M", "9M"], ["M7(9)"])
ChordType.add(["1P", "3M", "5P", "7m", "9m"], ["7(b9)"])
ChordType.add(["1P", "3M", "5P", "7m", "9A"], ["7(#9)"])
ChordType.add(["1P", "3m", "5P", "7m", "11P"], ["m7(11)"])
ChordType.add(["1P", "3M", "5P", "7m", "11P"], ["7(11)"])
ChordType.add(["1P", "3M", "5P", "7m", "11A"], ["7(#11)"])
ChordType.add(["1P", "3m", "5P", "7m", "13m"], ["m7(b13)"])
ChordType.add(["1P", "3M", "5P", "7m", "13m"], ["7(b13)"])
ChordType.add(["1P", "3m", "5P", "7m", "13M"], ["m7(13)"])
ChordType.add(["1P", "3M", "5P", "7m", "13M"], ["7(13)"])
ChordType.add(["1P", "3M", "5P", "7M", "13M"], ["M7(13)"])

ChordType.add(["1P", "3m", "5P", "9M", "11P"], ["madd9(11)"])
ChordType.add(["1P", "3M", "5P", "9M", "11P"], ["add9(11)"])
ChordType.add(["1P", "3m", "5P", "9M", "13M"], ["madd9(13)"])
ChordType.add(["1P", "3M", "5P", "9M", "13M"], ["add9(13)"])

ChordType.add(["1P", "5P", "7m"], ["7omit3"])
ChordType.add(["1P", "2M", "5P", "7m"], ["7sus2"])

ChordType.add(["1P", "5P", "7M"], ["M7omit3"])
ChordType.add(["1P", "3M", "7M"], ["M7omit5"])
ChordType.add(["1P", "3m", "7m"], ["m7omit5"])
ChordType.add(["1P", "2M", "5P", "7M"], ["M7sus2"])

ChordType.add(["1P", "4P", "5P", "6M"], ["6sus4"])
ChordType.add(["1P", "2M", "5P", "6M"], ["6sus2"])

ChordType.add(["1P", "3M", "7M", "9M"], ["M7(9)omit5"])
ChordType.add(["1P", "3M", "7m", "9M"], ["9omit5"])
ChordType.add(["1P", "3M", "6M", "9M"], ["6(9)omit5"])

export const questionPatterns: {[key: string]: string[][]} = {
  easy: [ //コードの基本的な響き
    ["C", "Cm", "Cdim", "Caug", "CM7", "C7", "Cm7", "Cdim7", "Csus4", "C7sus4"]
  ],
  normal: [ //構成音が似た音
    ["CmM7", "CM7", "C#m7b5", "Ebaug", "Em", "Amadd9"], //M7の聞き分け
    ["Cm7", "BM7", "Cm7b5", "C6", "Cm6", "Cdim7", "B7", "BbmM7"], //m7/M6の聞き分け
    ["C7", "Cm7b5", "C7#5", "C#dim7", "Daug", "Edim"], //m7の聞き分け
    ["C7sus4", "Abadd9", "Bb", "BbM7", "Gm7", "Gmadd9"], //sus4の聞き分け (浮遊感の聞き分け)
    ["B7(#9)", "CM7(9)", "C6(9)", "C#7(b9)"], //9thテンションの聞き分け
  ],
  difficult: [ //複雑なコード
    ["EbM7", "Em7", "CM7(9)", "Am7(11)", "Ab7(#11)", "F#m7(b13)", "F7(13)", "Fm7(13)"], //テンションの種類の聞き分け
    ["CM7", "CM7omit3", "CM7omit5", "CM7sus4", "CM7sus2", "D6sus4", "D6sus2"], //III, Vの聞き分け (M7編)
    ["C7", "Cm7", "C7omit3", "Cm7omit5", "C7sus4", "C7sus2"], //III, Vの聞き分け (m7編)
    ["Cadd9", "CM7(9)", "C6(9)", "C9", "CM7(9)omit5", "C6(9)omit5", "C9omit5"], //9thコードの構成音の聞き分け
    ["F#aug(9)", "G7(b9)", "AmM7", "Bm6"], //b9thドミナントの聞き分け
    ["F6(9)", "FM7(9)", "Dm7(11)", "Dmadd9(11)"], //9thサブドミナントの聞き分け
    ["CM7(13)", "Cadd9(13)", "C7(13)", "Em7(11)"] //13thトニックの聞き分け
  ]
}

export const tones = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

export const intervals = ["1P", "2m", "2M", "3m", "3M", "4P", "5d", "5P", "m6", "M6", "m7", "M7"]
