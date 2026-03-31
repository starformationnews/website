---
title: "Congratulations to Dr. Tommy Rodrigues!"
date: 2026-03-31
categories: ['phds']
layout: thesis

# Add an image. By default, the thesis layout assumes we credit the author; you can also add
# custom credit as and when needed.
image: './header.webp'
# imageCredit: "Person to credit"
# imageURL: "https://example.com"

# Add information about the person & their thesis!
# n.b. LaTeX characters in the title may need to be escaped
# REMEMBER TO ADD THE ABSTRACT BELOW!
thesisPerson: "Tommy Rodrigues"
thesisPronouns: "He/him"
thesisDate: "2025-12-11"  # Backwards! year-month-day
thesisTitle: "Origin and properties of free-floating planets"
thesisSupervisor: "Hervé Bouy"
thesisInstitution: "Laboratoire d'Astrophysique de Bordeaux (LAB), Université de Bordeaux, Bordeaux, France"
thesisKeywords: "Free-floating planets, Circumstellar disks, Disk fraction,  Disk mass"

# Optional contact details
thesisEmail: tommy.rodrigues@u-bordeaux.fr
#thesisWebsite: 
thesisJob: true  # Uncomment if they're looking for a job!

# Unhide when you're ready to publish!
#hidden: true
---
<!-- Paste the abstract here!
N.B.: this *should* render LaTeX correctly, but could encounter issues. Our site uses a
web-based LaTeX renderer - KaTeX - which may differ slightly from the LaTeX environment
the author used at home. (The arXiv uses KaTeX, which is why we never have LaTeX problems
with the contents of paper abstracts.)

Common issues include:
- Having no gap between a $ symbol and other characters (e.g. $\sim$10 may cause an error)
- Using undefined math functions (e.g. things from the AMS Math package, which KaTeX may
  not include)

If an abstract causes the site to have issues, there are three potential debugging steps:
1. Try to look at the console in your browser (F12)
2. Look at the console where you did `npm run dev` (you might have to scroll back a bit),
   you should be able to find a KaTeX error
3. Try commenting out certain parts of their abstract one at a time until the error goes
   away.
4. Ask Emily =)
 -->

Free-floating planets (FFPs) are planetary-mass objects that do not orbit a star, but roam the galaxy isolated. With masses below the deuterium-fusion limit (\<13 Jupiter masses, Mj), FFPs cannot sustain any nuclear fusion and thus continuously cool and fade over time, becoming intrinsically faint and challenging to detect. However, during their first few million years, they remain sufficiently hot and bright in the infrared to be directly detectable in nearby, young star-forming regions. FFPs may form either as massive planets ejected from protoplanetary disks through various dynamical perturbations, or as the lowest-mass products of star-like formation processes, from the collapse of tiny molecular clumps or from halted gas accretion onto a protostellar core. However, the relative contribution of each mechanism remains unknown. A major key observational diagnostic to test FFP formation theories is through the occurrence and properties of circumstellar disks, as different formation mechanisms predict distinct disk fractions and properties. This thesis focuses on disks surrounding isolated planetary-mass objects, presenting on the one hand a statistical study of the global disk population around FFPs, and on the other hand a detailed observational analysis of a few individual objects.

The statistical study of disk occurrence was conducted on the low-mass members of the nearby (145 pc), young (5–10 Myr) Upper Scorpius association that hosts the richest known population of FFPs to date, recently identified and comprising several dozen FFPs. To identify the presence of disks through the excess emission they produce at infrared (IR) wavelengths, a first model-based approach involving spectral energy distribution fitting was employed, which revealed the limitations of current models for the purpose of identifying IR excesses in planetary-mass objects, likely due to incomplete treatment of cloud formation at low temperatures. This motivated the development of an empirical, color-based method combined with Bayesian outlier detection, leveraging unWISE mid-IR photometry to robustly model the diskless photospheric sequence and identify sources exhibiting IR excesses in the (W1–W2) color. This approach enabled the derivation of robust disk fractions down to 6–8 Mj, depending on the assumed age, substantially extending previous studies into the planetary-mass regime and including 17–40 FFPs, representing the most comprehensive sample to date. The results revealed a continuous increase in disk fraction towards lower masses, exceeding 30\%, with a possible flattening below 25–45 Mj that may indicate a transition in dominant formation processes. This change of trend, however, should be considered with caution and will need to be confirmed.

In parallel, 1.3 mm continuum observations were conducted with the NOEMA interferometer, targeting six FFPs exhibiting IR excesses in the young, nearby Taurus star-forming region. One source was detected, with a flux translated into a dust mass of 0.08 Earth masses (Me), ranking among the least massive disks ever observed and doubling the number of confirmed millimeter detections of disks around FFPs. The inferred disk mass follows the extrapolated $M_{\rm dust}-M_\star$ relation down to planetary masses, suggesting a continuity with stellar and substellar populations and favoring formation via core collapse rather than ejection from a planetary system, which would have stripped the disk of material.

In conclusion, this work places new constraints on the disk fraction down to the planetary-mass regime through a fully reproducible IR excess detection procedure, and sets the stage for extending the analysis to other populations. It also reports only the second millimeter detection of a FFP disk, highlighting the urgent need to increase the number of detections and populate the lower end of the disk mass distribution.