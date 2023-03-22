import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function OutlinedCard(props) {
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" noWrap>
            {props.id}
          </Typography>
          <Typography variant="h6" component="div" noWrap>
            {props.name}
          </Typography>
          <Typography variant="h6" component="div" noWrap>
            {props.username}
          </Typography>
          <Typography variant="body2" noWrap>
            {props.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default OutlinedCard;
