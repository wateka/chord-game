import { CancelOutlined, CheckCircleOutlined, PlayCircleOutlined } from "@mui/icons-material"
import { Box, Button, Icon, IconButton, Stack } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  isEnabled: boolean
  isCorrect: boolean
  isSelected: boolean
  children: ReactNode
  onClick: () => void
  onPlay: () => void
}

export default function ChoiceButton(props: Props) {
  const color = props.isEnabled ? "primary" : props.isCorrect ? "success" : "error"
  const variant = "outlined"
  const startIcon = props.isEnabled ? null : props.isCorrect ? <CheckCircleOutlined/> : <CancelOutlined/>
  // const variant = !props.isEnabled && props.isCorrect ? "contained" : "outlined"

  return (
    <Box sx={{display: "flex"}}>
      <Button
        variant={variant}
        color={color}
        onClick={props.onClick}
        sx={{ textTransform: "none", flexGrow: 1, justifyContent: "start", fontSize: "h6.fontSize" }}
        startIcon={startIcon}
      >
        {props.children}
      </Button>
      {!props.isEnabled && (
        <IconButton onClick={props.onPlay}>
          <PlayCircleOutlined />
        </IconButton>
      )}
    </Box>
  )
}
