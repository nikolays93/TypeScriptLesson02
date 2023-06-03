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
