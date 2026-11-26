---
title: "Congratulations to Dr. Luigi Zallio!"
date: 2026-11-26
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
thesisPerson: "Luigi Zallio"
thesisPronouns: "He/him"
thesisDate: "2025-11-06"  # Backwards! year-month-day
thesisTitle: "Decoding Protoplanetary Disk Evolution"
thesisLink: "https://air.unimi.it/handle/2434/1276624"  # Direct link to thesis (e.g. DOI)
thesisSupervisor: "Giovanni Pietro Rosotti, Miguel Vioque"
thesisInstitution: "Università degli Studi di Milano, Milan, Italy"
thesisKeywords: "ALMA, Protoplanetary disks, Protoplanetary disk evolution, Stellar ages, Stellar masses, Interferometry"

# Optional contact details
thesisEmail: luigi.zallio97@gmail.com
thesisWebsite: https://github.com/lzallio
# thesisJob: true  # Uncomment if they're looking for a job!

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

Planets form within protoplanetary disks, rotating structures of gas and dust that surround young stars during the first few million years of their evolution. Understanding how these disks evolve is therefore essential to understanding how planetary systems, including our own Solar System, are assembled. Despite major observational and theoretical advances over the last two decades, the physical processes that govern the evolution and dispersal of protoplanetary disks remain poorly understood. One of the central questions in the field is how disks transport angular momentum while accreting material onto their host stars. In the classical picture, turbulent motions within the disk redistribute angular momentum radially, causing disks to spread over time. An alternative scenario invokes magnetically driven winds that remove angular momentum from the disk surface, allowing accretion while keeping disks compact, or even causing them to shrink. Discriminating between these two mechanisms is one of the major goals of modern studies of star and planet formation, as they predict different evolutionary pathways for disks and consequently different environments for planet formation. Among the most powerful observational diagnostics of these scenarios are gas-disk sizes: while viscous evolution predicts that disks become larger as they evolve, the evolution of disk sizes in the MHD wind-driven accretion scenario remains less clear. In simplified parameterized prescriptions for wind-driven accretion, disks remain compact or progressively shrink, although this conclusion may need to be reassessed in more complex models. Observationally testing the evolution of gas-disk sizes can therefore provide important constraints on the mechanisms governing disk evolution. However, measuring gas-disk sizes is observationally challenging because molecular-line emission is intrinsically faint and spatially resolved observations require high angular resolution and sensitivity. As a result, reliable gas-disk size measurements are currently available for only ~100 protoplanetary disks, most of which belong to just two nearby and well-characterized star-forming regions. Consequently, the gas properties of the majority of protoplanetary disks remain largely unexplored. This thesis was motivated by the need to overcome these observational limitations. During my PhD, I contributed to the development of the software csalt, a new framework for modeling molecular-line observations from the Atacama Large Millimeter/submillimeter Array (ALMA) directly in the interferometric domain (i.e., modeling visibilities, the raw products of an interferometer). By exploiting the full information content of the interferometric observations, csalt enables precise measurements of gas-disk properties even for relatively compact and faint disks. As part of the ALMA Disk-Exoplanet C/Onnection (DEC/O) Large Program, I applied this methodology to the largest homogeneous sample of protoplanetary disks observed in multiple molecular tracers, deriving gas-disk radii, stellar masses, and stellar ages in a homogeneous way. Together, these measurements provide new observational constraints on the evolution of protoplanetary disks and enable a direct test of whether turbulent transport or magnetically driven winds dominate the evolution of protoplanetary disks.