function applyCoupon() {
    const couponCode = document.getElementById("couponCode").value;
    const couponMessage = document.getElementById("couponMessage");
    const discountInfo = document.getElementById("discountInfo");
    const discountRateEl = document.getElementById("discountRate");
    const finalTotalEl = document.getElementById("finalTotal");

    let subtotal = 950; // Assuming subtotal is ₹1000 (You can dynamically get this)
    let tax = 50; // Assuming 5% tax
    let totalDue = subtotal + tax;

    let discount = 0;
    let finalTotal = totalDue;

    // Sample logic for applying coupon
    if (couponCode === "SAVE10") {
        discount = 0.1; // 10% discount
        couponMessage.innerHTML = "Coupon applied! You saved 10%.";
        couponMessage.style.color = "green";
        couponMessage.classList.remove("hidden");

    } else if (couponCode === "SAVE20") {
        discount = 0.2; // 20% discount
        couponMessage.innerHTML = "Coupon applied! You saved 20%.";
        couponMessage.style.color = "green";
        couponMessage.classList.remove("hidden");

    } else if (couponCode === "SAVE50") {
        discount = 0.5; // 50% discount
        couponMessage.innerHTML = "Coupon applied! You saved 50%.";
        couponMessage.style.color = "green";
        couponMessage.classList.remove("hidden");

    } else if (couponCode === "SAVE90") {
        discount = 0.9; // 90% discount
        couponMessage.innerHTML = "Coupon applied! You saved 90%.";
        couponMessage.style.color = "green";
        couponMessage.classList.remove("hidden");

    } else if (couponCode === "WELCOME40") {
        discount = 0.4; // 40% discount for new customers
        couponMessage.innerHTML = "Coupon applied! Welcome! You saved 40%.";
        couponMessage.style.color = "green";
        couponMessage.classList.remove("hidden");
    
    
    
    
    }else {
        couponMessage.innerHTML = "Invalid coupon code.";
        couponMessage.style.color = "red";
        couponMessage.classList.remove("hidden");
        discountInfo.classList.add("hidden"); // Hide discount info on invalid coupon
        return;
    }

    // Calculate final total after applying discount
    finalTotal = totalDue - (totalDue * discount);
    discountRateEl.innerHTML = `${discount * 100}%`; // Show discount percentage
    finalTotalEl.innerHTML = `₹${finalTotal.toFixed(2)}`; // Update final total

    // Show discount info
    discountInfo.classList.remove("hidden");
}
