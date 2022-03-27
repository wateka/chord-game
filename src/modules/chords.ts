import { Note } from "@mui/icons-material"
import { Chord, ChordType } from "@tonaljs/tonal"
import { chordTypes, intervals, questionPatterns, tones } from "./constraints"

// ChordType.add(["1P", "3m", "5m", "7m"], ["m7b5"], "half diminished")

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const getRandomElements = <T>(arr: T[], num: number): T[] => {
  const _arr = arr.slice()
  const result = []
  for (let i = 0; i < num; i++) {
    const r = Math.floor(Math.random() * _arr.length)    
    result.push(..._arr.splice(r, 1))
  }  
  return result
}

export const getRandomChords = (num: number, difficulty: string): Chord[] => {
  const interval = getRandomElement(intervals)
  const pattern = getRandomElement<string[]>(questionPatterns[difficulty])
  return getRandomElements(pattern, num).map(chord => Chord.transpose(chord, interval))
}

export const getChordPitches = (chord: Chord): Pitch[] => {
  const chordObj = Chord.get(chord)
  const rootPitch = chordObj.tonic ? chordObj.tonic + (['G', 'Ab', 'A', 'Bb', 'B'].includes(chordObj.tonic) ? 2 : 3) : ""
  return Chord.getChord(chordObj.aliases[0], rootPitch).notes
}

export const getChordTones = (chord: Chord): Tone[] => {
  return Chord.get(chord).notes
}

export const toChordName = (chord: Chord) => chord
