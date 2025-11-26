/**
 * Simple Analog Clock
 * Rotates clock hands based on system time
 */

class Clock {
  constructor() {
    this.hourHand = document.querySelector('.ContenedorHora');
    this.minuteHand = document.querySelector('.ContenedorMinutero');
    this.secondHand = document.querySelector('.ContenedorSegundero');
    this.start();
  }

  start() {
    this.updateClock();
    setInterval(() => this.updateClock(), 100);
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate hand positions in degrees
    const secondDegrees = (seconds + milliseconds / 1000) * 6; // 360 / 60 = 6
    const minuteDegrees = (minutes + seconds / 60) * 6; // 360 / 60 = 6
    const hourDegrees = (hours % 12 + minutes / 60) * 30; // 360 / 12 = 30

    // Apply rotations
    this.secondHand.style.transform = `rotateZ(${secondDegrees}deg)`;
    this.minuteHand.style.transform = `rotateZ(${minuteDegrees}deg)`;
    this.hourHand.style.transform = `rotateZ(${hourDegrees}deg)`;
  }
}

// Initialize clock when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Clock();
});
