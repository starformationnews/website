---
title: "Congratulations to Dr. Fengwei Xu!"
date: 2026-02-03
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
thesisPerson: "Fengwei Xu"
thesisPronouns: "He/him"
thesisDate: "2025-05-28"  # Backwards!
thesisTitle: "Dynamic Mass Assembly in Massive Protocluster Cluster Formation"
# thesisSupervisor: "Prof. Example"
thesisInstitution: "Peking University"
thesisKeywords: "ALMA, massive star formation, protocluster, kinematics and dynamics"

# Optional contact details
thesisEmail: fengweilookuper@gmail.com
thesisWebsite: https://xfengwei.github.io/#
# thesisJob: true  # Uncomment if they're looking for a job!

# Unhide when you're ready to publish!
# hidden: true
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
Massive stars, defined as those with main sequence masses 8 $M_{\odot}$, play a critical role in shaping the interstellar medium (ISM) through their intense radiation, outflows, and eventual supernova explosions. Their formation, however, remains poorly understood compared to low-mass stars, primary due to their large distances, high extinction, and short timescales of critical evolutionary phases. Massive stars are almost exclusively found in clusters, which form within massive molecular clumps (1 pc in size, >500 $M_{\odot}$ in mass, and 0.1 g cm$^{-2}$ in surface density). These clumps evolve through distinct stages, from cold, dense infrared dark clouds (IRDCs) to active star-forming regions with embedded protostars and eventually to HII regions. The fragmentation of these clumps into dense cores ($<0.1$ pc in size and $>10^6$ cm$^{-3}$) and the dynamic mass assembly of massive protostellar clusters are key processes in understanding how massive stars and clusters form. Radio interferometric facilities, particularly like Atacama Large Millimeter Array (ALMA), provides the necessary resolution to study these processes in detail, despite the large distances involved. The scope of this thesis aims at providing multiscale observational views from global properties of massive clumps down to individual protostellar cores, and focusing on the dynamical processes driving massive star and cluster formation within their natal environments. 

At the global scale, we conducted HCN (4-3) mapping of 38 massive clumps using the James Clerk Maxwell Telescope, identifying 34 HCN cores. Line profile analysis revealed 14 blue-asymmetric, 4 red-asymmetric, and 16 symmetric profiles. Comparative analysis suggests different molecular transitions trace distinct density layers, with higher transitions probing denser regions. Radiative transfer modeling using the Hill5 framework derived infall velocities of 0.2-1.6 km s$^{-1}$, corresponding to 5-75\% of the free-fall velocity ($v_{\mathrm{ff}}$). The median mass accretion rate was $4.5\times10^{-3}$ $M_\odot$ yr$^{-1}$, consistent with lower transition line (\hcop) measurements, indicating continuous accretion across scales. Complementary NH$_3$ (1,1) and (2,2) mapping of 44 IRDCs revealed virial parameters $\ll1$, requiring 0.1-2.6 mG magnetic fields (median 0.4 mG) to prevent rapid collapse. These findings suggest gravity-driven global collapse across all evolutionary stages.

At the intermediate scale (0.1--1 pc) between clump and core, we performed both ALMA 3 mm and 0.87 mm observations of a massive clump SDC335 under global collapse. By ALMA H$^{13}$CO$^+$ (1-0) at 3 mm, we revealed four counterclockwise spiral-in filamentary accretion streams connecting to a massive core MM1 ($383^{+234}_{-120} M_\odot$). The total mass inflow rate was estimated as $2.40(\pm0.78)\times10^{-3}$ $M_\odot$ yr$^{-1}$. The accretion rate is numerically consistent with both pc-scale global collapse rate and core-scale infall rate, suggesting a continuous multiscale accretion. ALMA 0.87 mm observations resolved MM1 into six condensations, with ``column density - separation'' relation showing steeper power-law index of $\sim-1$ compared to $\sim-0.28$ at 0.1--1 pc scales. This suggests turbulence dissipation at larger scales but ineffective dissipation or additional injection at smaller scales.

