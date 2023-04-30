import { Button, Card, CardActions, CardContent, Grid, Typography, Box, Stack, FormGroup, FormControlLabel, Checkbox, ListItemIcon } from '@mui/material';
import { MoreHoriz, Circle, Edit, Delete } from '@mui/icons-material';
import Style from "../styles/card.module.css"
import { useEffect, useState } from 'react';

const Cards = () => {

    const list = ["work", "study", "family", "entertainment"];

    const [State, Setstate] = useState({
        task:[],
    })

    useEffect(() => {
        const data= async()=>{
            const tasks =await JSON.parse(localStorage.getItem("task"))
            Setstate({task:tasks})
        }
        data();
    }, [])

    const handledelete =(index)=>{
        let todos= JSON.parse(localStorage.getItem("task"));
            todos.splice(index,1);
            let task= !localStorage.setItem("task",JSON.stringify(todos))?[]:localStorage.setItem("task",JSON.stringify(todos))
            Setstate({Tasks:task})
        }

    return (
        <>
            <Box>
                <Grid container >
                    {!State.task ? <Typography variant='h4'>nothing here</Typography> :
                        State.task.map((task,index) => {
                            
                            return (
                                <Grid sm={6} mb={2}>
                                    <Card sx={{ maxWidth: 460 }} className={Style.card}>
                                        <CardContent>
                                            <Stack direction='row' justifyContent="space-between">
                                                <Typography variant='h5' sx={{ fontWeight: "700", textDecorationLine: task.done ? "line-through" : "none" }} className='title'>{task.title}</Typography>
                                                <Button data-bs-toggle="dropdown" aria-expanded="false"><MoreHoriz /></Button>
                                                <ul className="dropdown-menu" >
                                                    <Button className="dropdown-item" ><Edit fontSize='1rem' /> edit</Button>
                                                    <Button className="dropdown-item"  onClick={handledelete}><Delete fontSize='1rem' /> delete</Button>
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