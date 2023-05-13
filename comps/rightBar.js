import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Inbox, Drafts, Circle } from '@mui/icons-material';
import Link from "next/link";
const Rightbar = () => {
    return (
        <>
 
            <Box sx={{ width: '100%', maxWidth: 220, bgcolor: '',paddingLeft:"2rem" }}>
                <nav aria-label="main mailbox folders">
                    <List sx={{ }}>
                        <ListItem >
                            <Link href="/task/work">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Circle sx={{color:"skyblue"}}/>
                                </ListItemIcon>
                                <ListItemText primary="work" />
                            </ListItemButton>
                            </Link>
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