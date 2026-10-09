import { Initiative, Project, IdeaItem, SpeakingTopic } from '../types';
import heroPortrait from '../assets/images/crystal_kizor_hero_1791492313282.jpg';
import standingTravertinePortrait from '../assets/images/ck_travertine_studio_portrait_1791495489622.jpg';
import teaPodcastWorkspace from '../assets/images/ck_tea_podcast_workspace_1791495478503.jpg';
import studioCokaArch from '../assets/images/studio_coka_arch_1791492322420.jpg';
import communityCentreOculus from '../assets/images/community_centre_oculus_1791497143161.jpg';
import communityCentreExterior from '../assets/images/community_centre_exterior_1791497180502.jpg';
import communityCentreGallery from '../assets/images/community_centre_jali_gallery_1791497191043.jpg';
import natureHome2Exterior from '../assets/images/nature_home_2_exterior_1791498345884.jpg';
import natureHome2Dining from '../assets/images/nature_home_2_dining_1791498324731.jpg';
import natureHome2Bedroom from '../assets/images/nature_home_2_bedroom_1791498334438.jpg';
import natureHomeExterior from '../assets/images/nature_home_exterior_1791499317514.jpg';
import natureHomeStudy from '../assets/images/nature_home_study_1791499306288.jpg';
import natureHomeAtrium from '../assets/images/nature_home_atrium_1791499328457.jpg';
import elevatedFurniture from '../assets/images/elevated_furniture_1791492331219.jpg';
import akoAllianceEdu from '../assets/images/ako_alliance_edu_1791492340404.jpg';
import teaMedia from '../assets/images/tea_media_platform_1791492351584.jpg';

// Visual Assets from generation and assessment alignment
export const ASSETS = {
  heroPortrait,
  standingTravertinePortrait,
  teaPodcastWorkspace,
  studioCokaArch,
  communityCentreOculus,
  communityCentreExterior,
  communityCentreGallery,
  natureHome2Exterior,
  natureHome2Dining,
  natureHome2Bedroom,
  natureHomeExterior,
  natureHomeStudy,
  natureHomeAtrium,
  elevatedFurniture,
  akoAllianceEdu,
  teaMedia,
};

