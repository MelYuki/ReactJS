import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const requestAge = createAsyncThunk(
    "age/request",
    async (firstname) => {
        const response = await axios.get("https://api.agify.io/", {
            params: {
                name: firstname,
                country_id: "BE"
            }
        })
        return response.data
    }
)