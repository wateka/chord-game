import { Chord } from "@tonaljs/tonal"
import { chordTypes, tones } from "./constraints"

// ChordType.add(["1P", "3m", "5m", "7m"], ["m7b5"], "half diminished")

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const getRandomElements = <T>(arr: T[], num: number): T[] => {
  const _arr = arr.slice()
  const result = []
  for (let i = 0; i < _arr.length && i < num; i++) {
    const r = Math.floor(Math.random() * _arr.length)
    result.push(..._arr.splice(r, 1))
  }
  return result
}

export const getRandomChord = (): Chord => {
  return {
    root: getRandomElement(tones),
    chordType: getRandomElement(chordTypes)
  }
}

export const getRandomChords = (num: number): Chord[] => {
  const root = getRandomElement(tones)
  const types = getRandomElements(chordTypes, num)
  return new Array(num).fill(0).map((_, i) => ({root, chordType: types[i]}))
}

export const getChordNotes = (chord: Chord): Pitch[] => {
  const rootPitch = chord.root + (['G', 'Ab', 'A', 'Bb', 'B'].includes(chord.root) ? 2 : 3)
  return Chord.getChord(chord.chordType, rootPitch).notes
}

export const toChordName = (chord: Chord) => chord.root + chord.chordType
