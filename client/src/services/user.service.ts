import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//hàm lấy dữ liệu carts
export const getCarts:any = createAsyncThunk("carts/getCarts",
    async ()=>{
        const response = await axios.get("http://localhost:3000/carts")
        return response.data
    }
)

// hàm thêm sản phẩm vào giỏ hàng
export const addToCart:any = createAsyncThunk("carts/ addToCart",
    async (product)=>{
        const response = await axios.post("http://localhost:3000/carts",product)
        return response.data
    }
)

// hàm xóa sản phẩm trong giỏ hàng
export const deleteProduct:any = createAsyncThunk("carts/deleteCart",
    async (id)=>{
        const response = await axios.delete(`http://localhost:3000/carts/${id}`)
        return id
    }
)