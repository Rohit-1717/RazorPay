import exp from "constants";
import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  // console.log(order);
  res.status(200).json({
    success: true,
    order,
    message: "Product checkout successfully",
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  // console.log("sig received", razorpay_signature)
  // console.log("signature generated", expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    //Database Comes Here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `https://razor-pay-eta.vercel.app/paymentsuccess?refer=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
      message: "Payment verification failed !!",
    });
  }
};

export const getRoute = async(req,res)=>{
  res.send("hello ");
}
