import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function NotificationCard({ notification }) {
  return (
    <Card elevation={2} sx={{ mb: 2 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 1 }}
        >
          <Typography variant="h6">
            {notification.Type}
          </Typography>

          <Chip
            label={notification.Type}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography variant="body1" sx={{ mb: 1 }}>
          {notification.Message}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {new Date(notification.Timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;