export const INITIATIVES: Initiative[] = [
  {
    id: 'studio-coka',
    name: 'Studio COKA',
    category: 'build',
    categoryLabel: 'BUILD',
    subtitle: 'Architecture · Interior Design · Construction',
    tagline: 'Climate-responsive spatial practice rooted in people, place, and materiality.',
    description:
      'A design and construction practice focused on thoughtful, climate-responsive architecture. We investigate the living relationship between environmental physics, tectonic honesty, and the cultural contexts of contemporary African living.',
    focusAreas: ['Climate-Responsive Envelopes', 'Interior Architecture', 'Passive Thermal Comfort', 'Tectonic Construction'],
    imageSrc: ASSETS.natureHome2Exterior,
    imageAlt: 'Nature Home 2 — Contemporary climate-responsive rammed earth villa by Studio COKA',
    linkText: 'Explore Studio COKA',
    highlights: [
      'Site-specific climate modeling and passive ventilation',
      'Integration of raw earth, indigenous timbers, and precision casting',
      'End-to-end design through construction delivery'
    ]
  },
  {
    id: 'elevated',
    name: 'ELEvated',
    category: 'build',
    categoryLabel: 'BUILD',
    subtitle: 'Furniture & Product Design',
    tagline: 'Functional contemporary objects grounded in African materiality and living rituals.',
    description:
      'A contemporary furniture and object design brand producing honest, functional pieces. Drawing on regional artisanal techniques and contextual timber, stone, and fibers, ELEvated creates design artifacts calibrated for modern homes.',
    focusAreas: ['Contextual Furniture', 'Material Honesty', 'Artisanal Fabrication', 'Spatial Artifacts'],
    imageSrc: ASSETS.elevatedFurniture,
    imageAlt: 'Low sculpted iroko wood and woven fiber lounge chair beside fluted terracotta plinth by ELEvated',
    linkText: 'Explore ELEvated Collection',
    highlights: [
      'Sustainably sourced regional hardwoods (Iroko, Obeche)',
      'Collaboration with master woodworkers and handweavers',
      'Modular and enduring ergonomic forms'
    ]
  },
  {
    id: 'ako-alliance',
    name: 'AKO Alliance',
    category: 'empower',
    categoryLabel: 'EMPOWER',
    subtitle: 'Education · Youth Opportunity · Social Impact',
    tagline: 'Expanding access to education and opening tangible horizons for children and youth.',
    description:
      'A community-driven initiative dedicated to dismantling educational barriers. Through learning hubs, creative spatial environments, and mentorship pipelines, AKO Alliance builds lasting developmental equity for the next generation.',
    focusAreas: ['Educational Access', 'Youth Development', 'Spatial Learning Hubs', 'Opportunity Pathways'],
    imageSrc: ASSETS.akoAllianceEdu,
    imageAlt: 'African young learners gathered around a communal drafting table in a light-filled educational workshop',
    linkText: 'Explore AKO Alliance',
    highlights: [
      'Community learning hubs providing stable study and creative environments',
      'Workshops connecting creative literacy with career discovery',
      'Long-term community partnership models'
    ]
  },
  {
    id: 'alive-and-free',
    name: 'Alive and Free',
    category: 'empower',
    categoryLabel: 'EMPOWER',
    subtitle: 'Faith · Identity · Youth Movement',
    tagline: 'Empowering young people to walk in spiritual clarity, healing, and life in Christ.',
    description:
      'A Christian youth movement fostering authentic spiritual community, intentional discipleship, and emotional renewal. Alive and Free provides safe, grounded spaces where young people discover purpose and walk in holistic freedom.',
    focusAreas: ['Youth Discipleship', 'Identity & Purpose', 'Community Gatherings', 'Spiritual Guidance'],
    linkText: 'Learn About the Movement',
    highlights: [
      'Grounded fellowship gatherings and youth cohort circles',
      'Safe dialogue on mental wellness, purpose, and spiritual integrity',
      'Mentorship pathways connecting youth with seasoned leaders'
    ]
  },
  {
    id: 'tea',
    name: 'The Effective Architect (TEA)',
    category: 'share',
    categoryLabel: 'SHARE',
    subtitle: 'Education · Media · Professional Development',
    tagline: 'Equipping architects and built-environment professionals to build meaningful careers.',
    description:
      'An architectural education and media platform bridging the gap between theoretical schooling and real-world practice. TEA delivers insightful media, professional frameworks, and strategic guidance for modern spatial practitioners.',
    focusAreas: ['Practice Strategy', 'Architect Career Roadmaps', 'Built Environment Media', 'Pedagogical Resources'],
    imageSrc: ASSETS.teaPodcastWorkspace,
    imageAlt: 'Crystal Kizor hosting The Effective Architect studio session with microphone, laptop, and architectural books',
    linkText: 'Explore TEA Platform',
    highlights: [
      'In-depth video essays and breakdown masterclasses',
      'Career navigation frameworks for emerging professionals',
      'Digital publication on built-environment practice'
    ]
  },
  {
    id: 'speaking',
    name: 'Speaking & Keynotes',
    category: 'share',
    categoryLabel: 'SHARE',
    subtitle: 'Keynotes · Panels · Thought Leadership',
    tagline: 'Conversations that interrogate African cities, climate responsiveness, and creative leadership.',
    description:
      'Engagements across university auditoriums, design biennials, corporate summits, and industry panels. Crystal shares critical insights on spatial justice, vernacular technologies, and building multifaceted creative enterprises.',
    focusAreas: ['Climate-Responsive Cities', 'African Urban Realities', 'The Multifaceted Practitioner', 'Spatial Justice'],
    linkText: 'Inquire for Engagements',
    highlights: [
      'Keynotes tailored for architectural summits and academic forums',
      'Interactive panels on sustainable African urbanization',
      'Leadership masterclasses for creative entrepreneurs'
    ]
  },
  {
    id: 'crystal-kizor-ideas',
    name: 'Research, Writing & Ideas',
    category: 'think',
    categoryLabel: 'THINK',
    subtitle: 'Research · Monographs · Critical Discourse',
    tagline: 'Investigating the intersection of African material cultures, urban policy, and spatial theory.',
    description:
      'The intellectual and theoretical foundation undergirding the entire ecosystem. Here, Crystal interrogates the future of tropical architecture, materials as living heritage, and systemic reforms needed in African architecture education.',
    focusAreas: ['Climate-Adaptive Pedagogy', 'Vernacular Materials', 'African Urban Morphology', 'Spatial Theory'],
    linkText: 'Read Selected Papers & Notes',
    highlights: [
      'Working papers on passive cooling techniques for tropical West Africa',
      'Critical essays on vernacular craft preservation',
      'Curated reading lists and pedagogical manifestos'
    ]
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'community-centre-project',
    title: 'The Community Centre Project',
    initiative: 'Studio COKA & AKO Alliance',
    category: 'Civic Architecture & Community Gathering Infrastructure',
    statusBadge: 'Architectural Design Concept',
    description:
      'A circular climate-responsive civic complex organized around a central sacred tree oculus, combining curved rammed earth envelopes, perforated terracotta jali light screens, and stepped gathering amphitheaters.',
    longDescription:
      'Conceived as an egalitarian civic sanctuary for gathering, education, and community craft guilds, the Community Centre Project rejects imported industrial idioms in favor of local geological and social vernaculars. The circular plan is anchored by a monumental open-air impluvium courtyard with an oculus cut into the timber-slatted roof, naturally drawing hot air upward through thermal stack ventilation. Along the perimeter, curved compressed earth walls are enveloped by deep overhanging timber canopies and delicate terracotta brick jali screens that diffuse equatorial sunlight while providing perpetual cross-ventilation. Stepped amphitheaters and continuous ramped walkways invite fluid intergenerational gathering, demonstrating that climate responsiveness and community dignity are indivisible.',
    materials: [
      'Locally Quarried Stabilized Rammed Earth',
      'Hand-Fired Terracotta Jali Screen Walls',
      'Indigenous Timber Trusses & Radiant Slatted Batten Ceilings',
      'Hand-Laid Earthen Tile Floor Mosaic'
    ],
    spatialScope: 'Central sacred tree oculus courtyard, stepped assembly amphitheater tiers, and terracotta jali galleries',
    imageSrc: ASSETS.communityCentreOculus,
    imageAlt: 'The Community Centre Project — Monumental tree oculus courtyard with stepped amphitheater seating',
    aspectRatio: '4:3',
    galleryImages: [
      {
        src: ASSETS.communityCentreOculus,
        alt: 'Central Sacred Tree Courtyard & Roof Oculus',
        caption: 'Central Impluvium Courtyard: Slatted timber oculus framing the sacred canopy with stepped stone assembly tiers.'
      },
      {
        src: ASSETS.communityCentreExterior,
        alt: 'Exterior View of Curved Rammed Earth Pavilion',
        caption: 'Exterior Architecture: Curved rammed earth envelopes, overhanging timber eaves, and ramped civic circulation walkway.'
      },
      {
        src: ASSETS.communityCentreGallery,
        alt: 'Perforated Terracotta Jali Exhibition Corridor',
        caption: 'Exhibition & Gallery Promenade: Double-height terracotta jali lattice wall casting intricate geometric light patterns.'
      }
    ]
  },
  {
    id: 'nature-home-2',
    title: 'Nature Home 2',
    initiative: 'Studio COKA',
    category: 'Climate-Responsive Residential Villa (Studio COKA)',
    statusBadge: 'Residential Monograph',
    description:
      'A serene biophilic residence crafted from diurnal rammed earth strata, cantilevered timber pergolas, and floor-to-ceiling glass connections to private plunge pools and lush courtyards.',
    longDescription:
      'Conceived as a tranquil domestic sanctuary, Nature Home 2 embodies Studio COKA’s philosophy of radical climatic adaptation and material intimacy. Rather than imposing synthetic industrial surfaces, the villa’s walls feature stratified rammed earth using local iron-rich soils, establishing natural thermal inertia that regulates interior microclimates throughout equatorial heat cycles. Deep timber roof overhangs eliminate direct solar gain, while sliding glass planes connect living, dining, and sleeping pavilions directly to native botanical gardens, open-air light-well water courts, and private plunge pools.',
    materials: [
      'Stabilized Rammed Earth Strata',
      'Hand-Laid Terracotta Brick & Clay Plasters',
      'Solid Teak & Iroko Timber Joinery & Ceiling Coffers',
      'Honed Concrete & Travertine Basin Slabs'
    ],
    spatialScope: 'Stratified rammed earth living pavilion, landscaped dining court, and master plunge suite',
    imageSrc: ASSETS.natureHome2Dining,
    imageAlt: 'Nature Home 2 — Dining pavilion with stratified rammed earth walls and tropical garden connection by Studio COKA',
    aspectRatio: '4:3',
    galleryImages: [
      {
        src: ASSETS.natureHome2Dining,
        alt: 'Nature Home 2 Dining Room & Garden Terrace',
        caption: 'Dining Pavilion: Stratified rammed earth walls, polished concrete flooring, bespoke oak dining table, and seamless sliding glass integration to the landscaped courtyard.'
      },
      {
        src: ASSETS.natureHome2Bedroom,
        alt: 'Nature Home 2 Master Bedroom & Plunge Pool Court',
        caption: 'Master Suite: Low timber platform bed, exposed roof beams with perimeter skylight, opening directly to a private sunken plunge pool and tropical flora.'
      },
      {
        src: ASSETS.natureHome2Exterior,
        alt: 'Nature Home 2 Exterior Facade & Garden Path',
        caption: 'Exterior Architecture: Rammed earth volume with terracotta brick parapet, cantilevered patio skylight, and stepped limestone garden landscape.'
      }
    ]
  },
  {
    id: 'nature-home',
    title: 'Nature Home',
    initiative: 'Studio COKA',
    category: 'Biophilic Rammed Earth Villa (Studio COKA)',
    statusBadge: 'Residential Monograph',
    description:
      'A serene biophilic residence exploring monolithic rammed earth envelopes, timber study sanctuaries, and a light-filled interior atrium courtyard.',
    longDescription:
      'Nature Home stands as Studio COKA’s foundational investigation into domestic architecture intertwined with climate, landscape, and material honesty. Designed around an internal microclimate cooling courtyard, the residence features thick stabilized earth perimeter walls that naturally dampen equatorial heat spikes. Expansive floor-to-ceiling glass reveals peaceful forest views while a custom timber-lined library offers a tranquil sanctuary for reading and contemplation.',
    materials: [
      'Site-Stabilized Rammed Earth Walls',
      'Solid Sapele & Teak Architectural Millwork',
      'Fluted Clay Tiles & Lime Washes',
      'Natural Granite Paving & Water Courtyard Slabs'
    ],
    spatialScope: 'Monolithic earth volumes, shaded porticos, private timber reading library, and interior cooling atrium',
    imageSrc: ASSETS.natureHomeExterior,
    imageAlt: 'Nature Home — Rammed earth exterior facade with tropical forest verge by Studio COKA',
    aspectRatio: '4:3',
    galleryImages: [
      {
        src: ASSETS.natureHomeExterior,
        alt: 'Nature Home Exterior Architecture & Overhangs',
        caption: 'Exterior Architecture: Monolithic rammed earth volumes with deep protective timber roof eaves and lush native verge.'
      },
      {
        src: ASSETS.natureHomeStudy,
        alt: 'Nature Home Private Library & Study',
        caption: 'Private Study & Library: Custom floor-to-ceiling sapele timber joinery and corner reading desk overlooking the serene courtyard.'
      },
      {
        src: ASSETS.natureHomeAtrium,
        alt: 'Nature Home Central Open Light Atrium',
        caption: 'Internal Cooling Atrium: Open skywell garden courtyard introducing passive convective airflow and soft daylight into living spaces.'
      }
    ]
  },
  {
    id: 'iroko-terracotta-series',
    title: 'The Iroko & Terracotta Lounge Series',
    initiative: 'ELEvated',
    category: 'Contemporary Furniture Design (ELEvated)',
    statusBadge: 'Product Design Concept',
    description:
      'A low-slung lounge chair paired with an architectural fluted terracotta plinth, exploring sculptural ergonomics and ancestral materials.',
    longDescription:
      'Part of ELEvated’s foundational collection, the lounge chair features an organic hand-sculpted frame of seasoned iroko wood laced with hand-twisted botanical cord. Accompanying it is an extruded fluted terracotta cylinder kiln-fired using regional clay deposits. The collection celebrates tactile density and honest joinery.',
    materials: ['Seasoned Dark Iroko Hardwood', 'Natural Vegetable Fiber Cord', 'High-Fire Natural Terracotta Clay'],
    spatialScope: 'Sculptural lounge chair in seasoned iroko and hand-spun cord paired with fluted terracotta side plinth',
    imageSrc: ASSETS.elevatedFurniture,
    imageAlt: 'Sculptural hand-carved iroko lounge chair and terracotta plinth by ELEvated',
    aspectRatio: '4:3'
  },
  {
    id: 'community-atelier',
    title: 'Community Learning Atelier & Studio',
    initiative: 'AKO Alliance & Studio COKA',
    category: 'Educational Space (AKO Alliance)',
    statusBadge: 'Spatial Learning Proposal',
    description:
      'A communal educational studio designed for youth collaboration, creative literacy, and architectural workshops.',
    longDescription:
      'Designed to foster spatial agency among young students, this atelier pairs tall steel casement windows with broad communal workbench tables built from locally milled timber. The layout accommodates both focused sketching sessions and collective project critiques, offering a luminous, dignified learning environment.',
    materials: ['Natural Pine & Hardwood Workbenches', 'Exposed Terracotta Plaster', 'Industrial Glazed Steelwork'],
    spatialScope: 'Communal timber drafting tables, natural daylight steel casements, and collaborative critique studio',
    imageSrc: ASSETS.akoAllianceEdu,
    imageAlt: 'Young African students at shared timber drafting bench in community atelier',
    aspectRatio: '4:3'
  }
];

