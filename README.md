# BlogSpeak

BlogSpeak is a lightweight JavaScript module that enables websites to offer a text-to-speech feature, allowing visitors to listen to blog posts instead of reading them. It utilizes the SpeechSynthesisUtterance API to convert text content into speech, providing an audio version of the blog post for users who prefer or require auditory information.

## Features

- Easy integration into websites
- Customizable speech parameters (voice, rate, pitch, volume)
- Responsive design for cross-device compatibility
- Playback controls for user interaction
- Accessibility enhancements for improved usability
- Language support for multiple languages and accents
- Offline availability with caching mechanisms

## Installation

You can install BlogSpeak via npm:

```bash
npm install blogspeak
```

 Alternatively, you can download the BlogSpeak.js file from the repository and include it directly in your project.

# Usage
## Basic Usage

```bash

import BlogSpeak from 'blogspeak';


const blogReader = new BlogSpeak({
  voice: 'Google UK English Female',
  rate: 0.9,
  pitch: 1.2,
  volume: 0.8
});


const blogPostContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;


blogReader.speak(blogPostContent);
```


## Advanced Usage

```bash

import BlogSpeak from 'blogspeak';


const blogReader = new BlogSpeak();

const blogPostContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

blogReader.voice = 'Google UK English Female';
blogReader.rate = 0.9;
blogReader.pitch = 1.2;
blogReader.volume = 0.8;

blogReader.speak(blogPostContent);
```