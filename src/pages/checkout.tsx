import { useForm } from "react-hook-form";
import { useCartStore } from "../store/cart-store";
import { useState } from "react";
import jsPDF from "jspdf";
import confetti from "canvas-confetti";
import { calculateTotalPrice } from "../utils/cart-utils";

const Checkout = () => {
    const { cart, clearCart } = useCartStore();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const totalPrice = calculateTotalPrice(cart);

    const generateInvoice = () => {
        const doc = new jsPDF();
        doc.text("Purchase Invoice", 20, 20);
        let y = 40;
        cart.forEach((item, index) => {
            doc.text(`${index + 1}. ${item.title} - $${item.price.toFixed(2)}`, 20, y);
            y += 10;
        });
        doc.text(`Total: $${totalPrice}`, 20, y + 10);
        doc.save("invoice.pdf");
    };

    const onSubmit = () => {
        setLoading(true);
        confetti({ particleCount: 150, spread: 70 });

        setTimeout(() => {
            setLoading(false);
            clearCart();
            generateInvoice();
        }, 1200);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        {...register("name", { required: "This field is required" })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register("email", {
                            required: "This field is required",
                            pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Invalid email" },
                        })}
                        className="w-full p-2 border rounded-md"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input {...register("address", { required: "This field is required" })} className="w-full p-2 border rounded-md" />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message as string}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input {...register("city", { required: "This field is required" })} className="w-full p-2 border rounded-md" />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city.message as string}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input
                            {...register("zip", { required: "This field is required" })}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message as string}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <select {...register("payment", { required: "This field is required" })} className="w-full p-2 border rounded-md">
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                    </select>
                    {errors.payment && <p className="text-red-500 text-sm">{errors.payment.message as string}</p>}
                </div>

                <div className="mt-6 p-4 border rounded-md bg-gray-100">
                    <h2 className="text-lg font-semibold">Order Summary</h2>
                    <ul className="mt-2 text-gray-600">
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - ${item.price.toFixed(2)} x {item.quantity ?? 1}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 font-bold">Total: ${totalPrice}</p>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
                >
                    {loading ? "Purchased ✅" : "Buy"}
                </button>
            </form>
        </div>
    );
};

export default Checkout;
