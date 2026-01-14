# 📂 SysAdmin & Network Portfolio

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Cisco](https://img.shields.io/badge/cisco-%23049fd9.svg?style=for-the-badge&logo=cisco&logoColor=white)

Welcome to the **SysAdmin & Network Portfolio** of **Oussama Boukhali**.
This static website serves as a central hub to showcase my academic and personal projects in Systems Administration, Networking, and Cybersecurity, developed during my studies at **ITB**.

---

## 🚀 About The Project

This portfolio is designed with a modern **Glassmorphism** UI style, focusing on clean navigation and responsiveness. It details complex networking scenarios simulated in Cisco Packet Tracer and other system administration tasks.

### ✨ Key Features
* **Project Showcase:** Detailed breakdowns of networking topologies (Routing, ACLs, VLANs).
* **Downloadable Resources:** Direct links to `.pkt` and `.pka` source files.
* **Interactive UI:** JavaScript-based toggles to reveal/hide technical details.
* **Contact Integration:** Functional contact form powered by **Formspree**.
* **Responsive Design:** Grid-based layout compatible with different screen sizes.

---

## 🛠️ Portfolio Content

### 1. 📡 Project 1: Routing & ACLs
**Goal:** Network infrastructure configuration for ITB Holding with redundancy and security.
* **Technologies:** Static Routing, Floating Routes, ACLs (Standard/Extended).
* **Key Achievement:** Implemented a floating route for backup connection and strict firewall rules to block specific subnets.

### 2. 🛡️ Project 2: Segmentation & DHCP
**Goal:** Logical separation of departments to optimize performance and security.
* **Technologies:** VLANs (802.1Q), Inter-VLAN Routing (Router-on-a-Stick), DHCP Server.
* **Key Achievement:** Automated IP assignment for the Sales department while maintaining isolation from Administration.

### 3. 📂 SysAdmin Repository
A comprehensive list of skills and practices categorized by:
* Cybersecurity (VPN, Firewalls, SIEM)
* Cloud & DevOps (Kubernetes, AWS, Jenkins)
* Servers (Nginx, MySQL, Active Directory)
* Automation (Bash, Ansible, Python)

---

## 💻 Tech Stack (Website)

* **Frontend Structure:** HTML5 (Semantic).
* **Styling:** CSS3 (Custom Grid Layout, Glassmorphism effects, Poppins Font).
* **Interactivity:** Vanilla JavaScript (`js/java.js`).
* **Icons/Assets:** Custom PNG assets and text-based icons.

---

## 📂 Project Structure

```bash
.
├── css/
│   └── estilos.css       # Main stylesheet
├── img/
│   ├── ITB-Logo.png      # Branding
│   ├── proyecto1foto.png # Topology P1
│   └── proyecto2foto.png # Topology P2
├── js/
│   └── java.js           # UI Logic (Toggles, Scroll)
├── docs/
│   ├── Routing&ACLs.pkt      # Downloadable Lab 1
│   └── Segmentation&DHCP.pka # Downloadable Lab 2
├── index.html            # Landing Page
├── proyecto1.html        # Project 1 Details
├── proyecto2.html        # Project 2 Details
├── listadeproyectos.html # Full Category List
├── contacto.html         # Contact Form
└── README.md             # Documentation