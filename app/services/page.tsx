import Services from "@/components/sections/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services KAPSUL - Séances de Relaxation en Réalité Virtuelle",
  description: "Explorez les services offerts par KAPSUL, combinant réalité virtuelle et techniques de relaxation pour une expérience de bien-être personnalisée. Découvrez nos différentes formules adaptées à vos besoins.",
};  

export default function ServicesPage() {
  return (
    <Services />
  );
}