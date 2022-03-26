import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router"

function About(props: Props) {
  const navigate = useNavigate()
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h5" component="h2">このゲームについて</Typography>
        <Typography>このゲームは、コードを聞き取ってコードネームを当てるゲームです。</Typography>
        <Typography>「コードを再生」ボタンを押してコードを再生した後に、4つの選択肢の中から適切なコードを選んでください。</Typography>
        <Typography>ピアノ音：魔王魂</Typography>
        <Button onClick={() => navigate(-1)}>前のページへ戻る</Button>
      </Stack>
    </Container>
  )
}

type Props = {
  
}

export default About
