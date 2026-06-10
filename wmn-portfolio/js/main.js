const experiments = [
  {
    number: 1,
    title: 'Propagation Model Comparison using Mininet-WiFi',
    aim: 'To study the effect of different wireless propagation models on signal strength, latency, packet delivery, and throughput in a wireless network using Mininet-WiFi.',
    objectives: ['Compare Free Space, Two-Ray Ground, Log-Distance, and Log-Normal Shadowing models.', 'Observe how distance and environment affect signal quality.', 'Measure latency, packet delivery, and throughput differences.'],
    theory: 'Wireless propagation models describe how radio signals attenuate as they travel through space. Free Space assumes a clear line-of-sight path, Two-Ray Ground includes ground reflection, Log-Distance introduces environment-based path loss, and Log-Normal Shadowing adds random signal variation caused by obstacles and fading.',
    procedure: ['Create a wireless topology in Mininet-WiFi.', 'Apply each propagation model to the same station and access point scenario.', 'Move stations across distance points and capture RSSI, delay, packet delivery, and throughput.', 'Compare the collected metrics for each model.'],
    results: 'Free Space produced the strongest baseline signal, Two-Ray Ground gave more realistic outdoor behavior, Log-Distance showed gradual signal degradation, and Log-Normal Shadowing introduced realistic variation under obstructed conditions.',
    conclusion: 'Propagation model selection strongly influences simulated wireless performance and must match the expected deployment environment.'
  },
  {
    number: 2,
    title: 'Wireless Network Simulation using Mininet-WiFi',
    aim: 'To study wireless network behavior using Mininet-WiFi and observe the effect of fading, distance, and node movement on connectivity and performance.',
    objectives: ['Build a wireless topology with access points and stations.', 'Study the impact of fading constants and mobility.', 'Measure connectivity, latency, and throughput using simulation tools.'],
    theory: 'Mininet-WiFi extends Mininet for wireless network emulation. It supports stations, access points, wireless links, propagation models, mobility, and software-defined networking experiments, making it suitable for academic wireless analysis.',
    procedure: ['Install and start Mininet-WiFi.', 'Create an access point and station topology.', 'Configure wireless range, position, and propagation parameters.', 'Run connectivity, ping, and throughput tests.', 'Record how signal and performance change with node movement.'],
    results: 'The experiment showed that station distance, fading conditions, and wireless range directly affect packet delivery, latency, and achievable throughput.',
    conclusion: 'Mininet-WiFi is effective for visualizing and measuring wireless network behavior before moving to physical deployments.'
  },
  {
    number: 3,
    title: 'Active vs Passive Scanning using Mininet-WiFi',
    aim: 'To compare Active Scanning and Passive Scanning techniques in wireless networks by analyzing discovery time, power consumption, and network response using Mininet-WiFi.',
    objectives: ['Understand probe request and beacon based discovery.', 'Compare discovery time for active and passive scanning.', 'Analyze response behavior and energy implications.'],
    theory: 'In active scanning, a station broadcasts probe request frames and waits for access point responses. In passive scanning, the station listens for periodic beacon frames. Active scanning is usually faster, while passive scanning reduces transmissions and can be more power efficient.',
    procedure: ['Create a Mininet-WiFi topology with one access point and one station.', 'Configure active scanning and record discovery behavior.', 'Configure passive scanning and wait for beacon-based discovery.', 'Measure discovery time, received bytes, and latency.', 'Compare both scanning approaches.'],
    results: 'Active scanning discovered the network faster because the station initiated discovery, while passive scanning required waiting for beacon frames and therefore took longer.',
    conclusion: 'Active scanning is suitable when fast discovery is needed, while passive scanning is useful when lower device transmission activity is preferred.'
  },
  {
    number: 4,
    title: 'Mobile Node Handover Between Two Access Points using Mininet-WiFi',
    aim: 'To study the handover process of a mobile wireless station moving between two access points and analyze the effects on signal strength, latency, and packet loss using Mininet-WiFi.',
    objectives: ['Simulate a station moving between two AP coverage areas.', 'Observe AP association changes.', 'Measure signal strength, latency, and packet loss during handover.'],
    theory: 'Handover occurs when a mobile station leaves one access point coverage area and connects to another with stronger signal quality. It is critical in campus Wi-Fi, cellular systems, transportation networks, and mobile IoT deployments.',
    procedure: ['Create a topology with two access points and one mobile station.', 'Place APs at different positions and configure channels.', 'Move the station across the coverage area.', 'Run continuous connectivity tests during movement.', 'Record signal changes, handover moment, packet loss, and latency.'],
    results: 'As the station moved away from the first AP, signal quality dropped and association shifted to the second AP. A short performance disruption occurred during the transition.',
    conclusion: 'Efficient handover is essential for maintaining uninterrupted mobile connectivity and reducing packet loss.'
  },
  {
    number: 5,
    title: 'Open5GS Core Setup and Subscriber Configuration',
    aim: 'To deploy and configure the Open5GS 5G Core Network on Ubuntu, establish subscriber management using MongoDB, and validate core network functionality through the Open5GS WebUI.',
    objectives: ['Install Open5GS core services.', 'Configure MongoDB-backed subscriber records.', 'Use Open5GS WebUI for subscriber management.', 'Validate core readiness for 5G experiments.'],
    theory: 'Open5GS is an open-source implementation of 4G and 5G core networks. In 5G SA mode, functions such as AMF, SMF, UPF, UDM, AUSF, and PCF coordinate registration, session management, authentication, policy control, and user-plane forwarding.',
    procedure: ['Install Open5GS and dependencies on Ubuntu.', 'Start core network services.', 'Install and configure the Open5GS WebUI.', 'Create subscriber profiles with IMSI, keys, and DNN values.', 'Verify service status and subscriber entries.'],
    results: 'Open5GS core services were successfully deployed and subscriber data was configured through the WebUI and MongoDB backend.',
    conclusion: 'The Open5GS core setup provides the foundation for UE registration, PDU sessions, slicing, MEC, and advanced 5G use cases.'
  },
  {
    number: 6,
    title: 'gNB Integration with Open5GS Core',
    aim: 'To configure and integrate a simulated 5G gNB with the Open5GS 5G Core Network using UERANSIM and verify successful NG interface establishment.',
    objectives: ['Configure UERANSIM gNB settings.', 'Connect gNB to Open5GS AMF.', 'Verify NG setup and readiness for UE registration.'],
    theory: 'In 5G Standalone architecture, the gNB acts as the radio access network node. It connects to the AMF using the NG-C interface and provides the access path for user equipment to register and establish sessions.',
    procedure: ['Configure AMF address and PLMN values in the gNB profile.', 'Start Open5GS core services.', 'Run the UERANSIM gNB process.', 'Check AMF logs for NG setup success.', 'Confirm the gNB is ready for UE attachment.'],
    results: 'The simulated gNB successfully connected to the Open5GS AMF and established the NG interface.',
    conclusion: 'gNB integration confirms that the simulated RAN can communicate with the 5G core and support UE registration.'
  },
  {
    number: 7,
    title: 'UE Registration and PDU Session Establishment',
    aim: 'To configure and register a User Equipment with the Open5GS 5G Core Network using UERANSIM and establish a PDU Session for data communication.',
    objectives: ['Configure a simulated UE profile.', 'Authenticate the UE using Open5GS subscriber credentials.', 'Establish a PDU session and obtain an IP address.', 'Verify data connectivity through the tunnel interface.'],
    theory: 'A 5G UE must register with the core network and complete authentication before accessing data services. After registration, a PDU session creates a user-plane data path and assigns an IP address through a tunnel interface.',
    procedure: ['Create a UE configuration matching the subscriber IMSI and keys.', 'Start the gNB and UE processes in UERANSIM.', 'Observe registration and authentication logs.', 'Establish the PDU session.', 'Verify assigned IP address and connectivity.'],
    results: 'The UE registered successfully, authenticated against Open5GS subscriber records, and established a working PDU session with an assigned tunnel interface.',
    conclusion: 'Successful UE registration and PDU session establishment validate the end-to-end operation of the simulated 5G SA network.'
  },
  {
    number: 8,
    title: 'Network Slicing in Open5GS',
    aim: 'To implement and validate multiple network slices in a 5G Standalone network using Open5GS and UERANSIM by configuring multiple S-NSSAIs and verifying slice-based UE registration.',
    objectives: ['Configure eMBB, URLLC, and mMTC slices.', 'Map slices using SST and SD values.', 'Register UEs with slice-specific settings.', 'Verify isolated PDU sessions.'],
    theory: 'Network slicing partitions a shared physical 5G infrastructure into multiple logical networks. Each slice is identified using S-NSSAI, made up of SST and optional SD values, and can be optimized for throughput, latency, or device density.',
    procedure: ['Define slice parameters in Open5GS configuration.', 'Configure UE profiles with requested S-NSSAI values.', 'Start gNB and UE instances.', 'Establish PDU sessions for each slice.', 'Validate separate tunnel interfaces and service behavior.'],
    results: 'Multiple slices were created and validated using unique S-NSSAI values for eMBB, URLLC, and mMTC traffic.',
    conclusion: 'Open5GS and UERANSIM can demonstrate practical 5G network slicing for service-specific performance requirements.'
  },
  {
    number: 9,
    title: 'Mobile Edge Computing (MEC) Latency Analysis',
    aim: 'To evaluate the performance benefits of Mobile Edge Computing by comparing the latency of a local edge server with that of a remote cloud server.',
    objectives: ['Deploy or identify a local edge service.', 'Compare edge and remote cloud latency.', 'Analyze the benefit of placing computation closer to users.'],
    theory: 'Mobile Edge Computing brings compute and storage resources closer to users. By reducing the distance data must travel, MEC improves responsiveness for low-latency applications such as healthcare monitoring, automation, AR/VR, and smart city services.',
    procedure: ['Deploy a local edge server.', 'Select a remote cloud endpoint.', 'Send repeated requests from the client to both endpoints.', 'Measure latency and response time.', 'Compare average delay and responsiveness.'],
    results: 'The local edge server produced lower latency than the remote cloud endpoint, demonstrating the performance benefit of edge placement.',
    conclusion: 'MEC is valuable for latency-sensitive 5G applications where response time is a critical requirement.'
  },
  {
    number: 10,
    title: 'End-to-End Smart Healthcare Use Case using 5G Network Slicing and MEC',
    aim: 'To demonstrate an end-to-end Smart Healthcare application using a 5G Standalone network by integrating Open5GS, UERANSIM, Network Slicing, and MEC to achieve low-latency communication.',
    objectives: ['Use a URLLC slice for healthcare traffic.', 'Integrate MEC to reduce processing delay.', 'Demonstrate real-time monitoring behavior.', 'Validate reliability and latency benefits.'],
    theory: 'Smart healthcare requires reliable low-latency communication for real-time patient monitoring, emergency response, remote diagnostics, and telemedicine. 5G URLLC, network slicing, and MEC combine to support these requirements.',
    procedure: ['Deploy Open5GS and UERANSIM with slice support.', 'Configure a URLLC slice for healthcare data.', 'Run the healthcare monitoring service near the edge.', 'Send simulated patient data through the network.', 'Observe latency, reliability, and service continuity.'],
    results: 'The healthcare use case demonstrated that a dedicated URLLC slice with edge processing can support low-latency service behavior.',
    conclusion: 'Combining 5G slicing and MEC provides a strong foundation for critical smart healthcare applications.'
  }
];

