import { Button, Card, CardActions, CardContent, Grid, Typography, Box, Stack, FormGroup, FormControlLabel, Checkbox, ListItemIcon } from '@mui/material';
import { MoreHoriz, Circle, Edit, Delete } from '@mui/icons-material';
import Style from "../styles/card.module.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {


    const dispatch = useDispatch();
    const tasks = useSelector((state)=> state.store.task)

    

    const [State, Setstate] = useState({
        Tasks: []
    })

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("task"))
        Setstate({ Tasks: tasks })

    }, [])
    return (
        <>
            <Box>
                <Grid container >
                    {!tasks ? <Typography variant='h4'>nothing here</Typography> :
                        tasks.map((task,index) => {
                            return (
                                <Grid sm={6} mb={1}>
                                    <Card sx={{ maxWidth: 460 }} className={Style.card}>
                                        <CardContent>
                                            <Stack direction='row' justifyContent="space-between">
                                                <Typography variant='h5' sx={{ fontWeight: "700", textDecorationLine: task.done ? "line-through" : "none" }} className='title'>{task.title}</Typography>
                                                <Button data-bs-toggle="dropdown" aria-expanded="false"><MoreHoriz /></Button>
                                                <ul className="dropdown-menu" >
                                                    <li className="dropdown-item"><Edit fontSize='1rem' /> edit</li>
                                                    <li className="dropdown-item"><Button onClick={()=>{
                                                        // let todos = JSON.parse(window.localStorage.getItem("task"));
                                                        // let todo = todos.filter((value,ind)=> ind !== index)
                                                        // Setstate({Tasks:todo})
                                                        // window.localStorage.setItem('task',JSON.stringify(!todo ? [] : todo));
                                                    }}><Delete fontSize='1rem' /> delete</Button></li>
                                                </ul>
                                            </Stack>
                                            <Typography variant='p' sx={{ paddingTop: 10, fontSize: "1.1rem", fontWeight: "600" }}>{task.info}</Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: "grid" }}>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Box>

                                                    {
                                                        task.type == "work" ? <Circle sx={{ color: "skyblue", fontSize: "2.5rem" }} titleAccess='work' /> :
                                                        task.type == "study" ? <Circle sx={{ color: "blue", fontSize: "2.5rem" }} titleAccess='study' /> :
                                                        task.type == "family" ? <Circle sx={{ color: "wheat", fontSize: "2.5rem" }} titleAccess='family' /> :
                                                                    <Circle sx={{ color: "greenyellow", fontSize: "2.5rem" }} titleAccess='entertainment' />
                                                  }
                                                </Box>

                                                <FormGroup >
                                                    <FormControlLabel control={<Checkbox onClick={() => {

                                                        // let tit = document.querySelector(".title")
                                                        // tit.style.textDecorationLine == "line-through" ? tit.style.textDecorationLine = "none" : tit.style.textDecorationLine = "line-through"
                                        
                                                   }} />} label="Done" />
                                                </FormGroup>
                                            </Stack>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Box>
        </>
    )

}

export default Cards;