import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos de KAPSUL - Notre Mission et Valeurs",
    description: "Apprenez-en plus sur KAPSUL, notre mission de promouvoir le bien-être à travers la réalité virtuelle, et découvrez les valeurs qui nous guident dans notre engagement envers nos clients.",
}; 

export default function AboutPage() {
    return (
        <About />
    );
}