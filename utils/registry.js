// Custom Imports
import { Card as InsuranceCard } from '../components/Card';
import { Hero as InsuranceHero } from '../components/Hero';
import { ThreeColumnCard } from '../components/ThreeColumnCard';
import { TwoColumnSection } from '../components/TwoColumnSection';

export function ComponentRegistry() {
  return {
    hero: InsuranceHero,
    card: InsuranceCard,
    threeColumnCardSection: ThreeColumnCard,
    twoColumnSection: TwoColumnSection,
  };
}
