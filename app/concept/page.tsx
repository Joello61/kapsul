import Concept from "@/components/sections/Concept";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concept KAPSUL - Bien-être et Détente en Réalité Virtuelle",
  description: "Découvrez le concept unique de KAPSUL, alliant technologie de réalité virtuelle et techniques de relaxation pour une expérience de bien-être inégalée.",
};

export default function ConceptPage() {
  return (
    <Concept />
  );
}