interface Price {
    price: number,
    discount: number,
    months: number,
}

totalPrice({price: 100000, discount: 25, months: 12}); // 6250

/**
 * Call total price calculate method.
 *
 * @param price price number in currency.
 * @param discount discount number in percent.
 * @param months months of instalment.
 */
function totalPrice({price, discount, months}: Price): number {
    return months > 0 ?
        // Calculate with instalment.
        totalInstallmentPrice(price, discount, months) :
        // Calculate common.
        discountPrice(price, discount);
}

/**
 * Calculate instalment price in month.
 */
function totalInstallmentPrice(price: number, discount: number, months: number): number {
    if (months <= 0) throw Error('Months is incorrect');
    return discountPrice(price, discount) / months;
}

/**
 * Calculate price with discount.
 */
function discountPrice(price: number, discount: number): number {
    return price * (1 - (discount / 100));
}
