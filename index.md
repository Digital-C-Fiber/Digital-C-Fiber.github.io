---
layout: default
title: Digital C-Fiber Research Group
---

# Digital C-Fiber Research Group

Digital C-Fiber is a virtual coding space established by **E. Kutafina**, **J. Tigerholm**, and **B. Namer** to develop computational models of human C-fibers.

---

## Research Directions

### 1. Computational Modelling of Activity-Dependent Speed Propagation Changes in C-Fibers

#### Decoding Neuropathic Pain: Can We Predict Fluctuations of Propagation Speed in Stimulated Peripheral Nerve? (2022)

**File:** [Frontiers in Computational Neuroscience](https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2022.899584/full) | **License:** CC-BY

**Comment:** The first approach to speed propagation modelling based on machine learning. Data is a mix of mice, rat and human microneurography recordings with human-supported spike sorting. We predict ADS (activity-dependent slowings) based on preceding activity history. Results are promising, but there is a need for larger harmonized datasets, model calibration, and a protocol to represent differently timed firing patterns.

**Abstract:** To understand neural encoding of neuropathic pain, evoked and resting activity of peripheral human C-fibers are studied via microneurography experiments. Before different spiking patterns can be analyzed, spike sorting is necessary to distinguish the activity of particular fibers of a recorded bundle. Due to single-electrode measurements and high noise contamination, standard methods based on spike shapes are insufficient and need to be enhanced with additional information. Such information can be derived from the activity-dependent slowing of the fiber propagation speed, which in turn can be assessed by introducing continuous "background" 0.125–0.25 Hz electrical stimulation and recording the corresponding responses from the fibers. Each fiber's speed propagation remains almost constant in the absence of spontaneous firing or additional stimulation. This way, the responses to the "background stimulation" can be sorted by fiber. In this article, we model the changes in the propagation speed resulting from the history of fiber activity with polynomial regression.

**Citation:** Kutafina E, Troglio A, de Col R, Röhrig R, Rossmanith P and Namer B (2022) Decoding Neuropathic Pain: Can We Predict Fluctuations of Propagation Speed in Stimulated Peripheral Nerve? *Front. Comput. Neurosci.* 16:899584. doi: 10.3389/fncom.2022.899584

**Code:** Coming soon

---

#### Convolution Model of Activity-Dependent Speed Propagation

**File:** Coming soon

---

#### Modeling Activity-Dependent Changes of Axonal Spike Conduction in Primary Afferent C-Nociceptors (2014)

