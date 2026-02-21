'use client';

import React from 'react';
import HeroCinematic from '../components/HeroCinematic';
import StruggleSection from '../components/StruggleSection';
import RealityCheck from '../components/RealityCheck';
import CostOfSilence from '../components/CostOfSilence';
import TransformationSection from '../components/TransformationSection';
import FixTheSilence from '../components/FixTheSilence';
import AudienceFilter from '../components/AudienceFilter';
import BioSection from '../components/BioSection';
import BonusVault from '../components/BonusVault';
import FomoSection from '../components/FomoSection';
import FaqSection from '../components/FaqSection';
import StickyAction from '../components/StickyAction';
import PixelTracker from '../components/PixelTracker';

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#FFFCF8]">
      <PixelTracker eventName="PageView" />
      <HeroCinematic />
      <StruggleSection />
      <RealityCheck />
      <CostOfSilence />
      <TransformationSection />
      <FixTheSilence />
      <AudienceFilter />
      <BioSection />
      <BonusVault />
      <FomoSection />
      <FaqSection />
      <StickyAction />
    </main>
  );
}