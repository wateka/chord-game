import { useEffect, useState } from "react"
import { getChordTones, getRandomChords, toChordName } from "../modules/chords"
import { playChord, playChordStep } from "../modules/soundPlayer"

export const useQuestion = (difficulty: string) => {
  const choiceNumber = 4

  const [answerAcceptable, setAnswerAcceptable] = useState(true)
  const [questionNumber, setQuestionNumber] = useState(-1)
  const [choiceChords, setChoiceChords] = useState<Chord[]>(["C"])
  const [answerIndex, setAnswerIndex] = useState(0)
  const [userAnswerIndex, setUserAnswerIndex] = useState<number | null>(0)
  
  const choices = choiceChords.map(chord => ({
    chordName: toChordName(chord),
    chordNoteString: `[${getChordTones(chord).join(", ")}]`
  }))
  
  useEffect(() => changeToNextQuestion(), [])

  const playAnswerChord = () => playChord(choiceChords[answerIndex])
  const playChoiceChord = (index: number) => playChord(choiceChords[index])
  const playAnswerChordStep = () => playChordStep(choiceChords[answerIndex])
  const playChoiceChordStep = (index: number) => playChordStep(choiceChords[index])

  const isChoiceCorrect = (index: number) => {
    return index === answerIndex
  }

  const judgeAnswer = (index: number) => {
    setAnswerAcceptable(false)
    setUserAnswerIndex(index)
    return index === answerIndex
  }

  const changeToNextQuestion = () => {
    setAnswerAcceptable(true)
    setQuestionNumber(questionNumber + 1)
    setChoiceChords(getRandomChords(choiceNumber, difficulty))
    setAnswerIndex(Math.floor(Math.random() * choiceNumber))
    setUserAnswerIndex(null)
  }

  return {
    answerAcceptable, questionNumber, answerIndex, userAnswerIndex, choices,
    isChoiceCorrect, playAnswerChord, playChoiceChord, playAnswerChordStep, playChoiceChordStep, judgeAnswer, changeToNextQuestion
  }
}
