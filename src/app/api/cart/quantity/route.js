// pages/api/updateCart.js
import connectToDB from "@/database";
import Cart from "../../../../models/cart";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    // Connect to MongoDB
    connectToDB();
    const body = await req.json();
    const { id, quantity } = body;
    // Validate input
    if (!id || !quantity || typeof quantity !== "number") {
      return NextResponse.json({
        success: false,
        message: "Invalid input. Please provide id and quantity.",
      });
    }

    // Find the cart by ID and update the quantity
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { $set: { quantity } },
      { new: true }
    );

    if (!updatedCart) {
      return NextResponse.json({
        success: false,
        message: "Cart not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    NextResponse.json({
      success: false,
      message: "Something went wrong updating cart quantity",
    });
  }
}
