---
title: 'An interview with Andreas Burkert'
date: 2026-03-03
authors: ['Bo Reipurth']
categories: ['interviews']
description: 'Andreas Burkert interviewed by Bo Reipurth.'
image: './header.webp'
# link: 
---

**Q:** *What was the subject of your PhD, and who was your advisor?*

**A:** When I studied physics at the Ludwig-Maximilians University of Munich a new and exciting professor
joined as director at the university observatory, Rolf Kudritzki. Rolf did
pioneering work on stellar spectroscopy and radiation driven winds of hot stars and he
asked me whether I would like to join this effort. But I rather wanted to understand galaxies.
Rolf was fine with that and still offered me a PhD position.
Gerhard Hensler had come to Munich with Rolf. He was interested in the topic and so
we both started from scratch developing what we called chemodynamical models of galaxy evolution.
I wrote a hydro code that included the dynamics of multi gas components, stars, star formation 
and stellar feedback.  As cooling is important we also implemented chemistry. This became the topic of my PhD.
Key results of our simulations were that star formation is strongly self-regulated
and that galactic winds form naturally in dwarf galaxies, driving out especially the diffuse gas component
which is strongly metal enriched. This explains why small galaxies are metal-poor.
In these early days we did not include cold dark matter which is now known to 
be a key for understanding how galaxies form.


**Q:** *You did some of the early studies of fragmentation of
collapsing cloud cores and wrote a paper on this subject in 1993 with
Peter Bodenheimer.*

**A:** I started this project when I came to Santa Cruz as a Humboldt fellow and postdoc of Peter. At that
time it became clear that most stars form in multiple systems. So I wrote a hydrocode
on a three-dimensional Cartesian grid to study the collapse
of cloud cores. We realised that there is a problem of artifical numerical fragmentation if the local Jeans length is
not resolved. This was later on investigated in detail by Truelove et al. (1997).
In 1993 the computing power was rather limited. As fragmentation of the collapsing core happens in the 
inner regions we would have needed a large number of grid cells to resolve a Jeans length. This would have taken
an eternity to run. So I implemented nested subgrids to properly resolve the inner regions. At that time
the typical initial condition was a Jeans unstable, rigidly rotating, isothermal, constant density sphere.
Following Boss \& Bodenheimer, 1979, we added a 50$\%$, m=2 perturbation which basically means that we started
with a bar-like geometry and we found that the bar strengthens during collapse and its ends act like focal
points which accrete gas and condense into a binary. Interestingly this happens
in the phase of collapse before a rotationally supported disk forms. 
The binary therefore was on a highly eccentric orbit as often observed. But
we were not happy because we thought that we had put the solution in as an initial condition. So
we repeated the simulation with a 10$\%$ density perturbation, expecting no fragmentation. But the opposite
happened. Again a binary formed at the end of the bar. But now the bar in between the binary 
fragmented into clumps. At the end we got a binary and in 
between several lower mass fragments. We concluded that
this multiple clump/star configuration will now experience a complex, chaotic gravitational N-body 
interaction, leading to ejection of the lower-mass components and ending up with a hierarchical 
multiple system.


**Q:** *A few years later followed another paper on this
subject. What were the further insights you gained?*

**A:** We had started with constant density cores where the collapse timescale
is the same everywhere. In the meantime observations showed that cores are centrally condensed.
The worry was that in such an environment fragmentation might be suppressed because the innermost region 
collapses first, forming a central object with the rest accreting onto it. 
In a paper that appeared in 1996, Peter and I therefore studied the fragmentation of a centrally condensed core. As initial
condition we adopted a density distribution that was
exponentially declining outwards as $\exp(-r^2)$. The setup otherwise was the same as before 
with a 10\% m=2 perturbation.  Now the collapse generated a disk and then
the disk fragmented into an inner binary, surrounded by an outer binary.
This hierarchical binary configuration is again highly chaotic and unstable
leading to complex secular evolution, ejection and maybe mergers. So
even in a condensed core one can get complex systems of fragments. The outcome
is again not only determined by the physics of fragmentation of the core 
but also by the subsequent chaotic N-body interaction of the fragments.


**Q:** *In 1997 you, with Matthew Bate and Peter Bodenheimer,
published a study elaborating on your previous studies. What did these
refinements tell? *

**A:** We were still not happy because even an exponential initial condition has a constant
inner density core. At that time r$^{-2}$ density
distributions became popular. So we ran another set of simulations, now with initial
power-law density distributions. At that time Steve Beckwith had become director
at the  Max-Planck-Institute for Astronomy (MPIA) in Heidelberg and he asked me in 1995 to come to Heidelberg 
and to build a theory group.  I was very fortunate that I could
convince an excellent group of  scientists to join me, including Mordecai Mac Low and Matthew Bate. We
had a wonderful time with outstanding PhD students working on star formation,
including Ralf Klessen, Fabian Heitsch, Thorsten Naab
and later on Stefanie Walch. Matthew was the SPH expert. So Peter and I asked him to join our 
fragmentation-in-a-power-law core project 
to compare the results, using two completely different codes, our nested Cartesian subgrid code and his 
SPH simulation.
We studied both r$^{-1}$ and r$^{-2}$ initial conditions and found again hierarchical multiple fragmentation,
very similar to what we saw in the 1996 paper. And most importantly, the results were independent
of which numerical method we used.

