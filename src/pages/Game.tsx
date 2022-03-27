import { PlayCircleOutlined } from "@mui/icons-material"
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import ChoiceButton from "../components/choiceButton/ChoiceButton"
import { useQuestion } from "../hooks/useQuestion"

export default function Game() {
  const [quitModalState, setQuitModalState] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const difficulty = params.difficulty
  const {
    answerAcceptable, questionNumber, choices, answerIndex, userAnswerIndex,
    playAnswerChord, playChoiceChord, changeToNextQuestion, judgeAnswer
  } = useQuestion(difficulty || "easy")

  const handleChoiceClick = (index: number) => {
    judgeAnswer(index)
  }

  const handleChoicePlay = (index: number) => {
    playChoiceChord(index)
  }

  const handleNextClick = () => {
    changeToNextQuestion()
  }

  const handleQuitModalOpen = () => {
    setQuitModalState(true)
  }

  const handleQuitModalClose = () => {
    setQuitModalState(false)
  }

  const handleQuit = () => {
    navigate("/")
  }

  return (
    <>
      <Container>
        <Typography variant="h5" component="h2" mb={2}>
          難易度：
          {difficulty == "easy" && "やさしい"}
          {difficulty == "normal" && "ふつう"}
          {difficulty == "difficult" && "難しい"}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Typography>第{questionNumber + 1}問</Typography>
          <Button onClick={playAnswerChord} startIcon={<PlayCircleOutlined />}>コードを再生</Button>
        </Stack>

        <Stack spacing={2} mb={2}>
          {choices.map((choice, index) => 
            <ChoiceButton
              key={index}
              isEnabled={answerAcceptable}
              isCorrect={answerIndex === index}
              isSelected={userAnswerIndex === index}
              onClick={() => handleChoiceClick(index)}
              onPlay={() => handleChoicePlay(index)}
            >
              {choice.chordName}
              <Typography ml={2} variant="body2">{!answerAcceptable && choice.chordNoteString}</Typography>
            </ChoiceButton>
          )}
        </Stack>

        <Stack direction="row" justifyContent="end">
          <Button onClick={handleQuitModalOpen} color="secondary">ゲームを終了する</Button>
          <Button onClick={handleNextClick} disabled={answerAcceptable}>次の問題へ</Button>
        </Stack>
      </Container>

      <Dialog open={quitModalState} onClose={handleQuitModalClose}>
        <DialogTitle>ゲームを終了しますか？</DialogTitle>
        <DialogContent>
          <DialogContentText>ゲームを終了すると、タイトル画面に戻ります。</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleQuitModalClose}>ゲームを続ける</Button>
          <Button onClick={handleQuit}>終了する</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