export const IDEAS_ARTICLES: IdeaItem[] = [
  {
    id: 'tropical-urbanism',
    title: 'Passive Envelopes in Rapidly Urbanizing African Metropolises',
    subtitle: 'Why imported glass towers fail tropical cities and how vernacular physics point the way forward.',
    category: 'Spatial Physics & Climate',
    readTime: '6 min read',
    status: 'Research Working Paper',
    summary:
      'An inquiry into why energy-intensive sealed glass buildings are ill-suited for equatorial climates, proposing a contemporary tectonic language rooted in thermal mass and self-shading geometries.',
    fullExcerpt: [
      'The modern African skyline is too frequently an uncritical importation of temperate-climate corporate architecture: thin curtain-wall glazing, sealed internal volumes, and massive air handling loads that struggle under intermittent electrical infrastructure.',
      'By turning back to the fundamental physics of tropical comfort—diurnal thermal lag, deep overhangs, porous brise-soleil envelopes, and courtyard air chimneys—we do not retreat into nostalgic vernacularism. Rather, we build a radical, high-performing contemporary urban language.',
      'Our ongoing research investigates how stabilized compressed earth and micro-perforated timber louvers dampen diurnal heat transfers and harness convective airflow while celebrating local geological textures.'
    ],
    keyQuestions: [
      'How can African municipal building codes incentivize passive cooling metrics over synthetic chillers?',
      'What are the commercial supply chain blockages preventing compressed stabilized earth from entering high-density urban centers?'
    ]
  },
  {
    id: 'pedagogy-reform',
    title: 'De-Centering the Western Canon in Architectural Pedagogy',
    subtitle: 'Preparing the next generation of African spatial designers for real economic and material realities.',
    category: 'Pedagogy & Education',
    readTime: '5 min read',
    status: 'Pedagogical Position Essay',
    summary:
      'Examining how architecture curricula across the continent must integrate local material science, entrepreneurship, and grassroots community engagement alongside digital drafting.',
    fullExcerpt: [
      'Architecture education in many African universities remains anchored to mid-century European models, preparing students to detail materials they will rarely specify and solve problems foreign to their immediate cities.',
      'Through The Effective Architect (TEA), our thesis is straightforward: the modern African architect must be equal parts spatial designer, material researcher, and civic entrepreneur.',
      'When students are grounded in real cost engineering, site-scale manufacturing, and the socio-politics of urban informal settlements, they cease being passive draftspersons and become catalytic builders.'
    ],
    keyQuestions: [
      'How does bridging student design exercises with direct fabrication change design retention?',
      'What digital media distribution channels best accelerate peer learning among emerging practitioners across the continent?'
    ]
  },
  {
    id: 'craft-and-industrialization',
    title: 'From Raw Earth to High Craft: Materiality as Living Memory',
    subtitle: 'The craft lineage of African joinery, clay, and weave as contemporary design infrastructure.',
    category: 'Material Culture & Design',
    readTime: '4 min read',
    status: 'Material Culture Note',
    summary:
      'Reflecting on the tactile languages that unite furniture design, spatial enclosures, and communal identity in contemporary product design.',
    fullExcerpt: [
      'Materiality is never neutral. When we sit on a chair or touch a wall, we touch an entire chain of ecological stewardship, labor dignity, and craft history.',
      'In our work with ELEvated, we refuse to treat regional African crafts merely as decorative surface treatments applied to European silhouettes. The structure itself is born from the grain of the iroko, the shrinkage tolerances of the clay, and the tension of hand-spun fibers.',
      'Design in Africa must honor the memory of the hands that shaped the raw matter while meeting the rigorous ergonomics of modern life.'
    ],
    keyQuestions: [
      'How do we build dignified wage ecosystems for traditional artisan guilds within modern production pipelines?',
      'Can regional timber species be harvested with strict regenerative forestry protocols at commercial scale?'
    ]
  }
];

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: 'climate-vernacular',
    title: 'Climate-Responsive Architecture in African Urban Centers',
    theme: 'Environmental Architecture & Urban Future',
    audience: 'Design Biennials, Engineering Conferences, Municipal Summits',
    description:
      'A keynote addressing why tropical architecture must decouple from generic glass-box corporate aesthetics, highlighting real-world passive cooling solutions, thermal envelope physics, and contextual building delivery.',
    keyThemes: ['Passive solar orientation', 'Thermal mass & rammed earth', 'Embodied carbon & local supply chains']
  },
  {
    id: 'multifaceted-practitioner',
    title: 'The Architect as Ecosystem Builder: Design Beyond One Building',
    theme: 'Creative Leadership & Entrepreneurship',
    audience: 'Universities, Creative Summits, Young Professional Forums',
    description:
      'Exploring how contemporary spatial designers can expand their impact by moving fluidly across architecture, furniture, media, education, and community advocacy.',
    keyThemes: ['Diversified creative practices', 'Platform thinking for designers', 'Bridging theory and enterprise']
  },
  {
    id: 'pedagogy-future',
    title: 'Redesigning Built-Environment Pedagogy for Emerging Markets',
    theme: 'Education & Professional Empowerment',
    audience: 'Academic Boards, TEDx, Cultural Foundations',
    description:
      'Unpacking the pedagogical blind spots facing architectural education today and presenting new frameworks for training culturally grounded, commercially astute designers.',
    keyThemes: ['Curriculum modernization', 'Media-first architectural literacy', 'Youth mentorship pipelines']
  }
];

