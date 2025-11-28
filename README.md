> \[!NOTE]
>
> **Version Information**
>
> - **v1.x** (Stable): Available on the [`main`](https://github.com/lobehub/lobe-chat/tree/main) branch
> - **v2.x** (In Development): Currently being actively developed on the [`next`](https://github.com/lobehub/lobe-chat/tree/next) branch 🔥

<div align="center"><a name="readme-top"></a>

\[!\[]\[image-banner]]\[vercel-link]

# GenHub

A high-performance AI chat platform with modern design.<br/>
Supports speech-synthesis, multi-modal capabilities, and extensible (\[function call]\[docs-functionc-call]) plugin system.<br/>
Experience advanced AI conversations at **[genhub.app](https://www.genhub.app/)**.

**English** · \[Feedback]\[github-issues-link]

\[!\[]\[github-stars-shield]]\[github-stars-link]
\[!\[]\[github-issues-shield]]\[github-issues-link]
\[!\[]\[github-license-shield]]\[github-license-link]

<sup>Pioneering the new age of thinking and creating. Built for you, the Super Individual.</sup>

\[!\[]\[github-trending-shield]]\[github-trending-url] <br /> <br /> <a href="https://vercel.com/oss"> <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" /> </a>

!\[]\[image-overview]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [👋🏻 Getting Started](#-getting-started)
- [✨ Features](#-features)
  - [`1` \[Chain of Thought\]\[docs-feat-cot\]](#1-chain-of-thoughtdocs-feat-cot)
  - [`2` \[Branching Conversations\]\[docs-feat-branch\]](#2-branching-conversationsdocs-feat-branch)
  - [`3` \[Artifacts Support\]\[docs-feat-artifacts\]](#3-artifacts-supportdocs-feat-artifacts)
  - [`4` \[File Upload /Knowledge Base\]\[docs-feat-knowledgebase\]](#4-file-upload-knowledge-basedocs-feat-knowledgebase)
  - [`5` \[Multi-Model Service Provider Support\]\[docs-feat-provider\]](#5-multi-model-service-provider-supportdocs-feat-provider)
  - [`6` \[Local Large Language Model (LLM) Support\]\[docs-feat-local\]](#6-local-large-language-model-llm-supportdocs-feat-local)
  - [`7` \[Model Visual Recognition\]\[docs-feat-vision\]](#7-model-visual-recognitiondocs-feat-vision)
  - [`8` \[TTS & STT Voice Conversation\]\[docs-feat-tts\]](#8-tts--stt-voice-conversationdocs-feat-tts)
  - [`9` \[Text to Image Generation\]\[docs-feat-t2i\]](#9-text-to-image-generationdocs-feat-t2i)
  - [`10` \[Plugin System (Function Calling)\]\[docs-feat-plugin\]](#10-plugin-system-function-callingdocs-feat-plugin)
  - [`11` \[Agent Market (GPTs)\]\[docs-feat-agent\]](#11-agent-market-gptsdocs-feat-agent)
  - [`12` \[Support Local / Remote Database\]\[docs-feat-database\]](#12-support-local--remote-databasedocs-feat-database)
  - [`13` \[Support Multi-User Management\]\[docs-feat-auth\]](#13-support-multi-user-managementdocs-feat-auth)
  - [`14` \[Progressive Web App (PWA)\]\[docs-feat-pwa\]](#14-progressive-web-app-pwadocs-feat-pwa)
  - [`15` \[Mobile Device Adaptation\]\[docs-feat-mobile\]](#15-mobile-device-adaptationdocs-feat-mobile)
  - [`16` \[Custom Themes\]\[docs-feat-theme\]](#16-custom-themesdocs-feat-theme)
  - [`*` What's more](#-whats-more)
- [⚡️ Performance](#️-performance)
- [🧩 Plugins](#-plugins)

####

<br/>

</details>

## 👋🏻 Getting Started

GenHub is a high-performance AI chat platform that brings together the best AI models in one seamless interface.

Whether for users or professional developers, GenHub will be your AI Agent playground. Please be aware that GenHub is currently under active development, and feedback is welcome for any \[issues]\[issues-link] encountered.

| **[Visit GenHub](https://www.genhub.app/)** | Experience advanced AI conversations with no installation required. |
| :------------------------------------------ | :------------------------------------------------------------------ |

> \[!IMPORTANT]
>
> **Star Us**, You will receive all release notifications from GitHub without any delay \~ ⭐️

\[!\[]\[image-star]]\[github-stars-link]

<details>
  <summary><kbd>Star History</kbd></summary>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=lobehub%2Flobe-chat&theme=dark&type=Date">
    <img width="100%" src="https://api.star-history.com/svg?repos=lobehub%2Flobe-chat&type=Date">
  </picture>
</details>

## ✨ Features

\[!\[]\[image-feat-cot]]\[docs-feat-cot]

### `1` \[Chain of Thought]\[docs-feat-cot]

Experience AI reasoning like never before. Watch as complex problems unfold step by step through our innovative Chain of Thought (CoT) visualization. This breakthrough feature provides unprecedented transparency into AI's decision-making process, allowing you to observe how conclusions are reached in real-time.

By breaking down complex reasoning into clear, logical steps, you can better understand and validate the AI's problem-solving approach. Whether you're debugging, learning, or simply curious about AI reasoning, CoT visualization transforms abstract thinking into an engaging, interactive experience.

[!\[\]\[back-to-top\]](#readme-top)

\[!\[]\[image-feat-branch]]\[docs-feat-branch]

### `2` \[Branching Conversations]\[docs-feat-branch]

Introducing a more natural and flexible way to chat with AI. With Branch Conversations, your discussions can flow in multiple directions, just like human conversations do. Create new conversation branches from any message, giving you the freedom to explore different paths while preserving the original context.

Choose between two powerful modes:

- **Continuation Mode:** Seamlessly extend your current discussion while maintaining valuable context
- **Standalone Mode:** Start fresh with a new topic based on any previous message

This groundbreaking feature transforms linear conversations into dynamic, tree-like structures, enabling deeper exploration of ideas and more productive interactions.

[!\[\]\[back-to-top\]](#readme-top)

\[!\[]\[image-feat-artifacts]]\[docs-feat-artifacts]

### `3` \[Artifacts Support]\[docs-feat-artifacts]

Experience the power of Claude Artifacts, now integrated into GenHub. This revolutionary feature expands the boundaries of AI-human interaction, enabling real-time creation and visualization of diverse content formats.

Create and visualize with unprecedented flexibility:

- Generate and display dynamic SVG graphics
- Build and render interactive HTML pages in real-time
- Produce professional documents in multiple formats

[!\[\]\[back-to-top\]](#readme-top)

\[!\[]\[image-feat-knowledgebase]]\[docs-feat-knowledgebase]

### `4` \[File Upload /Knowledge Base]\[docs-feat-knowledgebase]

LobeChat supports file upload and knowledge base functionality. You can upload various types of files including documents, images, audio, and video, as well as create knowledge bases, making it convenient for users to manage and search for files. Additionally, you can utilize files and knowledge base features during conversations, enabling a richer dialogue experience.

<https://github.com/user-attachments/assets/faa8cf67-e743-4590-8bf6-ebf6ccc34175>

> \[!TIP]
>
> Learn more on [📘 LobeChat Knowledge Base Launch — From Now On, Every Step Counts](https://lobehub.com/blog/knowledge-base)

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-privoder]]\[docs-feat-provider]

### `5` \[Multi-Model Service Provider Support]\[docs-feat-provider]

In the continuous development of GenHub, we deeply understand the importance of diversity in model service providers for meeting the needs of the community when providing AI conversation services. Therefore, we have expanded our support to multiple model service providers, rather than being limited to a single one, in order to offer users a more diverse and rich selection of conversations.

In this way, GenHub can more flexibly adapt to the needs of different users, while also providing developers with a wider range of choices.

#### Supported Model Service Providers

We have implemented support for the following model service providers:

<!-- PROVIDER LIST -->

<details><summary><kbd>See more providers (+-10)</kbd></summary>

</details>

> 📊 Total providers: [<kbd>**0**</kbd>](https://lobechat.com/discover/providers)

 <!-- PROVIDER LIST -->

At the same time, we are also planning to support more model service providers. If you would like LobeChat to support your favorite service provider, feel free to join our [💬 community discussion](https://github.com/lobehub/lobe-chat/discussions/1284).

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-local]]\[docs-feat-local]

### `6` \[Local Large Language Model (LLM) Support]\[docs-feat-local]

To meet the specific needs of users, GenHub also supports the use of local models based on [Ollama](https://ollama.ai), allowing users to flexibly use their own or third-party models.

> \[!TIP]
>
> Learn more about \[📘 Using Ollama in LobeChat]\[docs-usage-ollama] by checking it out.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-vision]]\[docs-feat-vision]

### `7` \[Model Visual Recognition]\[docs-feat-vision]

LobeChat now supports OpenAI's latest [`gpt-4-vision`](https://platform.openai.com/docs/guides/vision) model with visual recognition capabilities,
a multimodal intelligence that can perceive visuals. Users can easily upload or drag and drop images into the dialogue box,
and the agent will be able to recognize the content of the images and engage in intelligent conversation based on this,
creating smarter and more diversified chat scenarios.

This feature opens up new interactive methods, allowing communication to transcend text and include a wealth of visual elements.
Whether it's sharing images in daily use or interpreting images within specific industries, the agent provides an outstanding conversational experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-tts]]\[docs-feat-tts]

### `8` \[TTS & STT Voice Conversation]\[docs-feat-tts]

LobeChat supports Text-to-Speech (TTS) and Speech-to-Text (STT) technologies, enabling our application to convert text messages into clear voice outputs,
allowing users to interact with our conversational agent as if they were talking to a real person. Users can choose from a variety of voices to pair with the agent.

Moreover, TTS offers an excellent solution for those who prefer auditory learning or desire to receive information while busy.
In GenHub, we have meticulously selected a range of high-quality voice options (OpenAI Audio, Microsoft Edge Speech) to meet the needs of users from different regions and cultural backgrounds.
Users can choose the voice that suits their personal preferences or specific scenarios, resulting in a personalized communication experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-t2i]]\[docs-feat-t2i]

### `9` \[Text to Image Generation]\[docs-feat-t2i]

With support for the latest text-to-image generation technology, GenHub now allows users to invoke image creation tools directly within conversations with the agent. By leveraging the capabilities of AI tools such as [`DALL-E 3`](https://openai.com/dall-e-3), [`MidJourney`](https://www.midjourney.com/), and [`Pollinations`](https://pollinations.ai/), the agents are now equipped to transform your ideas into images.

This enables a more private and immersive creative process, allowing for the seamless integration of visual storytelling into your personal dialogue with the agent.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-plugin]]\[docs-feat-plugin]

### `10` \[Plugin System (Function Calling)]\[docs-feat-plugin]

The plugin ecosystem of GenHub is an important extension of its core functionality, greatly enhancing the practicality and flexibility of the GenHub assistant.

<video controls src="https://github.com/lobehub/lobe-chat/assets/28616219/f29475a3-f346-4196-a435-41a6373ab9e2" muted="false"></video>

By utilizing plugins, GenHub assistants can obtain and process real-time information, such as searching for web information and providing users with instant and relevant news.

In addition, these plugins are not limited to news aggregation, but can also extend to other practical functions, such as quickly searching documents, generating images, obtaining data from various platforms like Bilibili, Steam, and interacting with various third-party services.

> \[!TIP]
>
> Learn more about \[📘 Plugin Usage]\[docs-usage-plugin] by checking it out.

<!-- PLUGIN LIST -->

| Recent Submits                                                                                                             | Description                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [PortfolioMeta](https://lobechat.com/discover/plugin/StockData)<br/><sup>By **portfoliometa** on **2025-11-28**</sup>      | Analyze stocks and get comprehensive real-time investment data and analytics.<br/>`stock`                                                 |
| [SEO](https://lobechat.com/discover/plugin/SEO)<br/><sup>By **orrenprunckun** on **2025-11-14**</sup>                      | Enter any URL and keyword and get an On-Page SEO analysis & insights!<br/>`seo`                                                           |
| [Shopping tools](https://lobechat.com/discover/plugin/ShoppingTools)<br/><sup>By **shoppingtools** on **2025-10-27**</sup> | Search for products on eBay & AliExpress, find eBay events & coupons. Get prompt examples.<br/>`shopping` `e-bay` `ali-express` `coupons` |
| [Web](https://lobechat.com/discover/plugin/web)<br/><sup>By **Proghit** on **2025-01-24**</sup>                            | Smart web search that reads and analyzes pages to deliver comprehensive answers from Google results.<br/>`web` `search`                   |

> 📊 Total plugins: [<kbd>**41**</kbd>](https://lobechat.com/discover/plugins)

 <!-- PLUGIN LIST -->

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-agent]]\[docs-feat-agent]

### `11` \[Agent Market (GPTs)]\[docs-feat-agent]

In GenHub Agent Marketplace, creators can discover a vibrant and innovative community that brings together a multitude of well-designed agents,
which not only play an important role in work scenarios but also offer great convenience in learning processes.
Our marketplace is not just a showcase platform but also a collaborative space. Here, everyone can contribute their wisdom and share the agents they have developed.

> \[!TIP]
>
> By \[🤖/🏪 Submit Agents]\[submit-agents-link], you can easily submit your agent creations to our platform.
> Importantly, GenHub has established a sophisticated automated internationalization (i18n) workflow,
> capable of seamlessly translating your agent into multiple language versions.
> This means that no matter what language your users speak, they can experience your agent without barriers.

> \[!IMPORTANT]
>
> We welcome all users to join this growing ecosystem and participate in the iteration and optimization of agents.
> Together, we can create more interesting, practical, and innovative agents, further enriching the diversity and practicality of the agent offerings.

<!-- AGENT LIST -->

| Recent Submits                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Turtle Soup Host](https://lobechat.com/discover/assistant/lateral-thinking-puzzle)<br/><sup>By **[CSY2022](https://github.com/CSY2022)** on **2025-06-19**</sup>              | A turtle soup host needs to provide the scenario, the complete story (truth of the event), and the key point (the condition for guessing correctly).<br/>`turtle-soup` `reasoning` `interaction` `puzzle` `role-playing` |
| [Gourmet Reviewer🍟](https://lobechat.com/discover/assistant/food-reviewer)<br/><sup>By **[renhai-lab](https://github.com/renhai-lab)** on **2025-06-17**</sup>                | Food critique expert<br/>`gourmet` `review` `writing`                                                                                                                                                                    |
| [Academic Writing Assistant](https://lobechat.com/discover/assistant/academic-writing-assistant)<br/><sup>By **[swarfte](https://github.com/swarfte)** on **2025-06-17**</sup> | Expert in academic research paper writing and formal documentation<br/>`academic-writing` `research` `formal-style`                                                                                                      |
| [Minecraft Senior Developer](https://lobechat.com/discover/assistant/java-development)<br/><sup>By **[iamyuuk](https://github.com/iamyuuk)** on **2025-06-17**</sup>           | Expert in advanced Java development and Minecraft mod and server plugin development<br/>`development` `programming` `minecraft` `java`                                                                                   |

> 📊 Total agents: [<kbd>**505**</kbd> ](https://lobechat.com/discover/assistants)

 <!-- AGENT LIST -->

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-database]]\[docs-feat-database]

### `12` \[Support Local / Remote Database]\[docs-feat-database]

LobeChat supports the use of both server-side and local databases. Depending on your needs, you can choose the appropriate deployment solution:

- **Local database**: suitable for users who want more control over their data and privacy protection. GenHub uses CRDT (Conflict-Free Replicated Data Type) technology to achieve multi-device synchronization. This is an experimental feature aimed at providing a seamless data synchronization experience.
- **Server-side database**: suitable for users who want a more convenient user experience. GenHub supports PostgreSQL as a server-side database. For detailed documentation on how to configure the server-side database, please visit [Configure Server-side Database](https://lobehub.com/docs/self-hosting/advanced/server-database).

Regardless of which database you choose, GenHub can provide you with an excellent user experience.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-auth]]\[docs-feat-auth]

### `13` \[Support Multi-User Management]\[docs-feat-auth]

LobeChat supports multi-user management and provides two main user authentication and management solutions to meet different needs:

- **next-auth**: GenHub integrates `next-auth`, a flexible and powerful identity verification library that supports multiple authentication methods, including OAuth, email login, credential login, etc. With `next-auth`, you can easily implement user registration, login, session management, social login, and other functions to ensure the security and privacy of user data.

- [**Clerk**](https://go.clerk.com/exgqLG0): For users who need more advanced user management features, GenHub also supports `Clerk`, a modern user management platform. `Clerk` provides richer functions, such as multi-factor authentication (MFA), user profile management, login activity monitoring, etc. With `Clerk`, you can get higher security and flexibility, and easily cope with complex user management needs.

Regardless of which user management solution you choose, GenHub can provide you with an excellent user experience and powerful functional support.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-pwa]]\[docs-feat-pwa]

### `14` \[Progressive Web App (PWA)]\[docs-feat-pwa]

We deeply understand the importance of providing a seamless experience for users in today's multi-device environment.
Therefore, we have adopted Progressive Web Application ([PWA](https://support.google.com/chrome/answer/9658361)) technology,
a modern web technology that elevates web applications to an experience close to that of native apps.

Through PWA, GenHub can offer a highly optimized user experience on both desktop and mobile devices while maintaining its lightweight and high-performance characteristics.
Visually and in terms of feel, we have also meticulously designed the interface to ensure it is indistinguishable from native apps,
providing smooth animations, responsive layouts, and adapting to different device screen resolutions.

> \[!NOTE]
>
> If you are unfamiliar with the installation process of PWA, you can add GenHub as your desktop application (also applicable to mobile devices) by following these steps:
>
> - Launch the Chrome or Edge browser on your computer.
> - Visit the GenHub webpage at [genhub.app](https://www.genhub.app/).
> - In the upper right corner of the address bar, click on the <kbd>Install</kbd> icon.
> - Follow the instructions on the screen to complete the PWA Installation.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-mobile]]\[docs-feat-mobile]

### `15` \[Mobile Device Adaptation]\[docs-feat-mobile]

We have carried out a series of optimization designs for mobile devices to enhance the user's mobile experience. Currently, we are iterating on the mobile user experience to achieve smoother and more intuitive interactions. If you have any suggestions or ideas, we welcome you to provide feedback through GitHub Issues or Pull Requests.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

\[!\[]\[image-feat-theme]]\[docs-feat-theme]

### `16` \[Custom Themes]\[docs-feat-theme]

As a design-engineering-oriented application, GenHub places great emphasis on users' personalized experiences,
hence introducing flexible and diverse theme modes, including a light mode for daytime and a dark mode for nighttime.
Beyond switching theme modes, a range of color customization options allow users to adjust the application's theme colors according to their preferences.
Whether it's a desire for a sober dark blue, a lively peach pink, or a professional gray-white, users can find their style of color choices in GenHub.

> \[!TIP]
>
> The default configuration can intelligently recognize the user's system color mode and automatically switch themes to ensure a consistent visual experience with the operating system.
> For users who like to manually control details, GenHub also offers intuitive setting options and a choice between chat bubble mode and document mode for conversation scenarios.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

### `*` What's more

Beside these features, GenHub also have much better basic technique underground:

- [x] 💨 **Quick Deployment**: Using the Vercel platform or docker image, you can deploy with just one click and complete the process within 1 minute without any complex configuration.
- [x] 🌐 **Custom Domain**: If users have their own domain, they can bind it to the platform for quick access to the dialogue agent from anywhere.
- [x] 🔒 **Privacy Protection**: All data is stored locally in the user's browser, ensuring user privacy.
- [x] 💎 **Exquisite UI Design**: With a carefully designed interface, it offers an elegant appearance and smooth interaction. It supports light and dark themes and is mobile-friendly. PWA support provides a more native-like experience.
- [x] 🗣️ **Smooth Conversation Experience**: Fluid responses ensure a smooth conversation experience. It fully supports Markdown rendering, including code highlighting, LaTex formulas, Mermaid flowcharts, and more.

> ✨ more features will be added when GenHub evolve.

---

> \[!NOTE]
>
> You can find our upcoming \[Roadmap]\[github-project-link] plans in the Projects section.

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## ⚡️ Performance

> \[!NOTE]
>
> The complete list of reports can be found in the \[📘 Lighthouse Reports]\[docs-lighthouse]

|                    Desktop                    |                    Mobile                    |
| :-------------------------------------------: | :------------------------------------------: |
|              !\[]\[chat-desktop]              |              !\[]\[chat-mobile]              |
| \[📑 Lighthouse Report]\[chat-desktop-report] | \[📑 Lighthouse Report]\[chat-mobile-report] |

<div align="right">

[!\[\]\[back-to-top\]](#readme-top)

</div>

## 🧩 Plugins

GenHub supports an extensible plugin system that enhances AI capabilities through Function Calling:

- **Web Search**: Real-time information retrieval and research
- **Image Generation**: AI-powered visual content creation with DALL-E, MidJourney, and Pollinations
- **Data Visualization**: Charts, graphs, and analytics tools
- **Academic Tools**: Research assistance and citation management
- **Custom Functions**: Develop your own plugins for specific use cases

The plugin ecosystem allows GenHub to integrate with external services and provide enhanced functionality beyond basic chat interactions.

---

<div align="center">

**Experience the future of AI conversations**

Visit **[genhub.app](https://www.genhub.app/)** to get started

</div>

---

Copyright © 2025 GenHub. <br />
This project is [Apache 2.0](./LICENSE) licensed.
