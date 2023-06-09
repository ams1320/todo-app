import { Add, Circle, HdrPlus, PlusOne } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBasket } from "./../redux/taskReducer";
import Style from "../styles/card.module.css";
import * as yup from "yup";
import Link from "next/link";

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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            type: "",
            title: "",
            info: "",
            done: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {

            dispatch(updateBasket(values))
            actions.resetForm();
        },
    });

    return (
        <>
            <Box>
                <Stack direction='row' justifyContent="space-between" p={1} mt={1}>
                    <Link href="/" style={{textDecoration:"none",color:"black"}}><Typography variant="h4" ml={5} fontWeight={700}>todo </Typography></Link>
                    <Button><Add sx={{ fontSize: "3rem",color :"black" }} onClick={handleOpen} /></Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={formik.handleSubmit} style={{ border: "solid 1px gray", padding: 10, borderRadius: 6, height: 400, boxShadow: "4px 4px 6px gray" }}>
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



                                <Button onSubmit={formik.handleReset} color="success" variant="contained" fullWidth type="submit" sx={{ bottom: "0%", top: "12%" }}>
                                    Submit
                                </Button>
                            </form>
                        </Box>
                    </Modal>
                </Stack>
                <Stack direction="row" justifyContent="space-around" sx={{ display: {sm:"none"},xs:"flex" }} mt={1} mb={4}>
                    <Link href="/task/work" className={Style.navbarLink} style={{ textDecoration: "none", color: "black",fontSize:18,fontWeight:700 }}>
                        <Circle sx={{ color: "skyblue", mr: 2,fontSize:"2rem" }} />
                        work
                    </Link>
                    <Link href="/task/study" className={Style.navbarLink} style={{ textDecoration: "none", color: "black",fontSize:18,fontWeight:700 }}>
                        <Circle sx={{ color: "blue", mr: 2,fontSize:"2rem" }} />
                        study
                    </Link>
                    <Link href="/task/entertaiment" className={Style.navbarLink} style={{ textDecoration: "none", color: "black" ,fontSize:18,fontWeight:700}}>
                        <Circle sx={{ color: "greenyellow", mr: 2,fontSize:"2rem" }} />
                        entertaiment
                    </Link>
                    <Link href="/task/family" className={Style.navbarLink} style={{ textDecoration: "none", color: "black",fontSize:18,fontWeight:700 }}>
                        <Circle sx={{ color: "wheat", mr: 2,fontSize:"2rem" }} />
                        family
                    </Link>


                </Stack>
            </Box>
        </>
    )

}
export default Navbar;