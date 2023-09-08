import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Avatar, Typography} from '@mui/material'
import {blue} from '@mui/material/colors'
import {Favorite, Share, MoreVert} from '@mui/icons-material'

export default function ViewCard({title, content} : {title: string, content: string}) {
  return (
    <Card sx={{ width: 450, margin: '5px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="user">
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader="September 5, 2023"
      />
      <CardMedia
        component="img"
        height="400"
        image="/peer_logo.png"
        alt="Peer logo image"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
          </IconButton>
        <IconButton aria-label="share">
          <Share />
          </IconButton>
      </CardActions>
    </Card>
  );
}