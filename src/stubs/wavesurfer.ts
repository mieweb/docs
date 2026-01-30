/**
 * Stub for wavesurfer.js
 * This is a placeholder for wavesurfer.js that @mieweb/ui
 * optionally uses for audio components. Since we don't use
 * audio features in the documentation site, we provide this empty stub.
 */

// Export a noop class
class WaveSurfer {
  static create() {
    return new WaveSurfer();
  }

  load() {}
  play() {}
  pause() {}
  stop() {}
  destroy() {}
  on() {}
  off() {}
  getCurrentTime() {
    return 0;
  }
  getDuration() {
    return 0;
  }
  isPlaying() {
    return false;
  }
}

export default WaveSurfer;
