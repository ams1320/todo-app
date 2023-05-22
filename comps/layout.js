import { Box, Grid } from "@mui/material"
import Navbar from "./navbar";
import Rightbar from "./rightBar";
import store from "@/redux/store";
import styles from '@/styles/Home.module.css';
import { Provider } from "react-redux";

const Layout = ({ children }) => {
    return (
        <>
           <Box className={styles.main}>
           <Provider store={store} >
                <Navbar />
                <Grid container >
                    <Grid sm={3}>
                        <Rightbar/>
                    </Grid>
                    <Grid sm={9}>
                        {children}
                    </Grid>
                </Grid>
                </Provider>
           </Box>

        </>
    )
}

export default Layout;