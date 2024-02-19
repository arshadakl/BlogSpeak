class BlogSpeak {
  constructor(config = {}) {
    this.config = {
      voice: 'Google US English',
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      ...config
    };

    this.synthesis = window.speechSynthesis;

    this.speak = this.speak.bind(this);
  }

  speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.findVoice(this.config.voice);
    utterance.rate = this.config.rate;
    utterance.pitch = this.config.pitch;
    utterance.volume = this.config.volume;

    this.synthesis.speak(utterance);
  }

  findVoice(name) {
    const voices = this.synthesis.getVoices();
    return voices.find(voice => voice.name === name);
  }
}

module.exports = BlogSpeak;
