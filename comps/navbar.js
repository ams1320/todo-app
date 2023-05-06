import { Add, HdrPlus, PlusOne } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {updateBasket} from "./../redux/taskReducer"
import * as yup from "yup"

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    p: 4,
};

const validationSchema = yup.object({
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
});

const Navbar = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [List, Setlist] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            type: "",
            title: "",
            info: "",
            done: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values,actions) => {
            alert(JSON.stringify(values, null, 2));
            let todos = !window.localStorage.getItem('task')?[]:JSON.parse(window.localStorage.getItem('task'));
            todos.push(values)
            Setlist([...List,todos])
            window.localStorage.setItem("task",JSON.stringify(List));
            actions.resetForm();
            // router.refresh();
        },
    });

    return (
        <>
            <Box>
                <Stack direction='row' justifyContent="space-between" p={5}>
                    <Typography variant="h4">todo list</Typography>
                    <Button><Add sx={{ fontSize: "3rem" }} onClick={handleOpen} /></Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={formik.handleSubmit} style={{ border: "solid 1px gray", padding: 10, borderRadius: 6, height: 400,boxShadow:"4px 4px 6px gray" }}>
                            <Typography variant="h4" mb={2}>add new task</Typography>
                                <Grid container >
                                    <Grid sm={12} p={1} mb={1}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">task type</InputLabel>
                                            <Select
                                                sx={{ boxShadow: "2px 2px 3px grey", borderRadius: 2 }}
                                                name="type"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={formik.values.type}
                                                label="task type"
                                                onChange={formik.handleChange}
                                                error={formik.touched.type && Boolean(formik.errors.type)}
                                                helperText={formik.touched.type && formik.errors.type}
                                            >
                                                <MenuItem value={"work"}>work</MenuItem>
                                                <MenuItem value={"study"}>study</MenuItem>
                                                <MenuItem value={"family"}>family</MenuItem>
                                                <MenuItem value={"entertaiment"}>entertaiment</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid sm={12} p={1} mb={1}>
                                        <TextField
                                            fullWidth
                                            sx={{ boxShadow: "3px 3px 4px grey", width: 360, ml: 2, borderRadius: 2 }}
                                            id="title"
                                            name="title"
                                            label="task title"
                                            type="string"
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            error={formik.touched.title && Boolean(formik.errors.title)}
                                            helperText={formik.touched.title && formik.errors.title}
                                        />
                                    </Grid>
                                    <Grid sm={12} p={1} mt={0}>
                                        <TextField
                                            fullWidth
                                            sx={{ boxShadow: "3px 3px 4px grey", width: 360, ml: 2, borderRadius: 2 }}
                                            id="info"
                                            name="info"
                                            label="task info"
                                            value={formik.values.info}
                                            onChange={formik.handleChange}
                                            error={formik.touched.info && Boolean(formik.errors.info)}
                                            helperText={formik.touched.info && formik.errors.info}
                                        />
                                    </Grid>
                                </Grid>



                                <Button onSubmit={formik.handleReset} color="success" variant="contained" fullWidth type="submit" sx={{bottom:"0%",top:"12%"}}>
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Modal>
                </Stack>
            </Box>
        </>
    )

}
export default Navbar;