export const COPILOT_PROPOSAL = {
  title: 'TEA Career & Practice Copilot',
  subtitle: 'An AI-Powered Learning, Portfolio & Practice Companion for Built-Environment Professionals',
  overview:
    'A specialized tool proposed for The Effective Architect (TEA) platform to assist emerging architects, students, and practitioners across Africa and global emerging markets in navigating career progression, design critique, and practice management.',
  coreCapabilities: [
    {
      title: 'Adaptive Skill & Career Roadmapping',
      description: 'Analyzes user career stage (student, intern, project architect, principal) to recommend structured learning tracks across building codes, contract administration, and climate modeling.'
    },
    {
      title: 'Portfolio & Case Study Reviewer',
      description: 'Provides structured, constructive feedback on project narrative clarity, technical drawing legibility, and architectural storytelling.'
    },
    {
      title: 'TEA Knowledge Base Retrieval (RAG)',
      description: 'Retrieves verified TEA video masterclasses, technical white papers, and articles with direct citation links to prevent hallucinations.'
    },
    {
      title: 'Practice & Contract Query Assistant',
      description: 'Helps practitioners navigate standard client contract frameworks, scope clarification, and fee calculation logic while transparently disclaiming formal legal/structural liability.'
    }
  ],
  architectureSteps: [
    { step: '01', title: 'Content Ingestion', desc: 'TEA transcripts, essays, and architectural guides are chunked and tagged with domain taxonomy.' },
    { step: '02', title: 'Vector Embedding', desc: 'High-density spatial and practice domain embeddings stored in a managed vector index.' },
    { step: '03', title: 'Hybrid Retrieval', desc: 'Combines semantic similarity and metadata filtering (career level, climate zone, project type).' },
    { step: '04', title: 'Grounded Generation', desc: 'Strict system prompt enforces source citation, pedagogical tone, and architectural safety guardrails.' }
  ],
  safeguards: [
    'Strict distinction between educational guidance and licensed professional engineering or legal advice.',
    'Zero hallucinated building codes or structural calculations; always flags local municipal authority verification.',
    'User feedback loop with clear flags for review by senior architects on the TEA editorial board.'
  ]
};
