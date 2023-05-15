import Head from 'next/head';
import Rightbar from "@/comps/rightBar";
import styles from '@/../../styles/Home.module.css'
import Navbar from "@/comps/navbar";
import Cards from "@/comps/card";
import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from '@mui/material';
import { useEffect } from 'react';


const Work = () => {

    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap")
      },[])

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>todo list</title>
            </Head>
            <main className={styles.main}>

                <Navbar />
                <Grid container>
                    <Grid sm={3}>
                        <Rightbar />
                    </Grid>
                    <Grid sm={9}>
                        <Cards type={"work"} />
                    </Grid>
                </Grid>

            </main>
        </>
    )

}
export default Work;