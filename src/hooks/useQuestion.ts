import { useEffect, useState } from "react"
import { getRandomChords, toChordName } from "../modules/chords"
import { playChord, playChordStep } from "../modules/soundPlayer"

export const useQuestion = () => {
  const choiceNumber = 4

  const [answerAcceptable, setAnswerAcceptable] = useState(true)
  const [questionNumber, setQuestionNumber] = useState(-1)
  const [choiceChords, setChoiceChords] = useState<Chord[]>([{ root: "C", chordType: "" }])
  const [answerIndex, setAnswerIndex] = useState(0)
  const [userAnswerIndex, setUserAnswerIndex] = useState<number | null>(0)
  
  const answer = toChordName(choiceChords[answerIndex])
  const choices = choiceChords.map(chord => toChordName(chord))
  
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
    setChoiceChords(getRandomChords(choiceNumber))
    setAnswerIndex(Math.floor(Math.random() * choiceNumber))
    setUserAnswerIndex(null)
  }

  return {
    answerAcceptable, questionNumber, answerIndex, userAnswerIndex, choices, answer, 
    isChoiceCorrect, playAnswerChord, playChoiceChord, playAnswerChordStep, playChoiceChordStep, judgeAnswer, changeToNextQuestion
  }
}