To pinpoint the scale of individual cores where stars are actively forming, we performed ALMA 0.87 mm mosaics of 11 globally collapsing clumps (called ASSEMBLE survey) and identified 248 dense cores (106 protostellar, 142 prestellar candidates). Compared to infrared-dark ASHES clumps, ASSEMBLE cores show higher masses, densities, and spatial concentration (quantified by $Q$ parameter). A strong clump-core mass correlation emerges between $M_{\mathrm{max, core}}$ and $M_{\mathrm{clump}}$, but absent in earlier stages. This indicates continuous accretion is important to building up multiscale mass correlation. Core spacings decrease from $\sim$ 0.1 pc (ASHES) to $\sim$ 0.03 pc (ASSEMBLE), consistent with free-fall contraction predictions. The power-law index of the relation between the most massive core and total cluster mass is steeper than star cluster, which can be explained by the increasing stellar multiplicity at the high-mass end. Mass segregation is significant in ASSEMBLE clusters, but much weaker in ASHES, suggesting core mass redistribution by accretion.

Such dynamic scenario requires to be proven in a larger and therefore statistically significant sample. So we used the ACA 7-m observations of 139 clumps at 1.3 mm and identified 207 fragments showing supersonic turbulence ($\mathcal{M}>1$) and gravitational dominant density profile ($M\propto R^{1.1}$). Both the maximum fragment mass and total fragment mass show a significant linear correlation with the clump mass. The dense gas fraction, defined as total fragment mass over clump mass, maintains $\sim$ 6\% with respect to the clump radius, which indicates a self-similar collapse mode. The fraction increase from 1\% to 10\% with clump evolution indicated by $L/M$, supporting dynamic assembly. 

To reflect the caveats of current mainstream single-band observations, we have carried out a ALMA dual-band (1.3 and 3 mm) survey of three massive clouds the 20 km/s cloud, Sgr C, and Dust Ridge cloud e. We adopted cloud-wide mosaicked observations with ALMA, achieving a comparable resolution of 0.2--0.3 arcsec (or 2000 au) and a sky coverage of 8.3--10.4 arcmin$^2$ ($\sim50$ pc$^2$) at the 1.3 mm and 3 mm bands, respectively. We construct an unprecedented dual-band catalog of 450 continuum sources across three clouds, and find a cloud-wide ($>70$\%) low spectral index or low brightness. We proposed three hypotheses: 1) these dense cores are unresolved optically thick young stellar objects, which is highly beam diluted; 2) they contain dust grains that have grown to centimeter sizes to produce flatten dust opacity spectral index; 3) they are contaminated by free-free emission from internal UCHII regions. It compels us to reconsider the reliability of previous studies at scales of 1000 au and stress the importance of multi-band observations in future high-resolution studies of massive protostellar clusters.

These coordinated series of work are pointing to a dynamic scenario of massive protoclusters formation and evolution. Massive clumps are found to be generally undergoing global gravitational collapse at the parsec scale. The continuity of the mass accretion rate of $\sim10^{-3}$ $M_{\odot}$ yr$^{-1}$ from 1 pc down to 0.1 pc highlights an efficient mass assembly process. Primordial fragmentation insides the massive clumps produces an early protocluster with Jeans-like mass ($\sim1$ $M_{\odot}$) and length ($\sim0.1$ pc) in the infrared-dark clump. Because there is no significant acquired mass by accretion at the early stage, no mass segregation exists in the protocluster. Subsequently, pc-scale global collapse, in the form of filamentary accretion, continuously transfers gas inward, leading to the mass and density growth of dense cores, particularly the most massive one due to its most competitive role in accretion. The continuous accretion naturally produces connections between the most massive core and its parental massive clump. Concurrently, protostars form in dense cores, heating the gas and dust within the massive clump showing infrared point or extended sources. At the same time, the continuous global collapse compresses the massive clump to a higher density and pressure, providing a more favorable environment for the formation of more massive stars. The global contraction also influences the spatial distribution of the massive protocluster, leading to closer separation of fragments and thus a more tightly bound cluster. Additionally, the gravitational potential tends to produce more massive cores at the center and less massive cores at the periphery, leading to the gradual buildup of primordial mass segregation for star clusters.

