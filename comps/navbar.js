import { Add, HdrPlus, PlusOne } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const Navbar = () => {

    return (
        <>
            <Box>
                <Stack direction='row' justifyContent="space-between" p={5}>
                    <Typography variant="h4">todo list</Typography>
                    <Add sx={{fontSize:"3rem"}}/>
                </Stack>
            </Box>
        </>
    )

}
export default Navbar;