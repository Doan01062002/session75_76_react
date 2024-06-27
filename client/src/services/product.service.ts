import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// hàm render sản phẩm
export const getProducts:any = createAsyncThunk("products/getproducts",
    async ()=>{
        const response = await axios.get("http://localhost:3000/products")
        return response.data
    }
)

//hàm cập nhật lại số lượng sau khi thêm sản phẩm vào giỏ hàng
export const updateQuantityProductList:any = createAsyncThunk("products/updateQuantityProductList",
    async ({ id, quantity }: { id: number; quantity: number })=>{
        const response = await axios.patch(`http://localhost:3000/products/${id}`,{quantity})
        return response.data
    }
)