const exactExperimentData = Array.isArray(window.experimentSource) ? window.experimentSource : [];
experiments.forEach((experiment) => {
  const exact = exactExperimentData.find((item) => item.number === experiment.number);
  experiment.sourceText = exact ? exact.sourceText : '';
  experiment.screenshots = exact ? exact.screenshots : [];
});

const sectionIcons = {
  aim: 'A',
  objectives: 'O',
  theory: 'T',
  procedure: 'P',
  screenshots: 'S',
  results: 'R',
  conclusion: 'C'
};

function initTheme() {
  const savedTheme = localStorage.getItem('wmn-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('wmn-theme', next);
    });
  });
}

function initNavigation() {
  const hamburger = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');
  const navbar = document.querySelector('.navbar');
  if (!hamburger || !links || !overlay) return;

  const closeMenu = () => {
    hamburger.classList.remove('active');
    links.classList.remove('open');
    overlay.classList.remove('active');
  };

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', closeMenu);
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  });
}

function createCollapsible(title, key, html, open = false) {
  return `
    <div class="collapsible ${open ? 'open' : ''}">
      <div class="collapsible-header" role="button" tabindex="0">
        <span class="icon">${sectionIcons[key]}</span>
        <span>${title}</span>
        <span class="chevron">⌄</span>
      </div>
      <div class="collapsible-body">
        <div class="collapsible-content">${html}</div>
      </div>
    </div>
  `;
}

