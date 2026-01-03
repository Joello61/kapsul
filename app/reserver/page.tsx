import Reserver from "@/components/sections/Reserver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver KAPSUL - Planifiez Votre Séance de Détente en Réalité Virtuelle",
  description: "Réservez votre séance KAPSUL en quelques clics. Choisissez parmi nos services de relaxation en réalité virtuelle et planifiez votre moment de bien-être dès aujourd'hui.",
};

export default function ReserverPage() {
  return (
    <Reserver />
  );
}