type Tone = string

type ChordType = string

type Chord = {
  root: Tone,
  chordType: ChordType
}

type Question = {
  correctAnswer: number,
  choices: Chord[]
}
