import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Descripción de Pricingpage',
  keywords: ['Pricing Page', 'Daniel', 'Informacion', '...']
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}