**Q:** *You and Peter Bodenheimer have also studied the
rotational properties of turbulent molecular cloud cores.*

**A:** We always thought that uniformly rotating initial conditions are rather artificial. But the origin
of rotation in cores was not known. Alyssa Goodman et al. (1993) in a seminal paper had studied the 
line-of-sight velocity distribution of cores and found line-of-sight
velocity gradients across the cores, consistent with a signature of rotation. Adopting rigid rotation they concluded
that the specific angular momentum scales as J/M $\sim$ R$^{3/2}$ with R the core radius. When I came
to Heidelberg I wanted to focus on turbulence which I thought to be of key importance in the interstellar medium.
So we started to investigate the importance of turbulence for cloud evolution and
star formation. We developed numerical models of driven turbulence, investigated the timescales on which turbulence
decays and how turbulent clouds condense into stars. We found that turbulence cannot support clouds long because
it always decays on a crossing time even for super-Alfv\'enic turbulence.
We tried hard but could not find any reasonable physical internal and external driver that could
compensate for the turbulent energy loss. So at the end we concluded 
that clouds must evolve on a free-fall timescale and that the turbulence observed in clouds is an initial condition.
In this context we had the idea
that the velocity gradients, observed by Alyssa et al. in cloud cores, are not rigid rotation but
rather signatures of an internal turbulent velocity field. So Peter and I published a paper in 2000 where
we generated cores with a velocity field given by a Gaussian random field with a power spectrum of 
P(k) $\sim$ k$^{-n}$ with n=3 and n=4
and found that especially for n=4 the line-of-sight velocity distributions indeed show large velocity gradients and
scaling relations in agreement with Alyssa's observations. The velocity gradients are a result of turbulence and not
a signature of rigid body rotation. However, due to the dominance of the long-wavelength modes,
the cores also have a net specific angular momentum with a mean value as expected
and with a large spread. 

**Q:** *In 2000 you and Doug Lin explored the role of thermal instability in the formation of clumpy gas clouds.*

**A:** We had learned that the internal structure of cores determines their condensation into
stars and that this structure is an initial condition. The next question was now, how molecular cloud cores
form. One possibility is that dense, cold cores form 
by cooling instability from an optically thin, warm or hot, diffuse gas region. 
Density fluctuations cool faster than their lower-density environment, are compressed and then
cool even faster. In our 2000 paper Doug and I showed that this growth of perturbations 
is limited by the characteristic 
length scale $\lambda_{crit}$ where cooling transits from isobaric to isochoric. For scales smaller
than $\lambda_{crit}$ fluctuations can be compressed as the sound crossing timescale is shorter than the 
cooling timescale. Above that scale however the sound crossing time is longer than the cooling time and 
then the fluctuation cannot grow anymore and the instability is suppressed.
If one has fluctuations on all scales, those with wavelengths
smaller than $\lambda_{crit}$ will be advected into fluctuations on the scale of $\lambda_{crit}$. 
We therefore concluded
that the characteristic size and mass of clumps forming by cooling instability is given by the wavelength 
where cooling transits from isobaric to isochoric.


**Q:** *A few years later you and Lee Hartmann wrote a highly
cited paper on the collapse and fragmentation of finite sheets of
gas. What were your conclusions?*

**A:** Spheroidal clumps either have the same collapse timescale everywhere or collapse from the inside out
if they are condensed.
Lee and I investigated what happens in other geometries.
In our 2004 paper we discussed the physics of self-gravitating gaseous sheets that could form e.g. by
colliding flows or might represent surfaces of shells, formed by stellar feedback.
We found that for a sheet the largest gravitational acceleration inwards is always at its edge. So sheets collapse
from the outside in with the edge moving inwards and sweeping up the inner region. This leads to ring-like 
structures of dense gas which can have highly
irregular geometries determined by the initially irregular shape of the sheet boundary. Regions on the
boundary with strong curvatures act like focal points, accreting material fast and collapsing onto themselves,
forming hubs, massive stars and stellar clusters. Ellipsoidal sheets if not fragmenting during collapse form
filaments. In filaments the strongest acceleration inwards is
at their two ends which then fall inwards along the long axis sweeping up the whole filament and condensing
into stars or star clusters. I later on explored 
this so-called edge problem with Stefan Heigl and Elena Hoemann. We called
it a problem as cores and stars are not always found preferentially at the ends of filaments.
It took several years till we solved this puzzle (Hoemann et al. 2023).

**Q:** *In 2013 you and Lee Hartmann analyzed the relation
between star formation efficiency and gas surface density. *

