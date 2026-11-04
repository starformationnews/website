---
title: "Congratulations to Dr. Coralie Foucher!"
date: 2026-11-03
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
thesisPerson: "Coralie Foucher"
thesisPronouns: "She/her"
thesisDate: "2025-09-17"  # Backwards! year-month-day
thesisTitle: "Molecular composition of planetary formation regions by tomographic observations and chemistry modeling."
# thesisLink: ""  # Direct link to thesis (e.g. DOI)
thesisSupervisor: "Anne Dutrey, Vincent Piétu"
thesisInstitution: "Laboratoire d'Astrophysique de Bordeaux (LAB), University of Bordeaux, Pessac, France"
thesisKeywords: "Protoplanetary discs, Molecular observations, Astrochemistry, Millimeter interferometry"

# Optional contact details
thesisEmail: coralie.foucher@u-bordeaux.fr
thesisWebsite: 
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

Protoplanetary disks, rotating structures of gas and dust around young stars, are the birthplaces of planets. Understanding their physical and chemical structure, both radially and vertically, is a major challenge in modern astrophysics. ALMA surveys have revealed radial substructures such as rings, gaps, and spirals in disks at moderate inclinations ($30^\circ$--$60^\circ$), but the vertical structure remains difficult to constrain. Edge-on disks offer a unique opportunity: their orientation allows the vertical stratification of gas and dust to be probed directly, without the geometrical degeneracies of moderately inclined systems, and gives access to the emission altitudes of molecular tracers.

This thesis aims to characterize the physical and chemical conditions (density, temperature) as a function of height within the disk. To achieve this, I combine the molecular tomography method (Dutrey et al. 2017), which gives a direct determination of the radial and vertical structure from interferometric observations, with the parametric radiative transfer code DiskFit (Pietu et al. 2007), which constrains the disk properties through $\chi^2$ minimization in the Fourier plane. The analysis relies on a multi-molecular ALMA dataset, complemented by new NOEMA observations.

The first part focuses on the edge-on disk SSTTau042021 (Foucher et al. 2025, Foucher et al.  in prep). The results reveal a vertically extended gaseous structure with strong molecular stratification between a cold midplane and a warmer atmosphere. Some tracers indicate material above the disk, possibly a disk wind, and gas is detected beyond the outer radius of the dust disk. These observations provide direct constraints on the thermal structure and mass distribution of the disk.

The second part focuses on the Flying Saucer. Beyond tomography and DiskFit modeling (Guilloteau et al. 2025 \& Dutrey et al. 2025), I developed an approach linking physical and chemical structure, using Nautilus astrochemical simulations (Ruaud et al. 2015) (within the framework of the thesis of S. Gavino, Gavino et al. 2021) coupled with RADMC-3D radiative transfer (Dullemond et al. 2012). The resulting synthetic maps are compared with the data through tomographic reconstruction, allowing a direct comparison between the predicted chemical stratification and the observed emission.

Finally, the last part places these sources in a broader context by studying how radial and vertical structures depend on disk and stellar properties. Preliminary results are presented for two additional edge-on disks: CB26, with new NOEMA data, and Gomez's Hamburger, from ALMA project 2022.1.00269.S.