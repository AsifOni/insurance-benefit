// Custom Imports
import { Card as InsuranceCard } from '../components/Card';
import { Hero as InsuranceHero } from '../components/Hero';
import { ThreeColumnCard } from '../components/ThreeColumnCard';
import { TwoColumnSection } from '../components/TwoColumnSection';
import { Hero as AbtestHero } from '../components/AbTests/Hero';

export function ComponentRegistry() {
  return {
    hero: InsuranceHero,
    abtesthero: AbtestHero,
    card: InsuranceCard,
    threeColumnCardSection: ThreeColumnCard,
    twoColumnSection: TwoColumnSection,
  };
}
