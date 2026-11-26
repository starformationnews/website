---
title: "Congratulations to Dr. Thomas Oliveira!"
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
thesisPerson: "Thomas Oliveira"
thesisPronouns: "He/him"
thesisDate: "2026-09-18"  # Backwards! year-month-day
thesisTitle: "Star formation history in the solar neighbourhood from the evolution of X-ray emission of young stars."
thesisLink: "https://hal.science/tel-05869333"  # Direct link to thesis (e.g. DOI)
thesisSupervisor: "Laurent Cambrésy, Ada Nebot Gómez-Morán"
thesisInstitution: "Observatoire astronomique de Strasbourg, Université de Strasbourg, Strasbourg, France"
thesisKeywords: "Gaia, eROSITA, YSOs, Clustering, Extinction-Correction, Population-Study"

# Optional contact details
thesisEmail: thomas.oliveira@astro.unistra.fr
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

Young stars in the solar neighbourhood are the observable witnesses of the most recent star formation episodes in our Galaxy.
We propose to investigate a possible common origin of these young populations, using X-ray emission as an indicator of stellar youth.
This thesis cross-matches the eROSITA X-ray survey (eRASS1) with the optical data of Gaia DR3, so as to gather for each source its X-ray flux, its distance and its kinematics.
The matching of the two catalogues relies on a Bayesian method that adapts to the local properties of the sky and assigns to each counterpart a probability of being the correct one.
The resulting catalogue, of more than $100\,000$ sources, feeds a search for stellar clusters using the HDBSCAN algorithm, and an age is assigned to each cluster.
It constitutes a homogeneous sample to probe the origin of the young populations in the solar neighbourhood and the link between X-ray emission and stellar age.