**A:** One of the big puzzles of star formation is the long gas depletion timescale 
of galaxies, defined as the total amount of molecular gas, divided by the star formation rate.
This timescale is universal and of order 1 Gyr with a weak dependence on cosmic redshift. 
What is the galactic clock that determines this timescale?
One idea is that it is the collapse timescale of individual clouds, combined with
the efficiency of star formation. If molecular clouds condense into stars 
on timescales of order 10 Myrs with a star formation efficiency of order  1$\%$ one gets 1 Gyr. The problem
is however that molecular clouds are not coherent, isolated structures that go into global collapse everywhere
at the same time. Instead,
some regions of the cloud are still forming while other regions are already collapsing. Some fraction
of a cloud might in fact never collapse and might be dispersed by the galactic environment.
A suggestion made by Lada et al. (2010) and Heiderman et al.  (2010) was that star formation happens above
a threshold surface density $\Sigma$ of 120 M$_{\odot}$/pc$^2$ which defines the collapsing part of a cloud. 
We investigated this in more details, using the observational data available to us. 
We found that the ratio of the mass of newly formed stars to gas mass (the star formation efficiency)
in regions above a given $\Sigma$ decreases with decreasing $\Sigma$ following
a power law. For a $\Sigma$ close to molecular cloud cores this ratio is 0.3. For 
$\Sigma = 120$ M$_{\odot}$pc$^{-2}$ the efficiency is 0.01. But there is no reason why one should stop
at that point as the power-law continues to smaller surface densities, 
reaching efficiencies of 0.001 at $\Sigma$ = 40 M$_{\odot}$pc$^{-2}$. This power law dependence of
star formation efficiency on surface density can be
understood if a gas cloud is a highly dynamical object, accreting 
lower-density gas from the environment. This gas then moves into regions of higher and higher density
like an accretion flow, eventually reaching core densities at which point it forms stars. This scenario 
is very similar to what in extragalactic astronomy is now called a bathtub model that can explain the 
evolution of star forming galaxies as a result of gas accretion from the cosmic web.


**Q:** *You have spent most of your career studying
extragalactic phenomena, and one particularly impactful paper, with
currently over 1200 citations, was a study you wrote back in 1995 on
the structure of dark matter halos in dwarf galaxies. What accounts
for this popularity? *

**A:** Starting 1991 it was realised that simulated dark matter halos have density distributions
that diverge towards the center as 1/r or steeper.
Navarro et al. (1997) showed later on that halos have universal density distributions
with a profile
$\rho \sim$ [r $\times$ (r+r$_0)^2$]$^{-1}$. Observers however found that especially
diffuse dwarf galaxies have inner halo profiles that are shallower. 
In my 1995 paper I took the available observational data and showed that the observationally inferred  halo density
distributions are again universal, however with a density distribution $\rho \sim$ [(r+r$_0$)(r$^2$+r$_0^2$)]$^{-1}$
which leads to a constant density $\rho_0$ inside 
the core radius r$_0$.  I thought that this is interesting but did not think much about it.
So I was quite surprised when at a conference a year later someone mentioned the Burkert profile. 
Even 30 years later this cusp-core problem of CDM is still heavily debated and unsolved. 
And the Burkert profile has become a standard 
test for models of dark halo core formation. By the way, the core density $\rho_0$ and core radius r$_0$
are not two free parameters but strongly correlated, following the relationship 
$\rho_0$ $\times$ $r_0$=75M$_{\odot}$pc$^{-2}$ (Burkert 2015).

**Q:** *What are you currently working on? *

**A:** In all the work that I have done I saw that star formation is an initial-
and boundary condition problem. Clouds are not isolated objects that appear with a certain mass, are stable for some time
and then collapse, form stars and disappear. Instead dense molecular gas appears somewhere in the galaxy, e.g. triggered
by a local converging gas flow, forms stars and disperses at one point while growing at another point.
How do you determine or even define a mass, age and lifetime of such a dynamic, ever-changing, interconnected entity?
I think that we should give up on the concept of an isolated cloud. Instead
we should talk about the galactic molecular web with nodes and intersections that continuously change,
form and are dispersed by internal star formation, large scale galactic flows, gravitational shear,
gravitational disk instabilities and turbulence. In statistical equilibrium as many new nodes and 
intersections have to form as disappear. But I am not even sure whether galaxies ever achieve an equilibrium.
I think that this is a highly self-regulated process which is strongly related
to the fascinating field of complexity and emergence. A great example of complexity is our brain that consists of a
network of 100,000 billion connections between 10 billion neurons. This network is 
continuously reshaping and reorganising. And, somehow, in this non-linearly evolving, self-organised  structure
thoughts, memories, a self-consciousness and an understanding of the Universe emerges. It is not the neurons but
their interaction that matters. And I think the same happens in galaxies.
I am currently working on using the physics of complexity and self-organisation of networks to understand
how the molecular web is shaped and evolves with all scales interacting in a self-regulated way
and I hope that at the end of this exercise a universal depletion timescale of 1 Gyr emerges.