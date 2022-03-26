import * as Tone from 'tone'
import C3 from '../audio/C3.mp3'
import D3 from '../audio/D3.mp3'
import E3 from '../audio/E3.mp3'
import F3 from '../audio/F3.mp3'
import G3 from '../audio/G3.mp3'
import A3 from '../audio/A3.mp3'
import B3 from '../audio/B3.mp3'
import C4 from '../audio/C4.mp3'
import { getChordNotes } from './chords'

const noteLength = "1n"

const pianoSampler = new Tone.Sampler({
  urls: { C3, D3, E3, F3, G3, A3, B3, C4 },
}).toDestination()

export const playChord = (chord: Chord) => {
  getChordNotes(chord).forEach(note => {
    pianoSampler.triggerAttackRelease(note, noteLength)
  })
}

export const playChordStep = (chord: Chord) => {
  getChordNotes(chord).forEach((note, index) => {
    pianoSampler.triggerAttackRelease(note, noteLength, index)
  })
}
