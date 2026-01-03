import Space from "@/components/sections/Space";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace KAPSUL - Détente et Bien-être en Réalité Virtuelle",
  description: "Découvrez l'espace KAPSUL, un lieu dédié à la détente et au bien-être grâce à la réalité virtuelle. Réservez votre séance dès aujourd'hui et plongez dans un univers apaisant.",
};

export default function SpacePage() {
  return (
    <Space />
  );
}