import { Button, Container, Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function TitlePage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Typography variant="h5" component="h2" mb={2}>難易度を選択してスタート</Typography>
      <Stack spacing={2} mb={2}>
        <Button variant="outlined" onClick={() => navigate("/game/easy")}>やさしい</Button>
        <Button variant="outlined" onClick={() => navigate("/game/normal")}>ふつう</Button>
        <Button variant="outlined" onClick={() => navigate("/game/difficult")}>難しい</Button>
      </Stack>
      <Stack>
        <Link onClick={() => navigate("/about")}>このゲームについて</Link>
      </Stack>
    </Container>
  )
}
