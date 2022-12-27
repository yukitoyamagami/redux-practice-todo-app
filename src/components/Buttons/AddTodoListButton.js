import Button from '@mui/material/Button';

const AddTodoListButton = ({
  onClick,
  }) => (
  <Button variant="contained" onClick={onClick}>
    TODO追加
  </Button>
)

export default AddTodoListButton;
