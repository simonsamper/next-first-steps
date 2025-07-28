import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Página de Contacto',
 description: 'Esta es la página de contacto de Vicente',
 keywords: ['Contact Page', 'Vicente', 'contactar', '...'],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}