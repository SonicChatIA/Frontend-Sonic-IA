<a name="readme-top"></a>

# Sonic IA - AI-Powered Sonic Blockchain Transaction Assistant

![Sonic IA](/.github/images/img_main.png "Sonic IA - AI-Powered Sonic Blockchain Transaction Assistant")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/SonicChatIA "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/static/License/MIT?icon=github&color=black&scale=1.01)](https://github.com/SonicChatIA/Frontend-Sonic-IA/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/SonicChatIA/Frontend-Sonic-IA/commits/main "Maintenance")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [About the Project](#star2-about-the-project)
- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Features](#gem-features)
- [Smart Contract](#contract-smart-contract)
- [AI Integration](#robot-ai-integration)
- [Sonic Mainnet Deployment](#rocket-sonic-mainnet-deployment)
- [Usage Examples](#bulb-usage-examples)
- [Environment Variables](#key-environment-variables)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [License](#scroll-license)

</details>

## :star2: About the Project

Sonic IA is an innovative AI-powered chatbot that simplifies Sonic blockchain transactions through natural language processing. Built with React and integrated with Deepseek AI, it allows users to send S tokens using conversational commands while managing contacts and transaction history seamlessly on Sonic Mainnet.

### Key Highlights:
- 🤖 **AI-Powered**: Natural language transaction processing using Deepseek AI
- 🔗 **Web3 Integration**: Full wallet connectivity with wagmi and Sonic Mainnet
- 💰 **Smart Transactions**: Send S tokens with simple commands like "Send 0.001 S to Omar"
- 📱 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- 📋 **Contact Management**: Save and manage frequently used wallet addresses
- 📊 **Transaction History**: Track all your transactions with Sonicscan links
- 🔒 **Secure**: All transactions are processed through your connected wallet
- ⚡ **Sonic Speed**: Lightning-fast transactions on the Sonic blockchain

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
Frontend-Sonic-IA/
  |- public/
    |-- apple-icon.png
    |-- favicon.ico
    |-- favicon1.png
    |-- favicon2.png
  |- src/
    |-- assets/
        |--- benefits/
        |--- collaboration/
        |--- hero/
        |--- notification/
        |--- pricing/
        |--- roadmap/
        |--- services/
        |--- socials/
        |--- svg/
        |--- index.js
    |-- components/
        |--- design/
        |--- Benefits.jsx
        |--- Button.jsx
        |--- Collaboration.jsx
        |--- CompanyLogos.jsx
        |--- Footer.jsx
        |--- Generating.jsx
        |--- Header.jsx
        |--- Heading.jsx
        |--- Hero.jsx
        |--- Notification.jsx
        |--- Pricing.jsx
        |--- PricingList.jsx
        |--- Roadmap.jsx
        |--- Section.jsx
        |--- Services.jsx
        |--- Tagline.jsx
    |-- config/
        |--- index.js
    |-- constants/
        |--- index.js
    |-- App.jsx
    |-- index.css
    |-- main.jsx
  |- .eslintrc.cjs
  |- .gitignore
  |- index.html
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- vite.config.js
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Install project dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`
4. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![AI ChatBot App](/.github/images/img1.png "AI ChatBot App")

![Generative AI](/.github/images/img2.png "Generative AI")

![Modern Animations](/.github/images/img3.png "Modern Animations")

![Onboarding Section](/.github/images/img4.png "Onboarding Section")

## :rocket: Sonic Mainnet Deployment

🎉 **Smart Contract Successfully Deployed on Sonic Mainnet!**

### Contract Details:
- **Contract Address**: `0x9d7b2eA62b7B9B1c382c1B92e8dd567E6e772090`
- **Network**: Sonic Mainnet (Chain ID: 146)
- **Explorer**: [View on Sonicscan](https://sonicscan.org/address/0x9d7b2ea62b7b9b1c382c1b92e8dd567e6e772090)
- **Status**: ✅ Verified and Active

### Key Features:
- **Create Transactions**: Register S token transactions on-chain
- **Execute Transactions**: Process pending transactions with smart contract validation
- **Transaction History**: Query user transactions and pending operations
- **Event Logging**: Full transaction history with TransactionCreated and TransactionExecuted events

### Contract Functions:
- `createTransaction(address _recipient, uint256 _amount, string _currency)` - Create a new transaction record
- `executeTransaction(uint256 _transactionId)` - Execute a pending transaction
- `getUserTransactions(address _user)` - Get all transactions for a user
- `getTransaction(uint256 _transactionId)` - Get detailed transaction information
- `getPendingTransactions()` - Get all pending transactions

### Usage Examples:
```javascript
// Send S tokens using natural language
"Send 0.1 S to Omar"
"Transfer 5 S to 0x742d35Cc6634C0532925a3b8D404e2ce5E99DfeF"
"Send 0.001 S to Yamil"

// Query information
"What's my balance?"
"Show my transaction history"
"Explain smart contracts"
```

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![Javascript](https://skillicons.dev/icons?i=js "Javascript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Javascript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Sonic Blockchain](https://img.shields.io/badge/Sonic-Blockchain-blue "Sonic Blockchain")](https://soniclabs.com/ "Sonic Blockchain")

## :wrench: Stats

[![Stats for Brainwave](/.github/images/stats.svg "Stats for Brainwave")](https://pagespeed.web.dev/analysis?url=https://app-brainwave.netlify.app/ "Stats for Brainwave")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Brainwave.

- [framer-motion](https://www.npmjs.com/package/framer-motion): ^11.0.12
- [react](https://www.npmjs.com/package/react): ^18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18.2.0
- [react-just-parallax](https://www.npmjs.com/package/react-just-parallax): ^3.1.16
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^6.22.3
- [scroll-lock](https://www.npmjs.com/package/scroll-lock): ^2.1.5
- [typewriter-effect](https://www.npmjs.com/package/typewriter-effect): ^2.21.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^18.2.56
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18.2.19
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^4.2.1
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.18
- [eslint](https://www.npmjs.com/package/eslint): ^8.56.0
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): ^7.33.2
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^4.6.0
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.4.5
- [postcss](https://www.npmjs.com/package/postcss): ^8.4.35
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.4.1
- [vite](https://www.npmjs.com/package/vite): ^5.1.4

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fbrainwave "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

## :books: Learn More

To deepen your understanding of React.js and Netlify, explore the following resources:

- [React.js Documentation](https://reactjs.org/docs) - delve into React.js features, concepts, and API.
- [React Official Tutorial](https://reactjs.org/tutorial) - an interactive tutorial to get hands-on experience with React.

For Netlify-specific information:

- [Netlify Documentation](https://docs.netlify.com) - learn about Netlify's features, deployment options, and more.
- [Getting Started with Netlify and React](https://docs.netlify.com/frameworks/react) - a guide on deploying React applications on Netlify.

You're encouraged to contribute and provide feedback on [Netlify's GitHub repository](https://github.com/netlify/netlify).

## :page_with_curl: Deploy on Netlify

The simplest way to deploy your React.js app is to use the [Netlify Platform](https://app.netlify.com/start) - a powerful platform for modern web projects.

Explore the [Netlify deployment documentation](https://docs.netlify.com/site-deploys/create-deploys) for step-by-step instructions on deploying your React.js app on Netlify.

Happy coding, and feel free to share your thoughts and improvements with the [Netlify community](https://community.netlify.com)!

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/brainwave&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/brainwave&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/brainwave&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/brainwave&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
