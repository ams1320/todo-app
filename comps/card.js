import { Button, Card, CardActions, CardContent, Grid, Typography, Box, Stack, FormGroup, FormControlLabel, Checkbox, ListItemIcon, TextField } from '@mui/material';
import { MoreHoriz, Circle, Edit, Delete } from '@mui/icons-material';
import Style from "../styles/card.module.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask , doneTask } from '@/redux/taskReducer';
import { Form, Formik, Field } from 'formik';
import * as yup from "yup";

const Cards = () => {


    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.store.task)




    return (
        <>
            <Box>
                <Grid container >
                    {!tasks ? <Typography variant='h4'>nothing here</Typography> :
                        tasks.map((task, index) => {
                            return (
                                <Grid sm={6} mb={2}>
                                    <Card sx={{ maxWidth: 460 }} className={Style.card}>
                                        <CardContent>
                                            <Stack direction='row' justifyContent="space-between">
                                                <Typography variant='h5' sx={{ fontWeight: "700", textDecorationLine: task.done ? "line-through" : "none" }} className='title'>{task.title}</Typography>
                                                <Button data-bs-toggle="dropdown" aria-expanded="false"><MoreHoriz /></Button>
                                                <ul className="dropdown-menu" >
                                                    <li className="dropdown-item"><Button data-bs-toggle="modal" data-bs-target={`#staticBackdrop${index}`}><Edit fontSize='1rem' /> edit</Button></li>

                                                    <li className="dropdown-item"><Button onClick={() => dispatch(deleteTask(index))}><Delete fontSize='1rem' /> delete</Button></li>
                                                </ul>
                                                <div class="modal fade" id={`staticBackdrop${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <Formik
                                                                    validationSchema={yup.object().shape({
                                                                        type: yup
                                                                            .string('enter the type ')
                                                                            .required('type of task is required'),
                                                                        title: yup
                                                                            .string('enter your task title')
                                                                            .min(1, 'title at least should have 1 character length')
                                                                            .required('title is required'),
                                                                        info: yup
                                                                            .string('Enter your task info')
                                                                            .min(8, 'information should be of minimum 8 characters length')
                                                                            .required('information is required'),

                                                                    })}
                                                                    initialValues={
                                                                        {
                                                                            type: task.type,
                                                                            title: task.title,
                                                                            info: task.info,
                                                                            done: task.done,
                                                                        }}
                                                                    onSubmit={async (values) => {

                                                                        dispatch(editTask({ index, task: values }))
                                                                    }}
                                                                    render={(formikBag) => (
                                                                        <Form style={{}} onSubmit={formikBag.handleSubmit} className="form-container">
                                                                            <Grid container mr={1}>
                                                                                <Grid sm={12} xs={12} mb={2} mt={2}>
                                                                                    <Field as="select" name="type" style={{ boxShadow: "2px 2px 3px grey", borderRadius: 2, width: 400,height:40 }} >
                                                                                        
                                                                                        <option value="work">work</option>
                                                                                        <option value="study">study</option>
                                                                                        <option value="family">family</option>
                                                                                        <option value="entertaiment">entertaiment</option>
                                                                                    </Field>

                                                                                </Grid>
                                                                                <Grid sm={12} mt={2}>
                                                                                    <Field render={({ field, form }) => (
                                                                                        <TextField
                                                                                            label="task title"
                                                                                            name="title"
                                                                                            error={
                                                                                                Boolean(form.errors.title && form.touched.title)
                                                                                            }
                                                                                            sx={{ boxShadow: "3px 3px 4px grey", width: 360, ml: 2, borderRadius: 2 }}
                                                                                            InputLabelProps={{ style: { fontSize: 15, fontWeight: 500, color: "black" } }}
                                                                                            onChange={formikBag.handleChange}
                                                                                            onBlur={formikBag.handleBlur}
                                                                                            helperText={
                                                                                                form.errors.title &&
                                                                                                form.touched.title &&
                                                                                                String(form.errors.title)
                                                                                            }
                                                                                        />

                                                                                    )} />
                                                                                </Grid>
                                                                                <Grid sm={12} mt={2}>
                                                                                    <Field render={({ field, form }) => (
                                                                                        <TextField
                                                                                            label="task information"
                                                                                            name="info"
                                                                                            error={
                                                                                                Boolean(form.errors.info && form.touched.info)
                                                                                            }
                                                                                            sx={{ boxShadow: "3px 3px 4px grey", width: 360, ml: 2, borderRadius: 2 }}
                                                                                            InputLabelProps={{ style: { fontSize: 15, fontWeight: 500, color: "black" } }}
                                                                                            onChange={formikBag.handleChange}
                                                                                            onBlur={formikBag.handleBlur}
                                                                                            helperText={
                                                                                                form.errors.info &&
                                                                                                form.touched.info &&
                                                                                                String(form.errors.info)
                                                                                            }
                                                                                        />

                                                                                    )} />
                                                                                </Grid>
                                                                                <Grid sm={12} xs={12} mt={7} >
                                                                                    <div className="modal-footer">
                                                                                        <Button color="success" variant="contained" fullWidth type="submit" sx={{ bottom: "0%", top: "12%" }}>
                                                                                            Submit
                                                                                        </Button>
                                                                                    </div>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Form>)}>
                                                                </Formik>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
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
                                                    <FormControlLabel  control={<Checkbox checked={!task.done ? false:true} onChange={()=>dispatch(doneTask({index , tasks: !task.done ?true : false}))}  />} label="Done" />
                                                </FormGroup>
                                            </Stack>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }


                </Grid>
            </Box >
        </>
    )

}

export default Cards;