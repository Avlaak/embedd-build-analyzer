# Embedd Build Analyzer 🚀  
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![VS Code](https://img.shields.io/badge/VS%20Code-Extension-blue?logo=visualstudiocode)](#)

![Main UI View](images/1.png)

## 🔀 Fork Manifest

This extension is a fork of the [STM32 Build Analyzer (Enhanced)](https://github.com/niwciu/stm32-build-analyzer).

It is developed and maintained as a component of [Embedd Project Manager](https://github.com/embeddteam/EmbeddedProjectManager.git) — a unified toolkit for embedded systems development in VS Code.

### Development Philosophy

While this fork evolves to meet the needs of Embedd Project Manager users, **it is not intended to diverge from upstream projects**.

All improvements, fixes, and enhancements introduced here are:
- Implemented with **upstream compatibility in mind**
- Submitted back to the original projects via **pull requests**
- Kept in sync through a **fast update and rebase cycle**

### Fast Iteration, Real Users

The primary goal of this fork is to enable:
- **Rapid iteration**
- **Early shipping**
- **Validation on real users**

This allows us to provide a **better and faster experience** for Embedd Project Manager users, while ensuring that the upstream ecosystem benefits from every improvement made here.

---

## ℹ️ About This Extension

Visual memory analyzer for embedded projects – works with `.map` and `.elf` files, no matter what toolchain or build system you use.

---

## 🔍 Features

- Memory region analysis using `.map` and `.elf` files
- Detailed breakdown of memory sections and symbols
- Clickable links from symbols to source files
- Visual panel with color-coded usage (RAM, Flash)
- ARM toolchain integration (`arm-none-eabi-objdump`, `nm`)
- Compatible with any toolchain producing `.elf` files (ARM GCC, Keil, IAR, etc.)
- Search functionality for symbols (case-sensitive, whole word, regex options)
- Sorting by name, address, and size (ascending/descending)

---

## 📦 Installation

### From VS Code Marketplace

📥 [Marketplace link placeholder](https://marketplace.visualstudio.com/items?itemName=embedd-team.embedd-build-analyzer#)

### Manual Installation

#### Requirements

1. Node.js installed  
2. npm installed  
3. `vsce` installed:

   ```bash
   npm install -g @vscode/vsce
   ```

#### Build and Install manual

1. Clone the repository:

   ```bash
   git clone https://github.com/avlaak/embedd-build-analyzer.git
   cd embedd-build-analyzer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the .vsix package using vsce:

   ```bash
   vsce package
   ```

4. This will generate a file like: `embedd-build-analyzer-1.1.4.vsix`

5. Install the extension in VS Code:

   ```bash
   code --install-extension embedd-build-analyzer-1.1.4.vsix
   ```


---

## 🛠 Usage

- Open the Command Palette (`Ctrl+Shift+P`) and run:
  - `Embedd Build Analyzer` – opens the main view
  - `Embedd Build Analyzer Refresh Paths` – re-detects build output folder
- Analyzer view updates automatically when build output files change.

---

## 📜 Changelog

See [CHANGELOG.md](CHANGELOG.md) for full version history.

---

## 🤝 Contributing
 
Contributions are welcome! Please fork the repo and submit a pull request:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

If you find bugs or want to request features, feel free to [open an issue](https://github.com/avlaak/embedd-build-analyzer/issues).


---

## ⚖️ License & Attribution

This extension is licensed under the [MIT License](LICENSE).  
Originally created by Aleksei Perevozchikov ([ATwice291](https://github.com/ATwice291))  
Fork maintained by [avlaak](https://github.com/avlaak) with enhancements described above.

---

<!-- SEO note -->
Embedd Build Analyzer for memory usage, symbol tracking, and map/elf inspection – compatible with Makefiles, CubeIDE, and other toolchains.
