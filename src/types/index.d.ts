declare module '*.mp3'

type Tone = string

type Pitch = string

type ChordType = string

type Chord = {
  root: Tone,
  chordType: ChordType
}

type Question = {
  correctAnswer: number,
  choices: Chord[]
}
