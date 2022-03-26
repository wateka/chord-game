import { Button, Container, Link, Stack } from "@mui/material";
import { useNavigate } from "react-router";

export default function TitlePage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Stack direction="row" mb={2}>
        <Button variant="outlined" onClick={() => navigate("/game")}>スタート</Button>
      </Stack>
      <Stack>
        <Link onClick={() => navigate("/about")}>このゲームについて</Link>
      </Stack>
    </Container>
  )
}
