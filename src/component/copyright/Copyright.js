import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import '../copyright/copyright.scss'
import {
    Container,
    Avatar,
    Typography,
    Button,
    TextField,
    Link,
    Box,
  } from "@material-ui/core";

export const Copyright = () => {
    return (
        <div>
              <Box className="copy_text">
            <Typography variant="h6">
                <AiOutlineCopyright/> 2021 Gastropro. All rights reserved. -
                <Link href="#">Imprint</Link>
            </Typography>
            </Box>
        </div>
    )
}
