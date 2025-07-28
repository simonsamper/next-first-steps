import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Página sobre Vicente',
 keywords: ['About Page', 'Vicente', 'información', '...'],
};

export default function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>        
    )
}