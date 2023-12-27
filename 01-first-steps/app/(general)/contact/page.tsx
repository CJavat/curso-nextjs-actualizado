import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Pagina de contacto de la empresa',
  keywords: ['Contact Page', 'Daniel', 'Informacion', '...']
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}