import Pricing from "@/components/sections/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs KAPSUL - Séances de Détente en Réalité Virtuelle",
  description: "Découvrez les tarifs des séances KAPSUL, alliant réalité virtuelle et techniques de relaxation pour une expérience de bien-être unique. Choisissez la formule qui vous convient le mieux.",
};

export default function PricingPage() {
  return (
    <Pricing />
  );
}