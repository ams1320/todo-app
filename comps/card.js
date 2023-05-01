import { Button, Card, CardActions, CardContent, Grid, Typography, Box, Stack, FormGroup, FormControlLabel, Checkbox, ListItemIcon } from '@mui/material';
import { MoreHoriz, Circle, Edit, Delete } from '@mui/icons-material';
import Style from "../styles/card.module.css"

const Cards = () => {

    const list = ["work", "study", "family", "entertainment"];

    return (
        <>
            <Box>
                <Grid container >
                    <Grid sm={6}>
                        <Card sx={{ maxWidth: 490 }} className={Style.card}>
                            <CardContent>
                                <Stack direction='row' justifyContent="space-between">
                                    <Typography variant='h5' sx={{ fontWeight: "700" }}>card title</Typography>
                                    <Button data-bs-toggle="dropdown" aria-expanded="false"><MoreHoriz /></Button>
                                    <ul className="dropdown-menu" >
                                        <li className="dropdown-item"><Edit fontSize='1rem'/> edit</li>
                                        <li className="dropdown-item"><Delete fontSize='1rem'/> delete</li>
                                    </ul>
                                </Stack>
                                <Typography variant='p' sx={{ paddingTop: 10, fontSize: "1.1rem", fontWeight: "600" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eum nisi similique provident excepturi labore a est, cum neque officia!</Typography>
                            </CardContent>
                            <CardActions sx={{ direction: "rtl" }}>
                                <Stack direction='row-reverse' gap={26} flexItem>
                                    <Stack direction='row'>

                                        {list.map((tit) => (
                                            tit == "work" ? <Circle sx={{ color: "skyblue", fontSize: "2.5rem" }} titleAccess='work' /> :
                                                tit == "study" ? <Circle sx={{ color: "blue", fontSize: "2.5rem" }} titleAccess='study' /> :
                                                    tit == "family" ? <Circle sx={{ color: "wheat", fontSize: "2.5rem" }} titleAccess='family' /> :
                                                        <Circle sx={{ color: "greenyellow", fontSize: "2.5rem" }} titleAccess='entertainment' />
                                        ))}

                                    </Stack>
                                    <FormGroup >
                                        <FormControlLabel sx={{ direction: "ltr" }} control={<Checkbox />} label="Done" />
                                    </FormGroup>
                                </Stack>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid sm={6}>
                        <Card sx={{ maxWidth: 490 }} className={Style.card}>
                            <CardContent>
                                <Stack direction='row' justifyContent="space-between">
                                    <Typography variant='h5' sx={{ fontWeight: "700" }}>card title</Typography>
                                    <Button ><MoreHoriz /></Button>
                                </Stack>
                                <Typography variant='p' sx={{ paddingTop: 10, fontSize: "1.1rem", fontWeight: "600" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dicta veniam ipsam fugiat repellendus id iste? Nisi impedit dolore maiores amet beatae praesentium possimus, ipsa soluta temporibus laboriosam, provident reprehenderit porro cupiditate corrupti expedita nesciunt obcaecati, numquam distinctio quae nihil.</Typography>
                            </CardContent>
                            <CardActions>
                                <Stack justifyContent="flex-end">
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox />} label="Done" />
                                    </FormGroup>

                                </Stack>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </>
    )

}

export default Cards;