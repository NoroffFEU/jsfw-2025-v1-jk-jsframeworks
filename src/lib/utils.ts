export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function getDiscountPercent(
  price: number,
  discountedPrice: number,
): number {
  if (discountedPrice >= price) return 0;

  const percent = ((price - discountedPrice) / price) * 100;
  return Math.round(percent);
}
