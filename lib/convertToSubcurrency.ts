export default function convertToSubcurrency(amount: number) {
  return Math.round(amount * 100); // Stripe expects cents
}
