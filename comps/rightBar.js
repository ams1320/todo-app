import { Box, Checkbox, FormControlLabel, FormGroup, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Inbox, Drafts, Circle } from '@mui/icons-material';
import Link from "next/link";
import style from"@/styles/right.module.css"
const Rightbar = () => {
    return (
        <>

            <Box sx={{ width: '100%', maxWidth: 220, bgcolor: '', paddingLeft: "2rem" }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem >
                            <Link href="/task/work" className={style.link}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Circle sx={{ color: "skyblue" }} />
                                    </ListItemIcon>
                                    <ListItemText className={style.linkText} primary="work" />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link href="/task/study" className={style.link}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Circle sx={{ color: "blue" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="study"  className={style.linkText}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link href="/task/family" className={style.link}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Circle sx={{ color: "wheat" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="family" className={style.linkText}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link href="/task/entertaiment" className={style.link}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Circle sx={{ color: "greenyellow" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="erntertaiment" className={style.linkText}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <FormGroup >
                            <FormControlLabel sx={{ ml: 3, mt: 1 }} control={<Checkbox />} label={<Typography sx={{ fontSize: ".8rem" }}>hide done tasks</Typography>} />
                        </FormGroup>
                    </List>
                </nav>
            </Box>

        </>
    )
}

export default Rightbar;