**File:** [PubMed](https://pubmed.ncbi.nlm.nih.gov/24371290/)

**Abstract:** Action potential initiation and conduction along peripheral axons is a dynamic process that displays pronounced activity dependence. In patients with neuropathic pain, differences in the modulation of axonal conduction velocity by activity suggest that this property may provide insight into some of the pathomechanisms. To date, direct recordings of axonal membrane potential have been hampered by the small diameter of the fibers. We have therefore adopted an alternative approach to examine the basis of activity-dependent changes in axonal conduction by constructing a comprehensive mathematical model of human cutaneous C-fibers. Our model reproduced axonal spike propagation at a velocity of 0.69 m/s commensurate with recordings from human C-nociceptors. Activity-dependent slowing (ADS) of axonal propagation velocity was adequately simulated by the model.

**Citation:** Tigerholm J, Petersson ME, Obreja O, Lampert A, Carr R, Schmelz M, Fransén E. Modeling activity-dependent changes of axonal spike conduction in primary afferent C-nociceptors. *J Neurophysiol.* 2014 May;111(9):1721-35. doi: 10.1152/jn.00777.2012.

---

### 2. Spike Detection and Sorting in Microneurography

#### Supervised Spike Sorting Feasibility of Noisy Single-Electrode Extracellular Recordings (2024)

**File:** [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.12.31.630860v1) | **License:** CC-BY

**Comment:** The first systematic analysis of 24 raw microneurography recordings from two labs (B. Namer, J. Dunham), investigating the challenges of spike sorting. This is possible due to a new "ground truth protocol" used to produce time-locked spikes which serve as reliably labelled data and allow comparing and evaluating algorithms.

**Abstract:** Using electrophysiological methods like microneurography, scientists can record nerve activity in humans to understand how peripheral nerves transmit sensations such as pain and itch. These recordings capture electrical signals, known as spikes, which represent nerve impulses. However, since several nerve fibers are often recorded simultaneously, the differentiation of individual spikes — known as spike sorting — is critical for accurate analysis. Existing methods for spike sorting in single electrode in-vivo recordings are often insufficient due to low signal-to-noise ratios and the absence of ground truth data. In microneurography, low-frequency electrical stimulation (marking method) is used routinely to label part of the recorded spikes. We applied the marking method to create a ground truth dataset for developing and validating a supervised approach for spike sorting.

**Citation:** Troglio A, Konradi P, Fiebig A, Pérez Garriga A, Röhrig R, Dunham J, Kutafina E, Namer B. Supervised Spike Sorting Feasibility of Noisy Single-Electrode Extracellular Recordings: Systematic Study of Human C-Nociceptors recorded via Microneurography. *bioRxiv* 2024.12.31.630860. doi: https://doi.org/10.1101/2024.12.31.630860

**Code:** [SpikeSortingPipeline](https://github.com/Digital-C-Fiber/SpikeSortingPipeline)

---

#### Advanced Spike Sorting on Microneurography Data: Proof-of-Concept of VPNet (poster, 2024)

**File:** [ResearchGate](https://www.researchgate.net/publication/383943886_Advanced_Spike_Sorting_on_Microneurography_Data_Proof-of-Concept_of_VPNet_as_a_Universal_Approach)

**Comment:** A conference poster presenting the first results of the VPNet approach to spike sorting in microneurography (GMDS 2024). In comparison to SVM-based classification, results were comparable, but VPNet could be applied without dataset-level calibration.

---

#### Troglio et al. 2025

**File:** Coming soon

---

#### Darabos et al. 2025

**File:** Coming soon

---

### 3. FAIR Microneurography and Open Science

#### Analysis of the Research Infrastructure Needs in Emerging Interdisciplinary Consortia (2025)

**File:** [Zenodo](https://zenodo.org/records/16736006) | **License:** Creative Commons Attribution 4.0 International

**Comment:** NFDI4Health pilot project.

---

#### Harmonizing Neuropathic Pain Research: Outcomes of the London Consensus Meeting on Peripheral Tissue Studies (2025)

**File:** [Pain](https://doi.org/10.1097/j.pain.0000000000003445) | **License:** CC-BY

**Abstract:** Neuropathic pain remains difficult to treat, with drug development hampered by an incomplete understanding of its pathogenesis, as well as a lack of biomarkers. The problem is compounded by the scarcity of relevant human peripheral tissues, including skin, nerves, and dorsal root ganglia. Efforts to obtain such samples are accelerating, increasing the need for standardisation across laboratories. In this white paper, we report on a consensus meeting attended by neuropathic pain experts, designed to accelerate protocol alignment and harmonization of studies involving relevant peripheral tissues. The meeting was held in London in March 2024 and attended by 28 networking partners, including industry and patient representatives.

**Citation:** Villa S, Aasvang EK, Attal N, Baron R, Bourinet E, Calvo M, et al. Harmonizing neuropathic pain research: outcomes of the London consensus meeting on peripheral tissue studies. *Pain.* 2025 May 1;166(5):994-1001. doi: 10.1097/j.pain.0000000000003445.

---

#### Semi-Automatic Export of Electrophysiological Metadata to NFDI4Health Local Data Hubs (2024)

**File:** [IOS Press](http://dx.doi.org/10.3233/SHTI240836) | **License:** CC BY-NC 4.0

**Abstract:** The Local Data Hub (LDH) is a platform for FAIR sharing of medical research (meta-)data. In order to promote the usage of LDH in different research communities, it is important to understand the domain-specific needs, solutions currently used for data organization and provide support for seamless uploads to a LDH. In this work, we analyze the use case of microneurography and propose a concept-mapping and a workflow for researchers to transform and upload their metadata. We implemented a semi-automatic upload extension to odMLtables, a template-based tool for handling metadata in the electrophysiological community.

**Citation:** Elwes MR, Troglio A, Abedi M, Golebiewski M, Meineke F, Kirsten T, et al. Semi-Automatic Export of Electrophysiological Metadata to NFDI4Health Local Data Hubs: Use Case of Microneurography odML-Tables – A Technical Case Report. In: *German Medical Data Sciences 2024.* IOS Press; 2024. p. 40–8.

---

#### openMNGlab

**Code:** [GitHub](https://github.com/Digital-C-Fiber/openMNGlab)

---

#### odML-Tables as a Metadata Standard in Microneurography (2023)

**File:** [IOS Press](http://dx.doi.org/10.3233/SHTI230687) | **License:** CC BY-NC 4.0

**Abstract:** Metadata is essential for handling medical data according to FAIR principles. Standards are well-established for many types of electrophysiological methods but are still lacking for microneurographic recordings of peripheral sensory nerve fibers in humans. We propose a standard for structuring and storing microneurography metadata based on odML and odML-tables. Further, we present an extension to the odML-tables GUI that enables user-friendly search functionality of the database.

**Citation:** Troglio A, Nickerson A, Schlebusch F, Röhrig R, Dunham J, Namer B, et al. odML-Tables as a Metadata Standard in Microneurography. *Stud Health Technol Inform.* 2023 Sep 12;307:713–11.

**Code:** [odMLtablesForMNG](https://github.com/Digital-C-Fiber/odMLtablesForMNG)

---

#### PyDapsys: An Open-Source Library for Accessing Electrophysiology Data Recorded with DAPSYS (2023)

**File:** [Frontiers in Neuroinformatics](https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2023.1250260/full)

**Abstract:** In the field of neuroscience, a considerable number of commercial data acquisition and processing solutions rely on proprietary formats for data storage. This often leads to data being locked up in formats that are only accessible by using the original software. To ensure FAIR data management, strategies should be established to enable long-term, independent, and unified access to data in proprietary formats. In this work, we demonstrate PyDapsys, a solution to gain open access to data acquired using the proprietary recording system DAPSYS. PyDapsys enables opening recorded files directly in Python and saving them as NIX files, commonly used for open research in the electrophysiology domain.

**Citation:** Konradi P, Troglio A, Pérez Garriga A, Pérez Martín A, Röhrig R, Namer B and Kutafina E (2023) PyDapsys: an open-source library for accessing electrophysiology data recorded with DAPSYS. *Front. Neuroinform.* 17:1250260. doi: 10.3389/fninf.2023.1250260

**Code:** [PyDapsys](https://github.com/Digital-C-Fiber/PyDapsys)

---

#### Measuring Pain and Nociception: Through the Glasses of a Computational Scientist (2023)

**File:** [Frontiers in Network Physiology](https://www.frontiersin.org/journals/network-physiology/articles/10.3389/fnetp.2023.1099282/full) | **License:** CC-BY

**Abstract:** In a healthy state, pain plays an important role in natural biofeedback loops and helps to detect and prevent potentially harmful stimuli and situations. However, pain can become chronic and, as such, a pathological condition, losing its informative and adaptive function. Efficient pain treatment remains a largely unmet clinical need. One promising route to improve the characterization of pain, and with that the potential for more effective pain therapies, is the integration of different data modalities through cutting-edge computational methods. Here, we propose an overview on the topic of pain assessment in humans for computational researchers.

**Citation:** Kutafina E, Becker S and Namer B (2023) Measuring pain and nociception: Through the glasses of a computational scientist. Transdisciplinary overview of methods. *Front. Netw. Physiol.* 3:1099282. doi: 10.3389/fnetp.2023.1099282

---

## Code Repositories

| Repository | Description |
|---|---|
| [openMNGlab](https://github.com/Digital-C-Fiber/openMNGlab) | Open analysis library for microneurography data |
| [SpikeSortingPipeline](https://github.com/Digital-C-Fiber/SpikeSortingPipeline) | Snakemake-based supervised spike sorting pipeline |
| [PyDapsys](https://github.com/Digital-C-Fiber/PyDapsys) | Open-source access to DAPSYS electrophysiology data |
| [odMLtablesForMNG](https://github.com/Digital-C-Fiber/odMLtablesForMNG) | odML-based metadata standard for microneurography |
| [Collection of Materials](https://github.com/Digital-C-Fiber/Collection-of-materials-relevant-for-Digital-C-Fiber-work) | Knowledge base for Digital C-Fiber work |

---

*Digital C-Fiber — computational models of human C-fibers for neuropathic pain research.*