function createStaticSection(title, key, html) {
  return `
    <section class="experiment-section">
      <div class="experiment-section-title">
        <span class="icon">${sectionIcons[key]}</span>
        <h3>${title}</h3>
      </div>
      <div class="experiment-section-content">${html}</div>
    </section>
  `;
}

function listMarkup(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function paragraphMarkup(text) {
  if (!text) return '<p>Original PDF text is not available for this experiment.</p>';
  const normalized = text
    .replace(/\s+(Aim:?)/g, '</p><p><strong>$1</strong>')
    .replace(/\s+(\d+\.\s+[A-Z][^.]*)/g, '</p><p><strong>$1</strong>')
    .replace(/\s+(Conclusion)/g, '</p><p><strong>$1</strong>')
    .replace(/\s+(Result[s]?|Observations?)/g, '</p><p><strong>$1</strong>');
  return `<div class="pdf-notes"><p>${normalized}</p></div>`;
}

function screenshotMarkup(exp) {
  if (!exp.screenshots || !exp.screenshots.length) {
    return `
      <div class="screenshot-grid">
        <div class="screenshot-placeholder"><span class="icon">▧</span><span>No embedded screenshot was found in the PDF for this assignment.</span></div>
      </div>
    `;
  }

  return `
    <div class="screenshot-grid">
      ${exp.screenshots.map((src, index) => `
        <figure class="experiment-shot">
          <img src="${src}" alt="Experiment ${exp.number} screenshot ${index + 1}">
          <figcaption>Experiment ${exp.number} screenshot ${index + 1}</figcaption>
        </figure>
      `).join('')}
    </div>
  `;
}

function initExperiments() {
  const nav = document.getElementById('experimentNav');
  const panels = document.getElementById('experimentPanels');
  const search = document.getElementById('experimentSearch');
  if (!nav || !panels) return;

  nav.innerHTML = experiments.map((exp, index) => `
    <li class="exp-nav-item ${index === 0 ? 'active' : ''}" data-exp="${exp.number}" data-title="${exp.title.toLowerCase()}">
      <span class="exp-nav-num">${exp.number}</span>
      <span>Experiment ${exp.number}</span>
    </li>
  `).join('');

  panels.innerHTML = experiments.map((exp, index) => `
    <article class="exp-panel ${index === 0 ? 'active' : ''}" id="experiment-${exp.number}">
      <header class="exp-header">
        <span class="exp-number-badge">Experiment ${exp.number}</span>
        <h2 class="exp-title">${exp.title}</h2>
      </header>
      ${createStaticSection('Aim', 'aim', `<p>${exp.aim}</p>`)}
      ${createStaticSection('Objectives', 'objectives', listMarkup(exp.objectives))}
      ${createStaticSection('Theory', 'theory', `<p>${exp.theory}</p>`)}
      ${createStaticSection('Procedure', 'procedure', listMarkup(exp.procedure))}
      ${createStaticSection('Screenshots Section', 'screenshots', screenshotMarkup(exp))}
      ${createStaticSection('Results', 'results', `<p>${exp.results}</p>`)}
      ${createStaticSection('Working and Setup Section', 'theory', paragraphMarkup(exp.sourceText))}
      ${createStaticSection('Conclusion', 'conclusion', `<p>${exp.conclusion}</p>`)}
    </article>
  `).join('');

  const navItems = [...nav.querySelectorAll('.exp-nav-item')];
  const panelItems = [...panels.querySelectorAll('.exp-panel')];

  const activate = (number) => {
    navItems.forEach((item) => item.classList.toggle('active', item.dataset.exp === String(number)));
    panelItems.forEach((panel) => panel.classList.toggle('active', panel.id === `experiment-${number}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navItems.forEach((item) => item.addEventListener('click', () => activate(item.dataset.exp)));

  if (search) {
    search.addEventListener('input', () => {
      const term = search.value.trim().toLowerCase();
      navItems.forEach((item) => {
        const match = item.textContent.toLowerCase().includes(term) || item.dataset.title.includes(term);
        item.classList.toggle('hidden', !match);
      });
    });
  }
}

function initCollapsibles() {
  document.addEventListener('click', (event) => {
    const header = event.target.closest('.collapsible-header');
    if (!header) return;
    header.closest('.collapsible').classList.toggle('open');
  });
  document.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('collapsible-header')) {
      event.preventDefault();
      event.target.closest('.collapsible').classList.toggle('open');
    }
  });
}

function initRevealAnimations() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initExperiments();
  initCollapsibles();
  initRevealAnimations();
});
