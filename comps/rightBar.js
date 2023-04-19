import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Inbox, Drafts, Circle } from '@mui/icons-material';
const Rightbar = () => {
    return (
        <>
            <h1>todo list</h1>
            <Box sx={{ width: '100%', maxWidth: 250, bgcolor: '' }}>
                <nav aria-label="main mailbox folders">
                    <List sx={{ }}>
                        <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Circle sx={{color:"skyblue"}}/>
                                </ListItemIcon>
                                <ListItemText primary="work" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Circle sx={{color:"blue"}}/>
                                </ListItemIcon>
                                <ListItemText primary="study" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Circle sx={{color:"wheat"}}/>
                                </ListItemIcon>
                                <ListItemText primary="family" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Circle sx={{color:"greenyellow"}}/>
                                </ListItemIcon>
                                <ListItemText primary="erntertaiment" />
                            </ListItemButton>
                        </ListItem>
                        <FormGroup >
                            <FormControlLabel sx={{ ml: 3,mt:1 }} control={<Checkbox />} label={<Typography sx={{ fontSize: ".8rem" }}>hide done tasks</Typography>} />
                        </FormGroup>
                    </List>
                </nav>
            </Box>

        </>
    )
}

export default Rightbar;